import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-gtcare.png";
import { scrollToSection } from "@/lib/scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "services", label: "Prestations" },
    { id: "subscriptions", label: "Abonnements" },
    { id: "about", label: "À propos" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-3" : "bg-transparent py-6"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center"
          aria-label="GT Care - Retour à l'accueil"
        >
          <img 
            src={logo} 
            alt="GT Care Lyon - Service de lavage automobile premium à domicile" 
            className="h-12 md:h-16 w-auto" 
            width="160"
            height="64"
          />
        </a>

        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center gap-8"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide uppercase bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 glow-cyan cursor-pointer"
            aria-label="Réserver un lavage automobile"
          >
            Réserver
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav 
          id="mobile-menu"
          className="md:hidden glass mt-2 mx-4 rounded-lg p-6 animate-fade-in"
          aria-label="Navigation mobile"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide uppercase py-2 bg-transparent border-none cursor-pointer text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold tracking-wide uppercase text-center mt-2 cursor-pointer"
              aria-label="Réserver un lavage automobile"
            >
              Réserver
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
