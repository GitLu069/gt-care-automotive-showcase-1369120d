import { Car, MapPin, Shield, Clock, Sparkles, Store, Award } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Ramassage à domicile",
    description: "Nous récupérons votre véhicule chez vous ou sur votre lieu de travail, puis le lavons dans nos locaux professionnels.",
  },
  {
    icon: Award,
    title: "Expertise automobile",
    description: "Filiale de GT Car Lyon, spécialiste de la vente automobile. Des professionnels passionnés au service de votre véhicule.",
  },
  {
    icon: Shield,
    title: "Produits premium",
    description: "Utilisation exclusive de produits professionnels haut de gamme pour un résultat impeccable.",
  },
  {
    icon: Sparkles,
    title: "Detailing sur demande",
    description: "Formule detailing complète disponible pour sublimer l'extérieur et la carrosserie de votre véhicule.",
  },
  {
    icon: Clock,
    title: "Flexibilité totale",
    description: "Prenez rendez-vous selon vos disponibilités. Nous nous adaptons à votre emploi du temps.",
  },
  {
    icon: Store,
    title: "Vente de véhicules",
    description: "Besoin de changer de voiture ? GT Car Lyon peut également vous accompagner dans l'achat de votre prochain véhicule.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/50" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            À propos
          </span>
          <h2 id="about-heading" className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Pourquoi choisir <span className="text-gradient">GT Care</span> ?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            GT Care est une filiale de <strong className="text-primary font-semibold">GT Car Lyon</strong>, 
            société spécialisée dans la vente de véhicules. Forts de notre expérience dans l'automobile, 
            nous mettons notre expertise et notre passion au service de l'entretien de votre véhicule.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group p-8 rounded-lg border border-border/50 bg-background hover:border-primary transition-all duration-500 hover:glow-subtle"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
