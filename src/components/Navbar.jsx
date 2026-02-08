  import { useState, useEffect } from "react";
  import { Menu, X } from "lucide-react";

  function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ];

    const scrollToSection = (e, href) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    };

    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        style={{
          boxShadow: isScrolled ? '0 4px 20px rgba(26, 43, 61, 0.1)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="text-2xl font-bold"
                style={{ color: 'oklch(42.1% 0.095 57.708)' }}
              >
                Yacine<span style={{ color: '#1a2b3d' }}>.</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navLinks.map((link, i) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    style={{ animationDelay: `${i * 0.1}s`, color: '#1a2b3d' }}
                    className="hover:opacity-80 transition-all duration-300 text-sm font-medium relative group"
                  >
                    {link.name}
                    <span 
                      className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: 'oklch(42.1% 0.095 57.708)' }}
                    ></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="transition-colors p-2"
                style={{ color: '#1a2b3d' }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden backdrop-blur-lg border-t animate-on-scroll animated"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              borderColor: '#d4d8dd'
            }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-3 py-3 text-base font-medium rounded-lg transition-all"
                  style={{ color: '#1a2b3d' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f5f5f0';
                    e.target.style.color = 'oklch(42.1% 0.095 57.708)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#1a2b3d';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  }

  export default Navbar;