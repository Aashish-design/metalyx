import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    setMenuOpen(false);

    setTimeout(() => {
      const section = document.querySelector(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#F4F0E8]/80 border-b border-black/10"
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl tracking-[4px] sm:tracking-[6px] lg:tracking-[8px] font-semibold">
          METALYX
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-12 uppercase text-xs tracking-[4px]">
          <a href="#about" className="hover:opacity-60 transition duration-300">
            About
          </a>

          <a
            href="#products"
            className="hover:opacity-60 transition duration-300"
          >
            Products
          </a>

          <a
            href="#promises"
            className="hover:opacity-60 transition duration-300"
          >
            Promises
          </a>

          <a
            href="#contact"
            className="hover:opacity-60 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#project"
          className="hidden lg:flex border border-black px-8 py-4 uppercase text-xs tracking-[3px] hover:bg-black hover:text-white transition duration-300"
        >
          Start Project
        </a>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="lg:hidden">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed top-0 right-0 h-screen w-[82%] max-w-[360px] bg-[#F4F0E8] z-50 flex flex-col shadow-2xl"
            >
              {/* Top */}
              <div className="px-8 pt-8 pb-10 border-b border-black/10">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl tracking-[6px] font-semibold">
                      METALYX
                    </h1>

                    <div className="w-14 h-px bg-black/30 mt-5 mb-5"></div>

                    <p className="text-[11px] uppercase tracking-[2px] leading-5 text-black/55 max-w-[220px]">
                      Luxury architectural metal solutions crafted with
                      precision and timeless design.
                    </p>
                  </div>

                  <button onClick={() => setMenuOpen(false)}>
                    <X
                      size={28}
                      className="hover:rotate-90 transition duration-300"
                    />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="px-8 py-8 flex flex-col">
                <button
                  onClick={() => handleClick("#about")}
                  className="text-left py-5 border-b border-black/10 uppercase tracking-[4px] text-sm hover:pl-2 transition-all duration-300"
                >
                  About
                </button>

                <button
                  onClick={() => handleClick("#products")}
                  className="text-left py-5 border-b border-black/10 uppercase tracking-[4px] text-sm hover:pl-2 transition-all duration-300"
                >
                  Products
                </button>

                <button
                  onClick={() => handleClick("#promises")}
                  className="text-left py-5 border-b border-black/10 uppercase tracking-[4px] text-sm hover:pl-2 transition-all duration-300"
                >
                  Promises
                </button>

                <button
                  onClick={() => handleClick("#contact")}
                  className="text-left py-5 border-b border-black/10 uppercase tracking-[4px] text-sm hover:pl-2 transition-all duration-300"
                >
                  Contact
                </button>
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto p-8">
                <button
                  onClick={() => handleClick("#project")}
                  className="w-full border border-black py-5 uppercase tracking-[4px] text-sm hover:bg-black hover:text-white transition duration-300"
                >
                  Start Project
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
