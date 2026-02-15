import { useState, useEffect, useRef } from "react";

const categories = [
  { id: "frontend", label: "Frontend", color: "#3b82f6", glow: "rgba(59,130,246,0.15)" },
  { id: "backend", label: "Backend", color: "#10b981", glow: "rgba(16,185,129,0.15)" },
  { id: "database", label: "Database", color: "#f59e0b", glow: "rgba(245,158,11,0.15)" },
  { id: "tools", label: "Tools", color: "#8b5cf6", glow: "rgba(139,92,246,0.15)" },
  { id: "automation", label: "Automation & No-Code", color: "#ec4899", glow: "rgba(236,72,153,0.15)" },
  { id: "data", label: "Data & AI", color: "#c49a6c", glow: "rgba(196,154,108,0.15)" },
];

const skills = {
  frontend: [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  ],
  database: [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ],
  data: [
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg" },
    { name: "Tableau", icon: "https://img.icons8.com/color/1200/tableau-software.jpg" },
    { name: "Dataiku", icon: "https://cloudfront-eu-central-1.images.arcpublishing.com/infopro/TOUM64EQE5O3XMFABJ4NCVSJDI.png" },
    { name: "Octoparse", icon: "https://www.dockhunt.com/_next/image?url=https%3A%2F%2Fdockhunt-images.nyc3.cdn.digitaloceanspaces.com%2Fb4c6b2e7-528c-4d09-a548-44bd0dc375b3&w=256&q=75" },
  ],
  automation: [
    { name: "Airtable", icon: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg" },
    { name: "Brevo", icon: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Brevo-Logo.png" },
    { name: "Make", icon: "https://cdn.lafabriquedunet.fr/software/logos/63/logo-make-1764919364.webp" },
    { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
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

  const activeColor = categories.find((c) => c.id === activeCategory)?.color || "#c49a6c";
  const activeGlow = categories.find((c) => c.id === activeCategory)?.glow || "rgba(196,154,108,0.15)";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Sliding indicator for tabs
  useEffect(() => {
    if (!tabsRef.current) return;
    const activeBtn = tabsRef.current.querySelector(`[data-cat="${activeCategory}"]`);
    if (activeBtn) {
      const parentRect = tabsRef.current.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      setIndicatorStyle({
        left: btnRect.left - parentRect.left,
        width: btnRect.width,
      });
    }
  }, [activeCategory, isVisible]);

  // Staggered card animation on category change
  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => setAnimateCards(true), 80);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const totalSkills = Object.values(skills).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0c1824 0%, #0f1f2e 50%, #0c1824 100%)" }}
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-20%] right-[-10%] w-[50rem] h-[50rem] rounded-full blur-[200px] transition-all duration-[2000ms]"
          style={{ backgroundColor: activeGlow, opacity: 0.4 }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] rounded-full blur-[180px] transition-all duration-[2000ms]"
          style={{ backgroundColor: activeGlow, opacity: 0.2 }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
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
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
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

          <h2 className="text-4xl md:text-6xl font-bold mb-5" style={{ color: "#f0ece6" }}>
            Mon arsenal{" "}
            <span
              className="inline-block"
              style={{
                background: `linear-gradient(135deg, ${activeColor}, ${activeColor}99)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              technique
            </span>
          </h2>

          <p className="text-base max-w-md mx-auto" style={{ color: "#8899aa" }}>
            {totalSkills}+ technologies et outils que je maitrise pour donner vie a vos projets
          </p>
        </div>

        {/* Tabs with sliding indicator */}
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
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Sliding background indicator */}
            <div
              className="absolute top-1.5 h-[calc(100%-12px)] rounded-xl z-0"
              style={{
                left: indicatorStyle.left || 0,
                width: indicatorStyle.width || 0,
                background: `linear-gradient(135deg, ${activeColor}20, ${activeColor}10)`,
                border: `1px solid ${activeColor}40`,
                boxShadow: `0 0 20px ${activeColor}15, inset 0 1px 0 ${activeColor}15`,
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
                  color: activeCategory === cat.id ? cat.color : "#667788",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
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
              onMouseEnter={() => setHoveredCard(`${activeCategory}-${skill.name}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow behind card on hover */}
              <div
                className="absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500"
                style={{
                  backgroundColor: activeColor,
                  opacity: hoveredCard === `${activeCategory}-${skill.name}` ? 0.15 : 0,
                }}
              />

              <div
                className="relative p-6 rounded-2xl transition-all duration-500 overflow-hidden"
                style={{
                  backgroundColor: hoveredCard === `${activeCategory}-${skill.name}`
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0.02)",
                  border: `1px solid ${
                    hoveredCard === `${activeCategory}-${skill.name}`
                      ? `${activeColor}50`
                      : "rgba(255,255,255,0.05)"
                  }`,
                  transform: hoveredCard === `${activeCategory}-${skill.name}`
                    ? "translateY(-6px)"
                    : "translateY(0)",
                }}
              >
                {/* Corner accent on hover */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${activeColor}20, transparent 70%)`,
                    opacity: hoveredCard === `${activeCategory}-${skill.name}` ? 1 : 0,
                  }}
                />

                <div className="flex flex-col items-center gap-4 relative z-10">
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-500"
                    style={{
                      backgroundColor: hoveredCard === `${activeCategory}-${skill.name}`
                        ? `${activeColor}12`
                        : "rgba(255,255,255,0.04)",
                      border: `1px solid ${
                        hoveredCard === `${activeCategory}-${skill.name}`
                          ? `${activeColor}30`
                          : "rgba(255,255,255,0.06)"
                      }`,
                      transform: hoveredCard === `${activeCategory}-${skill.name}`
                        ? "scale(1.1) rotate(-3deg)"
                        : "scale(1) rotate(0deg)",
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="object-contain w-9 h-9"
                      style={{
                        filter: hoveredCard === `${activeCategory}-${skill.name}`
                          ? "brightness(1.2) drop-shadow(0 0 8px rgba(255,255,255,0.15))"
                          : "brightness(0.85)",
                        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </div>

                  <span
                    className="text-sm font-semibold text-center transition-colors duration-300"
                    style={{
                      color: hoveredCard === `${activeCategory}-${skill.name}` ? "#f0ece6" : "#8899aa",
                    }}
                  >
                    {skill.name}
                  </span>

                  {/* Subtle line under name on hover */}
                  <div
                    className="h-[2px] rounded-full transition-all duration-500"
                    style={{
                      width: hoveredCard === `${activeCategory}-${skill.name}` ? "24px" : "0px",
                      backgroundColor: activeColor,
                      opacity: hoveredCard === `${activeCategory}-${skill.name}` ? 0.6 : 0,
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