import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "A propos", href: "#about" },
  { name: "Competences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(el.id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const goTo = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* ── Full-width fixed bar ── */}
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? "rgba(12, 24, 36, 0.97)"
            : "rgba(12, 24, 36, 0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(196, 154, 108, 0.12)"
            : "1px solid rgba(255, 255, 255, 0.04)",
          boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.35)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[64px] px-6 lg:px-10">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => goTo(e, "#home")}
            className="relative group"
          >
            <span
              className="text-lg font-bold tracking-tight"
              style={{ color: "#c49a6c" }}
            >
              YD
            </span>
            <span
              className="ml-2 text-xs font-light tracking-[0.25em] uppercase hidden sm:inline"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Portfolio
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => goTo(e, link.href)}
                  className="relative px-4 py-2 text-[13px] font-medium uppercase tracking-wide transition-colors duration-300"
                  style={{ color: active ? "#c49a6c" : "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {link.name}
                  <span
                    className="absolute left-1/2 bottom-0 h-[2px] rounded-full transition-all duration-500"
                    style={{
                      width: active ? "50%" : "0%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#c49a6c",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </a>
              );
            })}

            <div
              className="w-px h-5 mx-3"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            style={{ color: mobileOpen ? "#c49a6c" : "rgba(255,255,255,0.7)" }}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span
              className="absolute transition-all duration-300"
              style={{
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? "rotate(90deg) scale(0)" : "rotate(0) scale(1)",
              }}
            >
              <Menu size={22} />
            </span>
            <span
              className="absolute transition-all duration-300"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "rotate(0) scale(1)" : "rotate(-90deg) scale(0)",
              }}
            >
              <X size={22} />
            </span>
          </button>
        </div>

        {/* Progress line */}
        <ScrollProgress visible={scrolled} />
      </nav>

      {/* ── Mobile fullscreen overlay ── */}
      <div
        className="fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center transition-all duration-500"
        style={{
          backgroundColor: "rgba(12, 24, 36, 0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col items-center gap-3">
          {navLinks.map((link, i) => {
            const active = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => goTo(e, link.href)}
                className="text-2xl font-light tracking-wide transition-all duration-500"
                style={{
                  color: active ? "#c49a6c" : "rgba(255,255,255,0.5)",
                  transform: mobileOpen ? "translateY(0)" : "translateY(24px)",
                  opacity: mobileOpen ? 1 : 0,
                  transitionDelay: mobileOpen ? `${i * 70}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {link.name}
              </a>
            );
          })}

          <div
            className="w-12 h-px my-4"
            style={{
              backgroundColor: "rgba(196,154,108,0.25)",
              opacity: mobileOpen ? 1 : 0,
              transition: "opacity 0.4s ease 350ms",
            }}
          />

          <a
            href="#contact"
            onClick={(e) => goTo(e, "#contact")}
            className="px-8 py-3 text-sm font-semibold uppercase tracking-widest rounded-full transition-all duration-500"
            style={{
              color: "#0c1824",
              backgroundColor: "#c49a6c",
              transform: mobileOpen ? "translateY(0)" : "translateY(24px)",
              opacity: mobileOpen ? 1 : 0,
              transitionDelay: mobileOpen ? "400ms" : "0ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            Me contacter
          </a>
        </div>
      </div>
    </>
  );
}

/* Thin gold progress bar at the bottom of the navbar */
function ScrollProgress({ visible }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calc = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", calc, { passive: true });
    return () => window.removeEventListener("scroll", calc);
  }, []);

  return (
    <div
      className="h-px"
      style={{
        width: `${progress}%`,
        backgroundColor: "#c49a6c",
        opacity: visible ? 0.5 : 0,
        transition: "opacity 0.4s ease",
      }}
    />
  );
}

export default Navbar;
