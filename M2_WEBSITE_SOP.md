# STANDARD OPERATING PROCEDURES
## M2 Rooms & Stays — Website Operations Manual
**Document ID:** M2-WEB-SOP-001  
**Version:** 1.0  
**Effective Date:** May 2025  
**Owner:** M2 Rooms & Stays, Patong, Phuket  
**Classification:** Internal Use — Management & Staff

---

## TABLE OF CONTENTS

1. [Purpose & Scope](#1-purpose--scope)
2. [Roles & Responsibilities](#2-roles--responsibilities)
3. [Key File Reference Guide](#3-key-file-reference-guide)
4. [Daily Tasks](#4-daily-tasks)
5. [Weekly Tasks](#5-weekly-tasks)
6. [Monthly Tasks](#6-monthly-tasks)
7. [Annual Tasks](#7-annual-tasks)
8. [How to Update: Photos](#8-how-to-update-photos)
9. [How to Update: Prices](#9-how-to-update-prices)
10. [How to Update: Reviews](#10-how-to-update-reviews)
11. [How to Update: Blog Posts](#11-how-to-update-blog-posts)
12. [How to Update: Amenities](#12-how-to-update-amenities)
13. [How to Update: the Quiz Game](#13-how-to-update-the-quiz-game)
14. [How to Update: Map Location & Pins](#14-how-to-update-map-location--pins)
15. [How to Update: Contact Information](#15-how-to-update-contact-information)
16. [Hosting on GitHub Pages (Free)](#16-hosting-on-github-pages-free)
17. [How to Work with the AI Agent to Update the Site](#17-working-with-the-ai-agent-to-update-the-site)
18. [SEO — Ongoing Optimisation](#18-seo--ongoing-optimisation)
19. [Continuous Improvement Framework](#19-continuous-improvement-framework)
20. [Emergency Procedures](#20-emergency-procedures)
21. [Glossary](#21-glossary)

---

## 1. PURPOSE & SCOPE

### 1.1 Purpose
This SOP establishes standardised procedures for maintaining, updating, and continuously improving the M2 Rooms & Stays website. It ensures that the website remains accurate, current, and effective as a direct booking and marketing tool at all times.

### 1.2 Scope
This document covers all routine and non-routine website maintenance activities. It applies to:
- The property owner
- The property manager
- Any designated staff member assigned website duties
- Any contracted AI agent or developer performing updates

### 1.3 Why This Matters
The website is your lowest-cost, highest-return marketing channel. Every hour it shows incorrect prices, outdated photos, or broken contact links costs you direct bookings and drives guests to OTA platforms (Booking.com, Agoda) where you pay 15–20% commission. A well-maintained website pays for itself many times over.

---

## 2. ROLES & RESPONSIBILITIES

| Role | Name / Contact | Website Responsibility |
|------|---------------|------------------------|
| Website Owner | Property Owner | Final approval on all changes; annual review |
| Website Manager | Manager: +66 063 268 6289 | Weekly checks; content updates; photo uploads |
| AI Update Agent | Replit AI (see Section 17) | Technical changes, code edits, new features |
| OTA Manager | TBD | Sync prices/availability between site and Booking.com/Agoda |

---

## 3. KEY FILE REFERENCE GUIDE

These are the exact files to edit for each type of change. Do not edit any other file unless instructed by the AI agent.

| What you want to change | File to open | Section to find |
|------------------------|--------------|-----------------|
| Room names, prices, features | `artifacts/m2-hotel/src/pages/Home.tsx` | Search for `"Deluxe Room"` |
| Hero slideshow photos | `artifacts/m2-hotel/src/pages/Home.tsx` | Search for `heroSlides` |
| Guest reviews | `artifacts/m2-hotel/src/components/ReviewCarousel.tsx` | Search for `const reviews` |
| Blog posts | `artifacts/m2-hotel/src/components/Blog.tsx` | Search for `const posts` |
| Quiz game questions | `artifacts/m2-hotel/src/components/Game.tsx` | Search for `const questions` |
| Map pin location | `artifacts/m2-hotel/src/components/Map.tsx` | Search for `HOTEL_LAT` |
| Map POI markers | `artifacts/m2-hotel/src/components/Map.tsx` | Search for `const markers` |
| Phone / WhatsApp number | `artifacts/m2-hotel/src/pages/Home.tsx` + `Navbar.tsx` | Search for `wa.me` |
| Instagram / social links | `artifacts/m2-hotel/src/pages/Home.tsx` | Footer section |
| Amenities list | `artifacts/m2-hotel/src/pages/Home.tsx` | Search for `"Thoughtful Touches"` |
| About section text | `artifacts/m2-hotel/src/pages/Home.tsx` | Search for `"Welcome to M2"` |
| FAQ answers | `artifacts/m2-hotel/src/pages/Home.tsx` | Search for `"Check-in"` |
| SEO title / meta tags | `artifacts/m2-hotel/index.html` | `<head>` section |
| Colour theme | `artifacts/m2-hotel/src/index.css` | CSS variables at top |
| Hotel photos (add new) | `artifacts/m2-hotel/src/assets/` | Copy file here first |

---

## 4. DAILY TASKS

**Frequency:** Every business day  
**Time required:** 5–10 minutes  
**Responsibility:** Manager or front desk staff

### TASK D-01: Verify Site is Online
- Open the live website URL in a browser
- Confirm the homepage loads with photos and no error messages
- Check the contact section — tap the WhatsApp link and confirm it opens correctly
- **If site is down:** Contact the AI agent immediately (see Section 20)

### TASK D-02: Check Booking Enquiry Form
- Look for any form submissions that may have come in via the site
- Respond to all enquiries within 4 hours during business hours

### TASK D-03: Monitor OTA Listings Alignment
- Briefly compare the prices shown on the website against what is live on Booking.com
- If they differ, flag for weekly price reconciliation (see Task W-01)

---

## 5. WEEKLY TASKS

**Frequency:** Every Monday morning  
**Time required:** 20–30 minutes  
**Responsibility:** Manager

### TASK W-01: Price Accuracy Check
- Compare current website room prices against current Booking.com and Agoda rates
- If season has changed or rates have been adjusted on OTAs, update the website prices
- Open `Home.tsx`, find the rooms section, update `price: "฿X,XXX"` values
- **Best practice:** Website direct price should always be equal to or lower than OTA price

### TASK W-02: Review New Guest Feedback
- Scan recent Booking.com and Google reviews for the week
- Identify any recurring positive comments — candidates for the testimonials carousel
- Identify any recurring complaints — flag for management action
- If 2+ new strong reviews collected, queue for next monthly review rotation (Task M-02)

### TASK W-03: WhatsApp & Contact Link Test
- On a mobile phone, open the website and tap the WhatsApp chat button
- Confirm it opens WhatsApp and routes to the correct number (+66 63 268 6289)
- Tap the phone number in the navbar — confirm it dials
- If broken: contact AI agent immediately

### TASK W-04: Photo Quality Spot Check
- Open the Rooms section on both mobile and desktop
- Confirm all 3 room cards are showing the correct photos and loading quickly
- Check the hero slideshow is cycling through all 4 slides

### TASK W-05: Analytics Review (once set up)
- Review traffic sources: where are visitors coming from?
- Note the most-viewed pages and most-clicked buttons
- Check bounce rate — if above 70%, note for monthly review

---

## 6. MONTHLY TASKS

**Frequency:** First week of each month  
**Time required:** 45–90 minutes  
**Responsibility:** Manager (AI agent for technical changes)

### TASK M-01: Price Review & Seasonal Update
- Review upcoming season: are you entering High Season (Nov–Apr) or Low Season (May–Oct)?
- Update all room prices accordingly
- Consider adding a promotional banner during low season (ask AI agent)

| Season | Typical Pricing Guidance |
|--------|--------------------------|
| High Season (Nov–Apr) | Full rate; prices can be +20% Dec–Jan peak |
| Shoulder (May, Oct) | Standard rate; consider minor promotions |
| Low Season (Jun–Sep) | Reduce 10–25%; consider stay-longer deals |

### TASK M-02: Guest Review Rotation
- Collect 1–3 new authentic reviews from Booking.com, Google, or Agoda
- Copy the exact guest text, their first name, country, and month/year
- Send to AI agent with the instruction: "Please replace review [number] in ReviewCarousel.tsx with this new review"
- Aim to keep all reviews dated within the last 12 months

### TASK M-03: Blog Post Review
- Check the blog section — are posts still seasonally relevant?
- If current month is high season (Nov–Apr): ensure at least one post covers activities or "what to do in [month]"
- If a major new attraction, restaurant, or event has opened nearby: plan a new blog post
- Send new post content to AI agent (see Section 11 for format)

### TASK M-04: Map & Attractions Update
- Walk around the local area — have any new restaurants, bars, or attractions opened?
- Note the name and walking distance from M2
- Ask AI agent to add a new map marker if relevant

### TASK M-05: Photo Refresh Assessment
- Review the current hero photos and room cards
- Are photos more than 6 months old? Have there been room refurbishments?
- If yes, take new photos (see Section 8 for guidelines) and submit to AI agent

### TASK M-06: Contact Information Verification
- Call each number listed on the website to confirm it is active
- Send a test WhatsApp to both numbers (+66 63 268 6289 and +66 063 268 6289)
- Send a test email to hello@m2roomsandstayspatong.com.com and confirm receipt

### TASK M-07: Mobile Responsiveness Check
- Open the full website on a smartphone (not just the desktop preview)
- Scroll through every section on mobile
- Check that all text is readable, all buttons are tappable, and forms work
- If any layout issues found: document with a screenshot and send to AI agent

---

## 7. ANNUAL TASKS

**Frequency:** Every November (before High Season begins)  
**Time required:** Half day  
**Responsibility:** Owner + Manager

### TASK A-01: Full Site Content Audit
- Read every word on the website — About, FAQ, Amenities, Rooms
- Update any information that has changed over the year
- Verify all prices, policies (check-in/out times, cancellation), and contact info

### TASK A-02: Photography Overhaul
- Commission a professional photographer for new room and property photos
- Minimum deliverables: 3 hero photos, 2 photos per room type, 1 lobby, 1 exterior
- Submit all new photos to AI agent for enhancement and integration

### TASK A-03: Brand Review
- Does the website still represent the property correctly?
- Any new amenities added (e.g., new TVs, new outdoor seating)?
- Any room type changes or reconfigurations?
- Update all relevant sections

### TASK A-04: SEO Keyword Review
- Review which Google searches are driving traffic
- Update About text and blog posts with refreshed keywords
- Consider commissioning 3–4 new blog posts targeting seasonal search terms

### TASK A-05: Competitor Analysis
- Visit 3–5 competitor guesthouse websites in Patong
- Note anything they do that you don't (photo quality, features, booking tools)
- Bring findings to AI agent as improvement ideas

### TASK A-06: Technology Review
- Ask AI agent if any major updates or improvements are available for the site
- Review whether any new features would benefit guests (e.g., live chat, online booking widget)

---

## 8. HOW TO UPDATE: PHOTOS

### 8.1 Photo Specifications
Before taking or submitting photos:

| Specification | Requirement |
|--------------|-------------|
| Minimum resolution | 1500px on the long edge |
| Format | JPG or PNG |
| Lighting | Natural daylight; no harsh flash |
| Time of day | Morning light (7–10am) preferred |
| Composition | Wide-angle; show full room; remove all personal items |
| Cleanliness | Room must be staged: fresh linen, cushions straight, no wires visible |

### 8.2 Procedure for Updating a Room Photo
1. Take the photo on a smartphone (minimum iPhone 11 or equivalent)
2. Save the photo to a folder named `New Photos YYYY-MM`
3. Share the folder with the AI agent (upload directly in the chat)
4. Specify exactly which card or section the photo is for (e.g., "Deluxe Room balcony card")
5. AI agent will enhance, resize, and integrate the photo automatically

### 8.3 Procedure for Updating Hero Slideshow Photos
- The hero shows 4 rotating photos
- Ideal hero photos: wide, well-lit, featuring a person or clear subject; landscape orientation preferred
- Submit up to 4 photos to AI agent with the message: "Please replace the hero slideshow with these photos"

### 8.4 Photo Naming Convention
Always name photos clearly before submitting:
- `hero_1_room_balcony.jpg`
- `room_deluxe_standard_01.jpg`
- `lobby_reception_day.jpg`

---

## 9. HOW TO UPDATE: PRICES

### 9.1 Direct Edit (Self-Service)
File: `artifacts/m2-hotel/src/pages/Home.tsx`

1. Open the file
2. Use Find (Ctrl+F or Cmd+F) and search for `฿1,100` or `"Deluxe Room"`
3. Locate the `price:` field for each room type
4. Change the number inside the quotes, e.g.: `price: "฿1,400"`
5. Save the file — the site updates automatically

### 9.2 Via AI Agent
Simply write to the agent: "Please update the Deluxe Room price to ฿1,400 and the Superior Room price to ฿1,800."

### 9.3 Pricing Policy
- Website price should always equal or beat the OTA price (Best Rate Guarantee)
- Display starting prices (from ฿X,XXX) — this accommodates weekday/weekend variation
- During high season, consider displaying both low and high season rates

---

## 10. HOW TO UPDATE: REVIEWS

### 10.1 Collecting Real Reviews
Always obtain guest permission before using a review by name. For Booking.com/Google reviews, these are already public. Use the guest's first name and country only — never full name or room number.

### 10.2 Review Format
Each review entry has 5 fields:

```
text:   "The full review text goes here"
name:   "Guest first name + surname initial"
loc:    "Country"
date:   "Month Year"
stars:  5
```

### 10.3 Via AI Agent
Send the agent: "Please add this new review to the carousel and remove the oldest one:"
Then paste the review text, name, country, and date.

### 10.4 Review Quality Standards
- Minimum length: 2 sentences
- Must be authentic (from Booking.com, Google, or TripAdvisor)
- No reviews mentioning amenities you no longer offer (e.g., breakfast, pool)
- Aim for geographic diversity: Australia, Europe, Asia, North America

### 10.5 Rotation Schedule
- Replace 2 reviews per month
- Maintain 6 total reviews in the carousel
- Keep no review older than 18 months

---

## 11. HOW TO UPDATE: BLOG POSTS

### 11.1 Blog Strategy
The blog ("Patong Insider") serves two purposes:
1. Guest value — useful information that helps guests enjoy Patong
2. SEO — fresh content that helps Google find the website

Post 1–2 articles per month during high season; at minimum 1 per month.

### 11.2 Blog Post Template
Send the AI agent the following:

```
BLOG POST REQUEST

Tag: (one of: Travel Guide / Food & Drink / Travel Tips / Events / Local Life)
Title: [Your title here]
Excerpt: [One or two sentences summarising the post — shown on the blog card]
Date: [Publication date]
Read Time: [e.g., 5 min read]

Content:
[Write your full blog post here. Use **bold text** for sub-headings.
Separate paragraphs with a blank line.]
```

### 11.2.1 Permalinks & Slugs
Every blog post should include a stable, SEO-friendly `slug` used as the post's permalink. The `slug` becomes part of the post URL (e.g. `/blog/skip-bangla-road-3-better-ways-to-walk-to-patong-beach`).

How to add a slug (self-service):
- Open `artifacts/m2-hotel/src/components/Blog.tsx` and find the `const posts = [...]` array.
- Add a `slug` field to the new post object, using lowercase, hyphen-separated words, no punctuation, and keeping it short and descriptive.
- Example: `slug: "skip-bangla-road-3-better-ways-to-walk-to-patong-beach"`.

Why it matters:
- Readable URLs help users and improve SEO.
- Used for sharing, canonical links, and social/Open Graph tags.
- Do not change a published slug; if you must, add a redirect.

### 11.2.2 Preview & Publish
After adding or editing a post, preview locally and then push changes to GitHub so the automated workflow builds and deploys the site.

Local preview (dev server):
```bash
pnpm --filter @workspace/m2-hotel run dev
```

Build for GitHub Pages (the repository has a workflow that runs this on push):
```bash
pnpm --filter @workspace/m2-hotel run build:gh
```

Publishing (push source changes to `main`):
- Commit your changes and push to the `main` branch. The GitHub Actions workflow at `.github/workflows/deploy.yml` will build and publish the site to GitHub Pages automatically.

Example commands (run from the workspace root):
```bash
git add artifacts/m2-hotel/src/components/Blog.tsx M2_WEBSITE_SOP.md
git commit -m "Add blog post + slug; update SOP with publishing steps"
git push origin main
```

### 11.3 High-Performing Blog Topics (Ideas Bank)

**Evergreen posts (relevant all year):**
- Best beaches near Patong for snorkelling
- Getting from Phuket Airport to Patong — all options compared
- Phuket for solo travellers: a safety guide
- Best authentic Thai restaurants in Patong (updated [year])
- Phuket day trip guide: the 5 best day trips from Patong
- What to pack for a Phuket trip

**Seasonal posts:**
- What's on in Phuket in [Month]
- Songkran Water Festival in Patong — what to expect
- Loy Krathong in Phuket — where to celebrate
- High Season Patong: how to beat the crowds

### 11.4 SEO Best Practice for Blog Posts
- Include the keywords "Patong Beach", "Phuket", and "guesthouse" naturally in each post
- Write minimum 400 words per post
- Use a descriptive title that people would actually search for

---

## 12. HOW TO UPDATE: AMENITIES

### 12.1 Current Amenities List
The Amenities section currently shows:
1. Free High-Speed WiFi
2. Air Conditioning
3. Flat-screen TV
4. Refrigerator
5. Hot Water Shower
6. On-Call Reception
7. Airport Transfer (fee)
8. Secure Key-Card Entry

### 12.2 Adding a New Amenity
Send the AI agent: "Please add [Amenity Name] to the Amenities section."
The agent will select the appropriate icon from the library and add it to the grid.

### 12.3 Removing an Amenity
Send the AI agent: "Please remove [Amenity Name] from the Amenities section."

### 12.4 Rules
- Only list amenities that exist in every room or are available to all guests
- Never list an amenity as standard if it applies to only one room type — put it in the room card features instead
- Airport transfer must always be marked "(fee)" since it is not complimentary

---

## 13. HOW TO UPDATE: THE QUIZ GAME

### 13.1 About the Game
The quiz ("How Well Do You Know Patong?") has 6 questions. Each question has:
- A question text
- 4 options (A, B, C, D)
- The index of the correct answer (0 = A, 1 = B, 2 = C, 3 = D)
- A fun fact shown after answering

### 13.2 Changing a Question — Via AI Agent
Send the agent: "Please replace question [number] in the quiz with this new question:"

Then provide:
```
Question: [Your question text]
Options: [A] [B] [C] [D]
Correct answer: [letter]
Fun fact: [Interesting fact shown after the answer]
```

### 13.3 Changing the Entire Game Type
If you want a completely different game (e.g., a memory card matching game using room photos, a "Spin to Win" discount wheel, a Patong bingo card), simply describe it to the AI agent and request a rebuild.

### 13.4 Game Strategy
The quiz serves a marketing purpose: it keeps guests on your site longer, increases engagement, and ends with a direct call to "Book Your Stay". Keep questions fun and learnable — not difficult. They should make guests excited about visiting Patong, not frustrated.

---

## 14. HOW TO UPDATE: MAP LOCATION & PINS

### 14.1 Correcting the Hotel Pin (Critical)
The hotel map pin must show the exact property location. To fix it:

1. Open **Google Maps** on your phone or computer
2. Search for "M2 Room For Rent Patong" — find your property
3. Long-press (mobile) or right-click (desktop) the exact building
4. Select "What's here?" — two numbers will appear (e.g., `7.8981, 98.2960`)
5. Send those numbers to the AI agent: "Please update the hotel map pin coordinates to 7.XXXX, 98.XXXX"

### 14.2 Adding a New Point of Interest
To add a new restaurant, bar, or attraction to the map:
1. Find its coordinates using the same Google Maps method above
2. Tell the AI agent: "Please add [Name] at coordinates [lat, lng] to the map — [short description]"

### 14.3 Map Pin Colours (Reference)
| Colour | Used for |
|--------|----------|
| Red | M2 hotel (do not change) |
| Blue | Beach / water |
| Violet | Nightlife / entertainment |
| Green | Shopping / malls |
| Grey | Medical / practical |
| Orange | Sports / activities |
| Yellow | Attractions / sightseeing |

---

## 15. HOW TO UPDATE: CONTACT INFORMATION

### 15.1 Current Contact Details on the Website
| Field | Current Value |
|-------|--------------|
| Main WhatsApp/Phone | +66 63 268 6289 |
| Manager Phone | +66 063 268 6289 |
| Email | hello@m2roomsandstayspatong.com.com |
| Instagram | instagram.com/m2rooms/ |
| Booking.com | booking.com/hotel/th/m2-room-for-rent |

### 15.2 Changing a Phone Number
If a number changes, this update must be made in **three places**:
1. The Navbar (`Navbar.tsx` — the phone displayed top right)
2. The Contact section (`Home.tsx` — the contact block)
3. The Footer (`Home.tsx` — the WhatsApp link)

Always use the international format without spaces in the wa.me link:
- `+66 63 268 6289` displays as: `+66 63 268 6289`
- The link format is: `https://wa.me/66632686289` (no leading zero, no spaces)

### 15.3 Adding an Email Address
Send the AI agent: "Please update the contact email to [new email address]."

---

## 16. HOSTING ON GITHUB PAGES (FREE)

### 16.1 What Is GitHub Pages?
GitHub Pages is a free hosting service by GitHub. Your website files are stored in a GitHub repository (a folder in the cloud), and GitHub automatically serves them as a live website at a URL like `yourusername.github.io/m2-hotel` or a custom domain like `www.m2roomspatong.com`.

**Cost:** Free for public repositories. Custom domain requires purchasing a domain name (~$12–20/year from Namecheap or Google Domains).

### 16.2 One-Time Setup Procedure
This is a technical setup. Send the AI agent this exact request:

> "Please prepare the M2 hotel website for deployment to GitHub Pages. I want to host it at [your desired URL]. My GitHub username is [your username]."

The agent will:
1. Configure the Vite build for GitHub Pages (set the correct base path)
2. Create a `deploy.sh` script you can run to push updates
3. Add a GitHub Actions workflow so the site deploys automatically when you save changes

### 16.3 Updating the GitHub-Hosted Site
Once hosted on GitHub, the update process is:

1. Come to this Replit workspace and ask the AI agent to make your changes
2. Agent makes the changes and confirms they look correct
3. You (or the agent) run: `pnpm --filter @workspace/m2-hotel run build`
4. The built files are pushed to GitHub via `git push`
5. GitHub Pages automatically publishes the new version within ~2 minutes

**Alternative (automatic):** Ask the agent to set up GitHub Actions so that every time a change is saved to GitHub, the site rebuilds and redeploys automatically — no manual steps needed.

### 16.4 Custom Domain Setup
If you want `www.m2roomspatong.com` (for example):
1. Purchase a domain from Namecheap (~$12/year) or Google Domains (~$12/year)
2. Tell the AI agent your domain name
3. Agent adds a `CNAME` file to the build
4. You update two DNS records with your domain registrar (agent will provide exact values)
5. Done — takes 24–48 hours to propagate worldwide

---

## 17. WORKING WITH THE AI AGENT TO UPDATE THE SITE

### 17.1 What the AI Agent Can Do
The AI agent (Replit AI) can make any change to the website, including:
- Updating text, prices, photos, reviews, blog posts
- Adding entirely new sections or features
- Redesigning parts of the site
- Fixing bugs or broken elements
- Adding SEO tags, analytics, new pages

### 17.2 How to Request an Update
Write your request in plain English. Be specific. Examples:

| Good Request | Why It Works |
|-------------|--------------|
| "Update the Deluxe Room price to ฿1,300 and add 'Free beach towels' to its features" | Specific, clear, actionable |
| "Replace review number 2 with this new review from [guest name], Singapore, March 2025: [text]" | Provides all required fields |
| "Add a new blog post about Songkran Festival. Here is the content: [paste text]" | Includes the content to use |
| "The WhatsApp button isn't opening the correct number — please check and fix it" | Describes the problem clearly |

| Poor Request | Why It Fails |
|-------------|--------------|
| "Make it better" | Too vague |
| "Fix the photos" | Which photos? Fix how? |
| "Update the prices" | To what? |

### 17.3 The Update Cycle
```
You describe the change
       ↓
AI agent makes the change in the code
       ↓
AI agent takes a screenshot to verify it looks correct
       ↓
You confirm it looks right in the preview
       ↓
Change is saved (checkpoint created automatically)
```

### 17.4 Sharing Context When You Return
If you come back after a break, start your session by saying:
> "I'm the owner of M2 Rooms & Stays Patong. I'd like to [describe your request]. The website is at `artifacts/m2-hotel`."

The agent will read the project files and pick up exactly where work left off.

### 17.5 If the Site Breaks
If something goes wrong after an update:
1. Tell the agent: "Something broke — please check the error logs"
2. The agent will identify and fix the issue
3. If the issue cannot be resolved: say "Please roll back to the last checkpoint"
4. The system automatically saves checkpoints — no work is ever permanently lost

---

## 18. SEO — ONGOING OPTIMISATION

### 18.1 What Is SEO?
Search Engine Optimisation (SEO) is the process of making your website appear higher in Google search results when people search for things like "guesthouse Patong Beach" or "cheap hotel near Patong Phuket."

### 18.2 Technical SEO (One-Time — Ask AI Agent)
These should be implemented once. Ask the agent to do all of them:

- [ ] Add `<title>M2 Rooms & Stays — Boutique Guesthouse, Patong Beach Phuket</title>` to index.html
- [ ] Add meta description (160 characters, keyword-rich)
- [ ] Add Open Graph tags (controls how link appears when shared on Facebook/Line)
- [ ] Add structured data (JSON-LD for hotels — helps Google show your star rating)
- [ ] Create `sitemap.xml`
- [ ] Create `robots.txt`
- [ ] Add Google Analytics or Plausible Analytics tracking

### 18.3 Content SEO (Ongoing)
These are things you do regularly that help Google rank you higher:

| Action | Frequency | Impact |
|--------|-----------|--------|
| Publish a new blog post (min. 400 words) | Monthly | High |
| Update existing blog posts with new information | Quarterly | Medium |
| Add new guest reviews with location keywords | Monthly | Medium |
| Get other websites to link to yours (e.g., Phuket travel blogs) | Ongoing | High |
| Register on Google Business Profile | Once | Very High |

### 18.4 Google Business Profile (Critical — Do This First)
This is free and extremely high-impact. It makes your property appear in Google Maps searches.

1. Go to google.com/business
2. Search for "M2 Room For Rent Patong" — claim the existing listing if one exists
3. Complete 100% of the profile: photos, hours, description, phone, website URL
4. Ask every satisfied guest to leave a Google review — these directly impact search ranking

### 18.5 Target Keywords
Naturally include these phrases in your written content:

**Primary (use frequently):**
- Patong Beach guesthouse
- Boutique hotel Patong Phuket
- Rooms near Patong Beach

**Secondary (use occasionally):**
- Phuket budget accommodation
- Patong accommodation Thailand
- Guesthouse Phuket island
- M2 Room For Rent Patong

**Long-tail (use in blog posts):**
- "Where to stay near Patong Beach"
- "Affordable guesthouse Phuket"
- "Best guesthouses in Patong 2025"

---

## 19. CONTINUOUS IMPROVEMENT FRAMEWORK

### 19.1 What to Monitor (Monthly)
Track these metrics and look for trends:

| Metric | Where to Find | Action if Declining |
|--------|--------------|---------------------|
| Website visitors | Google Analytics | Publish new blog post; check SEO |
| Direct enquiries via contact form | Email inbox | Improve CTA visibility; add WhatsApp button |
| WhatsApp conversations from website | WhatsApp | Ensure button is visible on mobile |
| Booking.com review score | Booking.com extranet | Check for recurring complaints; update site |

### 19.2 Quarterly Improvement Reviews
Every 3 months, conduct a 30-minute review meeting using these questions:

1. What are guests most complimenting? → Highlight it more on the website
2. What are guests complaining about? → Either fix the issue, or manage expectations in the FAQ
3. What questions do guests ask most at check-in? → Add it to the FAQ section
4. Are there new attractions or restaurants nearby? → Update the map and blog
5. What are competitor guesthouses doing that we're not? → Consider adopting
6. Has any room been refurbished or improved? → Update photos

### 19.3 Guest Feedback Loop
```
Guest checks out
      ↓
Staff asks: "Was everything OK with your stay?"
      ↓
If positive: "Would you mind leaving us a quick review on Booking.com or Google?"
      ↓
Good review received → Copy to ReviewCarousel (within 2 weeks)
      ↓
Update the date to show how recent it is
```

### 19.4 Website Feature Ideas (Future Enhancements)
Consider asking the AI agent to build these when ready:

| Feature | Value | Complexity |
|---------|-------|------------|
| Floating WhatsApp chat bubble (always visible) | High — instant guest contact | Low |
| Online availability calendar | High — reduces email back-and-forth | Medium |
| Photo lightbox gallery | Medium — better photo browsing | Low |
| Multilingual toggle (Thai / Chinese / Korean) | High for Asian markets | Medium |
| Special offers banner (dismissible) | Medium — drives direct bookings | Low |
| Google Analytics dashboard | High — see exactly who visits | Low |
| Live chat widget (Tawk.to — free) | Medium — real-time guest support | Low |
| QR code linking to website (for cards/flyers) | Medium — offline to online bridge | Low |

---

## 20. EMERGENCY PROCEDURES

### 20.1 Site Is Down / Not Loading
**Immediate action:**
1. Hard-refresh the browser (Ctrl+Shift+R)
2. Try a different browser and device
3. If still down: open Replit workspace and check workflow status
4. Contact AI agent: "The website is not loading. Please check the workflow logs and fix the issue."
5. If unresolved within 30 minutes: contact hosting provider

### 20.2 Wrong Information Is Live
(e.g., wrong price, wrong phone number)
1. Take a screenshot of the error
2. Contact AI agent immediately with the screenshot
3. State exactly what needs to change and what it should say
4. Changes deploy within minutes on Replit

### 20.3 Site Content Has Been Corrupted
1. Tell AI agent: "Something has gone wrong with the website content — please roll back to the last working checkpoint"
2. The system automatically saves checkpoints — rollback restores the site to a previous good state

### 20.4 Phone Number Has Changed
If your WhatsApp or phone number changes — this is urgent. The number appears in:
- The navbar
- The contact section (2 numbers)
- The footer
- The WhatsApp chat link

Contact AI agent immediately: "Our phone number has changed from [old] to [new]. Please update all instances on the website."

---

## 21. GLOSSARY

| Term | Definition |
|------|------------|
| AI Agent | The Replit AI assistant used to make website changes |
| Checkpoint | An automatic save point of the website — can be rolled back to |
| OTA | Online Travel Agency — Booking.com, Agoda, Airbnb |
| Organic Search | Visitors who found you via Google (not paid ads) |
| SEO | Search Engine Optimisation — making Google rank you higher |
| Meta Description | The text that appears under your site name in Google search results |
| Open Graph | Tags that control how your website looks when shared on social media |
| Structured Data | Code that helps Google understand your property type, rating, and location |
| GitHub Pages | Free website hosting service by GitHub |
| CNAME | A DNS record used to point your custom domain to your host |
| Bounce Rate | Percentage of visitors who leave without clicking anything — lower is better |
| Conversion | When a visitor takes a desired action (calls, WhatsApps, submits enquiry form) |
| `src/assets/` | The folder where all website photos are stored |
| `Home.tsx` | The main page file containing most of the site's content |
| Vite | The build tool that converts the code into a working website |

---

## DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | May 2025 | AI Agent / M2 Management | Initial release |

**Review Date:** November 2025 (before High Season)  
**Next Scheduled Update:** Annual review, November 2026

---

*This document is property of M2 Rooms & Stays, Patong, Phuket, Thailand.*  
*For technical support, open the Replit workspace and ask the AI agent.*
