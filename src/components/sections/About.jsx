import { Code2, Database, Brain, Award, Sparkles, Zap, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "IA & Machine Learning",
      description:
        "Bases solides en machine learning avec TensorFlow et PyTorch (SVM, KNN, Decision Tree)",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analysis",
      description:
        "Analyse et visualisation de données avec Python, Pandas, NumPy, Power BI et IBM Cognos Analytics",
      color: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Développement Full Stack",
      description:
        "Développement d'applications mobile et web avec React, Node.js, Next.js, Laravel et Angular",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification IBM",
      description:
        "Certifiée IBM Data Analyst et IBM Data Engineering Professional",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    },
  ];

  const education = [
    {
      degree: "Master 1 – IA ET DATA ANALYST",
      school: "ECOLE .DECODE A PARIS",
      year: "2025 - 2026",
      active: true,
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      degree: "Master 1 – Génie logiciel & Systèmes d'Information",
      school: "Ecole Superieure Polytechnique de DAKAR",
      year: "2024 - 2025",
      active: false,
      icon: <Zap className="w-4 h-4" />,
    },
    {
      degree: "Licence – Génie logiciel & Systèmes d'Information",
      school: "Ecole Superieure Polytechnique de DAKAR",
      year: "2023 - 2024",
      active: false,
      icon: <Target className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0f1c 0%, #0f1419 50%, #0a0f1c 100%)",
      }}
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[50rem] h-[50rem] rounded-full blur-[200px] opacity-20"
          style={{
            background: "radial-gradient(circle, #c49a6c, transparent)",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] rounded-full blur-[180px] opacity-15"
          style={{
            background: "radial-gradient(circle, #8b5cf6, transparent)",
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(196,154,108,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(196,154,108,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            animation: "gridMove 20s linear infinite",
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: i % 2 === 0 ? "#c49a6c" : "#8b5cf6",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-24"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(196,154,108,0.15), rgba(139,92,246,0.15))",
              border: "1px solid rgba(196,154,108,0.3)",
              boxShadow: "0 0 30px rgba(196,154,108,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            <div className="w-2 h-2 rounded-full" style={{ 
              backgroundColor: "#c49a6c",
              boxShadow: "0 0 10px #c49a6c",
              animation: "pulse 2s ease-in-out infinite",
            }} />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "#c49a6c" }}
            >
              À PROPOS
            </span>
          </div>

          {/* Main title */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span style={{ color: "#f0ece6" }}>Mon </span>
            <span
              style={{
                background: "linear-gradient(135deg, #c49a6c 0%, #8b5cf6 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%",
                animation: "gradientShift 8s ease infinite",
              }}
            >
              parcours
            </span>
          </h2>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-16 rounded-full" 
              style={{ 
                background: "linear-gradient(90deg, transparent, #c49a6c, transparent)",
                animation: "expandWidth 2s ease-in-out infinite",
              }} 
            />
            <div className="w-2 h-2 rounded-full" 
              style={{ 
                backgroundColor: "#c49a6c",
                boxShadow: "0 0 15px #c49a6c",
              }} 
            />
            <div className="h-[2px] w-16 rounded-full" 
              style={{ 
                background: "linear-gradient(90deg, transparent, #c49a6c, transparent)",
                animation: "expandWidth 2s ease-in-out infinite 1s",
              }} 
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Left - Story with glassmorphism */}
          <div
            className="flex flex-col gap-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-50px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
            }}
          >
            {/* Title card */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-xl opacity-20"
                style={{ background: "linear-gradient(135deg, #c49a6c, #8b5cf6)" }}
              />
              <div className="relative p-8 rounded-3xl backdrop-blur-sm"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <h3 className="text-3xl font-bold mb-4" style={{ color: "#f0ece6" }}>
                  Qui suis-je ?
                </h3>
                <div
                  className="h-1 rounded-full mb-6"
                  style={{
                    width: "60px",
                    background: "linear-gradient(90deg, #c49a6c, transparent)",
                  }}
                />

                <div className="space-y-5">
                  <p className="leading-relaxed text-base" style={{ color: "#cbd5e0" }}>
                    Diplômée de l'
                    <span className="font-semibold px-2 py-1 rounded mx-1"
                      style={{
                        background: "linear-gradient(135deg, rgba(196,154,108,0.2), rgba(196,154,108,0.1))",
                        color: "#c49a6c",
                      }}
                    >
                      École Supérieure Polytechnique de Dakar
                    </span>
                    , je suis une
                    <span className="font-semibold px-2 py-1 rounded mx-1"
                      style={{
                        background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(139,92,246,0.1))",
                        color: "#8b5cf6",
                      }}
                    >
                      Software Engineer
                    </span>
                    spécialisée en
                    <span className="font-semibold px-2 py-1 rounded mx-1"
                      style={{
                        background: "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(6,182,212,0.1))",
                        color: "#06b6d4",
                      }}
                    >
                      Data & Intelligence Artificielle
                    </span>
                    .
                  </p>

                  <p className="leading-relaxed text-base" style={{ color: "#cbd5e0" }}>
                    Avec une solide expérience académique et professionnelle et
                    <span className="font-semibold text-[#c49a6c] mx-1">
                      plusieurs projets data & logiciels
                    </span>
                    à mon actif, je conçois des applications performantes et scalables orientées analyse, automatisation et prise de décision.
                  </p>

                  <p className="leading-relaxed text-base" style={{ color: "#cbd5e0" }}>
                    De la
                    <span className="font-semibold text-[#c49a6c] mx-1">
                      data analysis & machine learning
                    </span>
                    au
                    <span className="font-semibold text-[#c49a6c] mx-1">
                      développement d'applications intelligentes
                    </span>
                    , j'allie expertise technique et vision produit pour résoudre des problèmes complexes à fort impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Objectif card with magnetic effect */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={(e) => setHoveredCard('objectif')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                style={{ background: "linear-gradient(135deg, #c49a6c, #8b5cf6)" }}
              />
              
              <div className="relative p-8 rounded-3xl transition-all duration-700 group-hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, rgba(196,154,108,0.15), rgba(139,92,246,0.15))",
                  border: "1px solid rgba(196,154,108,0.3)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #c49a6c, #8b5cf6)",
                      boxShadow: "0 0 20px rgba(196,154,108,0.4)",
                    }}
                  >
                    <Sparkles className="w-5 h-5" style={{ color: "#fff" }} />
                  </div>
                  <p className="font-bold text-sm tracking-[0.15em]" style={{ color: "#c49a6c" }}>
                    OBJECTIF ACTUEL
                  </p>
                </div>
                <p className="leading-relaxed text-base" style={{ color: "#cbd5e0" }}>
                  Je recherche une
                  <span className="font-semibold text-[#c49a6c] mx-1">
                    alternance en Data Analysis / IA
                  </span>
                  pour appliquer mes compétences sur des projets innovants et continuer à apprendre.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Education Timeline */}
          <div
            className="flex flex-col gap-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(50px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 400ms",
            }}
          >
            <div className="mb-4">
              <h3 className="text-3xl font-bold mb-4" style={{ color: "#f0ece6" }}>
                Formation
              </h3>
              <div
                className="h-1 rounded-full"
                style={{
                  width: "60px",
                  background: "linear-gradient(90deg, #c49a6c, transparent)",
                }}
              />
            </div>

            <div className="flex flex-col gap-0 relative">
              {/* Animated timeline line */}
              <div className="absolute left-[7px] top-4 bottom-0 w-[2px]"
                style={{
                  background: "linear-gradient(180deg, #c49a6c, rgba(196,154,108,0.2))",
                }}
              />

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-12 pb-10 group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${700 + index * 150}ms`,
                  }}
                >
                  {/* Timeline dot with glow */}
                  <div
                    className="absolute left-0 top-4 w-4 h-4 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor: edu.active ? "#c49a6c" : "#4a5568",
                      boxShadow: edu.active
                        ? "0 0 0 6px rgba(196,154,108,0.2), 0 0 30px rgba(196,154,108,0.6)"
                        : "0 0 0 4px rgba(74,85,104,0.2)",
                      transform: edu.active ? "scale(1.2)" : "scale(1)",
                    }}
                  >
                    {edu.active && (
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          backgroundColor: "#c49a6c",
                          animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                        }}
                      />
                    )}
                  </div>

                  {/* Card with hover effect */}
                  <div
                    className="rounded-2xl p-6 transition-all duration-500 cursor-pointer"
                    style={{
                      background: edu.active
                        ? "linear-gradient(135deg, rgba(196,154,108,0.15), rgba(139,92,246,0.1))"
                        : "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                      border: edu.active
                        ? "1px solid rgba(196,154,108,0.4)"
                        : "1px solid rgba(255,255,255,0.08)",
                      boxShadow: edu.active
                        ? "0 10px 40px rgba(196,154,108,0.15), inset 0 1px 0 rgba(255,255,255,0.1)"
                        : "0 4px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px) translateX(4px)";
                      e.currentTarget.style.boxShadow = edu.active
                        ? "0 20px 60px rgba(196,154,108,0.25)"
                        : "0 10px 40px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) translateX(0)";
                      e.currentTarget.style.boxShadow = edu.active
                        ? "0 10px 40px rgba(196,154,108,0.15)"
                        : "0 4px 15px rgba(0,0,0,0.2)";
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{
                            background: edu.active
                              ? "linear-gradient(135deg, #c49a6c, #8b5cf6)"
                              : "rgba(255,255,255,0.05)",
                            color: "#fff",
                          }}
                        >
                          {edu.icon}
                        </div>
                        <h4
                          className="font-bold text-base"
                          style={{ color: "#f0ece6" }}
                        >
                          {edu.degree}
                        </h4>
                      </div>
                      {edu.active && (
                        <span
                          className="px-3 py-1.5 text-xs font-bold rounded-full flex-shrink-0 ml-2"
                          style={{
                            background: "linear-gradient(135deg, rgba(196,154,108,0.3), rgba(139,92,246,0.3))",
                            color: "#c49a6c",
                            border: "1px solid rgba(196,154,108,0.5)",
                            boxShadow: "0 0 15px rgba(196,154,108,0.3)",
                          }}
                        >
                          En cours
                        </span>
                      )}
                    </div>
                    <p className="text-sm mb-2" style={{ color: "#9fb3c8" }}>
                      {edu.school}
                    </p>
                    <p className="text-xs font-medium" style={{ color: "#718096" }}>
                      {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Grid with advanced hover effects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${800 + index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700"
                style={{ backgroundColor: item.color }}
              />

              <div
                className="relative p-8 rounded-3xl transition-all duration-700 group-hover:scale-105"
                style={{
                  background: hoveredCard === index
                    ? "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))"
                    : "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  border: `1px solid ${hoveredCard === index ? `${item.color}50` : "rgba(255,255,255,0.08)"}`,
                  boxShadow: hoveredCard === index
                    ? `0 20px 60px ${item.color}30, inset 0 1px 0 rgba(255,255,255,0.15)`
                    : "0 8px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Icon with rotation and scale */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-700 group-hover:rotate-12 group-hover:scale-110"
                  style={{
                    background: hoveredCard === index ? item.gradient : `${item.color}20`,
                    color: hoveredCard === index ? "#fff" : item.color,
                    boxShadow: hoveredCard === index ? `0 0 30px ${item.color}60` : "none",
                  }}
                >
                  {item.icon}
                </div>

                <h4
                  className="font-bold mb-3 text-base transition-colors duration-300"
                  style={{ color: hoveredCard === index ? "#f0ece6" : "#cbd5e0" }}
                >
                  {item.title}
                </h4>

                <p className="text-sm leading-relaxed" style={{ color: "#9fb3c8" }}>
                  {item.description}
                </p>

                {/* Accent line at bottom */}
                <div
                  className="mt-5 h-1 rounded-full transition-all duration-700"
                  style={{
                    width: hoveredCard === index ? "100%" : "0%",
                    background: item.gradient,
                    boxShadow: hoveredCard === index ? `0 0 15px ${item.color}` : "none",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
        @keyframes expandWidth {
          0%, 100% { width: 16px; opacity: 0.5; }
          50% { width: 48px; opacity: 1; }
        }
      `}</style>
    </section>
  );
}

export default About;