const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync, exec } = require('child_process');

// ── CONFIG ──────────────────────────────────────────────────────────────────
// This file should sit in your repo root (same folder as index.html)
const REPO_ROOT = __dirname;
const PORT = 3000;

// ── MIME TYPES ───────────────────────────────────────────────────────────────
const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

// ── HELPERS ──────────────────────────────────────────────────────────────────
function send(res, status, contentType, body) {
  res.writeHead(status, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*' });
  res.end(body);
}

function sendJSON(res, status, obj) {
  send(res, status, 'application/json', JSON.stringify(obj));
}

function readBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => resolve(body));
  });
}

// ── API HANDLERS ─────────────────────────────────────────────────────────────

// GET /api/posts — list all blog posts
function listPosts() {
  const blogDir = path.join(REPO_ROOT, 'blog');
  if (!fs.existsSync(blogDir)) return [];
  return fs.readdirSync(blogDir)
    .filter(f => f.endsWith('.html') && f !== 'index.html')
    .map(f => {
      const content = fs.readFileSync(path.join(blogDir, f), 'utf8');
      const titleMatch = content.match(/<title>(.*?)\s*\|/);
      const descMatch = content.match(/<meta name="description" content="(.*?)"/);
      const h1Match = content.match(/<h1>(.*?)<\/h1>/);
      return {
        filename: f,
        title: h1Match ? h1Match[1] : (titleMatch ? titleMatch[1] : f),
        description: descMatch ? descMatch[1] : '',
      };
    });
}

// GET /api/post?file=filename.html — read a single post
function readPost(filename) {
  const filePath = path.join(REPO_ROOT, 'blog', filename);
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, 'utf8');

  // Parse fields out of the HTML
  const get = (pattern, fallback = '') => {
    const m = content.match(pattern);
    return m ? m[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>') : fallback;
  };

  const title = get(/<h1>(.*?)<\/h1>/);
  const excerpt = get(/class="blog-hero-excerpt">(.*?)<\/p>/s);
  const category = get(/class="blog-tag">(.*?)<\/p>/);
  const dateRaw = get(/datePublished":"(.*?)"/);
  const imgMatch = content.match(/blog-hero-img[^>]*>[\s\S]*?<img src="\.\.\/images\/(.*?)"/);
  const image = imgMatch ? imgMatch[1] : 'M2_area_enhanced.jpg';

  // Extract body — everything between article open and blog-cta
  const bodyMatch = content.match(/<article class="blog-content">([\s\S]*?)<div class="blog-cta">/);
  let bodyHtml = bodyMatch ? bodyMatch[1].trim() : '';

  // Convert HTML back to markdown-ish plain text
  // First strip any custom HTML blocks (divs, custom classes etc)
  bodyHtml = bodyHtml
    .replace(/<div[^>]*>([\s\S]*?)<\/div>/g, (_, inner) => inner) // unwrap divs
    .replace(/<h4>(.*?)<\/h4>/g, '\n### $1\n')
    .replace(/<h3>(.*?)<\/h3>/g, '\n### $1\n')
    .replace(/<h2>(.*?)<\/h2>/g, '\n## $1\n')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<ul>([\s\S]*?)<\/ul>/g, (_, inner) =>
      inner.replace(/<li>(.*?)<\/li>/g, '\n- $1').trim()
    )
    .replace(/<p[^>]*class="internal-link"[^>]*>([\s\S]*?)<\/p>/g, '')
    .replace(/<a[^>]*>(.*?)<\/a>/g, '$1')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/g, '\n$1\n')
    .replace(/<[^>]+>/g, '') // strip any remaining HTML tags
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  // Read time
  const readTimeMatch = content.match(/⏱ ([\d]+ min read)/);

  // Internal link
  const internalLinkMatch = content.match(/class="internal-link">[\s\S]*?<a href="(.*?)"[^>]*>(.*?)<\/a>([\s\S]*?)<\/p>/);

  return {
    filename,
    title,
    excerpt: excerpt.replace(/<[^>]+>/g, '').trim(),
    category,
    date: dateRaw,
    image,
    body: bodyHtml,
    readTime: readTimeMatch ? readTimeMatch[1] : '5 min read',
    linkUrl: internalLinkMatch ? internalLinkMatch[1] : '',
    linkText: internalLinkMatch ? internalLinkMatch[2] : '',
  };
}

// POST /api/save — save a file
function saveFile(relPath, content) {
  const fullPath = path.join(REPO_ROOT, relPath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
}

// POST /api/git — run git pull or push
function gitAction(action) {
  try {
    if (action === 'pull') {
      const result = execSync('git pull', { cwd: REPO_ROOT, encoding: 'utf8' });
      return { ok: true, message: result.trim() };
    }
    if (action === 'push') {
      execSync('git add -A', { cwd: REPO_ROOT, encoding: 'utf8' });
      const status = execSync('git status --porcelain', { cwd: REPO_ROOT, encoding: 'utf8' });
      if (!status.trim()) return { ok: true, message: 'Nothing to commit — already up to date.' };
      execSync('git commit -m "Blog update via M2 Admin"', { cwd: REPO_ROOT, encoding: 'utf8' });
      const pushResult = execSync('git push', { cwd: REPO_ROOT, encoding: 'utf8', stderr: 'pipe' });
      return { ok: true, message: 'Pushed to GitHub successfully.' };
    }
    if (action === 'status') {
      const status = execSync('git status --porcelain', { cwd: REPO_ROOT, encoding: 'utf8' });
      const branch = execSync('git branch --show-current', { cwd: REPO_ROOT, encoding: 'utf8' });
      return { ok: true, message: status.trim() || 'Clean — no changes', branch: branch.trim() };
    }
    return { ok: false, message: 'Unknown action' };
  } catch (e) {
    return { ok: false, message: e.message };
  }
}

// ── SERVER ───────────────────────────────────────────────────────────────────
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST', 'Access-Control-Allow-Headers': 'Content-Type' });
    res.end();
    return;
  }

  // ── API routes ──
  if (pathname === '/api/posts' && req.method === 'GET') {
    return sendJSON(res, 200, listPosts());
  }

  if (pathname === '/api/post' && req.method === 'GET') {
    const file = url.searchParams.get('file');
    const post = readPost(file);
    if (!post) return sendJSON(res, 404, { error: 'Not found' });
    return sendJSON(res, 200, post);
  }

  if (pathname === '/api/save' && req.method === 'POST') {
    const body = await readBody(req);
    const { filePath, content } = JSON.parse(body);
    try {
      saveFile(filePath, content);
      return sendJSON(res, 200, { ok: true, message: `Saved: ${filePath}` });
    } catch (e) {
      return sendJSON(res, 500, { ok: false, message: e.message });
    }
  }

  if (pathname === '/api/git' && req.method === 'POST') {
    const body = await readBody(req);
    const { action } = JSON.parse(body);
    const result = gitAction(action);
    return sendJSON(res, 200, result);
  }

  if (pathname === '/api/images' && req.method === 'GET') {
    const imgDir = path.join(REPO_ROOT, 'images');
    const images = fs.existsSync(imgDir)
      ? fs.readdirSync(imgDir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      : [];
    return sendJSON(res, 200, images);
  }

  // ── Serve admin UI ──
  if (pathname === '/' || pathname === '/admin' || pathname === '/admin.html') {
    const adminPath = path.join(__dirname, 'm2-admin.html');
    if (fs.existsSync(adminPath)) {
      send(res, 200, 'text/html', fs.readFileSync(adminPath, 'utf8'));
    } else {
      send(res, 404, 'text/plain', 'Admin UI not found. Place m2-admin.html next to server.js');
    }
    return;
  }

  // ── Serve static files from repo (images, css etc) ──
  const filePath = path.join(REPO_ROOT, pathname);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';
    send(res, 200, mime, fs.readFileSync(filePath));
    return;
  }

  send(res, 404, 'text/plain', 'Not found');
});

server.listen(PORT, () => {
  console.log('\n✅ M2 Admin Server running');
  console.log(`👉 Open: http://localhost:${PORT}`);
  console.log(`📁 Repo: ${REPO_ROOT}`);
  console.log('\nPress Ctrl+C to stop\n');
});
