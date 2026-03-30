import { useState, useEffect, useCallback, useRef } from "react";
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
  const [mounted, setMounted] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 });
  const logoRef = useRef(null);

  // Mount animation
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

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
        ([entry]) => { if (entry.isIntersecting) setActiveSection(el.id); },
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

  // Magnetic logo effect
  const handleLogoMouseMove = useCallback((e) => {
    const rect = logoRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setMagnetPos({
      x: (e.clientX - cx) * 0.25,
      y: (e.clientY - cy) * 0.25,
    });
  }, []);

  const handleLogoMouseLeave = useCallback(() => {
    setMagnetPos({ x: 0, y: 0 });
  }, []);

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
      <style>{`
        @keyframes navSlideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes logoReveal {
          from { opacity: 0; letter-spacing: 0.5em; filter: blur(6px); }
          to   { opacity: 1; letter-spacing: normal; filter: blur(0); }
        }
        @keyframes linkReveal {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 6px rgba(196,154,108,0.4); }
          50%       { box-shadow: 0 0 18px rgba(196,154,108,0.9); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes mobileItemIn {
          from { opacity: 0; transform: translateY(30px) skewY(2deg); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0)   skewY(0deg); filter: blur(0); }
        }
        @keyframes scanline {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100vw); }
        }
        @keyframes dotBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }

        .nav-link-hover::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 8px;
          background: radial-gradient(ellipse at center, rgba(196,154,108,0.08) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .nav-link-hover:hover::before { opacity: 1; }

        .active-dot {
          animation: dotBlink 2s ease-in-out infinite;
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav
        className="fixed top-0 left-0 w-full z-50"
        style={{
          animation: "navSlideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          backgroundColor: scrolled ? "rgba(10, 15, 28, 0.96)" : "rgba(10, 15, 28, 0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(196, 154, 108, 0.18)"
            : "1px solid rgba(255,255,255,0.04)",
          boxShadow: scrolled
            ? "0 1px 40px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(196,154,108,0.05)"
            : "none",
          transition: "background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
        }}
      >
        {/* Scanline sweep on scroll */}
        {scrolled && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "60px",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(196,154,108,0.06), transparent)",
              animation: "scanline 4s linear infinite",
              pointerEvents: "none",
            }}
          />
        )}

        <div className="max-w-7xl mx-auto flex items-center justify-between h-[64px] px-6 lg:px-10">

          {/* ── Logo ── */}
          <a
            ref={logoRef}
            href="#home"
            onClick={(e) => goTo(e, "#home")}
            onMouseMove={handleLogoMouseMove}
            onMouseLeave={handleLogoMouseLeave}
            className="relative group select-none"
            style={{
              animation: "logoReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
              transform: `translate(${magnetPos.x}px, ${magnetPos.y}px)`,
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* Monogram box */}
            <div
              className="relative"
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg, rgba(196,154,108,0.2), rgba(196,154,108,0.05))",
                border: "1px solid rgba(196,154,108,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 0 0 rgba(196,154,108,0.4)",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(196,154,108,0.5)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(196,154,108,0.35), rgba(196,154,108,0.1))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 0 rgba(196,154,108,0.4)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(196,154,108,0.2), rgba(196,154,108,0.05))";
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                  background: "linear-gradient(135deg, #c49a6c, #e8c99a, #c49a6c)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                YD
              </span>
            </div>

            {/* Wordmark */}
            <span
              className="hidden sm:block text-[11px] font-light tracking-[0.3em] uppercase"
              style={{ color: "rgba(255,255,255,0.35)", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(196,154,108,0.7)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
            >
              Portfolio
            </span>
          </a>

          {/* ── Desktop links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => goTo(e, link.href)}
                  onMouseEnter={() => setHoveredLink(i)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="nav-link-hover relative px-4 py-2 rounded-lg text-[12px] font-medium uppercase tracking-[0.12em] transition-colors duration-300"
                  style={{
                    color: active ? "#c49a6c" : hoveredLink === i ? "#ffffff" : "rgba(255,255,255,0.45)",
                    animation: `linkReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.07}s both`,
                  }}
                >
                  {/* Active indicator dot */}
                  {active && (
                    <span
                      className="active-dot absolute -top-0.5 left-1/2 w-1 h-1 rounded-full"
                      style={{
                        transform: "translateX(-50%)",
                        backgroundColor: "#c49a6c",
                        boxShadow: "0 0 6px #c49a6c",
                      }}
                    />
                  )}

                  {link.name}

                  {/* Underline bar */}
                  <span
                    className="absolute bottom-0 left-1/2 h-[1.5px] rounded-full"
                    style={{
                      width: active ? "55%" : hoveredLink === i ? "35%" : "0%",
                      transform: "translateX(-50%)",
                      backgroundColor: active ? "#c49a6c" : "rgba(255,255,255,0.3)",
                      boxShadow: active ? "0 0 8px rgba(196,154,108,0.8)" : "none",
                      transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                  />
                </a>
              );
            })}

            {/* Divider */}
            <div className="w-px h-4 mx-3" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />

            {/* CTA button */}
            <a
              href="#contact"
              onClick={(e) => goTo(e, "#contact")}
              className="relative overflow-hidden px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-400 group"
              style={{
                background: "linear-gradient(135deg, rgba(196,154,108,0.15), rgba(196,154,108,0.08))",
                border: "1px solid rgba(196,154,108,0.35)",
                color: "#c49a6c",
                animation: `linkReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + navLinks.length * 0.07}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #c49a6c, #d4aa7d)";
                e.currentTarget.style.color = "#0a0f1c";
                e.currentTarget.style.boxShadow = "0 0 24px rgba(196,154,108,0.5)";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(196,154,108,0.15), rgba(196,154,108,0.08))";
                e.currentTarget.style.color = "#c49a6c";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(196,154,108,0.35)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Shimmer sweep */}
            </a>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300"
            style={{
              color: mobileOpen ? "#c49a6c" : "rgba(255,255,255,0.6)",
              background: mobileOpen ? "rgba(196,154,108,0.1)" : "transparent",
              border: mobileOpen ? "1px solid rgba(196,154,108,0.2)" : "1px solid transparent",
            }}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span
              className="absolute transition-all duration-400"
              style={{
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? "rotate(180deg) scale(0)" : "rotate(0) scale(1)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <Menu size={20} />
            </span>
            <span
              className="absolute transition-all duration-400"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "rotate(0) scale(1)" : "rotate(-180deg) scale(0)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <X size={20} />
            </span>
          </button>
        </div>

        {/* Progress bar */}
        <ScrollProgress visible={scrolled} />
      </nav>

      {/* ── Mobile fullscreen overlay ── */}
      <div
        className="fixed inset-0 z-40 lg:hidden"
        style={{
          backgroundColor: "rgba(8, 12, 22, 0.98)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Decorative corner lines */}
        {[["top-8 left-8", "0 0 0 1px"], ["top-8 right-8", "0 0 1px 0"], ["bottom-8 left-8", "0 1px 0 0"], ["bottom-8 right-8", "1px 0 0 0"]].map(([pos, border], i) => (
          <div
            key={i}
            className={`absolute ${pos} w-8 h-8`}
            style={{
              borderColor: "rgba(196,154,108,0.2)",
              borderStyle: "solid",
              borderWidth: border,
              opacity: mobileOpen ? 1 : 0,
              transition: `opacity 0.4s ease ${0.2 + i * 0.05}s`,
            }}
          />
        ))}

        {/* Ambient orb */}
        <div
          style={{
            position: "absolute",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,154,108,0.06), transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        <div className="flex flex-col items-center gap-2 w-full px-8">
          {navLinks.map((link, i) => {
            const active = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => goTo(e, link.href)}
                className="relative w-full max-w-xs text-center py-4 transition-all duration-300 rounded-xl"
                style={{
                  color: active ? "#c49a6c" : "rgba(255,255,255,0.55)",
                  fontSize: "1.25rem",
                  fontWeight: 300,
                  letterSpacing: "0.1em",
                  animation: mobileOpen
                    ? `mobileItemIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms both`
                    : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = active ? "#c49a6c" : "#ffffff";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.letterSpacing = "0.2em";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = active ? "#c49a6c" : "rgba(255,255,255,0.55)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.letterSpacing = "0.1em";
                }}
              >
                {active && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      backgroundColor: "#c49a6c",
                      boxShadow: "0 0 8px #c49a6c",
                      marginRight: 10,
                      verticalAlign: "middle",
                      animation: "dotBlink 2s ease-in-out infinite",
                    }}
                  />
                )}
                {link.name}
              </a>
            );
          })}

          {/* Divider */}
          <div
            style={{
              width: 48,
              height: 1,
              backgroundColor: "rgba(196,154,108,0.2)",
              margin: "16px 0",
              animation: mobileOpen ? `mobileItemIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${navLinks.length * 80}ms both` : "none",
            }}
          />

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={(e) => goTo(e, "#contact")}
            className="relative overflow-hidden px-10 py-3.5 rounded-full font-bold uppercase tracking-widest text-sm"
            style={{
              background: "linear-gradient(135deg, #c49a6c, #d4aa7d)",
              color: "#0a0f1c",
              boxShadow: "0 0 30px rgba(196,154,108,0.3)",
              animation: mobileOpen
                ? `mobileItemIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${(navLinks.length + 1) * 80}ms both`
                : "none",
            }}
          >
            <span
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                backgroundSize: "200% auto",
                animation: "shimmer 2s linear infinite",
              }}
            />
            Me contacter
          </a>
        </div>
      </div>
    </>
  );
}

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
    <div style={{ position: "relative", height: "1.5px", overflow: "hidden" }}>
      {/* Track */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.03)" }} />
      {/* Fill */}
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #8b5cf6, #c49a6c, #06b6d4)",
          backgroundSize: "200% auto",
          animation: "shimmer 3s linear infinite",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease, width 0.1s linear",
          boxShadow: "0 0 8px rgba(196,154,108,0.6)",
        }}
      />
      {/* Leading glow dot */}
      {visible && progress > 2 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${progress}%`,
            transform: "translate(-50%, -50%)",
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#c49a6c",
            boxShadow: "0 0 10px #c49a6c, 0 0 20px rgba(196,154,108,0.5)",
            transition: "left 0.1s linear",
          }}
        />
      )}
    </div>
  );
}

export default Navbar;