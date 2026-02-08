import { useState } from "react";

const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools" },
  { id: "automation", label: "Automation & No-Code" },
  { id: "data", label: "Data & AI" },
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
      icon: "https://cdn.lafabriquedunet.fr/software/logos/63/logo-make-1764919364.webp",
    },
    {
      name: "Notion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
    },
  ],

};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll animated">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#1a2b3d' }}
          >
            Mon arsenal <span style={{ color: 'oklch(42.1% 0.095 57.708)' }}>technique</span>
          </h2>
          <p className="text-lg" style={{ color: '#6b7280' }}>
            Technologies et outils que je maîtrise
          </p>
          <div
            className="w-20 h-1 mx-auto rounded-full mt-6"
            style={{ 
              backgroundColor: 'oklch(42.1% 0.095 57.708)',
              height: '4px'
            }}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll animated">
          {categories.map((category, i) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300`}
              style={
                activeCategory === category.id
                  ? {
                      backgroundColor: 'oklch(42.1% 0.095 57.708)',
                      color: '#fff',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                    }
                  : {
                      backgroundColor: 'oklch(42.1% 0.095 57.708 / 0.1)',
                      color: 'oklch(42.1% 0.095 57.708)',
                      border: '2px solid #d4d8dd'
                    }
              }
              onMouseEnter={(e) => {
                if (activeCategory !== category.id) {
                  e.target.style.backgroundColor = 'oklch(42.1% 0.095 57.708 / 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category.id) {
                  e.target.style.backgroundColor = 'oklch(42.1% 0.095 57.708 / 0.1)';
                }
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className={`p-6 rounded-2xl shadow-lg transition-all hover-lift group animate-on-scroll flip-in animated stagger-${
                (index % 4) + 1
              }`}
              style={{ 
                backgroundColor: '#fff',
                border: '2px solid #d4d8dd',
                boxShadow: '0 2px 8px rgba(26, 43, 61, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'oklch(42.1% 0.095 57.708)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#d4d8dd';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(26, 43, 61, 0.05)';
              }}
            >
              <div className="flex flex-col items-center gap-4">
                <div 
                  className="w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all"
                  style={{ 
                    backgroundColor: '#f5f5f0',
                    border: '1px solid #d4d8dd'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'oklch(42.1% 0.095 57.708 / 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f5f5f0';
                  }}
                >
                  <img
                    src={
                      skill.icon ||
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect fill='%231f1f1f' width='48' height='48'/%3E%3C/svg%3E"
                    }
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect fill='%231f1f1f' width='48' height='48'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span 
                  className="text-sm font-medium text-center"
                  style={{ color: '#1a2b3d' }}
                >
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}