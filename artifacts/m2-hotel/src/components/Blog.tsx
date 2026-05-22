import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, Calendar, Clock } from "lucide-react";

type Post = {
  id: number;
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
};

const posts: Post[] = [
  {
    id: 5,
    slug: "skip-bangla-road-3-better-ways-to-walk-to-patong-beach",
    tag: "Travel Guide",
    title: "Skip Bangla Road: 3 Better Ways to Walk to Patong Beach",
    excerpt:
      "Bangla Road isn't the only route to Patong Beach. Here are three calmer, local-favourite walking routes we recommend from M2 Rooms & Stays.",
    date: "22 May 2026",
    readTime: "6 min read",
    content: `If you've spent any time reading reviews of hotels near Patong Beach — including our own guests' feedback — you've probably seen a recurring complaint: *"Getting to the beach through Bangla Road was exhausting."* We hear it constantly, and honestly, it's valid. But here's what most travel guides don't tell you: **Bangla Road is not the only way to the beach.** Not even close.

As your neighbors in Patong and longtime residents of the area, we at M2 Rooms & Stays want to share something that locals take for granted — three perfectly good walking routes to Patong Beach that are calmer, more interesting, and frankly a far better way to start your beach day.

## Why Many Tourists Avoid Bangla Road (Especially During the Day)

Let's be honest about what Bangla Road is. At night, it's Phuket's famous entertainment strip — a 400-meter corridor of nightclubs, bars, neon signs, and electric energy that draws visitors from around the world. If that's your scene, it's worth experiencing at least once.

But as a *daytime walking route to the beach?* That's a different story.

Visitor reviews on Google and TripAdvisor paint a consistent picture:

- **Aggressive vendor and tout pressure.** As one reviewer put it, it's nearly impossible to go more than a few steps without someone approaching you — menus for shows, drinks promotions, or invitations into bars. What some travelers describe as persistent salesmanship, others have called outright harassment.
- **Litter and sanitation issues.** After a busy night, the street can be less than pristine in the morning hours before cleanup crews do their work.
- **Noise.** The clubs don't stop early, which means walking through in the late morning can still mean thudding bass and competing sound systems from venues winding down.
- **Family-unfriendly content.** Bangla Road is the heart of Patong's adult nightlife, and the signage and activity along the strip reflect that — making it an uncomfortable walk for families with children or for those who simply want a relaxed stroll to the sand.
- **Crowds at all hours.** This strip is one of the most visited streets in all of Southeast Asia. Foot traffic is dense even when the bars are quiet.

None of this means Bangla Road has no value — it absolutely does, for the right context and the right time. But it should be a *choice*, not a default. And that's what this guide is about: giving you better choices.

## Three Calmer, More Scenic Routes to Patong Beach

### Route 1 — Sawatdirak Road: The Main Street with the Easy Crosswalk

**Best for:** First-time visitors, families, anyone wanting a straightforward and safe route.

Sawatdirak Road is one of Patong's main arteries running toward the beach, and it's the route we most often recommend to our guests at M2 Rooms & Stays. This is a proper, well-maintained road with a **marked pedestrian crosswalk** that is regularly monitored and patrolled by Patong Police. For visitors who feel uncertain crossing busy Thai roads, this is your comfort zone — a designated, law-abiding crossing point that gives you the confidence to get to the beachfront safely.
`,
  },
  {
    id: 1,
    slug: "top-10-things-to-do-in-patong-beach",
    tag: "Travel Guide",
    title: "Top 10 Things To Do in Patong Beach",
    excerpt:
      "Patong is more than its famous nightlife. From hidden snorkel spots to morning markets, here's our insider guide to making the most of your time here.",
    date: "15 May 2025",
    readTime: "5 min read",
    content: `Patong Beach is the beating heart of Phuket tourism — and once you're here, you'll understand why. ...`,
  },
  {
    id: 2,
    slug: "best-local-thai-food-near-patong",
    tag: "Food & Drink",
    title: "The Best Local Thai Food Near Patong",
    excerpt:
      "Skip the tourist menus. These are the restaurants, stalls, and markets where locals actually eat — all within walking distance of M2.",
    date: "2 May 2025",
    readTime: "4 min read",
    content: `Patong has no shortage of places to eat, but finding *genuinely good* Thai food amid the tourist restaurants can be tricky. ...`,
  },
  {
    id: 4,
    slug: "zag-club-paradise-complex-patong",
    tag: "Nightlife & Entertainment",
    title: "Zag Club & Paradise Complex — Patong's World-Famous LGBTQ Entertainment",
    excerpt:
      "Visitors fly in from every corner of the globe specifically to experience it. Here's your complete guide to Paradise Complex and the dazzling Zag Club ladyboy cabaret.",
    date: "16 May 2025",
    readTime: "5 min read",
    content: `Few entertainment strips in the world draw as international a crowd as Paradise Complex in Patong Beach. ...`,
  },
  {
    id: 3,
    slug: "high-season-vs-low-season-phuket",
    tag: "Travel Tips",
    title: "High Season vs Low Season in Phuket — When to Visit",
    excerpt:
      "Both seasons have their magic. Here's an honest breakdown of what to expect, when to find the best deals, and our personal recommendation.",
    date: "18 Apr 2025",
    readTime: "6 min read",
    content: `One of the most common questions we get at M2 is: "When is the best time to visit?" ...`,
  },
];

function PostModal({ post, onClose }: { post: Post; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3 }}
        className="relative bg-background w-full max-w-2xl my-8 p-8 md:p-12 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          data-testid="button-close-post"
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 block">{post.tag}</span>
        <h2 className="font-serif text-3xl font-medium mb-4 pr-8">{post.title}</h2>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-8 pb-8 border-b border-border">
          <span className="flex items-center gap-1.5"><Calendar size={13} />{post.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime}</span>
        </div>

        <div className="prose prose-stone max-w-none font-light leading-relaxed text-foreground/80">
          {post.content.split("\n\n").map((para, i) => {
            if (para.startsWith("**") && para.endsWith("**")) {
              return <h3 key={i} className="font-serif text-xl font-medium text-foreground mt-8 mb-3">{para.replace(/\*\*/g, "")}</h3>;
            }
            return (
              <p key={i} className="mb-4">
                {para.split(/(\*\*.*?\*\*)/).map((chunk, j) =>
                  chunk.startsWith("**") && chunk.endsWith("**")
                    ? <strong key={j} className="font-semibold text-foreground">{chunk.replace(/\*\*/g, "")}</strong>
                    : chunk
                )}
              </p>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Blog() {
  const [openPost, setOpenPost] = useState<Post | null>(null);
  const prevPath = useRef<string>("/");

  useEffect(() => {
    // On mount, handle deep link like /blog/:slug
    const tryOpenFromPath = () => {
      const p = window.location.pathname || "/";
      if (p.startsWith("/blog/")) {
        const slug = p.replace("/blog/", "").replace(/\/$/, "");
        const found = posts.find((x) => x.slug === slug);
        if (found) {
          prevPath.current = "/";
          setOpenPost(found);
        }
      }
    };

    tryOpenFromPath();

    const onPop = () => {
      const p = window.location.pathname || "/";
      if (p.startsWith("/blog/")) {
        const slug = p.replace("/blog/", "").replace(/\/$/, "");
        const found = posts.find((x) => x.slug === slug);
        setOpenPost(found || null);
      } else {
        setOpenPost(null);
      }
    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  function openPostAndPush(post: Post) {
    prevPath.current = window.location.pathname || "/";
    try {
      window.history.pushState({}, "", `/blog/${post.slug}`);
    } catch (e) {
      /* ignore */
    }
    setOpenPost(post);
  }

  function closePost() {
    try {
      window.history.replaceState({}, "", prevPath.current || "/");
    } catch (e) {
      /* ignore */
    }
    setOpenPost(null);
  }

  return (
    <>
      <section id="blog" className="py-24 md:py-32 px-4 md:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Journal</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-medium">Patong Insider</h3>
            </div>
            <p className="text-muted-foreground max-w-md font-light">
              Local tips, travel guides, and stories from the heart of Patong — written by people who live here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                data-testid={`card-blog-${post.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card border border-border/50 overflow-hidden cursor-pointer hover:border-primary/30 transition-colors"
                onClick={() => openPostAndPush(post)}
              >
                <div className={`h-1.5 w-full ${i === 0 ? "bg-primary" : i === 1 ? "bg-secondary" : "bg-primary/60"}`} />
                <div className="p-8">
                  <a href={`/blog/${post.slug}`} onClick={(e) => { e.preventDefault(); openPostAndPush(post); }} className="block">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3 block">{post.tag}</span>
                    <h4 className="font-serif text-xl font-medium mb-3 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  </a>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-bold tracking-wide text-primary uppercase text-xs">
                      Read <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openPost && <PostModal post={openPost} onClose={closePost} />}
      </AnimatePresence>
    </>
  );
}

export default Blog;
