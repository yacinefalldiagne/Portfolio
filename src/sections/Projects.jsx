import { useState } from "react";
import { Github, ExternalLink, Code2, Brain, Database } from "lucide-react";
import secImage from "../assets/sec.png";
import mImage from "../assets/M.png";
import pImage from "../assets/play.png";
import sImage from "../assets/s.png";
import aqImage from "../assets/aquasens.png";
import gcpImage from "../assets/gcp.png";
import bigImage from "../assets/big.png";
import databricksImage from "../assets/databricks.png";
import jamaalImage from "../assets/jamaal.png";
import appImage from "../assets/app.png";
import glsiImage from "../assets/glsi.png";
import coverImage from "../assets/cover.png";
import AfrikImage from "../assets/afrik1.png";
import eduImage from "../assets/edu.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "AquaSense",
      description:
        "Station IoT intelligente pour surveiller la qualité de l'eau en temps réel avec analyse prédictive et alertes automatiques.",
      category: "data",
      tags: ["Python", "Streamlit", "IoT", "Data Analysis"],
      github: "https://github.com/yacinefalldiagne",
      image: aqImage,
    },
    {
      title: "Cloud Data Pipeline – GCP",
      description:
        "Pipeline data end-to-end sur Google Cloud : ingestion depuis API publique, orchestration avec Airflow, stockage BigQuery et visualisation des données météo.",
      category: "data",
      tags: ["Python", "GCP", "Airflow", "BigQuery", "Cloud Storage", "ETL"],
      github: "https://github.com/yacinefalldiagne/gcp-data-pipeline",
      image: gcpImage,
    },
    {
      title: "Big Data Pipeline – Spark & Airflow",
      description:
        "Pipeline Big Data distribué pour le traitement massif de données : ingestion batch, transformation avec Apache Spark, orchestration via Airflow et stockage analytique.",
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
      image: bigImage,
    },
    {
      title: "Distributed Data Pipeline – Databricks",
      description:
        "Pipeline de traitement de données massives avec Apache Spark sur Databricks, orchestré par Airflow, incluant ingestion automatisée, transformations distribuées et stockage analytique.",
      category: "data",
      tags: ["Python", "Spark", "Databricks", "Airflow", "Delta Lake"],
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com/yacinefalldiagne/databricks-spark-pipeline",
      image: databricksImage,
    },
    {
      title: "Détection Malware ML",
      description:
        "Système de détection de malwares utilisant des algorithmes ML (SVM, KNN, Decision Tree) avec analyse des performances.",
      category: "ai",
      tags: ["Python", "ML", "SVM", "Jupyter"],
      github: "https://github.com/yacinefalldiagne/ProjetIA",
      image: mImage,
    },
    {
      title: "Analyseur Sentiment",
      description:
        "Outil NLP pour analyser les sentiments sur Twitter avec détection de langue, traduction et visualisation interactive.",
      category: "ai",
      tags: ["Python", "NLP", "TextBlob", "Plotly"],
      github: "https://github.com/yacinefalldiagne/Analyseur_Sentiment",
      image: sImage,
    },
    {
      title: "PlayMetrics – Analyse de Performance Sportive",
      description:
        "Application IA pour analyser et améliorer les performances des joueurs : suivi individuel et collectif, détection de fatigue et recommandations d'entraînement personnalisées.",
      category: "ai",
      tags: ["Python", "Deep Learning", "YOLO", "OpenCV"],
      github: "https://github.com/yacinefalldiagne/PlayMetrics",
      image: pImage,
    },

    {
      title: "AutoEvalDB",
      description:
        "Plateforme intelligente d'évaluation automatisée des exercices SQL avec génération de rapports détaillés.",
      category: "web",
      tags: ["JavaScript", "Node.js", "SQL", "SGBD"],
      github: "https://github.com/yacinefalldiagne/Projet_SGBD_AutoEvalDB",
      image: coverImage,
    },
    {
      title: "App Orthan DICOM",
      description:
        "Système médical pour gérer les images DICOM avec visualisation 3D, télé-radiologie et gestion des dossiers patients.",
      category: "web",
      tags: ["React", "Node.js", "MongoDB", "CornerstoneJS"],
      github: "https://github.com/yacinefalldiagne/Gestion_Hopital",
      image: appImage,
    },
    {
      title: "JamaalCouture",
      description:
        "Application web complète de gestion d'atelier de couture avec interface moderne et système de réservation.",
      category: "web",
      tags: ["JavaScript", "Node.js", "Express", "Full Stack"],
      icon: <Code2 className="w-6 h-6" />,
      github: "https://github.com/yacinefalldiagne/JamaalCouture",
      image: jamaalImage,
    },
    {
      title: "Plateforme de jeu de culture générale Africaine",
      description:
        "Jeu web interactif de culture générale sur l'Afrique avec système de quiz, classements et défis multijoueurs pour promouvoir la connaissance du continent africain.",
      category: "web",
      tags: ["Laravel", "PHP", "JavaScript", "MySQL"],
      icon: <Code2 className="w-6 h-6" />,
      github: "https://github.com/yacinefalldiagne/Afrikulture",
      image: AfrikImage,
    },
    {
      title: "S.E.C. - Smart Ecological Conservation",
      description:
        "Système IA pour surveiller et protéger les ressources naturelles, avec un focus sur la déforestation.",
      category: "ai",
      tags: ["Python", "IA", "Data Analysis"],
      github: "https://github.com/yacinefalldiagne/SEC",
      image: secImage,
    },
    {
      title: "Gestion de l'Efficacité des Enseignements",
      description:
        "Plateforme web et desktop pour gérer l'efficacité des enseignements avec Angular FrontOffice, Python QT BackOffice et MySQL, intégrant génération de documents QR.",
      category: "web",
      tags: ["Angular", "Python QT", "MySQL", "Agile"],
      github:
        "https://github.com/yacinefalldiagne/Gestion_Effectivite_Enseignements",
      image: eduImage,
    },
    {
      title: "MGLSI News - Site d'Actualités MVC",
      description:
        "Site d'actualités développé en PHP suivant le pattern MVC, permettant consultation, recherche et navigation par catégories avec base MySQL.",
      category: "web",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      icon: <Code2 className="w-6 h-6" />,
      github: "https://github.com/yacinefalldiagne/MGLSI_NEWS",
      image: glsiImage,
    },
  ];

  const filters = [
    { id: "all", label: "Tous les projets", count: projects.length },
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
      label: "Web & Full Stack",
      count: projects.filter((p) => p.category === "web").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f5f5f0 0%, #ffffff 50%, #f5f5f0 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll animated">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#1a2b3d" }}
          >
            Mes{" "}
            <span style={{ color: "oklch(42.1% 0.095 57.708)" }}>Projets</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "#000000" }}>
            Une sélection de mes meilleurs projets en IA, Data Science et
            Développement Web
          </p>
          <div
            className="w-20 h-1 mx-auto rounded-full mt-4"
            style={{
              backgroundColor: "oklch(42.1% 0.095 57.708)",
              height: "4px",
            }}
          ></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll animated">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all`}
              style={
                activeFilter === filter.id
                  ? {
                      backgroundColor: "oklch(42.1% 0.095 57.708)",
                      color: "#fff",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    }
                  : {
                      backgroundColor: "oklch(42.1% 0.095 57.708 / 0.1)",
                      color: "oklch(42.1% 0.095 57.708)",
                      border: "2px solid #d4d8dd",
                    }
              }
            >
              {filter.label}
              <span
                style={{
                  color:
                    activeFilter === filter.id
                      ? "rgba(255,255,255,0.8)"
                      : "oklch(42.1% 0.095 57.708)",
                  marginLeft: "8px",
                }}
              >
                ({filter.count})
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden transition-all hover-lift animate-on-scroll bounce-in animated stagger-${
                (index % 3) + 1
              }`}
              style={{
                backgroundColor: "#fff",
                border: "2px solid #d4d8dd",
                boxShadow: "0 2px 8px rgba(26, 43, 61, 0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "oklch(42.1% 0.095 57.708)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#d4d8dd";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(26, 43, 61, 0.05)";
              }}
            >
              {/* Project Header - Image claire ou gradient */}
              {project.image ? (
                // Pour les projets avec image
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/50 rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></div>
                </div>
              ) : (
                // Pour les projets avec gradient et icône
                <div
                  className="relative h-40 p-6 flex items-center justify-center overflow-hidden"
                  style={{ background: project.color }}
                >
                  <div
                    className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all heartbeat"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    {project.icon}
                  </div>
                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3
                    className="text-xl font-bold mb-2 group-hover:opacity-80 transition-colors"
                    style={{ color: "#1a2b3d" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6b7280" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: "oklch(42.1% 0.095 57.708 / 0.1)",
                        color: "oklch(42.1% 0.095 57.708)",
                        border: "1px solid #d4d8dd",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all group/btn"
                    style={{
                      backgroundColor: "oklch(42.1% 0.095 57.708 / 0.1)",
                      color: "oklch(42.1% 0.095 57.708)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor =
                        "oklch(42.1% 0.095 57.708)";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor =
                        "oklch(42.1% 0.095 57.708 / 0.1)";
                      e.target.style.color = "oklch(42.1% 0.095 57.708)";
                    }}
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all"
                      style={{
                        backgroundColor: "oklch(42.1% 0.095 57.708)",
                        color: "#fff",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12 animate-on-scroll animated">
          <a
            href="https://github.com/yacinefalldiagne"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all group"
            style={{
              backgroundColor: "#fff",
              border: "2px solid #d4d8dd",
              color: "#1a2b3d",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "oklch(42.1% 0.095 57.708)";
              e.target.style.backgroundColor =
                "oklch(42.1% 0.095 57.708 / 0.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#d4d8dd";
              e.target.style.backgroundColor = "#fff";
            }}
          >
            <Github size={20} />
            <span>Voir tous mes projets sur GitHub</span>
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
