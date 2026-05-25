# STANDARD OPERATING PROCEDURES
## M2 Rooms & Stays — Website Operations Manual
**Document ID:** M2-WEB-SOP-002  
**Version:** 2.0  
**Effective Date:** May 2026  
**Owner:** M2 Rooms & Stays, Patong, Phuket  
**Classification:** Internal Use — Management & Staff

---

## TABLE OF CONTENTS

1. [Purpose & Scope](#1-purpose--scope)
2. [Roles & Responsibilities](#2-roles--responsibilities)
3. [How the Website Now Works](#3-how-the-website-now-works)
4. [Key File Reference Guide](#4-key-file-reference-guide)
5. [Daily Tasks](#5-daily-tasks)
6. [Weekly Tasks](#6-weekly-tasks)
7. [Monthly Tasks](#7-monthly-tasks)
8. [Annual Tasks](#8-annual-tasks)
9. [How to Edit the Website](#9-how-to-edit-the-website)
10. [How to Update: Photos](#10-how-to-update-photos)
11. [How to Update: Prices](#11-how-to-update-prices)
12. [How to Update: Reviews](#12-how-to-update-reviews)
13. [How to Update: Blog Posts](#13-how-to-update-blog-posts)
14. [How to Update: Attractions & Map](#14-how-to-update-attractions--map)
15. [How to Update: Contact Information](#15-how-to-update-contact-information)
16. [How to Update: FAQ](#16-how-to-update-faq)
17. [How to Update: Amenities](#17-how-to-update-amenities)
18. [How to Update: Logo Size](#18-how-to-update-logo-size)
19. [Hosting on GitHub Pages](#19-hosting-on-github-pages)
20. [SEO — Ongoing Optimisation](#20-seo--ongoing-optimisation)
21. [Emergency Procedures](#21-emergency-procedures)
22. [Glossary](#22-glossary)

---

## 1. PURPOSE & SCOPE

### 1.1 Purpose
This SOP establishes standardised procedures for maintaining, updating, and continuously improving the M2 Rooms & Stays website. It ensures the website remains accurate, current, and effective as a direct booking and marketing tool.

### 1.2 Scope
This document covers all routine and non-routine website maintenance. It applies to the property owner, manager, any designated staff, and any AI assistant performing updates.

### 1.3 Why This Matters
The website is your lowest-cost, highest-return marketing channel. Every hour it shows incorrect prices, outdated photos, or broken contact links costs you direct bookings and drives guests to OTA platforms where you pay 15–20% commission.

---

## 2. ROLES & RESPONSIBILITIES

| Role | Contact | Website Responsibility |
|------|---------|------------------------|
| Website Owner | Property Owner | Final approval on all changes; annual review |
| Website Manager | +66 063 268 6289 | Weekly checks; content updates; photo uploads |
| AI Assistant | Claude (claude.ai) | Technical changes, code edits, new features |

---

## 3. HOW THE WEBSITE NOW WORKS

### 3.1 Technology Change (May 2026)
The website was migrated from a React/Replit application to a **static HTML website** hosted on GitHub Pages. This is important to understand:

| Before (Replit/React) | Now (Static HTML) |
|----------------------|-------------------|
| Built from many component files | Single file: `index.html` |
| Required a build process to deploy | Edit and upload — live immediately |
| Hosted on Replit | Hosted on GitHub Pages (free) |
| JavaScript-rendered (slower for Google) | Pure HTML (faster, better for SEO) |
| Images in `src/assets/` folder | Images in `images/` folder |

### 3.2 Where Everything Lives
- **Live website:** https://www.m2roomsandstayspatong.com
- **GitHub repository:** github.com/Green27713/m2-hotel
- **Main file:** `index.html` (root of repository)
- **Photos:** `images/` folder in the repository
- **Domain registrar:** Squarespace (do not change DNS settings)
- **DNS:** Cloudflare (grey cloud — do not change)

### 3.3 How Updates Work
```
1. Download index.html from GitHub
2. Open in a text editor (TextEdit, Notepad, VS Code)
3. Make your changes
4. Upload the new index.html to GitHub (replacing the old one)
5. Wait 1–2 minutes — site updates automatically
```

---

## 4. KEY FILE REFERENCE GUIDE

Everything is in ONE file. Search within `index.html` to find what you need.

| What you want to change | Search for this text in index.html |
|------------------------|-------------------------------------|
| Room names, prices, features | `Our Spaces` or `Deluxe Room` |
| Hero slideshow images | `hero-slide` |
| Guest reviews | `const reviews = [` |
| Blog posts | `const blogPosts = [` |
| FAQ questions & answers | `id="faq"` |
| Attractions section | `id="attractions"` |
| Map location | `7.895307, 98.300017` |
| Phone / WhatsApp number | `wa.me` or `268 6289` |
| Email address | `hello@m2rooms` |
| Amenities list | `id="amenities"` |
| About section text | `Welcome to M2` |
| Logo size | `.navbar-logo {` |
| Colour theme | `:root {` |
| Navbar links | `navbar-links` |

### 4.1 Images Folder Contents
All photos are stored in the `images/` folder on GitHub. Current files:

| Filename | Used for |
|----------|----------|
| M2_Logo_transparent.png | Navbar logo |
| M2_deluxe_balcony_enhanced.jpg | Deluxe room with balcony |
| M2_deluxe_standard_enhanced.jpg | Deluxe standard room |
| M2_superior_enhanced.jpg | Superior room |
| M2_superior_lamp_enhanced.jpg | Gallery strip |
| M2_exterior_enhanced.jpg | About section |
| M2_lobby_enhanced.jpg | Gallery strip / hero |
| M2_area_enhanced.jpg | Area / attractions |
| M2_room_mood_enhanced.jpg | Gallery strip |
| M2_hero_enhanced.jpg | Hero slideshow |
| attraction1.png | Patong Beach card |
| attraction2.png | Bangla Road card |
| attraction3.png | Wat Chalong card |
| attraction4.png | Big Buddha card |
| hero.png | Hero slideshow |

**CRITICAL:** When referencing images in index.html, always use the format:
```
src="images/FILENAME.jpg"
```
Never use `src="FILENAME.jpg"` (missing the `images/` prefix = broken image).

---

## 5. DAILY TASKS

**Time required:** 5–10 minutes  
**Responsibility:** Manager or front desk staff

### TASK D-01: Verify Site is Online
- Open https://www.m2roomsandstayspatong.com in a browser
- Confirm the homepage loads with photos and hero slideshow working
- Tap the WhatsApp button — confirm it opens to +66 063 268 6289
- **If site is down:** See Section 21 — Emergency Procedures

### TASK D-02: Check Enquiry Form Submissions
- The contact form currently shows a success message but does not send emails automatically
- Check your WhatsApp for any direct messages from guests
- Respond to all enquiries within 4 hours during business hours

### TASK D-03: Monitor OTA Price Alignment
- Briefly compare website prices against live Booking.com rates
- Website price should always equal or beat OTA price

---

## 6. WEEKLY TASKS

**Time required:** 20–30 minutes  
**Responsibility:** Manager

### TASK W-01: Price Accuracy Check
- Compare website room prices against Booking.com and Agoda
- If rates have changed, update index.html (see Section 11)
- Best practice: website direct price ≤ OTA price at all times

### TASK W-02: Review New Guest Feedback
- Scan recent Booking.com and Google reviews
- Identify strong new reviews — candidates for the website carousel
- Queue 2+ good reviews for next monthly rotation

### TASK W-03: WhatsApp & Contact Link Test
- On a mobile phone, open the site and tap the WhatsApp float button
- Confirm it opens WhatsApp to +66 063 268 6289
- If broken: update the `wa.me/66632686289` link in index.html

### TASK W-04: Photo & Slideshow Check
- Open the site and watch the hero slideshow cycle through all 5 slides
- Check all 3 room cards show correct photos
- If any image is broken (shows a gradient instead): check the filename spelling in index.html matches exactly what is in the `images/` folder

---

## 7. MONTHLY TASKS

**Time required:** 45–90 minutes  
**Responsibility:** Manager

### TASK M-01: Price Review & Seasonal Update

| Season | Timing | Pricing Guidance |
|--------|--------|-----------------|
| High Season | Nov–Apr | Full rate; +20% Dec–Jan peak |
| Shoulder | May, Oct | Standard rate; minor promotions |
| Low Season | Jun–Sep | Reduce 10–25%; stay-longer deals |

### TASK M-02: Guest Review Rotation
- Collect 1–3 new authentic reviews from Booking.com or Google
- Open index.html and find `const reviews = [`
- Replace the oldest review entry with the new one
- Keep all reviews within the last 18 months
- Maintain geographic diversity (Europe, Asia, Australia, Americas)

### TASK M-03: Blog Post Review
- Are posts still seasonally relevant?
- High season (Nov–Apr): ensure at least one post covers current month activities
- Add a new post if a major new attraction or event has opened nearby
- See Section 13 for how to add blog posts

### TASK M-04: Attractions Update
- Have any new restaurants, bars, or attractions opened nearby?
- Update the attractions section if needed (see Section 14)

### TASK M-05: Photo Refresh Assessment
- Are hero photos more than 6 months old? Have rooms been refurbished?
- If yes: take new photos and upload to `images/` folder on GitHub
- Update the `src="images/..."` paths in index.html

### TASK M-06: Contact Information Verification
- Call +66 063 268 6289 to confirm it is active
- Send a test WhatsApp to confirm it routes correctly
- Send a test email to hello@m2roomsandstayspatong.com

### TASK M-07: Mobile Check
- Open the full website on a smartphone
- Scroll through every section — check text is readable, buttons are tappable
- Check the FAQ accordion opens and closes correctly
- Check the blog post modals open when tapped

---

## 8. ANNUAL TASKS

**Frequency:** Every November (before High Season)  
**Time required:** Half day

### TASK A-01: Full Content Audit
- Read every word on the website
- Update any information that has changed: prices, policies, amenities, FAQ answers

### TASK A-02: Photography Overhaul
- Commission a professional photographer for fresh room and property photos
- Upload new photos to the `images/` folder on GitHub
- Update `src="images/..."` references in index.html

### TASK A-03: Brand Review
- Does the website still represent the property correctly?
- Any new amenities? Room reconfigurations? Update accordingly.

### TASK A-04: SEO Keyword Review
- Review which Google searches are driving traffic (Google Search Console)
- Update About text and blog posts with refreshed keywords

### TASK A-05: Competitor Analysis
- Visit 3–5 competitor guesthouse websites in Patong
- Note improvements to request from Claude

---

## 9. HOW TO EDIT THE WEBSITE

### 9.1 The Golden Rule
**Everything is in `index.html`.** One file, one place.

### 9.2 Step-by-Step Edit Process

**Step 1 — Download the file**
1. Go to github.com/Green27713/m2-hotel
2. Click on `index.html`
3. Click the download icon (or Raw → Save As)

**Step 2 — Open in a text editor**
- Mac: TextEdit (set to Plain Text mode) or VS Code (free, recommended)
- Windows: Notepad or VS Code
- **Never open in Word** — it will corrupt the HTML

**Step 3 — Find the section to edit**
- Use Find (Cmd+F on Mac, Ctrl+F on Windows)
- Search for the text listed in the Key File Reference Guide (Section 4)

**Step 4 — Make your change**
- Edit the text, number, or filename
- Be careful not to delete any `"` `<` `>` or `}` symbols around your changes

**Step 5 — Upload to GitHub**
1. Go to github.com/Green27713/m2-hotel
2. Click on `index.html`
3. Click the pencil (edit) icon
4. Select all the old content and paste your new content
5. OR: click the upload icon and upload your saved file
6. Click **Commit changes**
7. Wait 1–2 minutes for the live site to update

### 9.3 Getting Help from Claude
Open claude.ai and describe what you want to change. Provide context:
> "I manage M2 Rooms & Stays website at github.com/Green27713/m2-hotel. The site is a static HTML file called index.html. Please help me [describe your request]."

---

## 10. HOW TO UPDATE: PHOTOS

### 10.1 Photo Specifications

| Specification | Requirement |
|--------------|-------------|
| Minimum resolution | 1500px on long edge |
| Format | JPG or PNG |
| Lighting | Natural daylight; no harsh flash |
| Time of day | Morning (7–10am) preferred |
| Composition | Wide-angle; show full room; remove personal items |
| Naming | Clear, descriptive: `M2_deluxe_new_2026.jpg` |

### 10.2 Adding a New Photo
1. Upload the photo to the `images/` folder on GitHub (Add file → Upload files)
2. Open index.html and find the `src="images/OLD_FILENAME.jpg"` you want to replace
3. Change the filename to your new photo's name
4. Upload the updated index.html to GitHub

### 10.3 Critical Rule: Image Path Format
Always use:
```
src="images/FILENAME.jpg"
```
**Never** omit the `images/` prefix — the image will not load.

---

## 11. HOW TO UPDATE: PRICES

### 11.1 Finding Prices in index.html
Search for `From ฿` — you'll find three instances, one per room type.

### 11.2 What to Change
Each room card has a price badge like:
```html
<div class="room-price">From ฿1,100</div>
```
Change the number between `฿` and `</div>`.

### 11.3 Current Prices (as of May 2026)
| Room Type | Price |
|-----------|-------|
| Deluxe with Balcony | ฿1,100 |
| Deluxe Standard | ฿1,100 |
| Superior | ฿1,500 |

### 11.4 Pricing Policy
- Website price must always equal or beat OTA price
- Display "From ฿X,XXX" to accommodate weekday/weekend variation

---

## 12. HOW TO UPDATE: REVIEWS

### 12.1 Finding Reviews in index.html
Search for `const reviews = [` — you'll find the reviews array.

### 12.2 Review Format
Each review looks like this:
```javascript
{
  text: "The review text goes here.",
  name: "Guest first name",
  loc: "Country",
  date: "2025",
  stars: 5,
  source: "Booking.com"
},
```

### 12.3 Adding a New Review
1. Copy an existing review block (from `{` to `},`)
2. Paste it after the last review
3. Replace the text, name, loc, date, and source with the real review
4. Delete the oldest review to keep the total at 7

### 12.4 Review Standards
- Must be authentic (from Booking.com, Google, or TripAdvisor)
- Use guest's first name and country only — never full name
- Keep no review older than 18 months
- Aim for geographic diversity

---

## 13. HOW TO UPDATE: BLOG POSTS

### 13.1 Finding Blog Posts in index.html
Search for `const blogPosts = [` — you'll find all posts.

### 13.2 Blog Post Format
Each post looks like this:
```javascript
{
  id: 5,                          // Unique number — use next available
  tag: "Travel Guide",            // Category label
  title: "Your Post Title Here",
  excerpt: "Short summary shown on the blog card — 1-2 sentences.",
  date: "1 June 2026",
  readTime: "4 min read",
  color: "var(--primary)",        // Accent colour: use --primary or --secondary
  content: `Full post content here.

**Bold Heading**
Paragraph text here.

**Another Heading**
More text.`
},
```

### 13.3 Content Formatting Rules
- Use `**Text**` for bold headings within the post body
- Separate paragraphs with a blank line
- Keep content between backtick characters `` ` ``
- Minimum 400 words per post for SEO benefit

### 13.4 Currently Published Posts
1. Top 10 Things To Do in Patong Beach
2. The Best Local Thai Food Near Patong
3. Zag Club & Paradise Complex
4. High Season vs Low Season in Phuket

### 13.5 High-Performing Topic Ideas
- Best beaches near Patong for snorkelling
- Getting from Phuket Airport to Patong — all options compared
- What to pack for a Phuket trip
- Songkran Water Festival in Patong
- What's on in Phuket in [Month]

---

## 14. HOW TO UPDATE: ATTRACTIONS & MAP

### 14.1 Finding Attractions in index.html
Search for `id="attractions"` — you'll find 4 attraction cards.

### 14.2 Attraction Card Format
Each card looks like:
```html
<div class="attraction-card" onclick="window.open('GOOGLE_MAPS_URL','_blank')">
  <div class="attraction-img">
    <img src="images/FILENAME.jpg" alt="Description" />
  </div>
  <h3 class="attraction-name">Place Name</h3>
  <p class="attraction-desc">Distance · Short description</p>
</div>
```

### 14.3 Changing an Attraction Image
1. Upload new image to `images/` folder on GitHub
2. Find the attraction card in index.html
3. Change `src="images/OLD.jpg"` to `src="images/NEW.jpg"`
4. Always include the `images/` prefix

### 14.4 Updating the Map Pin
The hotel map is centred on coordinates `7.895307, 98.300017`.
To update: search for those numbers and replace with new coordinates.

To get coordinates:
1. Open Google Maps
2. Find the exact property location
3. Right-click → "What's here?"
4. Note the two numbers that appear (latitude, longitude)

---

## 15. HOW TO UPDATE: CONTACT INFORMATION

### 15.1 Current Contact Details

| Field | Value |
|-------|-------|
| WhatsApp / Phone | +66 063 268 6289 |
| WhatsApp link | wa.me/66632686289 |
| Email | hello@m2roomsandstayspatong.com |
| Instagram | instagram.com/m2rooms/ |
| Booking.com | booking.com/hotel/th/m2-room-for-rent |

### 15.2 Phone Number Policy
**Only one number appears on the website:** +66 063 268 6289 (the partner/manager number).

### 15.3 Changing the Phone Number
The number appears in multiple places. Search for `268 6289` to find all instances. Also search for `wa.me/` to find WhatsApp links. Update all instances.

**WhatsApp link format:** `https://wa.me/66632686289`
- No leading zero after country code
- No spaces or dashes
- Always starts with country code 66

### 15.4 Changing the Email
Search for `hello@m2rooms` and replace all instances with the new address.

---

## 16. HOW TO UPDATE: FAQ

### 16.1 Finding the FAQ in index.html
Search for `id="faq"` — you'll find the FAQ section with 6 questions.

### 16.2 FAQ Item Format
Each question looks like:
```html
<div class="faq-item">
  <button class="faq-question" onclick="toggleFaq(this)">
    Your question text here?
    <svg class="faq-chevron" ...>...</svg>
  </button>
  <div class="faq-answer">
    <p>Your answer text here.</p>
  </div>
</div>
```

### 16.3 Adding a New FAQ Item
Copy an entire block from `<div class="faq-item">` to its closing `</div>` and paste it after the last item. Change the question and answer text.

### 16.4 Adding FAQ to Navbar
The FAQ section exists on the page but is not currently in the navbar. To add it, find:
```html
<li><button onclick="scrollToSection('#reviews')">Reviews</button></li>
```
And add after it:
```html
<li><button onclick="scrollToSection('#faq')">FAQ</button></li>
```

---

## 17. HOW TO UPDATE: AMENITIES

### 17.1 Finding Amenities in index.html
Search for `id="amenities"` — you'll find 8 amenity items.

### 17.2 Current Amenities
1. Free High-Speed WiFi
2. Air Conditioning
3. Flat-screen TV
4. Refrigerator
5. Hot Water Shower
6. On-Call Reception
7. Airport Transfer (fee)
8. Secure Key-Card Entry

### 17.3 Changing an Amenity Label
Each amenity has a label like:
```html
<p class="amenity-label">Free High-Speed WiFi</p>
```
Change the text between the tags.

### 17.4 Rules
- Only list amenities available to ALL guests
- Airport transfer must always be marked "(fee)"

---

## 18. HOW TO UPDATE: LOGO SIZE

### 18.1 Finding the Logo CSS
Search for `.navbar-logo {` in the `<style>` section.

### 18.2 Changing the Size
You'll see:
```css
.navbar-logo {
  width: 70px; height: 70px;
```
Change both numbers to the same value. Larger = bigger logo. Recommended range: 52px–90px.

---

## 19. HOSTING ON GITHUB PAGES

### 19.1 Current Setup
- Repository: github.com/Green27713/m2-hotel
- Hosting: GitHub Pages (free), deploying from `main` branch root
- Custom domain: m2roomsandstayspatong.com
- CNAME file: present in repository root — do not delete
- DNS: managed via Cloudflare — do not change settings
- Domain registrar: Squarespace — do not change DNS records

### 19.2 Deploying an Update
1. Go to github.com/Green27713/m2-hotel
2. Click `index.html`
3. Click the pencil ✏️ icon to edit
4. Replace content with your updated file
5. Click **Commit changes**
6. Live site updates within 1–2 minutes

### 19.3 Uploading New Images
1. Go to github.com/Green27713/m2-hotel
2. Click the `images/` folder
3. Click **Add file → Upload files**
4. Drag your image files in
5. Click **Commit changes**

### 19.4 Critical Rules
- **Never change Cloudflare settings** — the site will go down
- **Never change DNS records in Squarespace** — the site will go down
- **Never delete the CNAME file** from GitHub — the domain will stop working
- **Always keep images in the `images/` folder** — not the root

---

## 20. SEO — ONGOING OPTIMISATION

### 20.1 Why Static HTML is Better for SEO
The new static HTML site is better for SEO than the old React SPA because:
- Google can read the content instantly without executing JavaScript
- Pages load faster (better Core Web Vitals scores)
- All meta tags, structured data, and content are immediately visible to crawlers

### 20.2 Technical SEO (Already Implemented)
- ✅ Title tag with keywords
- ✅ Meta description
- ✅ Open Graph tags
- ✅ Structured data (JSON-LD hotel schema)
- ✅ Geo tags (latitude/longitude)
- ✅ Google Analytics (G-BW4ZCNX5VT)
- ✅ Canonical URL
- ✅ Mobile responsive

### 20.3 Content SEO (Ongoing)

| Action | Frequency | Impact |
|--------|-----------|--------|
| Publish new blog post (400+ words) | Monthly | High |
| Add new guest reviews | Monthly | Medium |
| Update existing blog posts | Quarterly | Medium |
| Get backlinks from Phuket travel sites | Ongoing | High |

### 20.4 Target Keywords

**Primary:**
- Patong Beach guesthouse
- Boutique hotel Patong Phuket
- M2 Room For Rent Patong

**Secondary:**
- Phuket budget accommodation
- Rooms near Patong Beach Thailand

**Long-tail (use in blog posts):**
- "Where to stay near Patong Beach"
- "Best guesthouses in Patong 2026"

### 20.5 Google Business Profile (Critical)
If not already done:
1. Go to google.com/business
2. Search for "M2 Room For Rent Patong" — claim the listing
3. Complete 100% of the profile: photos, hours, description, phone, website URL
4. Ask every satisfied guest to leave a Google review

---

## 21. EMERGENCY PROCEDURES

### 21.1 Site Is Down / Not Loading
1. Hard-refresh the browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. Try a different browser and device
3. Check github.com/Green27713/m2-hotel — is the repository accessible?
4. Check that the CNAME file still exists in the repository root
5. Go to the repository Settings → Pages — confirm it is still set to deploy from main branch
6. If still down after 30 minutes: contact Claude for assistance

### 21.2 Wrong Information Is Live
1. Download index.html from GitHub
2. Find and fix the incorrect information
3. Upload the corrected file to GitHub
4. Changes go live within 1–2 minutes

### 21.3 Image Not Showing
Most common causes:
1. **Wrong path** — check the `src="images/FILENAME.jpg"` spelling matches exactly what is in the `images/` folder (case-sensitive)
2. **Missing `images/` prefix** — `src="filename.jpg"` won't work; must be `src="images/filename.jpg"`
3. **File not uploaded** — confirm the file exists in the GitHub `images/` folder

### 21.4 Phone Number Has Changed
Search index.html for `268 6289` and `wa.me/` — update all instances. The number currently appears in: navbar, contact section, form success message, footer WhatsApp link, and the floating WhatsApp button.

---

## 22. GLOSSARY

| Term | Definition |
|------|------------|
| Static HTML | A website made of plain HTML files — no server processing needed. Fast, reliable, great for SEO. |
| GitHub Pages | Free hosting service by GitHub. Your `index.html` is served directly as the live website. |
| Repository | A folder on GitHub containing all your website files |
| Commit | Saving a change to GitHub — equivalent to pressing "publish" |
| CNAME | A file in the repository that tells GitHub Pages to serve the site at your custom domain |
| OTA | Online Travel Agency — Booking.com, Agoda, Airbnb |
| SEO | Search Engine Optimisation — making Google rank you higher |
| Meta Description | The text that appears under your site name in Google search results |
| JSON-LD | Structured data code that helps Google understand your property type and location |
| `images/` folder | The folder on GitHub where all website photos are stored |
| `index.html` | The single file that contains the entire website |
| wa.me | WhatsApp's URL format for opening a chat: wa.me/[number without spaces or +] |

---

## DOCUMENT CONTROL

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 2025 | Initial release (Replit/React site) |
| 2.0 | May 2026 | Full rewrite — migrated to static HTML on GitHub Pages |

**Review Date:** November 2026 (before High Season)

---

*This document is property of M2 Rooms & Stays, Patong, Phuket, Thailand.*  
*For technical support, open claude.ai and describe what you need.*
