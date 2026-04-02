import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Play } from "lucide-react";
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

// Couleurs des tags technos
const tagColors = {
  // Python ecosystem
  Python: {
    bg: "rgba(60, 90, 60, 0.12)",
    text: "#3c5a3c",
    border: "rgba(60, 90, 60, 0.25)",
  },
  PySpark: {
    bg: "rgba(60, 90, 60, 0.12)",
    text: "#3c5a3c",
    border: "rgba(60, 90, 60, 0.25)",
  },

  // AI/ML
  TensorFlow: {
    bg: "rgba(180, 100, 50, 0.12)",
    text: "#b46432",
    border: "rgba(180, 100, 50, 0.25)",
  },
  "Deep Learning": {
    bg: "rgba(180, 100, 50, 0.12)",
    text: "#b46432",
    border: "rgba(180, 100, 50, 0.25)",
  },
  ML: {
    bg: "rgba(180, 100, 50, 0.12)",
    text: "#b46432",
    border: "rgba(180, 100, 50, 0.25)",
  },
  NLP: {
    bg: "rgba(180, 100, 50, 0.12)",
    text: "#b46432",
    border: "rgba(180, 100, 50, 0.25)",
  },
  YOLO: {
    bg: "rgba(180, 100, 50, 0.12)",
    text: "#b46432",
    border: "rgba(180, 100, 50, 0.25)",
  },
  IA: {
    bg: "rgba(180, 100, 50, 0.12)",
    text: "#b46432",
    border: "rgba(180, 100, 50, 0.25)",
  },

  // React/Frontend
  React: {
    bg: "rgba(59, 130, 246, 0.12)",
    text: "#3b82f6",
    border: "rgba(59, 130, 246, 0.25)",
  },
  Angular: {
    bg: "rgba(220, 38, 38, 0.12)",
    text: "#dc2626",
    border: "rgba(220, 38, 38, 0.25)",
  },
  JavaScript: {
    bg: "rgba(234, 179, 8, 0.12)",
    text: "#ca8a04",
    border: "rgba(234, 179, 8, 0.25)",
  },

  // GCP/Cloud
  GCP: {
    bg: "rgba(100, 116, 139, 0.12)",
    text: "#64748b",
    border: "rgba(100, 116, 139, 0.25)",
  },
  "Cloud Storage": {
    bg: "rgba(100, 116, 139, 0.12)",
    text: "#64748b",
    border: "rgba(100, 116, 139, 0.25)",
  },

  // Data/BigQuery
  BigQuery: {
    bg: "rgba(34, 150, 94, 0.12)",
    text: "#22965e",
    border: "rgba(34, 150, 94, 0.25)",
  },
  "Delta Lake": {
    bg: "rgba(34, 150, 94, 0.12)",
    text: "#22965e",
    border: "rgba(34, 150, 94, 0.25)",
  },
  "Data Engineering": {
    bg: "rgba(34, 150, 94, 0.12)",
    text: "#22965e",
    border: "rgba(34, 150, 94, 0.25)",
  },
  "Data Analysis": {
    bg: "rgba(34, 150, 94, 0.12)",
    text: "#22965e",
    border: "rgba(34, 150, 94, 0.25)",
  },
  ETL: {
    bg: "rgba(34, 150, 94, 0.12)",
    text: "#22965e",
    border: "rgba(34, 150, 94, 0.25)",
  },
  "Big Data": {
    bg: "rgba(34, 150, 94, 0.12)",
    text: "#22965e",
    border: "rgba(34, 150, 94, 0.25)",
  },

  // Airflow/Orchestration
  Airflow: {
    bg: "rgba(202, 138, 4, 0.12)",
    text: "#ca8a04",
    border: "rgba(202, 138, 4, 0.25)",
  },

  // Spark/Databricks
  "Apache Spark": {
    bg: "rgba(234, 88, 12, 0.12)",
    text: "#ea580c",
    border: "rgba(234, 88, 12, 0.25)",
  },
  Spark: {
    bg: "rgba(234, 88, 12, 0.12)",
    text: "#ea580c",
    border: "rgba(234, 88, 12, 0.25)",
  },
  Databricks: {
    bg: "rgba(234, 88, 12, 0.12)",
    text: "#ea580c",
    border: "rgba(234, 88, 12, 0.25)",
  },

  // Databases
  MongoDB: {
    bg: "rgba(34, 197, 94, 0.12)",
    text: "#16a34a",
    border: "rgba(34, 197, 94, 0.25)",
  },
  MySQL: {
    bg: "rgba(59, 130, 246, 0.12)",
    text: "#3b82f6",
    border: "rgba(59, 130, 246, 0.25)",
  },
  SQL: {
    bg: "rgba(59, 130, 246, 0.12)",
    text: "#3b82f6",
    border: "rgba(59, 130, 246, 0.25)",
  },
  SGBD: {
    bg: "rgba(59, 130, 246, 0.12)",
    text: "#3b82f6",
    border: "rgba(59, 130, 246, 0.25)",
  },

  // Backend
  "Node.js": {
    bg: "rgba(34, 197, 94, 0.12)",
    text: "#16a34a",
    border: "rgba(34, 197, 94, 0.25)",
  },
  Express: {
    bg: "rgba(100, 116, 139, 0.12)",
    text: "#64748b",
    border: "rgba(100, 116, 139, 0.25)",
  },
  Laravel: {
    bg: "rgba(239, 68, 68, 0.12)",
    text: "#ef4444",
    border: "rgba(239, 68, 68, 0.25)",
  },
  PHP: {
    bg: "rgba(139, 92, 246, 0.12)",
    text: "#8b5cf6",
    border: "rgba(139, 92, 246, 0.25)",
  },

  // Other
  IoT: {
    bg: "rgba(14, 165, 233, 0.12)",
    text: "#0ea5e9",
    border: "rgba(14, 165, 233, 0.25)",
  },
  Streamlit: {
    bg: "rgba(239, 68, 68, 0.12)",
    text: "#ef4444",
    border: "rgba(239, 68, 68, 0.25)",
  },
  Jupyter: {
    bg: "rgba(234, 88, 12, 0.12)",
    text: "#ea580c",
    border: "rgba(234, 88, 12, 0.25)",
  },
  SVM: {
    bg: "rgba(139, 92, 246, 0.12)",
    text: "#8b5cf6",
    border: "rgba(139, 92, 246, 0.25)",
  },
  TextBlob: {
    bg: "rgba(139, 92, 246, 0.12)",
    text: "#8b5cf6",
    border: "rgba(139, 92, 246, 0.25)",
  },
  Plotly: {
    bg: "rgba(59, 130, 246, 0.12)",
    text: "#3b82f6",
    border: "rgba(59, 130, 246, 0.25)",
  },
  OpenCV: {
    bg: "rgba(34, 197, 94, 0.12)",
    text: "#16a34a",
    border: "rgba(34, 197, 94, 0.25)",
  },
  CornerstoneJS: {
    bg: "rgba(59, 130, 246, 0.12)",
    text: "#3b82f6",
    border: "rgba(59, 130, 246, 0.25)",
  },
  "Full Stack": {
    bg: "rgba(139, 92, 246, 0.12)",
    text: "#8b5cf6",
    border: "rgba(139, 92, 246, 0.25)",
  },
  "Python QT": {
    bg: "rgba(60, 90, 60, 0.12)",
    text: "#3c5a3c",
    border: "rgba(60, 90, 60, 0.25)",
  },
  Agile: {
    bg: "rgba(100, 116, 139, 0.12)",
    text: "#64748b",
    border: "rgba(100, 116, 139, 0.25)",
  },
  HTML: {
    bg: "rgba(234, 88, 12, 0.12)",
    text: "#ea580c",
    border: "rgba(234, 88, 12, 0.25)",
  },
  CSS: {
    bg: "rgba(59, 130, 246, 0.12)",
    text: "#3b82f6",
    border: "rgba(59, 130, 246, 0.25)",
  },
};

// Couleur par défaut pour les tags non définis
const defaultTagColor = {
  bg: "rgba(100, 116, 139, 0.12)",
  text: "#64748b",
  border: "rgba(100, 116, 139, 0.25)",
};

function getTagColor(tag) {
  return tagColors[tag] || defaultTagColor;
}

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
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "AquaSense",
      description:
        "Station IoT intelligente pour surveiller la qualité de l'eau en temps réel avec analyse prédictive et alertes automatiques.",
      category: "data",
      tags: ["Python", "Streamlit", "IoT", "Data Analysis"],
      github: "https://github.com/yacinefalldiagne",
      demo: "https://youtube.com/watch?v=demo1",
      image: aqImage,
    },
    {
      title: "Cloud Data Pipeline – GCP",
      description:
        "Pipeline data end-to-end sur Google Cloud : ingestion depuis API publique, orchestration avec Airflow, stockage BigQuery.",
      category: "data",
      tags: ["Python", "GCP", "Airflow", "BigQuery", "Cloud Storage", "ETL"],
      github: "https://github.com/yacinefalldiagne/gcp-data-pipeline",
      demo: "https://youtube.com/watch?v=demo2",
      image: gcpImage,
    },
    {
      title: "Big Data Pipeline – Spark & Airflow",
      description:
        "Pipeline Big Data distribué pour le traitement massif de données : ingestion batch, transformation avec Apache Spark.",
      category: "data",
      tags: [
        "PySpark",
        "Apache Spark",
        "Airflow",
        "Big Data",
        "ETL",
        "Data Engineering",
      ],
      github: "https://github.com/yacinefalldiagne/spark-airflow-pipeline",
      demo: "https://youtube.com/watch?v=demo3",
      image: bigImage,
    },
    {
      title: "Distributed Data Pipeline – Databricks",
      description:
        "Pipeline de traitement de données massives avec Apache Spark sur Databricks, orchestré par Airflow.",
      category: "data",
      tags: ["Python", "Spark", "Databricks", "Airflow", "Delta Lake"],
      github: "https://github.com/yacinefalldiagne/databricks-spark-pipeline",
      demo: "https://youtube.com/watch?v=demo4",
      image: databricksImage,
    },
    {
      title: "Détection Malware ML",
      description:
        "Système de détection de malwares utilisant des algorithmes ML (SVM, KNN, Decision Tree) avec analyse des performances.",
      category: "ai",
      tags: ["Python", "ML", "SVM", "Jupyter"],
      github: "https://github.com/yacinefalldiagne/ProjetIA",
      demo: "https://youtube.com/watch?v=demo5",
      image: mImage,
    },
    {
      title: "Analyseur Sentiment",
      description:
        "Outil NLP pour analyser les sentiments sur Twitter avec détection de langue, traduction et visualisation interactive.",
      category: "ai",
      tags: ["Python", "NLP", "TextBlob", "Plotly"],
      github: "https://github.com/yacinefalldiagne/Analyseur_Sentiment",
      demo: "https://youtube.com/watch?v=demo6",
      image: sImage,
    },
    {
      title: "Hackathon RATP - Signalement Temps Réel",
      description:
        "Heatmap realtime de signalements RATP par ligne/incident/gravity, scraping social (Twitter/TikTok), chatbot trafic+meteo, QR client + vocal pour handicap.",
      category: "data",
      tags: ["n8n", "Azure OpenAI", "Apify", "Nuxt", "HeatMap", "Supabase"],
      github: "https://github.com/yacinefalldiagne/ratp-signalement-hackathon",
      demo: "https://youtube.com/watch?v=demo-hackathon",
      image: coverImage,
    },
    {
      title: "PlayMetrics – Analyse Sportive",
      description:
        "Application IA pour analyser les performances des joueurs : suivi individuel, détection de fatigue et recommandations.",
      category: "ai",
      tags: ["Python", "Deep Learning", "YOLO", "OpenCV"],
      github: "https://github.com/yacinefalldiagne/PlayMetrics",
      demo: "https://youtube.com/watch?v=demo7",
      image: pImage,
    },
    {
      title: "AutoEvalDB",
      description:
        "Plateforme intelligente d'évaluation automatisée des exercices SQL avec génération de rapports détaillés.",
      category: "web",
      tags: ["JavaScript", "Node.js", "SQL", "SGBD"],
      github: "https://github.com/yacinefalldiagne/Projet_SGBD_AutoEvalDB",
      demo: "https://youtube.com/watch?v=demo8",
      image: coverImage,
    },
    {
      title: "App Orthan DICOM",
      description:
        "Système médical pour gérer les images DICOM avec visualisation 3D, télé-radiologie et gestion patients.",
      category: "web",
      tags: ["React", "Node.js", "MongoDB", "CornerstoneJS"],
      github: "https://github.com/yacinefalldiagne/Gestion_Hopital",
      demo: "https://youtube.com/watch?v=demo9",
      image: appImage,
    },
    {
      title: "JamaalCouture",
      description:
        "Application web complète de gestion d'atelier de couture avec interface moderne et système de réservation.",
      category: "web",
      tags: ["JavaScript", "Node.js", "Express", "Full Stack"],
      github: "https://github.com/yacinefalldiagne/JamaalCouture",
      demo: "https://youtube.com/watch?v=demo10",
      image: jamaalImage,
    },
    {
      title: "Culture Générale Africaine",
      description:
        "Jeu web interactif sur l'Afrique avec quiz, classements et défis multijoueurs.",
      category: "web",
      tags: ["Laravel", "PHP", "JavaScript", "MySQL"],
      github: "https://github.com/yacinefalldiagne/Afrikulture",
      demo: "https://youtube.com/watch?v=demo11",
      image: AfrikImage,
    },
    {
      title: "S.E.C. - Smart Ecological Conservation",
      description:
        "Système IA pour surveiller et protéger les ressources naturelles, focus déforestation.",
      category: "ai",
      tags: ["Python", "IA", "Data Analysis"],
      github: "https://github.com/yacinefalldiagne/SEC",
      demo: "https://youtube.com/watch?v=demo12",
      image: secImage,
    },
    {
      title:
        "Comparative Analysis of Maritime vs Road Transport – France Trade",
      description:
        "Analyse économique et environnementale du transport maritime vs routier avec dashboards interactifs (Tableau, Dataiku, Data Analysis, DataViz).",
      category: "data",
      tags: ["Tableau", "Dataiku", "Data Analysis", "DataViz"],
      github: "https://github.com/yacinefalldiagne/maritime-road-analysis",
      demo: "https://youtube.com/watch?v=demo15",
      image: coverImage,
    },
    {
      title: "Gestion Efficacité Enseignements",
      description:
        "Plateforme web/desktop pour gérer l'efficacité des enseignements avec Angular, Python QT et MySQL.",
      category: "web",
      tags: ["Angular", "Python QT", "MySQL", "Agile"],
      github:
        "https://github.com/yacinefalldiagne/Gestion_Effectivite_Enseignements",
      demo: "https://youtube.com/watch?v=demo13",
      image: eduImage,
    },
    {
      title: "MGLSI News - Site d'Actualités MVC",
      description:
        "Site d'actualités en PHP MVC, consultation, recherche et navigation par catégories avec MySQL.",
      category: "web",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/yacinefalldiagne/MGLSI_NEWS",
      demo: "https://youtube.com/watch?v=demo14",
      image: glsiImage,
    },
  ];

  const filters = [
    { id: "all", label: "Tous", count: projects.length },
    {
      id: "ai",
      label: "IA & ML",
      count: projects.filter((p) => p.category === "ai").length,
    },
    {
      id: "data",
      label: "Data & IoT",
      count: projects.filter((p) => p.category === "data").length,
    },
    {
      id: "web",
      label: "Web",
      count: projects.filter((p) => p.category === "web").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const categoryColors = { data: "#2563EB", ai: "#8b5cf6", web: "#10b981" };
  const categoryLabels = { ai: "IA & ML", data: "Data", web: "Web" };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #f8fafc 0%, #EEF2F7 50%, #f8fafc 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 right-0 w-[35rem] h-[35rem] rounded-full blur-[160px]"
          style={{ backgroundColor: "rgba(37,99,235,0.05)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[25rem] h-[25rem] rounded-full blur-[140px]"
          style={{ backgroundColor: "rgba(139,92,246,0.04)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: "rgba(37,99,235,0.06)",
              border: "1px solid rgba(37,99,235,0.18)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: "#2563EB",
                boxShadow: "0 0 8px #2563EB",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "#2563EB" }}
            >
              Portfolio
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ color: "#0f172a" }}
          >
            {"Mes "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projets
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-[15px]"
            style={{ color: "#475569" }}
          >
            Une selection de mes meilleurs projets en IA, Data Science et
            Developpement Web
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div
              className="w-12 h-[2px] rounded-full"
              style={{ backgroundColor: "#2563EB" }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#2563EB" }}
            />
            <div
              className="w-12 h-[2px] rounded-full"
              style={{ backgroundColor: "#2563EB" }}
            />
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
                      background: "#2563EB",
                      color: "#fff",
                      boxShadow: "0 8px 25px rgba(37,99,235,0.3)",
                    }
                  : {
                      backgroundColor: "#EEF2F7",
                      color: "#475569",
                      border: "1px solid rgba(37,99,235,0.12)",
                    }
              }
            >
              {filter.label}
              <span className="ml-2 text-xs opacity-70">{filter.count}</span>
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
                backgroundColor: "#EEF2F7",
                border: "1px solid rgba(37,99,235,0.08)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(25px)",
                transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 60}ms`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.1), 0 0 0 1px ${categoryColors[project.category] || "#2563EB"}30`;
                e.currentTarget.style.borderColor = `${categoryColors[project.category] || "#2563EB"}35`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                e.currentTarget.style.borderColor = "rgba(37,99,235,0.08)";
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 60%)",
                    opacity: 0.5,
                  }}
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-semibold"
                  style={{
                    backgroundColor: `${categoryColors[project.category]}18`,
                    color: categoryColors[project.category],
                    border: `1px solid ${categoryColors[project.category]}35`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {categoryLabels[project.category]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#0f172a" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-2"
                    style={{ color: "#475569" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tags avec couleurs */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, i) => {
                    const colors = getTagColor(tag);
                    return (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[11px] rounded-md font-medium"
                        style={{
                          backgroundColor: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                        }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                  {project.tags.length > 4 && (
                    <span
                      className="px-2.5 py-1 text-[11px] rounded-md font-medium"
                      style={{ color: "#94a3b8" }}
                    >
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Buttons - Code et Demo */}
                <div className="flex gap-3 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(37,99,235,0.07)",
                      color: "#2563EB",
                      border: "1px solid rgba(37,99,235,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#2563EB";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = "#2563EB";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(37,99,235,0.07)";
                      e.currentTarget.style.color = "#2563EB";
                      e.currentTarget.style.borderColor = "rgba(37,99,235,0.2)";
                    }}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                    style={{ background: "#2563EB", color: "#fff" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#1d4ed8";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(37,99,235,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#2563EB";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Play size={16} />
                    Demo
                  </a>
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
              backgroundColor: "#EEF2F7",
              border: "1px solid rgba(37,99,235,0.2)",
              color: "#475569",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#2563EB";
              e.currentTarget.style.color = "#2563EB";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(37,99,235,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(37,99,235,0.2)";
              e.currentTarget.style.color = "#475569";
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

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      `}</style>
    </section>
  );
}

export default Projects;
