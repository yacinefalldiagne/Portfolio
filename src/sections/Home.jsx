import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import photoYacine from "../assets/Profile.jpg";

function Home() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = "Software Engineer AND AI & Data Analyst";

  useEffect(() => {
    // Déclenche l'apparition globale après un léger délai
    const appearanceTimer = setTimeout(() => setIsVisible(true), 100);

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    // Suivi du mouvement de la souris
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      clearTimeout(appearanceTimer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [fullText.length]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Classes pour l'effet de révélation
  const revealClass = `transition-all duration-1000 ease-out transform ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{ backgroundColor: "#f5f5f0" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT - TEXTE AVEC TRANSITION DÉCALÉE */}
          <div
            className={`space-y-8 ${revealClass}`}
            style={{ transitionDelay: "200ms" }}
          >
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight"
              style={{ color: "#1a2b3d" }}
            >
              Je suis{" "}
              <span className="relative inline-block group">
                <span style={{ color: "oklch(42.1% 0.095 57.708)" }}>
                  Yacine Diagne
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </span>
            </h1>

            <p
              className="text-2xl md:text-3xl font-mono min-h-[1.5em]"
              style={{ color: "#1a2b3d" }}
            >
              {text}
              <span
                className="animate-pulse inline-block w-1 h-8 ml-1 align-middle"
                style={{ backgroundColor: "oklch(42.1% 0.095 57.708)" }}
              ></span>
            </p>

            <p
              className="text-lg max-w-xl leading-relaxed"
              style={{ color: "#000000" }}
            >
              Passionnée par la{" "}
              <span
                className="font-semibold"
                style={{ color: "oklch(42.1% 0.095 57.708)" }}
              >
                data
              </span>
              , le{" "}
              <span
                className="font-semibold"
                style={{ color: "oklch(42.1% 0.095 57.708)" }}
              >
                machine learning
              </span>{" "}
              et le{" "}
              <span
                className="font-semibold"
                style={{ color: "oklch(42.1% 0.095 57.708)" }}
              >
                développement logiciel
              </span>
              , je crée des solutions innovantes basées sur l'analyse et l'
              <span
                className="font-semibold"
                style={{ color: "oklch(42.1% 0.095 57.708)" }}
              >
                intelligence artificielle
              </span>
              .
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="px-8 py-3 rounded-full font-medium text-white transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-[oklch(42.1% 0.095 57.708 / 0.4)]"
                style={{ backgroundColor: "oklch(42.1% 0.095 57.708)" }}
              >
                Voir mes projets
              </a>

              <a
                href="/CV_YACINEFALL.pdf"
                download
                className="px-8 py-3 rounded-full font-medium flex items-center gap-2 bg-white border border-gray-200 text-[#1a2b3d] hover:bg-gray-50 transition-all"
              >
                <Download size={20} />
                CV
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4">
              {[
                {
                  icon: <Github size={20} />,
                  href: "https://github.com/yacinefalldiagne",
                },
                {
                  icon: <Linkedin size={20} />,
                  href: "https://linkedin.com/in/yacine-fall-diagne",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1a2b3d] hover:bg-[oklch(42.1% 0.095 57.708)] hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* RIGHT - PHOTO AVEC EFFET NÉON ET FLOTTEMENT */}
          <div className="relative flex justify-center items-center animate-float">
            {/* Halo lumineux en arrière-plan */}
            <div className="absolute w-72 h-96 bg-gradient-to-tr from-[#4A7C9E] via-[#6B9AB8] to-[oklch(42.1%_0.095_57.708)] blur-[60px] animate-glow opacity-50"></div>{" "}
            <div
              className="relative w-72 h-96 rounded-3xl p-[3px] overflow-hidden shadow-2xl transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
              }}
            >
              {/* La bordure magique qui tourne */}
              <div className="absolute inset-[-1000%] animate-border bg-[conic-gradient(from_90deg_at_50%_50%,#4A7C9E_0%,#A89378_50%,#4A7C9E_100%)]"></div>{" "}
              {/* L'image elle-même */}
              <div className="relative w-full h-full bg-[#1a2b3d] rounded-[calc(1.5rem-1px)] overflow-hidden">
                <img
                  src={photoYacine}
                  alt="Photo Yacine"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                {/* Overlay de reflet */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
