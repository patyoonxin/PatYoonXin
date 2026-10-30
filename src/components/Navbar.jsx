import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { textVariant } from "../utils/motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      variants={textVariant(0.1)}
      initial="hidden"
      animate="show"
      className="fixed left-1/2 top-3 z-50 w-[calc(100%-2rem)] max-w-[1320px] -translate-x-1/2 lg:w-5/6"
      aria-label="Main navigation"
    >
      <div className="relative w-full rounded-full lg:border lg:border-white/10 lg:bg-tertiary/90 lg:p-1 lg:shadow-lg lg:shadow-black/20 lg:backdrop-blur-md">
        <div className="flex items-center justify-end lg:justify-center">
          <div className="hidden w-full items-center justify-center gap-0 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="inline-flex duration-500 ease-out h-8 shrink-0 items-center justify-center rounded-full px-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black lg:text-sm"
              >
                {link.title}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] flex flex-col gap-1 rounded-2xl border border-white/10 bg-tertiary p-3 shadow-xl lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                className="rounded-xl px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black"
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
