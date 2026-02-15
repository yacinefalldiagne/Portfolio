import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Code2, Brain, Database } from "lucide-react";
import secImage from "../../assets/sec.png";
import mImage from "../../assets/m.png";
import pImage from "../../assets/play.png";
import sImage from "../../assets/s.png";
import aqImage from "../../assets/aquasens.png";
import gcpImage from "../../assets/gcp.png";
import bigImage from "../../assets/big.png";
import databricksImage from "../../assets/databricks.png";
import jamaalImage from "../../assets/jamaal.png";
import appImage from "../../assets/app.png";
import glsiImage from "../../assets/glsi.png";
import coverImage from "../../assets/cover.png";
import AfrikImage from "../../assets/afrik1.png";
import eduImage from "../../assets/edu.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "AquaSense",
      description:
        "Station IoT intelligente pour surveiller la qualit\u00e9 de l\u2019eau en temps r\u00e9el avec analyse pr\u00e9dictive et alertes automatiques.",
      category: "data",
      tags: ["Python", "Streamlit", "IoT", "Data Analysis"],
      github: "https://github.com/yacinefalldiagne",
      image: aqImage,
    },
    {
      title: "Cloud Data Pipeline \u2013 GCP",
      description:
        "Pipeline data end-to-end sur Google Cloud : ingestion depuis API publique, orchestration avec Airflow, stockage BigQuery.",
      category: "data",
      tags: ["Python", "GCP", "Airflow", "BigQuery", "Cloud Storage", "ETL"],
      github: "https://github.com/yacinefalldiagne/gcp-data-pipeline",
      image: gcpImage,
    },
    {
      title: "Big Data Pipeline \u2013 Spark & Airflow",
      description:
        "Pipeline Big Data distribu\u00e9 pour le traitement massif de donn\u00e9es : ingestion batch, transformation avec Apache Spark.",
      category: "data",
      tags: ["PySpark", "Apache Spark", "Airflow", "Big Data", "ETL", "Data Engineering"],
      github: "https://github.com/yacinefalldiagne/spark-airflow-pipeline",
      image: bigImage,
    },
    {
      title: "Distributed Data Pipeline \u2013 Databricks",
      description:
        "Pipeline de traitement de donn\u00e9es massives avec Apache Spark sur Databricks, orchestr\u00e9 par Airflow.",
      category: "data",
      tags: ["Python", "Spark", "Databricks", "Airflow", "Delta Lake"],
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com/yacinefalldiagne/databricks-spark-pipeline",
      image: databricksImage,
    },
    {
      title: "D\u00e9tection Malware ML",
      description:
        "Syst\u00e8me de d\u00e9tection de malwares utilisant des algorithmes ML (SVM, KNN, Decision Tree) avec analyse des performances.",
      category: "ai",
      tags: ["Python", "ML", "SVM", "Jupyter"],
      github: "https://github.com/yacinefalldiagne/ProjetIA",
      image: mImage,
    },
    {
      title: "Analyseur Sentiment",
      description:
        "Outil NLP pour analyser les sentiments sur Twitter avec d\u00e9tection de langue, traduction et visualisation interactive.",
      category: "ai",
      tags: ["Python", "NLP", "TextBlob", "Plotly"],
      github: "https://github.com/yacinefalldiagne/Analyseur_Sentiment",
      image: sImage,
    },
    {
      title: "PlayMetrics \u2013 Analyse Sportive",
      description:
        "Application IA pour analyser les performances des joueurs : suivi individuel, d\u00e9tection de fatigue et recommandations.",
      category: "ai",
      tags: ["Python", "Deep Learning", "YOLO", "OpenCV"],
      github: "https://github.com/yacinefalldiagne/PlayMetrics",
      image: pImage,
    },
    {
      title: "AutoEvalDB",
      description:
        "Plateforme intelligente d\u2019\u00e9valuation automatis\u00e9e des exercices SQL avec g\u00e9n\u00e9ration de rapports d\u00e9taill\u00e9s.",
      category: "web",
      tags: ["JavaScript", "Node.js", "SQL", "SGBD"],
      github: "https://github.com/yacinefalldiagne/Projet_SGBD_AutoEvalDB",
      image: coverImage,
    },
    {
      title: "App Orthan DICOM",
      description:
        "Syst\u00e8me m\u00e9dical pour g\u00e9rer les images DICOM avec visualisation 3D, t\u00e9l\u00e9-radiologie et gestion patients.",
      category: "web",
      tags: ["React", "Node.js", "MongoDB", "CornerstoneJS"],
      github: "https://github.com/yacinefalldiagne/Gestion_Hopital",
      image: appImage,
    },
    {
      title: "JamaalCouture",
      description:
        "Application web compl\u00e8te de gestion d\u2019atelier de couture avec interface moderne et syst\u00e8me de r\u00e9servation.",
      category: "web",
      tags: ["JavaScript", "Node.js", "Express", "Full Stack"],
      icon: <Code2 className="w-6 h-6" />,
      github: "https://github.com/yacinefalldiagne/JamaalCouture",
      image: jamaalImage,
    },
    {
      title: "Culture G\u00e9n\u00e9rale Africaine",
      description:
        "Jeu web interactif sur l\u2019Afrique avec quiz, classements et d\u00e9fis multijoueurs.",
      category: "web",
      tags: ["Laravel", "PHP", "JavaScript", "MySQL"],
      icon: <Code2 className="w-6 h-6" />,
      github: "https://github.com/yacinefalldiagne/Afrikulture",
      image: AfrikImage,
    },
    {
      title: "S.E.C. - Smart Ecological Conservation",
      description:
        "Syst\u00e8me IA pour surveiller et prot\u00e9ger les ressources naturelles, focus d\u00e9forestation.",
      category: "ai",
      tags: ["Python", "IA", "Data Analysis"],
      github: "https://github.com/yacinefalldiagne/SEC",
      image: secImage,
    },
    {
      title: "Gestion Efficacit\u00e9 Enseignements",
      description:
        "Plateforme web/desktop pour g\u00e9rer l\u2019efficacit\u00e9 des enseignements avec Angular, Python QT et MySQL.",
      category: "web",
      tags: ["Angular", "Python QT", "MySQL", "Agile"],
      github: "https://github.com/yacinefalldiagne/Gestion_Effectivite_Enseignements",
      image: eduImage,
    },
    {
      title: "MGLSI News - Site d\u2019Actualit\u00e9s MVC",
      description:
        "Site d\u2019actualit\u00e9s en PHP MVC, consultation, recherche et navigation par cat\u00e9gories avec MySQL.",
      category: "web",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      icon: <Code2 className="w-6 h-6" />,
      github: "https://github.com/yacinefalldiagne/MGLSI_NEWS",
      image: glsiImage,
    },
  ];

  const filters = [
    { id: "all", label: "Tous", count: projects.length },
    { id: "ai", label: "IA & ML", count: projects.filter((p) => p.category === "ai").length },
    { id: "data", label: "Data & IoT", count: projects.filter((p) => p.category === "data").length },
    { id: "web", label: "Web", count: projects.filter((p) => p.category === "web").length },
  ];

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  const categoryColors = {
    data: "#3b82f6",
    ai: "#c49a6c",
    web: "#10b981",
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0f1b2a" }}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 right-0 w-[35rem] h-[35rem] rounded-full blur-[160px]"
          style={{ backgroundColor: "rgba(196,154,108,0.05)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[25rem] h-[25rem] rounded-full blur-[140px]"
          style={{ backgroundColor: "rgba(59,130,246,0.04)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <p
            className="text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#c49a6c" }}
          >
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: "#e2e8f0" }}>
            {"Mes "}
            <span
              style={{
                background: "linear-gradient(135deg, #c49a6c, #e8c9a0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projets
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-[15px]" style={{ color: "#7b8fa3" }}>
            Une selection de mes meilleurs projets en IA, Data Science et Developpement Web
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "#c49a6c" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#c49a6c" }} />
            <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "#c49a6c" }} />
          </div>
        </div>

        {/* Filters */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(15px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 150ms",
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
              style={
                activeFilter === filter.id
                  ? {
                      background: "linear-gradient(135deg, #c49a6c, #a07d5a)",
                      color: "#fff",
                      boxShadow: "0 8px 25px rgba(196,154,108,0.25)",
                    }
                  : {
                      backgroundColor: "rgba(255,255,255,0.04)",
                      color: "#7b8fa3",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {filter.label}
              <span
                className="ml-2 text-xs"
                style={{
                  opacity: 0.7,
                }}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden transition-all duration-500"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(25px)",
                transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 60}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.3), 0 0 0 1px ${categoryColors[project.category] || "#c49a6c"}30`;
                e.currentTarget.style.borderColor = `${categoryColors[project.category] || "#c49a6c"}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              {/* Project Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background: "linear-gradient(to top, #0f1b2a 0%, transparent 60%)",
                    opacity: 0.8,
                  }}
                />
                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm"
                  style={{
                    backgroundColor: `${categoryColors[project.category]}20`,
                    color: categoryColors[project.category],
                    border: `1px solid ${categoryColors[project.category]}30`,
                  }}
                >
                  {project.category === "ai" ? "IA & ML" : project.category === "data" ? "Data" : "Web"}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h3
                    className="text-lg font-bold mb-2 transition-colors duration-300"
                    style={{ color: "#e2e8f0" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-2"
                    style={{ color: "#6b7f94" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] rounded-md font-medium"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        color: "#7b8fa3",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span
                      className="px-2.5 py-1 text-[11px] rounded-md font-medium"
                      style={{ color: "#5a6a7a" }}
                    >
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      color: "#7b8fa3",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#c49a6c";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = "#c49a6c";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.color = "#7b8fa3";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, #c49a6c, #a07d5a)",
                        color: "#fff",
                      }}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className="text-center mt-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1s ease 1s",
          }}
        >
          <a
            href="https://github.com/yacinefalldiagne"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-medium transition-all duration-300 group hover:-translate-y-0.5"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#9fb3c8",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#c49a6c";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(196,154,108,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Github size={20} />
            <span>Voir tous mes projets sur GitHub</span>
            <ExternalLink
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
