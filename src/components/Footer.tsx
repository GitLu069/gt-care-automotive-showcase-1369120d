import logo from "@/assets/logo-gtcare.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="GT Care" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Votre véhicule mérite l'excellence
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Navigation footer">
            <a
              href="#services"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Prestations
            </a>
            <a
              href="#subscriptions"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Abonnements
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Contact
            </a>
            <a
              href="#mentions-legales"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Mentions légales
            </a>
          </nav>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GT Care. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
