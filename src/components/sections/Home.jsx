import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Download, ChevronDown } from "lucide-react";
import photoYacine from "../../assets/profile.png";

function Home() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles] = useState(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.25 + 0.05,
    }))
  );
  const fullText = "Software Engineer AND AI & Data Analyst";
  const heroRef = useRef(null);

  useEffect(() => {
    const appearanceTimer = setTimeout(() => setIsVisible(true), 100);

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      clearTimeout(appearanceTimer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
          "linear-gradient(160deg, #0c1824 0%, #1a2b3d 40%, #243447 70%, #1a2b3d 100%)",
      }}
    >
      {/* Animated particles */}
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
              backgroundColor: "#c49a6c",
              opacity: p.opacity,
              animation: `heroFloat ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            }}
          />
        ))}
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
        {/* Ambient glows */}
        <div
          className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full blur-[140px]"
          style={{ backgroundColor: "oklch(42.1% 0.095 57.708 / 0.12)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-[120px]"
          style={{ backgroundColor: "#c49a6c12" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT - TEXT */}
          <div
            className="flex flex-col gap-7"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
            }}
          >
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full w-fit"
              style={{
                backgroundColor: "rgba(196,154,108,0.1)",
                border: "1px solid rgba(196,154,108,0.25)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: "#4ade80",
                  animation: "heroPulse 2s ease-in-out infinite",
                }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: "#9fb3c8" }}
              >
                Disponible pour une alternance
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.08]"
              style={{ color: "#e2e8f0" }}
            >
              {"Je suis "}
              <span className="relative inline-block">
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #c49a6c 0%, oklch(42.1% 0.095 57.708) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Yacine Diagne
                </span>
                <span
                  className="absolute -bottom-1.5 left-0 w-full h-[3px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #c49a6c, oklch(42.1% 0.095 57.708), transparent)",
                  }}
                />
              </span>
            </h1>

            <div className="flex items-center gap-3">
              <div
                className="w-8 h-[2px] rounded-full flex-shrink-0"
                style={{ backgroundColor: "#c49a6c" }}
              />
              <p
                className="text-xl md:text-2xl font-mono tracking-wide"
                style={{ color: "#7b8fa3" }}
              >
                {text}
                <span
                  className="inline-block w-[2px] h-6 ml-1 align-middle"
                  style={{
                    backgroundColor: "#c49a6c",
                    animation: "heroBlink 1s step-end infinite",
                  }}
                />
              </p>
            </div>

            <p
              className="text-lg max-w-xl leading-relaxed"
              style={{ color: "#7b8fa3" }}
            >
              {"Passionn\u00e9e par la "}
              <span style={{ color: "#c49a6c", fontWeight: 600 }}>data</span>
              {", le "}
              <span style={{ color: "#c49a6c", fontWeight: 600 }}>
                machine learning
              </span>
              {" et le "}
              <span style={{ color: "#c49a6c", fontWeight: 600 }}>
                {"d\u00e9veloppement logiciel"}
              </span>
              {
                ", je cr\u00e9e des solutions innovantes bas\u00e9es sur l\u2019analyse et l\u2019"
              }
              <span style={{ color: "#c49a6c", fontWeight: 600 }}>
                intelligence artificielle
              </span>
              .
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: "linear-gradient(135deg, #c49a6c, #a07d5a)",
                  color: "#fff",
                  boxShadow: "0 8px 30px rgba(196,154,108,0.25)",
                }}
              >
                Voir mes projets
              </a>

              <a
                href="/CV_YACINEFALL.pdf"
                download
                className="px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#9fb3c8",
                }}
              >
                <Download size={18} />
                CV
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3">
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
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#7b8fa3",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#c49a6c";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#c49a6c";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(196,154,108,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.04)";
                    e.currentTarget.style.color = "#7b8fa3";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT - PHOTO */}
          <div
            className="relative flex justify-center items-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0) scale(1)"
                : "translateY(30px) scale(0.95)",
              transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 500ms",
            }}
          >
            {/* Background glow */}
            <div
              className="absolute w-80 h-[26rem] rounded-3xl blur-[80px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(196,154,108,0.3), oklch(42.1% 0.095 57.708 / 0.15))",
                animation:
                  "heroGlowPulse 4s ease-in-out infinite alternate",
              }}
            />

            {/* Photo container */}
            <div
              className="relative w-72 h-96 rounded-3xl p-[2px] overflow-hidden transition-transform duration-500 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${-mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
                boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* Spinning border */}
              <div
                className="absolute inset-[-200%]"
                style={{
                  background:
                    "conic-gradient(from 0deg at 50% 50%, #c49a6c 0%, oklch(42.1% 0.095 57.708) 25%, #c49a6c 50%, oklch(42.1% 0.095 57.708) 75%, #c49a6c 100%)",
                  animation: "heroSpin 8s linear infinite",
                }}
              />

              {/* The image */}
              <div className="relative w-full h-full rounded-[calc(1.5rem-2px)] overflow-hidden bg-[#1a2b3d]">
                <img
                  src={photoYacine}
                  alt="Photo Yacine"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(12,24,36,0.6) 0%, transparent 45%)",
                  }}
                />
              </div>
            </div>

            {/* Decorative shapes */}
            <div
              className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl rotate-12"
              style={{
                border: "1px solid rgba(196,154,108,0.15)",
                animation:
                  "heroDecor 8s ease-in-out infinite alternate",
              }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl -rotate-12"
              style={{
                border: "1px solid rgba(196,154,108,0.1)",
                animation:
                  "heroDecor 6s ease-in-out 2s infinite alternate",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: isVisible ? 0.6 : 0,
          transition: "opacity 1.5s ease 2s",
        }}
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "#5a6a7a" }}
        >
          Scroll
        </span>
        <ChevronDown
          size={18}
          style={{
            color: "#5a6a7a",
            animation: "heroBounce 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes heroFloat {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, -30px); }
        }
        @keyframes heroBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes heroGlowPulse {
          0% { opacity: 0.4; transform: scale(0.95); }
          100% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes heroSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes heroDecor {
          0% { transform: translateY(0) rotate(12deg); }
          100% { transform: translateY(-12px) rotate(18deg); }
        }
        @keyframes heroBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}

export default Home;
