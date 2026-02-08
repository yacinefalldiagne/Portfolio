import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Trigger confetti animation
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  // Generate confetti pieces
  const generateConfetti = () => {
    const colors = ["oklch(42.1% 0.095 57.708)", "#1a2b3d", "#d4d8dd", "#fff"];
    return [...Array(50)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 5,
    }));
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#fff' }}>
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {generateConfetti().map((piece) => (
            <div
              key={piece.id}
              className="confetti-piece"
              style={{
                left: `${piece.left}%`,
                backgroundColor: piece.color,
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                animationDelay: `${piece.delay}s`,
                borderRadius: Math.random() > 0.5 ? "50%" : "0",
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll animated">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#1a2b3d' }}
          >
            Me <span style={{ color: 'oklch(42.1% 0.095 57.708)' }}>contacter</span>
          </h2>
          <p className="text-lg" style={{ color: '#6b7280' }}>
            N'hésitez pas à me contacter pour discuter de vos projets
          </p>
          <div
            className="w-24 h-1 mx-auto rounded-full mt-4"
            style={{ 
              backgroundColor: 'oklch(42.1% 0.095 57.708)',
              height: '4px'
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-on-scroll slide-rotate animated">
            <div className="flex items-start gap-4 group flip-in animated stagger-1">
              <div 
                className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 heartbeat transition-all"
                style={{ 
                  backgroundColor: 'oklch(42.1% 0.095 57.708 / 0.1)',
                  color: 'oklch(42.1% 0.095 57.708)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'oklch(42.1% 0.095 57.708)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'oklch(42.1% 0.095 57.708 / 0.1)';
                  e.currentTarget.style.color = 'oklch(42.1% 0.095 57.708)';
                }}
              >
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm" style={{ color: '#6b7280' }}>Email</p>
                <a
                  href="mailto:dyacinefall@gmail.com"
                  className="font-medium transition-colors"
                  style={{ color: '#1a2b3d' }}
                  onMouseEnter={(e) => e.target.style.color = 'oklch(42.1% 0.095 57.708)'}
                  onMouseLeave={(e) => e.target.style.color = '#1a2b3d'}
                >
                  dyacinefall@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group flip-in animated stagger-2">
              <div 
                className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 heartbeat transition-all"
                style={{ 
                  backgroundColor: 'oklch(42.1% 0.095 57.708 / 0.1)',
                  color: 'oklch(42.1% 0.095 57.708)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'oklch(42.1% 0.095 57.708)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'oklch(42.1% 0.095 57.708 / 0.1)';
                  e.currentTarget.style.color = 'oklch(42.1% 0.095 57.708)';
                }}
              >
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm" style={{ color: '#6b7280' }}>Téléphone</p>
                <a
                  href="tel:+33753896766"
                  className="font-medium transition-colors"
                  style={{ color: '#1a2b3d' }}
                  onMouseEnter={(e) => e.target.style.color = 'oklch(42.1% 0.095 57.708)'}
                  onMouseLeave={(e) => e.target.style.color = '#1a2b3d'}
                >
                  +33 75 38 96 766
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group flip-in animated stagger-3">
              <div 
                className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 heartbeat transition-all"
                style={{ 
                  backgroundColor: 'oklch(42.1% 0.095 57.708 / 0.1)',
                  color: 'oklch(42.1% 0.095 57.708)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'oklch(42.1% 0.095 57.708)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'oklch(42.1% 0.095 57.708 / 0.1)';
                  e.currentTarget.style.color = 'oklch(42.1% 0.095 57.708)';
                }}
              >
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm" style={{ color: '#6b7280' }}>Adresse</p>
                <p className="font-medium" style={{ color: '#1a2b3d' }}>
                  27 Rue des Marjoberts, Cergy
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div 
              className="pt-8 flip-in animated stagger-4"
              style={{ borderTop: '1px solid #d4d8dd' }}
            >
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Retrouvez-moi sur :</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/yacinefalldiagne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all hover:scale-110 wave-animation"
                  style={{ 
                    backgroundColor: 'oklch(42.1% 0.095 57.708 / 0.1)',
                    color: 'oklch(42.1% 0.095 57.708)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'oklch(42.1% 0.095 57.708)';
                    e.target.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'oklch(42.1% 0.095 57.708 / 0.1)';
                    e.target.style.color = 'oklch(42.1% 0.095 57.708)';
                  }}
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/yacinefalldiagne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all hover:scale-110 wave-animation"
                  style={{ 
                    backgroundColor: 'oklch(42.1% 0.095 57.708 / 0.1)',
                    color: 'oklch(42.1% 0.095 57.708)',
                    animationDelay: '0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'oklch(42.1% 0.095 57.708)';
                    e.target.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'oklch(42.1% 0.095 57.708 / 0.1)';
                    e.target.style.color = 'oklch(42.1% 0.095 57.708)';
                  }}
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-xl animate-on-scroll zoom-rotate animated"
            style={{ 
              background: 'linear-gradient(135deg, #f5f5f0 0%, #ffffff 100%)',
              border: '2px solid #d4d8dd'
            }}
          >
            <div className="bounce-in animated stagger-1">
              <label 
                className="block font-medium mb-2"
                style={{ color: '#1a2b3d' }}
              >
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="w-full px-4 py-3 rounded-lg transition-all"
                style={{ 
                  backgroundColor: '#fff',
                  border: '2px solid #d4d8dd',
                  color: '#1a2b3d'
                }}
                onFocus={(e) => e.target.style.borderColor = 'oklch(42.1% 0.095 57.708)'}
                onBlur={(e) => e.target.style.borderColor = '#d4d8dd'}
              />
            </div>

            <div className="bounce-in animated stagger-2">
              <label 
                className="block font-medium mb-2"
                style={{ color: '#1a2b3d' }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
                className="w-full px-4 py-3 rounded-lg transition-all"
                style={{ 
                  backgroundColor: '#fff',
                  border: '2px solid #d4d8dd',
                  color: '#1a2b3d'
                }}
                onFocus={(e) => e.target.style.borderColor = 'oklch(42.1% 0.095 57.708)'}
                onBlur={(e) => e.target.style.borderColor = '#d4d8dd'}
              />
            </div>

            <div className="bounce-in animated stagger-3">
              <label 
                className="block font-medium mb-2"
                style={{ color: '#1a2b3d' }}
              >
                Sujet
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sujet de votre message"
                required
                className="w-full px-4 py-3 rounded-lg transition-all"
                style={{ 
                  backgroundColor: '#fff',
                  border: '2px solid #d4d8dd',
                  color: '#1a2b3d'
                }}
                onFocus={(e) => e.target.style.borderColor = 'oklch(42.1% 0.095 57.708)'}
                onBlur={(e) => e.target.style.borderColor = '#d4d8dd'}
              />
            </div>

            <div className="bounce-in animated stagger-4">
              <label 
                className="block font-medium mb-2"
                style={{ color: '#1a2b3d' }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg transition-all resize-none"
                style={{ 
                  backgroundColor: '#fff',
                  border: '2px solid #d4d8dd',
                  color: '#1a2b3d'
                }}
                onFocus={(e) => e.target.style.borderColor = 'oklch(42.1% 0.095 57.708)'}
                onBlur={(e) => e.target.style.borderColor = '#d4d8dd'}
              />
            </div>

            <button
              type="submit"
              className="w-full font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 group shadow-lg bounce-in animated stagger-5"
              style={{ 
                backgroundColor: 'oklch(42.1% 0.095 57.708)',
                color: '#fff'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
            >
              <Send
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;