import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = "66632686289";
const WA_MESSAGE = "Hello! I'm interested in booking a room at M2 Rooms & Stays Patong. Could you let me know availability?";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.527 5.849L.057 23.535a.75.75 0 0 0 .924.924l5.733-1.48A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.705 9.705 0 0 1-4.953-1.356l-.355-.213-3.679.949.975-3.594-.232-.369A9.705 9.705 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
    </svg>
  );
}

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setShowTooltip(true), 1500);
    const t2 = setTimeout(() => setShowTooltip(false), 6000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
          role="complementary"
          aria-label="WhatsApp contact"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white text-foreground text-sm font-medium px-4 py-2.5 rounded-lg shadow-lg border border-border/30 whitespace-nowrap max-w-[220px]"
              >
                <p className="font-semibold text-green-700 text-xs uppercase tracking-wide mb-0.5">Chat with us</p>
                <p className="text-foreground/70 text-xs font-light">Book direct · Best rate guaranteed</p>
                {/* Arrow */}
                <div className="absolute right-3 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-border/30 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            data-testid="whatsapp-float-button"
            aria-label="Chat with us on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:shadow-xl transition-shadow"
          >
            <WhatsAppIcon size={28} />

            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"
              aria-hidden="true"
            />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
