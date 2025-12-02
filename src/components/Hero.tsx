import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Accueil GT Care - Lavage automobile premium"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Voiture de luxe propre et brillante après lavage professionnel"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4">
            <span className="text-gradient">GT Care</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light tracking-wide">
            L'excellence au service de votre véhicule
          </p>
        </div>

        <p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-8 mb-12 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Ramassage à domicile ou sur votre lieu de travail. 
          Lavage professionnel dans nos locaux par des experts de l'automobile.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#services"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-sm text-sm font-semibold tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 glow-cyan"
            aria-label="Découvrir nos prestations de lavage automobile"
          >
            Découvrir nos prestations
          </a>
          <a
            href="#contact"
            className="border border-foreground/30 text-foreground px-8 py-4 rounded-sm text-sm font-semibold tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="Nous contacter pour réserver un lavage"
          >
            Nous contacter
          </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-float z-20" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
