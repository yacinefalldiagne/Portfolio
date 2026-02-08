import { Code2, Database, Brain, Award } from "lucide-react";
import { useEffect } from "react";

function About() {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "IA & Machine Learning",
      description:
        "Bases solides en machine learning avec TensorFlow et PyTorch (SVM, KNN, Decision Tree)",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analysis",
      description:
        "Analyse et visualisation de données avec Python, Pandas, NumPy, Power BI et IBM Cognos Analytics",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Développement Full Stack",
      description:
        "Développement d'applications mobile et web avec React, Node.js,next.js  Laravel et Angular",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification IBM",
      description:
        "Certifiée IBM Data Analyst et IBM Data Engineering Professional",
    },
  ];

  const education = [
    {
      degree: "Master 1 – IA ET DATA ANALYST",
      school: "ECOLE .DECODE A PARIS",
      year: "2025 - 2026",
      active: true,
    },
    {
      degree: "Master 1 – Génie logiciel & Systemes d'Information",
      school: "Ecole Superieure Polytechnique de DAKAR",
      year: "2024 - 2025",
    },
    {
      degree: "Licence – Génie logiciel & Systemes d'Information",
      school: "Ecole Superieure Polytechnique de DAKAR",
      year: "2023 - 2024",
    },
  ];

  // Activation des animations au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        /* ==================== ANIMATIONS KEYFRAMES ==================== */
        @keyframes slideRotate {
          0% {
            opacity: 0;
            transform: translateX(-100px) rotateY(-45deg);
            filter: blur(10px);
          }
          60% {
            transform: translateX(10px) rotateY(5deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0);
            filter: blur(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.9);
            filter: blur(8px);
          }
          60% {
            transform: translateX(-10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes zoomRotate {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-15deg);
            filter: blur(5px);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0);
            filter: blur(0);
          }
        }

        @keyframes flipIn {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateX(-90deg);
          }
          50% {
            transform: perspective(1000px) rotateX(10deg);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateX(0);
          }
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          10%,
          30% {
            transform: scale(1.15);
          }
          20%,
          40% {
            transform: scale(1.05);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }

        /* ==================== CLASSES D'ANIMATION ==================== */
        .animate-on-scroll {
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-on-scroll.animated {
          opacity: 1;
        }

        .slide-rotate.animated {
          animation: slideRotate 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .slide-in-right.animated {
          animation: slideInRight 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .zoom-rotate.animated {
          animation: zoomRotate 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .flip-in.animated {
          animation: flipIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Stagger delays */
        .stagger-1 {
          animation-delay: 0.1s !important;
        }
        .stagger-2 {
          animation-delay: 0.2s !important;
        }
        .stagger-3 {
          animation-delay: 0.3s !important;
        }
        .stagger-4 {
          animation-delay: 0.4s !important;
        }

        /* ==================== EFFETS HOVER ==================== */
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .hover-lift:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }

        /* Effet de brillance au hover */
        .hover-lift::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.6s ease;
          pointer-events: none;
        }

        .hover-lift:hover::after {
          left: 200%;
        }

        /* Animation heartbeat */
        .heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .heartbeat:hover {
          animation: heartbeat 0.5s ease-in-out infinite;
        }

        /* ==================== RESPONSIVE ==================== */
        @media (max-width: 768px) {
          .animate-on-scroll.animated {
            animation-duration: 0.6s;
          }

          .hover-lift:hover {
            transform: translateY(-5px) scale(1.01);
          }
        }

        /* ==================== ACCESSIBILITÉ ==================== */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        /* Ajoute ceci dans ton bloc <style jsx> de About.jsx */
        .hover-lift {
          background: rgba(255, 255, 255, 0.7) !important;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139, 69, 19, 0.1) !important;
        }

        .hover-lift:hover {
          background: rgba(255, 255, 255, 0.9) !important;
          transform: translateY(-15px) rotate(1deg) !important;
        }
          @keyframes border-rotate {
  100% { transform: rotate(360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; scale: 1; }
  50% { opacity: 0.8; scale: 1.1; }
}

.animate-border {
  animation: border-rotate 4s linear infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}
      `}</style>

      <section
        id="about"
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #f5f5f0 50%, #ffffff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll animated">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#1a2b3d" }}
            >
              À propos de{" "}
              <span style={{ color: "oklch(42.1% 0.095 57.708)" }}>moi</span>
            </h2>
            <div
              className="w-20 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "oklch(42.1% 0.095 57.708)" }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left - Story */}
            <div className="space-y-6 animate-on-scroll slide-rotate">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold" style={{ color: "#1a2b3d" }}>
                  Mon parcours
                </h3>
                <div
                  className="w-12 h-1 rounded-full"
                  style={{ backgroundColor: "oklch(42.1% 0.095 57.708)" }}
                ></div>
              </div>

              <p className="leading-relaxed" style={{ color: "#000000" }}>
                Diplômée de l'
                <span
                  className="font-semibold"
                  style={{ color: "oklch(42.1% 0.095 57.708)" }}
                >
                  École Supérieure Polytechnique de Dakar
                </span>
                , je suis une{" "}
                <span
                  className="font-semibold"
                  style={{ color: "oklch(42.1% 0.095 57.708)" }}
                >
                  Software Engineer
                </span>{" "}
                spécialisée en{" "}
                <span
                  className="font-semibold"
                  style={{ color: "oklch(42.1% 0.095 57.708)" }}
                >
                  Data & Intelligence Artificielle
                </span>
                .
              </p>

              <p className="leading-relaxed" style={{ color: "#000000" }}>
                Avec une solide expérience académique et professionnelle et{" "}
                <span
                  className="font-semibold"
                  style={{ color: "oklch(42.1% 0.095 57.708)" }}
                >
                  plusieurs projets data & logiciels
                </span>{" "}
                à mon actif, je conçois des applications performantes et
                scalables orientées analyse, automatisation et prise de
                décision.
              </p>

              <p className="leading-relaxed" style={{ color: "#000000" }}>
                De la{" "}
                <span
                  className="font-semibold"
                  style={{ color: "oklch(42.1% 0.095 57.708)" }}
                >
                  data analysis & machine learning
                </span>{" "}
                au{" "}
                <span
                  className="font-semibold"
                  style={{ color: "oklch(42.1% 0.095 57.708)" }}
                >
                  développement d'applications intelligentes
                </span>
                , j'allie expertise technique et vision produit pour résoudre
                des problèmes complexes à fort impact.
              </p>

              <div
                className="rounded-xl p-6 hover-lift flip-in animate-on-scroll"
                style={{
                  backgroundColor: "#fff",
                  border: "2px solid #8B4513",
                  boxShadow: "0 4px 6px rgba(139, 69, 19, 0.15)",
                }}
              >
                <p className="font-medium mb-2" style={{ color: "#8B4513" }}>
                  Objectif actuel
                </p>
                <p style={{ color: "#1a2b3d" }}>
                  Je recherche une{" "}
                  <span style={{ color: "#8B4513", fontWeight: "600" }}>
                    alternance en Data Analysis / IA
                  </span>{" "}
                  pour appliquer mes compétences sur des projets innovants et
                  continuer à apprendre.
                </p>
              </div>
            </div>

            {/* Right - Education Timeline */}
            <div className="space-y-6 animate-on-scroll slide-in-right">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold" style={{ color: "#1a2b3d" }}>
                  Formation
                </h3>
                <div
                  className="w-12 h-1 rounded-full"
                  style={{ backgroundColor: "oklch(42.1% 0.095 57.708)" }}
                ></div>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative pl-8 pb-8 ${
                      index !== education.length - 1 ? "border-l-2" : ""
                    } animate-on-scroll stagger-${index + 1}`}
                    style={{
                      borderColor:
                        index !== education.length - 1
                          ? "#d4d8dd"
                          : "transparent",
                    }}
                  >
                    <div
                      className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px] ${
                        edu.active ? "animate-pulse" : ""
                      }`}
                      style={{
                        backgroundColor: edu.active
                          ? "oklch(42.1% 0.095 57.708)"
                          : "#d4d8dd",
                      }}
                    ></div>

                    <div
                      className="rounded-xl p-4 hover-lift"
                      style={{
                        backgroundColor: "#fff",
                        border: edu.active
                          ? "2px solid #8B4513"
                          : "2px solid #D2B48C",
                        boxShadow: edu.active
                          ? "0 8px 20px rgba(139, 69, 19, 0.2)"
                          : "0 2px 8px rgba(139, 69, 19, 0.1)",
                      }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4
                          className="font-semibold"
                          style={{ color: "#1a2b3d" }}
                        >
                          {edu.degree}
                        </h4>
                        {edu.active && (
                          <span
                            className="px-2 py-1 text-xs rounded-full"
                            style={{
                              backgroundColor: "#8B4513",
                              color: "#fff",
                            }}
                          >
                            En cours
                          </span>
                        )}
                      </div>
                      <p className="text-sm" style={{ color: "#6b7280" }}>
                        {edu.school}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "#9ca3af" }}>
                        {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-all hover-lift group animate-on-scroll zoom-rotate stagger-${
                  index + 1
                }`}
                style={{
                  backgroundColor: "#fff",
                  border: "2px solid #D2B48C",
                  boxShadow: "0 2px 8px rgba(139, 69, 19, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#8B4513";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(139, 69, 19, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#D2B48C";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(139, 69, 19, 0.1)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all heartbeat"
                  style={{
                    backgroundColor: "#F5DEB3",
                    color: "#8B4513",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#8B4513";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#F5DEB3";
                    e.currentTarget.style.color = "#8B4513";
                  }}
                >
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-2" style={{ color: "#1a2b3d" }}>
                  {item.title}
                </h4>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
