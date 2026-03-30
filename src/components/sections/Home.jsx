import { useEffect, useState, useRef } from "react";
import {
  Github,
  Linkedin,
  Download,
  ChevronDown,
  Brain,
  Sparkles,
  Code2,
  Database,
} from "lucide-react";
import photoYacine from "../../assets/profile.png";

function Home() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [descVisible, setDescVisible] = useState(false);
  const [btnsVisible, setBtnsVisible] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(false);
  const [nameHovered, setNameHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [magneticBtn, setMagneticBtn] = useState({ x: 0, y: 0, active: false });

  const [particles] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.05,
      blur: Math.random() > 0.7,
    })),
  );

  const [orbs] = useState(() =>
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      size: Math.random() * 300 + 150,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 20,
      delay: i * 2,
    })),
  );

  const fullText = "Software Engineer AND AI & Data Engineering";
  const heroRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const t0 = setTimeout(() => setIsVisible(true), 100);
    const t1 = setTimeout(() => setTitleVisible(true), 400);
    const t2 = setTimeout(() => setSubtitleVisible(true), 900);
    const t3 = setTimeout(() => setDescVisible(true), 1300);
    const t4 = setTimeout(() => setBtnsVisible(true), 1600);
    const t5 = setTimeout(() => setPhotoVisible(true), 600);

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 70);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      [t0, t1, t2, t3, t4, t5].forEach(clearTimeout);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMagneticMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMagneticBtn({ x: x * 0.3, y: y * 0.3, active: true });
  };

  const handleMagneticLeave = () => {
    setMagneticBtn({ x: 0, y: 0, active: false });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0a0f1a 0%, #0f1729 40%, #162033 70%, #0f1729 100%)",
      }}
    >
      {/* Animated Mesh Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              background: `radial-gradient(circle, rgba(196,154,108,0.15) 0%, transparent 70%)`,
              filter: "blur(60px)",
              animation: `orbFloat${orb.id % 3} ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
        ))}
      </div>

      {/* Animated particles with trails */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.blur ? "rgba(196,154,108,0.6)" : "#c49a6c",
              opacity: p.opacity,
              filter: p.blur ? "blur(2px)" : "none",
              boxShadow: p.blur ? "0 0 20px rgba(196,154,108,0.5)" : "none",
              animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            }}
          />
        ))}

        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(196,154,108,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(196,154,108,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Gradient overlays */}
        <div
          className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(196,154,108,0.08) 0%, transparent 60%)",
            filter: "blur(100px)",
            animation: "glowPulse 8s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute -bottom-60 -left-60 w-[50rem] h-[50rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 60%)",
            filter: "blur(120px)",
            animation: "glowPulse 10s ease-in-out 2s infinite alternate",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT - TEXT */}
          <div className="flex flex-col gap-8">
            {/* Badge — Morphing entrance with shimmer */}
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full w-fit relative overflow-hidden group"
              style={{
                backgroundColor: "rgba(196,154,108,0.06)",
                border: "1px solid rgba(196,154,108,0.2)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateX(0) scale(1)"
                  : "translateX(-60px) scale(0.8)",
                filter: isVisible ? "blur(0px)" : "blur(10px)",
                transition: `
                  opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                  filter 0.8s cubic-bezier(0.16, 1, 0.3, 1)
                `,
                transitionDelay: "0.2s",
              }}
            >
              {/* Multi-layer shimmer */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(196,154,108,0.2) 50%, transparent 100%)",
                  animation: "shimmerWave 3s ease-in-out infinite",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  animation: "shimmerWave 3s ease-in-out 0.5s infinite",
                }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full relative z-10"
                style={{
                  backgroundColor: "#4ade80",
                  boxShadow:
                    "0 0 20px rgba(74,222,128,0.6), 0 0 40px rgba(74,222,128,0.3)",
                  animation: "pulseGlow 2s ease-in-out infinite",
                }}
              />
              <span
                className="text-sm font-medium relative z-10 tracking-wide"
                style={{ color: "#a0b3c6" }}
              >
                A la recherche d'une alternance
              </span>
            </div>

            {/* H1 — Staggered character reveal with spring physics */}
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.08]"
              style={{ color: "#e2e8f0" }}
            >
              <span
                className="inline-block overflow-hidden"
                style={{
                  transform: titleVisible
                    ? "translateY(0)"
                    : "translateY(100%)",
                  opacity: titleVisible ? 1 : 0,
                  transition:
                    "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
                  transitionDelay: "0s",
                }}
              >
                <span
                  className="inline-block"
                  style={{
                    transform: titleVisible
                      ? "translateY(0) rotate(0deg)"
                      : "translateY(120%) rotate(5deg)",
                    transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  Je suis{" "}
                </span>
              </span>
              <span
                className="relative inline-block cursor-default"
                onMouseEnter={() => setNameHovered(true)}
                onMouseLeave={() => setNameHovered(false)}
                style={{
                  opacity: titleVisible ? 1 : 0,
                  transform: titleVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition:
                    "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
                }}
              >
                <span
                  style={{
                    color: "#c49a6c",
                    fontWeight: "bold",
                  }}
                >
                  Yacine Diagne
                </span>
              </span>
            </h1>

            {/* Subtitle — Elastic slide with line drawing */}
            <div
              className="flex items-center gap-4"
              style={{
                opacity: subtitleVisible ? 1 : 0,
                transform: subtitleVisible
                  ? "translateY(0) translateX(0)"
                  : "translateY(30px) translateX(-20px)",
                transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div
                className="h-[2px] rounded-full flex-shrink-0 origin-left"
                style={{
                  backgroundColor: "#d68d18",
                  width: subtitleVisible ? "48px" : "0px",
                  boxShadow: "0 0 20px rgba(196,154,108,0.5)",
                  transition:
                    "width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
                }}
              />
              <p
                className="text-xl md:text-2xl font-mono tracking-wide"
                style={{ color: "#7b8fa3" }}
              >
                {text}
                <span
                  className="inline-block w-[3px] h-7 ml-1.5 align-middle rounded-full"
                  style={{
                    background: "linear-gradient(180deg, #c49a6c, #a07d5a)",
                    boxShadow: "0 0 15px rgba(196,154,108,0.6)",
                    animation: "cursorBlink 1s ease-in-out infinite",
                  }}
                />
              </p>
            </div>

            {/* Description — Morphing blur reveal with word stagger */}
            <p
              className="text-lg max-w-xl leading-relaxed"
              style={{
                color: "#7b8fa3",
                opacity: descVisible ? 1 : 0,
                filter: descVisible ? "blur(0px)" : "blur(12px)",
                transform: descVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(25px) scale(0.95)",
                transition: `
                  opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                  filter 0.8s ease,
                  transform 1s cubic-bezier(0.16, 1, 0.3, 1)
                `,
              }}
            >
              Passionné par la{" "}
              <span
                className="relative inline-block"
                style={{
                  color: "#c49a6c",
                  fontWeight: 600,
                }}
              >
                <span className="relative z-10">data</span>
                <span
                  className="absolute -bottom-0.5 left-0 w-full h-[2px] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #c49a6c, transparent)",
                    transform: descVisible ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition:
                      "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s",
                  }}
                />
              </span>
              , le{" "}
              <span style={{ color: "#c49a6c", fontWeight: 600 }}>
                machine learning
              </span>{" "}
              et le{" "}
              <span style={{ color: "#c49a6c", fontWeight: 600 }}>
                développement logiciel
              </span>
              , je crée des solutions innovantes et des pipelines de donnee basées sur le cloud l'analyse et l'
              <span style={{ color: "#c49a6c", fontWeight: 600 }}>
                intelligence artificielle
              </span>
              .
            </p>

            {/* Buttons — Magnetic effect + liquid morph */}
            <div className="flex flex-wrap gap-5">
              <a
                ref={btnRef}
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                className="group relative px-9 py-4 rounded-2xl font-semibold overflow-hidden"
                style={{
                  color: "#fff",
                  opacity: btnsVisible ? 1 : 0,
                  transform: btnsVisible
                    ? `translateY(0) scale(1) translate(${magneticBtn.x}px, ${magneticBtn.y}px)`
                    : "translateY(40px) scale(0.7)",
                  filter: btnsVisible ? "blur(0px)" : "blur(8px)",
                  transition: magneticBtn.active
                    ? "transform 0.15s ease-out"
                    : `
                      opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
                      transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
                      filter 0.6s ease
                    `,
                  transitionDelay:
                    btnsVisible && !magneticBtn.active ? "0s" : "0s",
                }}
              >
                {/* Animated gradient background */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #c49a6c 0%, #a07d5a 50%, #c49a6c 100%)",
                    backgroundSize: "200% 200%",
                    animation: "gradientShift 3s ease infinite",
                  }}
                />
                {/* Shine effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)",
                    backgroundSize: "200% 100%",
                    animation: "shine 1.5s ease-in-out infinite",
                    transition: "opacity 0.3s ease",
                  }}
                />
                {/* Glow */}
                <div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, #c49a6c, #a07d5a)",
                    filter: "blur(20px)",
                    transition: "opacity 0.4s ease",
                    zIndex: -1,
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Voir mes projets
                  <Sparkles
                    size={18}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                </span>
              </a>

              <a
                href="/CV_YACINEFALL.pdf"
                download
                className="group relative px-8 py-4 rounded-2xl font-semibold flex items-center gap-2.5 overflow-hidden"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#9fb3c8",
                  opacity: btnsVisible ? 1 : 0,
                  transform: btnsVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(40px) scale(0.7)",
                  filter: btnsVisible ? "blur(0px)" : "blur(8px)",
                  transition: `
                    opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
                    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
                    filter 0.6s ease,
                    background-color 0.3s ease,
                    border-color 0.3s ease,
                    color 0.3s ease
                  `,
                  transitionDelay: "0.12s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(196,154,108,0.1)";
                  e.currentTarget.style.borderColor = "rgba(196,154,108,0.3)";
                  e.currentTarget.style.color = "#c49a6c";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#9fb3c8";
                }}
              >
                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    boxShadow: "inset 0 0 20px rgba(196,154,108,0.15)",
                    transition: "opacity 0.4s ease",
                  }}
                />
                <Download
                  size={18}
                  className="relative z-10 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300"
                />
                <span className="relative z-10">CV</span>
              </a>
            </div>

            {/* Social — Staggered 3D flip with ripple */}
            <div className="flex gap-4">
              {[
                {
                  icon: <Github size={20} />,
                  href: "https://github.com/yacinefalldiagne",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin size={20} />,
                  href: "https://linkedin.com/in/yacine-fall-diagne",
                  label: "LinkedIn",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#7b8fa3",
                    opacity: btnsVisible ? 1 : 0,
                    transform: btnsVisible
                      ? "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)"
                      : "perspective(600px) rotateY(-90deg) rotateX(15deg) scale(0.5)",
                    transition: `
                      opacity 0.7s ease,
                      transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1),
                      background-color 0.4s ease,
                      border-color 0.4s ease,
                      color 0.4s ease,
                      box-shadow 0.4s ease
                    `,
                    transitionDelay: `${0.35 + i * 0.12}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#c49a6c";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#c49a6c";
                    e.currentTarget.style.boxShadow =
                      "0 10px 40px rgba(196,154,108,0.4), 0 0 0 4px rgba(196,154,108,0.1)";
                    e.currentTarget.style.transform =
                      "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1.1) translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.03)";
                    e.currentTarget.style.color = "#7b8fa3";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform =
                      "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1) translateY(0)";
                  }}
                >
                  {/* Ripple effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
                      animation: "ripple 0.6s ease-out",
                    }}
                  />
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT - PHOTO */}
          <div
            className="relative flex justify-center items-center"
            style={{
              opacity: photoVisible ? 1 : 0,
              transform: photoVisible
                ? "perspective(1500px) rotateY(0deg) rotateX(0deg) translateX(0) scale(1)"
                : "perspective(1500px) rotateY(15deg) rotateX(-5deg) translateX(60px) scale(0.9)",
              transition: `
                opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
                transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)
              `,
              transitionDelay: "0.2s",
            }}
          >
            {/* Animated background glow */}
            <div
              className="absolute w-96 h-[30rem] rounded-[3rem]"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 30%, rgba(196,154,108,0.25) 0%, transparent 50%),
                  radial-gradient(ellipse at 70% 70%, rgba(139,92,246,0.1) 0%, transparent 50%)
                `,
                filter: "blur(80px)",
                animation: "morphGlow 8s ease-in-out infinite",
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                transition: "transform 0.5s ease-out",
              }}
            />

            {/* Photo container with advanced 3D */}
            <div
              className="relative w-80 h-[26rem] rounded-[2rem] p-[3px] overflow-hidden"
              style={{
                transform: `
                  perspective(1200px)
                  rotateX(${-mousePosition.y * 0.4}deg)
                  rotateY(${mousePosition.x * 0.4}deg)
                  translateZ(0)
                `,
                boxShadow: `
                  0 30px 80px rgba(0,0,0,0.5),
                  0 0 0 1px rgba(196,154,108,0.1),
                  ${mousePosition.x * 1.5}px ${mousePosition.y * 1.5}px 60px rgba(196,154,108,0.12)
                `,
                transition: "transform 0.1s ease-out, box-shadow 0.2s ease-out",
              }}
            >
              {/* Rotating conic gradient border */}
              <div
                className="absolute -inset-[200%]"
                style={{
                  background: `conic-gradient(
                    from 0deg at 50% 50%,
                    #c49a6c 0%,
                    #a07d5a 20%,
                    rgba(139,92,246,0.5) 40%,
                    #c49a6c 60%,
                    #a07d5a 80%,
                    #c49a6c 100%
                  )`,
                  animation: "spinBorder 10s linear infinite",
                }}
              />

              {/* Inner container */}
              <div className="relative w-full h-full rounded-[calc(2rem-3px)] overflow-hidden bg-gradient-to-br from-[#0f1729] to-[#162033]">
                <img
                  src={photoYacine}
                  alt="Photo Yacine"
                  className="w-full h-full object-cover"
                  style={{
                    transform: `scale(1.08) translate(${mousePosition.x * 0.25}px, ${mousePosition.y * 0.25}px)`,
                    transition: "transform 0.12s ease-out",
                  }}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(to top, rgba(10,15,26,0.8) 0%, transparent 40%),
                      linear-gradient(to bottom, rgba(10,15,26,0.3) 0%, transparent 20%)
                    `,
                  }}
                />
                {/* Dynamic light reflection */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(
                      ellipse 80% 50% at ${50 + mousePosition.x * 2}% ${40 + mousePosition.y * 2}%,
                      rgba(196,154,108,0.15) 0%,
                      transparent 60%
                    )`,
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* Floating cards with spring animations */}
            {/* Tech Stack Card */}
            <div
              className="absolute -left-8 top-12 px-4 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-xl"
              style={{
                background: "rgba(10,15,26,0.9)",
                border: "1px solid rgba(196,154,108,0.2)",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                opacity: photoVisible ? 1 : 0,
                transform: photoVisible
                  ? "translateX(0) translateY(0) rotate(0deg) scale(1)"
                  : "translateX(-50px) translateY(20px) rotate(-10deg) scale(0.8)",
                transition: "all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transitionDelay: "1.4s",
                animation: photoVisible
                  ? "floatCard 6s ease-in-out infinite"
                  : "none",
                animationDelay: "0s",
                zIndex: 10,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(196,154,108,0.2), rgba(196,154,108,0.05))",
                  boxShadow: "0 4px 15px rgba(196,154,108,0.2)",
                }}
              >
                <Brain size={18} style={{ color: "#c49a6c" }} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#c49a6c",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  AI & ML
                </div>
                <div style={{ fontSize: 11, color: "#5a6a7a", marginTop: 2 }}>
                  Python · TensorFlow
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-8 -right-8 w-24 h-24 rounded-3xl"
              style={{
                border: "1px solid rgba(196,154,108,0.15)",
                transform: photoVisible
                  ? "rotate(12deg) scale(1)"
                  : "rotate(45deg) scale(0)",
                opacity: photoVisible ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transitionDelay: "1.2s",
                animation: photoVisible
                  ? "decorFloat 8s ease-in-out infinite"
                  : "none",
              }}
            />
            <div
              className="absolute -bottom-6 left-8 w-16 h-16 rounded-2xl"
              style={{
                border: "1px solid rgba(139,92,246,0.1)",
                transform: photoVisible
                  ? "rotate(-12deg) scale(1)"
                  : "rotate(-45deg) scale(0)",
                opacity: photoVisible ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transitionDelay: "1.3s",
                animation: photoVisible
                  ? "decorFloat 6s ease-in-out 2s infinite"
                  : "none",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{
          opacity: isVisible ? 0.7 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s ease 2.5s",
        }}
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase font-medium"
          style={{ color: "#5a6a7a" }}
        >
          Scroll
        </span>
        <div
          className="w-6 h-10 rounded-full flex justify-center pt-2"
          style={{
            border: "2px solid rgba(196,154,108,0.3)",
          }}
        >
          <div
            className="w-1.5 h-3 rounded-full"
            style={{
              background: "linear-gradient(180deg, #c49a6c, #a07d5a)",
              animation: "scrollIndicator 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes particleFloat {
          0% { transform: translate(0, 0) scale(1); opacity: 0.1; }
          50% { opacity: 0.3; }
          100% { transform: translate(30px, -50px) scale(1.5); opacity: 0.05; }
        }

        @keyframes orbFloat0 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 20px) scale(0.9); }
        }

        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.15); }
        }

        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, 50px) scale(0.95); }
          66% { transform: translate(-50px, -20px) scale(1.05); }
        }

        @keyframes glowPulse {
          0% { opacity: 0.5; transform: scale(0.95); }
          100% { opacity: 0.8; transform: scale(1.1); }
        }

        @keyframes shimmerWave {
          0% { transform: translateX(-200%); }
          50%, 100% { transform: translateX(200%); }
        }

        @keyframes pulseGlow {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1);
            box-shadow: 0 0 20px currentColor;
          }
          50% { 
            opacity: 0.6; 
            transform: scale(0.85);
            box-shadow: 0 0 30px currentColor;
          }
        }

        @keyframes cursorBlink {
          0%, 45% { opacity: 1; transform: scaleY(1); }
          50%, 95% { opacity: 0; transform: scaleY(0.8); }
          100% { opacity: 1; transform: scaleY(1); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }

        @keyframes morphGlow {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% { 
            transform: translate(20px, -20px) rotate(180deg) scale(1.1);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }

        @keyframes spinBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }

        @keyframes decorFloat {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(18deg); }
        }

        @keyframes scrollIndicator {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

export default Home;
