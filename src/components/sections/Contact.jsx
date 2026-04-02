import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  FileText,
} from "lucide-react";

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
      { threshold: 0.1 },
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

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/yacinefalldiagne",
      label: "LinkedIn",
      color: "#0077b5",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/yacinefalldiagne",
      label: "GitHub",
      color: "#333",
    },
  ];

  const inputFields = [
    {
      name: "name",
      label: "Nom",
      type: "text",
      placeholder: "Votre nom",
      icon: <User size={18} />,
      half: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "votre@email.com",
      icon: <Mail size={18} />,
      half: true,
    },
    {
      name: "subject",
      label: "Sujet",
      type: "text",
      placeholder: "Sujet de votre message",
      icon: <FileText size={18} />,
      half: false,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #f8fafc 0%, #EEF2F7 50%, #f8fafc 100%)",
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full blur-[150px]"
          style={{ backgroundColor: "rgba(37,99,235,0.06)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[25rem] h-[25rem] rounded-full blur-[130px]"
          style={{ backgroundColor: "rgba(139,92,246,0.04)" }}
        />
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <div
          className="fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl"
          style={{
            background: "#fff",
            border: "1px solid rgba(34,197,94,0.3)",
            animation: "contactSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(34,197,94,0.1)" }}
          >
            <CheckCircle size={18} style={{ color: "#22c55e" }} />
          </div>
          <div>
            <p className="font-semibold text-sm" style={{ color: "#0f172a" }}>
              Message envoye !
            </p>
            <p className="text-xs" style={{ color: "#64748b" }}>
              Je vous repondrai rapidement
            </p>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ color: "#0f172a" }}
          >
            {"Me "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              contacter
            </span>
          </h2>
          <p
            className="max-w-lg mx-auto text-[15px]"
            style={{ color: "#475569" }}
          >
            {
              "N'hesitez pas a me contacter pour discuter de vos projets ou opportunites"
            }
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

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info - 2 cols */}
          <div
            className="lg:col-span-2 flex flex-col gap-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
            }}
          >
            {/* Contact Card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(37,99,235,0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                className="text-sm font-semibold mb-5 tracking-wide uppercase"
                style={{ color: "#64748b" }}
              >
                Informations de contact
              </h3>
              <div className="flex flex-col gap-4">
                {contactItems.map((item, index) => {
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={index}
                      {...(item.href ? { href: item.href } : {})}
                      className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group"
                      style={{
                        backgroundColor: "rgba(37,99,235,0.02)",
                        border: "1px solid rgba(37,99,235,0.06)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(37,99,235,0.2)";
                        e.currentTarget.style.backgroundColor =
                          "rgba(37,99,235,0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(37,99,235,0.06)";
                        e.currentTarget.style.backgroundColor =
                          "rgba(37,99,235,0.02)";
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: "rgba(37,99,235,0.08)",
                          color: "#2563EB",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p
                          className="text-xs mb-0.5"
                          style={{ color: "#94a3b8" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="font-medium text-sm"
                          style={{ color: "#334155" }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            {/* Social Links Card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(37,99,235,0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                className="text-sm font-semibold mb-5 tracking-wide uppercase"
                style={{ color: "#64748b" }}
              >
                Retrouvez-moi sur
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: "rgba(37,99,235,0.04)",
                      border: "1px solid rgba(37,99,235,0.1)",
                      color: "#475569",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = social.color;
                      e.currentTarget.style.boxShadow = `0 8px 24px ${social.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(37,99,235,0.04)";
                      e.currentTarget.style.color = "#475569";
                      e.currentTarget.style.borderColor = "rgba(37,99,235,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {social.icon}
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - 3 cols */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 flex flex-col gap-5 p-8 rounded-2xl"
            style={{
              backgroundColor: "#fff",
              border: "1px solid rgba(37,99,235,0.08)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 400ms",
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {inputFields
                .filter((f) => f.half)
                .map((field) => (
                  <div key={field.name}>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#334155" }}
                    >
                      {field.label}
                    </label>
                    <div className="relative">
                      <div
                        className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300"
                        style={{
                          color:
                            focusedField === field.name ? "#2563EB" : "#94a3b8",
                        }}
                      >
                        {field.icon}
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        placeholder={field.placeholder}
                        required
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all duration-300"
                        style={{
                          backgroundColor:
                            focusedField === field.name ? "#fff" : "#f8fafc",
                          border:
                            focusedField === field.name
                              ? "2px solid #2563EB"
                              : "2px solid #e2e8f0",
                          color: "#1e293b",
                          boxShadow:
                            focusedField === field.name
                              ? "0 0 0 4px rgba(37,99,235,0.1)"
                              : "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>

            {inputFields
              .filter((f) => !f.half)
              .map((field) => (
                <div key={field.name}>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#334155" }}
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    <div
                      className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300"
                      style={{
                        color:
                          focusedField === field.name ? "#2563EB" : "#94a3b8",
                      }}
                    >
                      {field.icon}
                    </div>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={field.placeholder}
                      required
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all duration-300"
                      style={{
                        backgroundColor:
                          focusedField === field.name ? "#fff" : "#f8fafc",
                        border:
                          focusedField === field.name
                            ? "2px solid #2563EB"
                            : "2px solid #e2e8f0",
                        color: "#1e293b",
                        boxShadow:
                          focusedField === field.name
                            ? "0 0 0 4px rgba(37,99,235,0.1)"
                            : "none",
                      }}
                    />
                  </div>
                </div>
              ))}

            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: "#334155" }}
              >
                Message
              </label>
              <div className="relative">
                <div
                  className="absolute left-4 top-4 transition-colors duration-300"
                  style={{
                    color: focusedField === "message" ? "#2563EB" : "#94a3b8",
                  }}
                >
                  <MessageSquare size={18} />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Decrivez votre projet ou votre demande..."
                  rows={5}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm resize-none focus:outline-none transition-all duration-300"
                  style={{
                    backgroundColor:
                      focusedField === "message" ? "#fff" : "#f8fafc",
                    border:
                      focusedField === "message"
                        ? "2px solid #2563EB"
                        : "2px solid #e2e8f0",
                    color: "#1e293b",
                    boxShadow:
                      focusedField === "message"
                        ? "0 0 0 4px rgba(37,99,235,0.1)"
                        : "none",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 group hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #2563EB, #1d4ed8)",
                color: "#fff",
                boxShadow: "0 8px 30px rgba(37,99,235,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(37,99,235,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(37,99,235,0.3)";
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
