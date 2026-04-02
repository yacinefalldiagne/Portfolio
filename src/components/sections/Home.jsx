import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Download, Brain, Sparkles } from "lucide-react";
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
      opacity: Math.random() * 0.2 + 0.03,
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
    const handleScroll = () => setScrollY(window.scrollY);

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
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #ffffff 0%, #f8fafc 40%, #eff6ff 70%, #ffffff 100%)",
      }}
    >
      {/* Orbs — bleu très léger */}
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
              background: `radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)`,
              filter: "blur(60px)",
              animation: `orbFloat${orb.id % 3} ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
        ))}
      </div>

      {/* Particles */}
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
              backgroundColor: p.blur ? "rgba(37,99,235,0.4)" : "#93c5fd",
              opacity: p.opacity,
              filter: p.blur ? "blur(2px)" : "none",
              animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            }}
          />
        ))}

        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Gradient top-right */}
        <div
          className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 60%)",
            filter: "blur(100px)",
            animation: "glowPulse 8s ease-in-out infinite alternate",
          }}
        />
        {/* Gradient bottom-left */}
        <div
          className="absolute -bottom-60 -left-60 w-[50rem] h-[50rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 60%)",
            filter: "blur(120px)",
            animation: "glowPulse 10s ease-in-out 2s infinite alternate",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full w-fit relative overflow-hidden"
              style={{
                backgroundColor: "rgba(37,99,235,0.06)",
                border: "1px solid rgba(37,99,235,0.18)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateX(0) scale(1)"
                  : "translateX(-60px) scale(0.8)",
                filter: isVisible ? "blur(0px)" : "blur(10px)",
                transition:
                  "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "0.2s",
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: "#4ade80",
                  boxShadow: "0 0 20px rgba(74,222,128,0.6)",
                  animation: "pulseGlow 2s ease-in-out infinite",
                }}
              />
              <span
                className="text-sm font-medium tracking-wide"
                style={{ color: "#475569" }}
              >
                A la recherche d'une alternance
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.08]"
              style={{ color: "#0f172a" }}
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
                style={{
                  opacity: titleVisible ? 1 : 0,
                  transform: titleVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition:
                    "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
                  display: "inline-block",
                }}
              >
                <span style={{ color: "#2563EB", fontWeight: "bold" }}>
                  Yacine Diagne
                </span>
              </span>
            </h1>

            {/* Subtitle */}
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
                  backgroundColor: "#2563EB",
                  width: subtitleVisible ? "48px" : "0px",
                  boxShadow: "0 0 12px rgba(37,99,235,0.4)",
                  transition:
                    "width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
                }}
              />
              <p
                className="text-xl md:text-2xl font-mono tracking-wide"
                style={{ color: "#475569" }}
              >
                {text}
                <span
                  className="inline-block w-[3px] h-7 ml-1.5 align-middle rounded-full"
                  style={{
                    background: "#2563EB",
                    boxShadow: "0 0 10px rgba(37,99,235,0.5)",
                    animation: "cursorBlink 1s ease-in-out infinite",
                  }}
                />
              </p>
            </div>

            {/* Description */}
            <p
              className="text-lg max-w-xl leading-relaxed"
              style={{
                color: "#475569",
                opacity: descVisible ? 1 : 0,
                filter: descVisible ? "blur(0px)" : "blur(12px)",
                transform: descVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(25px) scale(0.95)",
                transition:
                  "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              Passionnée par la{" "}
              <span style={{ color: "#2563EB", fontWeight: 600 }}>data</span>,
              le{" "}
              <span style={{ color: "#2563EB", fontWeight: 600 }}>
                machine learning
              </span>{" "}
              et le{" "}
              <span style={{ color: "#2563EB", fontWeight: 600 }}>
                développement logiciel
              </span>
              , je crée des solutions innovantes et des pipelines de donnée
              basées sur le cloud, l'analyse et l'
              <span style={{ color: "#2563EB", fontWeight: 600 }}>
                intelligence artificielle
              </span>
              .
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">
              <a
                ref={btnRef}
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                onMouseMove={handleMagneticMove}
                className="group relative px-9 py-4 rounded-2xl font-semibold overflow-hidden"
                style={{
                  color: "#fff",
                  background: "#2563EB",
                  opacity: btnsVisible ? 1 : 0,
                  transform: btnsVisible
                    ? `translateY(0) scale(1) translate(${magneticBtn.x}px, ${magneticBtn.y}px)`
                    : "translateY(40px) scale(0.7)",
                  filter: btnsVisible ? "blur(0px)" : "blur(8px)",
                  transition: magneticBtn.active
                    ? "transform 0.15s ease-out"
                    : "opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.6s ease",
                  boxShadow: "0 4px 24px rgba(37,99,235,0.35)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1d4ed8";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(37,99,235,0.5)";
                  e.currentTarget.style.transform = `translateY(-2px) scale(1)`;
                }}
                onMouseLeave={(e) => {
                  handleMagneticLeave();
                  e.currentTarget.style.background = "#2563EB";
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(37,99,235,0.35)";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }}
              >
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
                className="group relative px-8 py-4 rounded-2xl font-semibold flex items-center gap-2.5"
                style={{
                  backgroundColor: "rgba(37,99,235,0.06)",
                  border: "1.5px solid rgba(37,99,235,0.25)",
                  color: "#2563EB",
                  opacity: btnsVisible ? 1 : 0,
                  transform: btnsVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(40px) scale(0.7)",
                  filter: btnsVisible ? "blur(0px)" : "blur(8px)",
                  transition:
                    "opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.6s ease, background-color 0.3s ease, border-color 0.3s ease",
                  transitionDelay: "0.12s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(37,99,235,0.12)";
                  e.currentTarget.style.borderColor = "#2563EB";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(37,99,235,0.06)";
                  e.currentTarget.style.borderColor = "rgba(37,99,235,0.25)";
                }}
              >
                <Download
                  size={18}
                  className="group-hover:-translate-y-0.5 transition-transform duration-300"
                />
                <span>CV</span>
              </a>
            </div>

            {/* Socials */}
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
                  className="group relative w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(37,99,235,0.05)",
                    border: "1px solid rgba(37,99,235,0.15)",
                    color: "#64748b",
                    opacity: btnsVisible ? 1 : 0,
                    transform: btnsVisible ? "scale(1)" : "scale(0.5)",
                    transition: `opacity 0.7s ease, transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease, color 0.3s ease`,
                    transitionDelay: `${0.35 + i * 0.12}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2563EB";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#2563EB";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(37,99,235,0.35)";
                    e.currentTarget.style.transform =
                      "scale(1.1) translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(37,99,235,0.05)";
                    e.currentTarget.style.color = "#64748b";
                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.15)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                  }}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
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
              transition:
                "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "0.2s",
            }}
          >
            {/* Glow derrière la photo */}
            <div
              className="absolute w-96 h-[30rem] rounded-[3rem]"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 60%)",
                filter: "blur(80px)",
                animation: "morphGlow 8s ease-in-out infinite",
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                transition: "transform 0.5s ease-out",
              }}
            />

            {/* Photo container */}
            <div
              className="relative w-80 h-[26rem] rounded-[2rem] p-[3px] overflow-hidden"
              style={{
                transform: `perspective(1200px) rotateX(${-mousePosition.y * 0.4}deg) rotateY(${mousePosition.x * 0.4}deg)`,
                boxShadow: `0 30px 80px rgba(37,99,235,0.15), 0 0 0 1px rgba(37,99,235,0.1)`,
                transition: "transform 0.1s ease-out, box-shadow 0.2s ease-out",
              }}
            >
              {/* Animated border */}
              <div
                className="absolute -inset-[200%]"
                style={{
                  background: `conic-gradient(
                    from 0deg at 50% 50%,
                    #2563EB 0%,
                    #60a5fa 25%,
                    #93c5fd 40%,
                    #2563EB 60%,
                    #60a5fa 80%,
                    #2563EB 100%
                  )`,
                  animation: "spinBorder 10s linear infinite",
                }}
              />

              <div className="relative w-full h-full rounded-[calc(2rem-3px)] overflow-hidden bg-gradient-to-br from-[#eff6ff] to-[#dbeafe]">
                <img
                  src={photoYacine}
                  alt="Photo Yacine"
                  className="w-full h-full object-cover"
                  style={{
                    transform: `scale(1.08) translate(${mousePosition.x * 0.25}px, ${mousePosition.y * 0.25}px)`,
                    transition: "transform 0.12s ease-out",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(37,99,235,0.15) 0%, transparent 40%)",
                  }}
                />
              </div>
            </div>

            {/* Floating card AI & ML */}
            <div
              className="absolute -left-8 top-12 px-4 py-3 rounded-2xl flex items-center gap-3"
              style={{
                background: "rgba(255,255,255,0.95)",
                border: "1px solid rgba(37,99,235,0.2)",
                boxShadow: "0 20px 50px rgba(37,99,235,0.12)",
                opacity: photoVisible ? 1 : 0,
                transform: photoVisible
                  ? "translateX(0) translateY(0) scale(1)"
                  : "translateX(-50px) scale(0.8)",
                transition: "all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transitionDelay: "1.4s",
                animation: photoVisible
                  ? "floatCard 6s ease-in-out infinite"
                  : "none",
                zIndex: 10,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(37,99,235,0.1)" }}
              >
                <Brain size={18} style={{ color: "#2563EB" }} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#2563EB",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  AI & ML
                </div>
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>
                  Python · TensorFlow
                </div>
              </div>
            </div>

            {/* Déco coins */}
            <div
              className="absolute -top-8 -right-8 w-24 h-24 rounded-3xl"
              style={{
                border: "1px solid rgba(37,99,235,0.15)",
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
                border: "1px solid rgba(96,165,250,0.15)",
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
          opacity: isVisible ? 0.6 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s ease 2.5s",
        }}
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase font-medium"
          style={{ color: "#94a3b8" }}
        >
          Scroll
        </span>
        <div
          className="w-6 h-10 rounded-full flex justify-center pt-2"
          style={{ border: "2px solid rgba(37,99,235,0.25)" }}
        >
          <div
            className="w-1.5 h-3 rounded-full"
            style={{
              background: "#2563EB",
              animation: "scrollIndicator 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes particleFloat {
          0% { transform: translate(0, 0) scale(1); opacity: 0.1; }
          50% { opacity: 0.25; }
          100% { transform: translate(30px, -50px) scale(1.5); opacity: 0.03; }
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
        @keyframes pulseGlow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        @keyframes cursorBlink {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes morphGlow {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(20px, -20px) rotate(180deg) scale(1.1); }
        }
        @keyframes spinBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
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
