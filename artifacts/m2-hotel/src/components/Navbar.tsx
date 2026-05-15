import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/M2_Logo_transparent.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Location", href: "#location" },
    { name: "Attractions", href: "#attractions" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      data-testid="header-main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      {/* ── Top Bar: Brand + Book Button ─────────────────────────────── */}
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? "bg-background/98 backdrop-blur-md"
            : "bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-3">

          {/* Brand identity */}
          <Link href="/" className="flex items-center gap-3 group" data-testid="link-home">
            <img
              src={logoImg}
              alt="M2 Rooms & Stays logo"
              className="w-14 h-14 object-contain shrink-0 drop-shadow-sm"
            />

            {/* Name stack */}
            <div className="flex flex-col leading-tight">
              <span
                className={`font-serif font-bold text-xl tracking-wide transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                M2 Rooms &amp; Stays
              </span>
              <span
                className={`font-sans text-xs tracking-[0.18em] uppercase transition-colors ${
                  isScrolled ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                also known as M2 Room For Rent &nbsp;·&nbsp; Patong, Phuket
              </span>
            </div>
          </Link>

          {/* Right side: phone + book */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+66982221682"
              data-testid="link-phone"
              className={`hidden sm:flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
              }`}
            >
              <PhoneCall size={14} />
              <span>+66 098 222 1682</span>
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              data-testid="button-book-direct"
              className={`px-5 py-2 text-sm font-semibold tracking-widest uppercase transition-all duration-300 ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/85"
                  : "bg-white/15 border border-white/50 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              }`}
            >
              Book Direct
            </button>
            {/* Mobile toggle */}
            <button
              data-testid="button-mobile-menu"
              className={`md:hidden p-1.5 transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar: Navigation Links (desktop only) ───────────────── */}
      <div
        className={`hidden md:block transition-all duration-500 ${
          isScrolled
            ? "bg-background/98 backdrop-blur-md border-t border-border/40"
            : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-center gap-0">
            {navLinks.map((link) => (
              <button
                key={link.name}
                data-testid={`nav-${link.name.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                className={`px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200 border-b-2 border-transparent hover:border-current ${
                  isScrolled
                    ? "text-foreground/70 hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Mobile Menu ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border/50 shadow-xl md:hidden"
          >
            {/* Sub-brand note on mobile */}
            <div className="px-6 pt-4 pb-2 border-b border-border/30">
              <p className="text-xs text-muted-foreground tracking-wide uppercase">
                Also known as M2 Room For Rent
              </p>
            </div>
            <nav className="flex flex-col py-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                  onClick={() => handleNavClick(link.href)}
                  className="px-6 py-3.5 text-left text-sm font-semibold tracking-widest uppercase text-foreground/80 hover:text-primary hover:bg-muted/40 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="px-6 pt-3 pb-4">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold tracking-widest uppercase"
                >
                  Book Direct — Best Rate
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
