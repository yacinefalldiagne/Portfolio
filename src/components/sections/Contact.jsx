import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const sectionRef = useRef(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "dyacinefall@gmail.com",
      href: "mailto:dyacinefall@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Telephone",
      value: "+33 75 38 96 766",
      href: "tel:+33753896766",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Adresse",
      value: "27 Rue des Marjoberts, Cergy",
      href: null,
    },
  ];

  const inputStyle = (fieldName) => ({
    backgroundColor: focusedField === fieldName ? "#fff" : "#faf8f5",
    border: focusedField === fieldName ? "2px solid #c49a6c" : "2px solid #e8e3dd",
    color: "#1a2b3d",
    boxShadow: focusedField === fieldName ? "0 0 0 4px rgba(196,154,108,0.1)" : "none",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0f1b2a" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full blur-[150px]"
          style={{ backgroundColor: "rgba(196,154,108,0.06)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[25rem] h-[25rem] rounded-full blur-[130px]"
          style={{ backgroundColor: "oklch(42.1% 0.095 57.708 / 0.04)" }}
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

      {/* Success Toast */}
      {showSuccess && (
        <div
          className="fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #1a2b3d, #243447)",
            border: "1px solid rgba(196,154,108,0.3)",
            animation: "contactSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <CheckCircle size={20} style={{ color: "#4ade80" }} />
          <span style={{ color: "#e2e8f0" }} className="font-medium">
            Message envoye avec succes !
          </span>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
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
            Contact
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ color: "#e2e8f0" }}
          >
            {"Me "}
            <span
              style={{
                background: "linear-gradient(135deg, #c49a6c, #e8c9a0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              contacter
            </span>
          </h2>
          <p className="text-[15px]" style={{ color: "#7b8fa3" }}>
            {"N\u2019h\u00e9sitez pas \u00e0 me contacter pour discuter de vos projets"}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "#c49a6c" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#c49a6c" }} />
            <div className="w-12 h-[2px] rounded-full" style={{ backgroundColor: "#c49a6c" }} />
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Info - 2 cols */}
          <div
            className="md:col-span-2 flex flex-col gap-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
            }}
          >
            {contactItems.map((item, index) => {
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={index}
                  {...(item.href ? { href: item.href } : {})}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(196,154,108,0.3)";
                    e.currentTarget.style.backgroundColor = "rgba(196,154,108,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "rgba(196,154,108,0.1)",
                      color: "#c49a6c",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "#5a6a7a" }}>
                      {item.label}
                    </p>
                    <p className="font-medium text-sm" style={{ color: "#c8d6e5" }}>
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}

            {/* Social Links */}
            <div
              className="pt-6 mt-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-xs mb-4 tracking-wide uppercase" style={{ color: "#5a6a7a" }}>
                Retrouvez-moi sur
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: <Linkedin size={20} />,
                    href: "https://linkedin.com/in/yacinefalldiagne",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Github size={20} />,
                    href: "https://github.com/yacinefalldiagne",
                    label: "GitHub",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#7b8fa3",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#c49a6c";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = "#c49a6c";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(196,154,108,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.color = "#7b8fa3";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - 3 cols */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 flex flex-col gap-5 p-8 rounded-2xl"
            style={{
              backgroundColor: "#fff",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 400ms",
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#1a2b3d" }}>
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Votre nom"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                  style={inputStyle("name")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "#1a2b3d" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="votre@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                  style={inputStyle("email")}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1a2b3d" }}>
                Sujet
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                placeholder="Sujet de votre message"
                required
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                style={inputStyle("subject")}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#1a2b3d" }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                placeholder="Votre message..."
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl text-sm resize-none focus:outline-none"
                style={inputStyle("message")}
              />
            </div>

            <button
              type="submit"
              className="w-full font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 group hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #1a2b3d, #243447)",
                color: "#c49a6c",
                boxShadow: "0 8px 30px rgba(26,43,61,0.3)",
              }}
            >
              <Send
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes contactSlideIn {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
