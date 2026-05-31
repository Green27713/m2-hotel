# M2 Blog Admin — Local CMS

A local Node.js server that lets you create and edit blog posts from a browser UI, then push directly to GitHub.

## One-time setup

1. Make sure you have **Node.js** installed
   - Check: open Terminal and type `node --version`
   - If not installed: https://nodejs.org (download the LTS version)

2. Make sure your repo is cloned to your Mac
   - If not: `git clone https://github.com/Green27713/m2-hotel.git`

3. Copy **server.js** and **m2-admin.html** into your repo root
   (same folder as index.html)

## Every time you want to use it

1. Open **Terminal** (press Cmd+Space, type Terminal)

2. Navigate to your repo folder:
   ```
   cd ~/path/to/m2-hotel
   ```
   (replace with your actual folder path — e.g. `cd ~/Documents/m2-hotel`)

3. Start the server:
   ```
   node server.js
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

5. When done, press **Ctrl+C** in Terminal to stop the server.

## Workflow

**New post:**
1. Click "New Post"
2. Fill in title, excerpt, category, date, filename
3. Pick a featured image
4. Paste your content into the body editor
5. Click "Save & Generate"
6. Copy the 4 snippets into blog/index.html, index.html, and sitemap.xml
7. Click "Push to GitHub" when ready

**Edit existing post:**
1. Click the post in the sidebar
2. Make your changes
3. Click "Save & Generate"
4. Click "Push to GitHub"

**Pull latest from GitHub** (do this before editing if you've made changes on GitHub directly):
- Click "Pull from GitHub" in the header

## Troubleshooting

**"Server not reachable"** — make sure you ran `node server.js` in Terminal first

**"Push failed"** — make sure your Mac has SSH keys set up for GitHub, or you're using HTTPS with credentials stored. Run `git push` manually in Terminal to see the error.

**Port already in use** — another process is using port 3000. Change `const PORT = 3000` in server.js to `3001` or similar.
