import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, Calendar, Clock } from "lucide-react";

const posts = [
  {
    id: 1,
    tag: "Travel Guide",
    title: "Top 10 Things To Do in Patong Beach",
    excerpt:
      "Patong is more than its famous nightlife. From hidden snorkel spots to morning markets, here's our insider guide to making the most of your time here.",
    date: "15 May 2025",
    readTime: "5 min read",
    content: `Patong Beach is the beating heart of Phuket tourism — and once you're here, you'll understand why. But beyond the famous strip lies a whole world waiting to be discovered. Here's our local guide:

**1. Sunrise Walk on the Beach**
Set your alarm for 6am and walk the full length of Patong Beach before the crowds arrive. The light is extraordinary and the sea is glassy calm.

**2. Bangla Road After Dark**
Yes, it's touristy. Yes, it's wild. And yes, you should experience it at least once. It doesn't really start until 10pm.

**3. Jungceylon Shopping Mall**
Enormous air-conditioned mall with Thai food court, cinema, and all the international brands. Great for a rainy afternoon.

**4. Rent a Scooter to Karon Beach**
Just 10 minutes south, Karon is quieter and stunning. Ask us at reception for a scooter recommendation.

**5. Muay Thai at Patong Boxing Stadium**
A live Muay Thai fight is a bucket-list experience. Tickets available from around ฿1,500.

**6. Wat Suwan Khiri Wong Temple**
A beautiful, active Buddhist temple right in the heart of Patong — most tourists walk right past it.

**7. Take a Day Trip to Phi Phi Islands**
Full-day speedboat tours depart from Phuket Town. Book through us for a trusted operator and the best price.

**8. Visit the Big Buddha**
45 minutes drive but absolutely worth it. The views over the entire island are breathtaking at sunset.

**9. Learn to Cook Thai Food**
Several cooking schools operate near Patong. A half-day class and you'll go home able to make a proper green curry.

**10. Simply Relax**
Rent a sunbed, order a fresh coconut, and let Patong do what it does best — make your holiday feel effortless.`,
  },
  {
    id: 2,
    tag: "Food & Drink",
    title: "The Best Local Thai Food Near Patong",
    excerpt:
      "Skip the tourist menus. These are the restaurants, stalls, and markets where locals actually eat — all within walking distance of M2.",
    date: "2 May 2025",
    readTime: "4 min read",
    content: `Patong has no shortage of places to eat, but finding *genuinely good* Thai food amid the tourist restaurants can be tricky. Here's where our team actually eats:

**Banzaan Fresh Market (5 min walk)**
The best fresh market in Patong. Ground floor is fresh seafood and produce; the upstairs food court serves some of the most authentic Thai dishes in the area at unbeatable prices. A plate of pad see ew is around ฿60.

**Sabai Corner**
A local favourite that's been going for over 20 years. The massaman curry and fresh spring rolls are exceptional. No frills, huge portions, very local crowd.

**The Night Market on Rat-U-Thit Road**
Every evening from around 5pm. Grilled meat skewers, papaya salad, mango sticky rice — it's a feast for under ฿200.

**Noodle House (opposite 7-Eleven on Sai Nam Yen)**
The bowl of boat noodles here will change your life. Opens at 8am and sells out by noon. Get there early.

**Our Tip: Avoid the Beach Restaurants**
The restaurants right on the beach sand charge 3x the price for average food. Walk one street back and the quality goes up and the price goes down immediately.

Ask any of our team at reception — we're always happy to share our current favourites and can even help you read the Thai menus!`,
  },
  {
    id: 4,
    tag: "Nightlife & Entertainment",
    title: "Zag Club & Paradise Complex — Patong's World-Famous LGBTQ Entertainment",
    excerpt:
      "Visitors fly in from every corner of the globe specifically to experience it. Here's your complete guide to Paradise Complex and the dazzling Zag Club ladyboy cabaret.",
    date: "16 May 2025",
    readTime: "5 min read",
    content: `Few entertainment strips in the world draw as international a crowd as Paradise Complex in Patong Beach. Tucked just off Rat-U-Thit Road, this compact but vibrant district has earned a global reputation as one of Southeast Asia's most welcoming and spectacular LGBTQ nightlife destinations — and the Zag Club sits proudly at its heart.

**What is Paradise Complex?**
Paradise Complex is Patong's dedicated LGBTQ entertainment zone — a cluster of bars, clubs, karaoke venues, and cabaret shows centred on Soi Crocodile. The atmosphere is inclusive, colourful, and joyful. Everyone is welcome regardless of orientation or background, and the crowd on any given night is a wonderful mix of solo travellers, couples, hen parties, curious first-timers, and regulars who come back year after year. On a busy high-season night you'll hear a dozen different languages within the first five minutes.

**The Zag Club Ladyboy Show**
The Zag Club is the centrepiece of the complex and one of the most talked-about shows in all of Thailand. The performances feature Thailand's kathoey (ladyboy) performers — extraordinarily talented artists who bring jaw-dropping costumes, precision choreography, lip-sync artistry, and genuine theatrical flair to every show.

Performances typically run several times each evening. Expect elaborate theme segments — Bollywood sequences, pop medleys, classic Thai dance, Broadway-style numbers — all executed with high production values and real charisma. Many performers have been doing this for years and have built genuine fan followings from guests who return season after season.

**Why People Come From Around the World**
It's not an exaggeration to say that the Zag Club draws an international audience. Guests from Australia, the UK, Germany, the United States, Scandinavia, Japan, and across Asia make it a specific stop on their Phuket itinerary. For many, it's a bucket-list experience — there is simply nothing quite like it back home. The combination of outstanding performance quality, the warmth of the Thai hospitality, and the unique cultural context makes it genuinely unlike any show elsewhere in the world.

Travel bloggers and vloggers regularly name it among the top five things to do in Patong. Group tours from major Phuket resorts include it as a highlight. It sells out on peak nights — if you plan to go during high season, it's worth arriving a little early.

**Practical Tips**
Tickets are typically available at the door and are very reasonable — usually between ฿200 and ฿400. Drinks are available inside and the venue is fully air-conditioned. Shows last around 60–75 minutes. Photography policies vary — check with staff on the night. The performers are usually available to meet and take photos after the show, which is a big part of the experience for many visitors.

Dress code is relaxed — smart casual is fine. The venue is LGBTQ-friendly by definition but also genuinely welcoming to everyone, and the shows are appropriate for adults of all backgrounds.

**Getting There from M2**
Paradise Complex is approximately a 15-minute walk from M2 Rooms & Stays, or a very short tuk-tuk ride. Head towards Bangla Road and follow the signs towards Soi Crocodile. Our reception team can give you directions, recommend the best show time for your visit, and even help you book if you'd prefer to secure your seats in advance.

A night at the Zag Club is one of those experiences that stays with you long after you leave Patong — spectacular, joyful, and utterly one of a kind.`,
  },
  {
    id: 3,
    tag: "Travel Tips",
    title: "High Season vs Low Season in Phuket — When to Visit",
    excerpt:
      "Both seasons have their magic. Here's an honest breakdown of what to expect, when to find the best deals, and our personal recommendation.",
    date: "18 Apr 2025",
    readTime: "6 min read",
    content: `One of the most common questions we get at M2 is: "When is the best time to visit?" The honest answer is — it depends on what you're looking for.

**High Season (November to April)**
This is peak time. The weather is dry, sunny, and warm (around 32°C). The sea is calm and perfect for swimming. Patong Beach is at its most vibrant, the islands are accessible, and the atmosphere is electric. 

The trade-off: rooms are more expensive and need to be booked further in advance. Patong gets busy, especially between Christmas and New Year.

**Shoulder Season (October & May)**
Our personal favourite. The crowds thin out noticeably, prices drop by 20-40%, and the weather is still largely good. May sees some rain but it typically comes in short afternoon bursts, leaving the mornings clear and beautiful.

**Low Season (June to September)**
This is monsoon season. Rain is frequent and the sea can be rough (some beaches are closed for swimming). However, rates are at their lowest, the island is lush and green, and you'll have a very different, more authentic experience of Phuket. Many of the best restaurants are still open, and the rain rarely lasts all day.

**Our Recommendation**
If you want guaranteed sunshine and beach swimming: November to February is ideal. If you want great value with good weather: April or October are sweet spots. And if you're on a tight budget and don't mind some rain: June to August offers incredible deals.

Whatever time you visit, Patong has something special for you — and we'll make sure your stay at M2 is perfect regardless of the forecast.`,
  },
];

function PostModal({ post, onClose }: { post: typeof posts[0]; onClose: () => void }) {
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
  const [openPost, setOpenPost] = useState<typeof posts[0] | null>(null);

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
                onClick={() => setOpenPost(post)}
              >
                {/* Coloured tag header */}
                <div className={`h-1.5 w-full ${i === 0 ? "bg-primary" : i === 1 ? "bg-secondary" : "bg-primary/60"}`} />
                <div className="p-8">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3 block">{post.tag}</span>
                  <h4 className="font-serif text-xl font-medium mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">{post.excerpt}</p>
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
        {openPost && <PostModal post={openPost} onClose={() => setOpenPost(null)} />}
      </AnimatePresence>
    </>
  );
}
