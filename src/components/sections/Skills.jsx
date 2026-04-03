import { useState, useEffect, useRef } from "react";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    id: "backend",
    label: "Backend",
    color: "#10b981",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    id: "database",
    label: "Database",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.15)",
  },
  {
    id: "tools",
    label: "Tools",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    id: "automation",
    label: "Automation & No-Code",
    color: "#ec4899",
    glow: "rgba(236,72,153,0.15)",
  },
  {
    id: "data",
    label: "Data & AI",
    color: "#2563EB",
    glow: "rgba(37,99,235,0.15)",
  },
];

const skills = {
  frontend: [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
  ],
  database: [
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Supabase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "IntelliJ",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "Playwright",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
    },
    {
      name: "Looping",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMCGhl3_dzBLnedn5q-Cim3oWYT3tlgodLA&s",
    },
    {
      name: "Multisim",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJmSOyLBtMDR4MNLJCIVnXXOsQYacOAWbAw&s",
    },
  ],
  data: [
    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "PyTorch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    },
    {
      name: "Pandas",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    },
    {
      name: "NumPy",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    },
    {
      name: "Jupyter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    },
    {
      name: "Power BI",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    },
    {
      name: "Excel",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
    },
    {
      name: "Tableau",
      icon: "https://img.icons8.com/color/1200/tableau-software.jpg",
    },
    {
      name: "Dataiku",
      icon: "https://cloudfront-eu-central-1.images.arcpublishing.com/infopro/TOUM64EQE5O3XMFABJ4NCVSJDI.png",
    },
    {
      name: "Azure openAI",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
    },
  ],
  automation: [
    {
      name: "Airtable",
      icon: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg",
    },
    {
      name: "Brevo",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Brevo-Logo.png",
    },
    {
      name: "Make",
      icon: "https://cdn.prod.website-files.com/5ddbac2fb824212da1b91350/673e0d90e165cb74f86b2086_Make-square-color-white-600x600.jpg",
    },
    {
      name: "Notion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
    },
    {
      name: "n8n",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/N8n-logo-new.svg/1280px-N8n-logo-new.svg.png",
    },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [isVisible, setIsVisible] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const tabsRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const activeColor =
    categories.find((c) => c.id === activeCategory)?.color || "#2563EB";
  const activeGlow =
    categories.find((c) => c.id === activeCategory)?.glow ||
    "rgba(37,99,235,0.15)";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!tabsRef.current) return;
    const activeBtn = tabsRef.current.querySelector(
      `[data-cat="${activeCategory}"]`,
    );
    if (activeBtn) {
      const parentRect = tabsRef.current.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      setIndicatorStyle({
        left: btnRect.left - parentRect.left,
        width: btnRect.width,
      });
    }
  }, [activeCategory, isVisible]);

  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => setAnimateCards(true), 80);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const totalSkills = Object.values(skills).reduce(
    (sum, arr) => sum + arr.length,
    0,
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #EEF2F7 50%, #ffffff 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-20%] right-[-10%] w-[50rem] h-[50rem] rounded-full blur-[200px] transition-all duration-[2000ms]"
          style={{ backgroundColor: activeGlow, opacity: 0.35 }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] rounded-full blur-[180px] transition-all duration-[2000ms]"
          style={{ backgroundColor: activeGlow, opacity: 0.2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold tracking-[0.2em] uppercase"
            style={{
              border: `1px solid ${activeColor}33`,
              color: activeColor,
              background: `${activeColor}0a`,
              transition: "all 0.8s ease",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: activeColor,
                boxShadow: `0 0 8px ${activeColor}`,
                transition: "all 0.8s ease",
              }}
            />
            Competences
          </div>

          <h2
            className="text-4xl md:text-6xl font-bold mb-5"
            style={{ color: "#0f172a" }}
          >
            Mon arsenal{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${activeColor}, ${activeColor}99)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                WebkitTextStroke: "1px #0f172a", // 👈 AJOUT MAGIQUE
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              technique
            </span>
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{ color: "#000000" }}
          >
            {totalSkills}+ technologies et outils que je maitrise pour donner
            vie a vos projets
          </p>
        </div>

        {/* Tabs */}
        <div
          className="relative mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
          }}
        >
          <div
            ref={tabsRef}
            className="relative flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl mx-auto w-fit"
            style={{
              backgroundColor: "#EEF2F7",
              border: "1px solid rgba(37,99,235,0.1)",
            }}
          >
            <div
              className="absolute top-1.5 h-[calc(100%-12px)] rounded-xl z-0"
              style={{
                left: indicatorStyle.left || 0,
                width: indicatorStyle.width || 0,
                background: `linear-gradient(135deg, ${activeColor}20, ${activeColor}10)`,
                border: `1px solid ${activeColor}40`,
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
            {categories.map((cat) => (
              <button
                key={cat.id}
                data-cat={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="relative z-10 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-300"
                style={{
                  color: activeCategory === cat.id ? cat.color : "#64748b",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={`${activeCategory}-${skill.name}`}
              className="relative group cursor-default"
              style={{
                opacity: animateCards ? 1 : 0,
                transform: animateCards
                  ? "translateY(0) scale(1)"
                  : "translateY(25px) scale(0.9)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 60}ms`,
              }}
              onMouseEnter={() =>
                setHoveredCard(`${activeCategory}-${skill.name}`)
              }
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="relative p-6 rounded-2xl transition-all duration-400 overflow-hidden"
                style={{
                  backgroundColor:
                    hoveredCard === `${activeCategory}-${skill.name}`
                      ? `${activeColor}10`
                      : "#EEF2F7",
                  border: `1px solid ${hoveredCard === `${activeCategory}-${skill.name}` ? `${activeColor}35` : "rgba(37,99,235,0.12)"}`,
                  boxShadow:
                    hoveredCard === `${activeCategory}-${skill.name}`
                      ? `0 12px 32px ${activeColor}15`
                      : "0 2px 8px rgba(0,0,0,0.04)",
                  transform:
                    hoveredCard === `${activeCategory}-${skill.name}`
                      ? "translateY(-6px)"
                      : "translateY(0)",
                }}
              >
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-400"
                    style={{
                      backgroundColor:
                        hoveredCard === `${activeCategory}-${skill.name}`
                          ? `${activeColor}15`
                          : "rgba(255,255,255,0.8)",
                      border: `1px solid ${hoveredCard === `${activeCategory}-${skill.name}` ? `${activeColor}30` : "rgba(37,99,235,0.1)"}`,
                      transform:
                        hoveredCard === `${activeCategory}-${skill.name}`
                          ? "scale(1.1) rotate(-3deg)"
                          : "scale(1) rotate(0deg)",
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="object-contain w-9 h-9"
                      style={{
                        filter:
                          hoveredCard === `${activeCategory}-${skill.name}`
                            ? "brightness(1.1)"
                            : "brightness(1.0)",
                        transition: "all 0.35s ease",
                      }}
                    />
                  </div>

                  <span
                    className="text-sm font-semibold text-center transition-colors duration-300"
                    style={{
                      color:
                        hoveredCard === `${activeCategory}-${skill.name}`
                          ? "#0f172a"
                          : "#334155",
                    }}
                  >
                    {skill.name}
                  </span>

                  <div
                    className="h-[2px] rounded-full transition-all duration-400"
                    style={{
                      width:
                        hoveredCard === `${activeCategory}-${skill.name}`
                          ? "24px"
                          : "0px",
                      backgroundColor: activeColor,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
