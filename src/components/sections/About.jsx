import {
  Code2,
  Database,
  Brain,
  Award,
  Sparkles,
  Zap,
  Target,
  GraduationCap,
  ExternalLink,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState("parcours");
  const sectionRef = useRef(null);

  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "IA & Machine Learning",
      description:
        "Bases solides en machine learning avec TensorFlow et PyTorch (SVM, KNN, Decision Tree)",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
      bg: "rgba(139,92,246,0.06)",
      border: "rgba(139,92,246,0.2)",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analysis",
      description:
        "Analyse et visualisation de donnees avec Python, Pandas, NumPy, Power BI et IBM Cognos Analytics",
      color: "#06b6d4",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
      bg: "rgba(6,182,212,0.06)",
      border: "rgba(6,182,212,0.2)",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Developpement Full Stack",
      description:
        "Developpement d'applications mobile et web avec React, Node.js, Next.js, Laravel et Angular",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      bg: "rgba(16,185,129,0.06)",
      border: "rgba(16,185,129,0.2)",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certifications",
      description: "IBM Data Analyst - Dataiku Core Designer",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      bg: "rgba(245,158,11,0.06)",
      border: "rgba(245,158,11,0.2)",
      certificates: [
        { name: "IBM Data Analyst", file: "/certifications/ibm-cert.pdf" },
        {
          name: "Dataiku Core Designer",
          file: "/certifications/dataiku-cert.pdf",
        },
      ],
    },
  ];

  const education = [
    {
      degree: "Master 1 - IA ET DATA ANALYST",
      school: "ECOLE .DECODE A PARIS",
      year: "2025 - 2026",
      active: true,
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      degree: "Master 1 - Genie logiciel & Systemes d'Information",
      school: "Ecole Superieure Polytechnique de DAKAR",
      year: "2024 - 2025",
      active: false,
      icon: <Zap className="w-4 h-4" />,
    },
    {
      degree: "Licence - Genie logiciel & Systemes d'Information",
      school: "Ecole Superieure Polytechnique de DAKAR",
      year: "2023 - 2024",
      active: false,
      icon: <Target className="w-4 h-4" />,
    },
    {
      degree: "Diplome Superieur technologique",
      school: "Ecole Superieure Polytechnique de DAKAR",
      year: "2022 - 2023",
      active: false,
      icon: <GraduationCap className="w-4 h-4" />,
    },
  ];

  const experiences = [
    {
      role: "Développeuse d’applications",
      company: "Defar SCI",
      period: "2024",
      description:
        "Développement d’un jeu de culture générale africaine, conception des fonctionnalités et réflexion IA/Data",
      skills: ["Laravel", "JavaScript", "Data Analysis", "IA"],
    },
    {
      role: "Chargée Réseaux & Télécommunications",
      company: "EATS-SARL",
      period: "2023",
      description:
        "Mise en place d’un serveur IP (Asterisk) et configuration des services de télécommunications",
      skills: ["Asterisk", "IP", "Réseaux", "Télécommunications"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const tabs = [
    {
      id: "parcours",
      label: "Parcours",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      id: "experience",
      label: "Experience",
      icon: <Briefcase className="w-4 h-4" />,
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #eff6ff 0%, #f8fafc 50%, #eff6ff 100%)",
      }}
    >
      {/* Background deco */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] rounded-full blur-[200px] opacity-10"
          style={{
            background: "radial-gradient(circle, #2563EB, transparent)",
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[35rem] h-[35rem] rounded-full blur-[180px] opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #8b5cf6, transparent)",
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span style={{ color: "#0f172a" }}>Mon </span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #2563EB 0%, #8b5cf6 60%, #06b6d4 100%)",
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

          <p
            className="text-lg max-w-2xl mx-auto mb-8"
            style={{ color: "#64748b" }}
          >
            Software Engineer passionnee par la Data et l&apos;Intelligence
            Artificielle
          </p>

          <div className="flex items-center justify-center gap-3">
            <div
              className="h-[2px] w-16 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #2563EB, transparent)",
              }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: "#2563EB",
                boxShadow: "0 0 10px #2563EB",
              }}
            />
            <div
              className="h-[2px] w-16 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #2563EB, transparent)",
              }}
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex justify-center gap-2 mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 100ms",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300"
              style={{
                background:
                  activeTab === tab.id ? "#2563EB" : "rgba(37,99,235,0.06)",
                color: activeTab === tab.id ? "#fff" : "#64748b",
                border:
                  activeTab === tab.id
                    ? "1px solid #2563EB"
                    : "1px solid rgba(37,99,235,0.15)",
                boxShadow:
                  activeTab === tab.id
                    ? "0 4px 20px rgba(37,99,235,0.3)"
                    : "none",
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Left - Qui suis-je + Objectif */}
          <div
            className="flex flex-col gap-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-50px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
            }}
          >
            {/* Qui suis-je card */}
            <div
              className="p-8 rounded-3xl"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                className="text-3xl font-bold mb-4"
                style={{ color: "#0f172a" }}
              >
                Qui suis-je ?
              </h3>
              <div
                className="h-1 rounded-full mb-6"
                style={{ width: "60px", background: "#2563EB" }}
              />
              <div className="space-y-5">
                <p
                  className="leading-relaxed text-base"
                  style={{ color: "#475569" }}
                >
                  {"Diplomee de l'"}
                  <span
                    className="font-semibold px-2 py-0.5 rounded mx-1"
                    style={{
                      background: "rgba(37,99,235,0.08)",
                      color: "#2563EB",
                    }}
                  >
                    Ecole Superieure Polytechnique de Dakar
                  </span>
                  , je suis une
                  <span
                    className="font-semibold px-2 py-0.5 rounded mx-1"
                    style={{
                      background: "rgba(139,92,246,0.08)",
                      color: "#8b5cf6",
                    }}
                  >
                    Software Engineer
                  </span>
                  specialisee en
                  <span
                    className="font-semibold px-2 py-0.5 rounded mx-1"
                    style={{
                      background: "rgba(6,182,212,0.08)",
                      color: "#06b6d4",
                    }}
                  >
                    Data & Intelligence Artificielle
                  </span>
                  .
                </p>
                <p
                  className="leading-relaxed text-base"
                  style={{ color: "#475569" }}
                >
                  Avec une solide experience academique et professionnelle et
                  <span
                    className="font-semibold mx-1"
                    style={{ color: "#2563EB" }}
                  >
                    plusieurs projets data & logiciels
                  </span>
                  a mon actif, je concois des applications performantes et
                  scalables orientees analyse, automatisation et prise de
                  decision.
                </p>
                <p
                  className="leading-relaxed text-base"
                  style={{ color: "#475569" }}
                >
                  De la
                  <span
                    className="font-semibold mx-1"
                    style={{ color: "#8b5cf6" }}
                  >
                    data analysis & machine learning
                  </span>
                  au
                  <span
                    className="font-semibold mx-1"
                    style={{ color: "#06b6d4" }}
                  >
                    developpement d&apos;applications intelligentes
                  </span>
                  , j&apos;allie expertise technique et vision produit pour
                  resoudre des problemes complexes a fort impact.
                </p>
              </div>
            </div>

            {/* Objectif card */}
            <div
              className="p-8 rounded-3xl group cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: "rgba(37,99,235,0.04)",
                border: "1px solid rgba(37,99,235,0.18)",
                boxShadow: "0 4px 24px rgba(37,99,235,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(37,99,235,0.12)";
                e.currentTarget.style.borderColor = "rgba(37,99,235,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(37,99,235,0.06)";
                e.currentTarget.style.borderColor = "rgba(37,99,235,0.18)";
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                  style={{
                    background: "#2563EB",
                    boxShadow: "0 0 16px rgba(37,99,235,0.35)",
                  }}
                >
                  <TrendingUp className="w-5 h-5" style={{ color: "#fff" }} />
                </div>
                <p
                  className="font-bold text-sm tracking-[0.15em]"
                  style={{ color: "#2563EB" }}
                >
                  OBJECTIF ACTUEL
                </p>
              </div>
              <p
                className="leading-relaxed text-base"
                style={{ color: "#475569" }}
              >
                Je recherche une
                <span
                  className="font-semibold mx-1"
                  style={{ color: "#2563EB" }}
                >
                  alternance en Data Analysis / IA
                </span>
                pour appliquer mes competences sur des projets innovants et
                continuer a apprendre.
              </p>
            </div>
          </div>

          {/* Right - Formation ou Experience */}
          <div
            className="flex flex-col gap-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(50px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 400ms",
            }}
          >
            {activeTab === "parcours" ? (
              <>
                <div className="mb-2">
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ color: "#0f172a" }}
                  >
                    Formation
                  </h3>
                  <div
                    className="h-1 rounded-full"
                    style={{ width: "60px", background: "#2563EB" }}
                  />
                </div>

                <div className="flex flex-col gap-0 relative">
                  {/* Timeline line */}
                  <div
                    className="absolute left-[7px] top-4 bottom-0 w-[2px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #2563EB, rgba(37,99,235,0.1))",
                    }}
                  />

                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="relative pl-12 pb-8"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(20px)",
                        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${700 + index * 150}ms`,
                      }}
                    >
                      {/* Dot */}
                      <div
                        className="absolute left-0 top-4 w-4 h-4 rounded-full"
                        style={{
                          backgroundColor: edu.active ? "#2563EB" : "#cbd5e1",
                          boxShadow: edu.active
                            ? "0 0 0 5px rgba(37,99,235,0.15), 0 0 20px rgba(37,99,235,0.4)"
                            : "none",
                          transform: edu.active ? "scale(1.2)" : "scale(1)",
                        }}
                      >
                        {edu.active && (
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{
                              backgroundColor: "#2563EB",
                              animation:
                                "ping 2s cubic-bezier(0,0,0.2,1) infinite",
                            }}
                          />
                        )}
                      </div>

                      {/* Card */}
                      <div
                        className="rounded-2xl p-6 transition-all duration-400 cursor-pointer"
                        style={{
                          background: edu.active
                            ? "rgba(37,99,235,0.05)"
                            : "#ffffff",
                          border: edu.active
                            ? "1px solid rgba(37,99,235,0.25)"
                            : "1px solid rgba(0,0,0,0.06)",
                          boxShadow: edu.active
                            ? "0 8px 32px rgba(37,99,235,0.1)"
                            : "0 2px 12px rgba(0,0,0,0.04)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-3px) translateX(3px)";
                          e.currentTarget.style.boxShadow = edu.active
                            ? "0 16px 48px rgba(37,99,235,0.15)"
                            : "0 8px 28px rgba(0,0,0,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0) translateX(0)";
                          e.currentTarget.style.boxShadow = edu.active
                            ? "0 8px 32px rgba(37,99,235,0.1)"
                            : "0 2px 12px rgba(0,0,0,0.04)";
                        }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{
                                background: edu.active
                                  ? "#2563EB"
                                  : "rgba(0,0,0,0.05)",
                                color: edu.active ? "#fff" : "#94a3b8",
                              }}
                            >
                              {edu.icon}
                            </div>
                            <h4
                              className="font-bold text-base"
                              style={{ color: "#0f172a" }}
                            >
                              {edu.degree}
                            </h4>
                          </div>
                          {edu.active && (
                            <span
                              className="px-3 py-1 text-xs font-bold rounded-full flex-shrink-0 ml-2"
                              style={{
                                background: "rgba(37,99,235,0.1)",
                                color: "#2563EB",
                                border: "1px solid rgba(37,99,235,0.25)",
                              }}
                            >
                              En cours
                            </span>
                          )}
                        </div>
                        <p
                          className="text-sm mb-1"
                          style={{ color: "#94a3b8" }}
                        >
                          {edu.school}
                        </p>
                        <p
                          className="text-xs font-medium"
                          style={{ color: "#64748b" }}
                        >
                          {edu.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="mb-2">
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ color: "#0f172a" }}
                  >
                    Experience
                  </h3>
                  <div
                    className="h-1 rounded-full"
                    style={{ width: "60px", background: "#2563EB" }}
                  />
                </div>

                <div className="flex flex-col gap-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl transition-all duration-300 cursor-pointer"
                      style={{
                        background: "#ffffff",
                        border: "1px solid rgba(0,0,0,0.06)",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(20px)",
                        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${700 + index * 150}ms`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 32px rgba(0,0,0,0.08)";
                        e.currentTarget.style.borderColor =
                          "rgba(37,99,235,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 12px rgba(0,0,0,0.04)";
                        e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4
                            className="font-bold text-lg"
                            style={{ color: "#0f172a" }}
                          >
                            {exp.role}
                          </h4>
                          <p className="text-sm" style={{ color: "#2563EB" }}>
                            {exp.company}
                          </p>
                        </div>
                        <span
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{
                            background: "rgba(37,99,235,0.08)",
                            color: "#2563EB",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm mb-4" style={{ color: "#64748b" }}>
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full"
                            style={{
                              background: "rgba(0,0,0,0.04)",
                              color: "#475569",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(30px) scale(0.9)",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${800 + index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="relative p-7 rounded-3xl transition-all duration-500 group-hover:scale-[1.03] flex flex-col h-full"
                style={{
                  background: hoveredCard === index ? item.bg : "#ffffff",
                  border: `1px solid ${hoveredCard === index ? item.border : "rgba(0,0,0,0.07)"}`,
                  boxShadow:
                    hoveredCard === index
                      ? `0 16px 48px ${item.color}20`
                      : "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{
                    background:
                      hoveredCard === index ? item.gradient : `${item.color}12`,
                    color: hoveredCard === index ? "#fff" : item.color,
                    boxShadow:
                      hoveredCard === index
                        ? `0 0 24px ${item.color}40`
                        : "none",
                  }}
                >
                  {item.icon}
                </div>

                <h4
                  className="font-bold mb-3 text-base"
                  style={{ color: "#0f172a" }}
                >
                  {item.title}
                </h4>

                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "#64748b" }}
                >
                  {item.description}
                </p>

                {/* Certificates */}
                {item.certificates && (
                  <div className="mt-5 flex flex-col gap-2">
                    {item.certificates.map((cert, i) => (
                      <a
                        key={i}
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300"
                        style={{
                          background: "rgba(245,158,11,0.07)",
                          border: "1px solid rgba(245,158,11,0.2)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(245,158,11,0.15)";
                          e.currentTarget.style.borderColor =
                            "rgba(245,158,11,0.4)";
                          e.currentTarget.style.transform = "translateX(3px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(245,158,11,0.07)";
                          e.currentTarget.style.borderColor =
                            "rgba(245,158,11,0.2)";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        <span
                          className="text-[11px] font-semibold flex-1"
                          style={{ color: "#f59e0b" }}
                        >
                          {cert.name}
                        </span>
                        <ExternalLink
                          className="w-3.5 h-3.5 flex-shrink-0 opacity-60"
                          style={{ color: "#f59e0b" }}
                        />
                      </a>
                    ))}
                  </div>
                )}

                {/* Accent line au hover */}
                <div
                  className="mt-5 h-[3px] rounded-full transition-all duration-500"
                  style={{
                    width: hoveredCard === index ? "100%" : "0%",
                    background: item.gradient,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}

export default About;
