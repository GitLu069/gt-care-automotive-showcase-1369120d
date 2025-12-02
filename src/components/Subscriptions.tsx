import { Check, Plus } from "lucide-react";

const premiumFeatures = [
  "Check-up complet du véhicule",
  "Ramassage sur votre lieu de travail",
  "Mise à niveau (liquide de refroidissement, lave-glace...)",
  "Service mécanique et pneus (pièces et main d'œuvre non incluses)",
  "Service contrôle technique (prix du CT non inclus)",
];

const Subscriptions = () => {
  return (
    <section id="subscriptions" className="py-24 bg-background" aria-labelledby="subscriptions-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Abonnements
          </span>
          <h2 id="subscriptions-heading" className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Entretenez votre véhicule <span className="text-gradient">sans effort</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Optez pour un abonnement mensuel et profitez de services exclusifs pour prendre soin de votre véhicule.
          </p>
        </header>

        {/* Abonnements Premium */}
        <article className="mb-20" aria-labelledby="premium-sub-heading">
          <h3 id="premium-sub-heading" className="text-2xl md:text-3xl font-bold text-gradient mb-8 text-center">
            Abonnements Premium
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8" role="list" aria-label="Tarifs abonnements premium">
            {[
              { washes: "2", price: "229" },
              { washes: "3", price: "329", popular: true },
              { washes: "4", price: "429" },
            ].map((plan) => (
              <article
                key={plan.washes}
                role="listitem"
                className={`relative p-8 rounded-lg border transition-all duration-300 hover:border-primary hover:glow-subtle ${
                  plan.popular
                    ? "border-primary glow-cyan bg-card"
                    : "border-border bg-card/50"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Populaire
                  </span>
                )}
                <div className="text-center">
                  <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider mb-2">
                    {plan.washes} lavages / mois
                  </p>
                  <p className="text-5xl font-bold text-primary mb-2">
                    <span aria-label={`${plan.price} euros`}>{plan.price}€</span>
                  </p>
                  <p className="text-muted-foreground text-sm">par mois</p>
                </div>
              </article>
            ))}
          </div>

          {/* Premium Features */}
          <div className="glass p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Plus className="text-primary w-5 h-5" aria-hidden="true" />
              </div>
              <span className="text-lg font-semibold">Inclus avec l'abonnement Premium</span>
            </div>
            <ul className="grid md:grid-cols-2 gap-4" aria-label="Avantages inclus">
              {premiumFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Abonnements Éco */}
        <article aria-labelledby="eco-sub-heading">
          <h3 id="eco-sub-heading" className="text-2xl md:text-3xl font-bold text-gradient mb-8 text-center">
            Abonnements Éco
          </h3>

          <div className="grid md:grid-cols-3 gap-6" role="list" aria-label="Tarifs abonnements éco">
            {[
              { washes: "2", price: "119" },
              { washes: "3", price: "189" },
              { washes: "4", price: "239" },
            ].map((plan) => (
              <article
                key={plan.washes}
                role="listitem"
                className="p-8 rounded-lg border border-border bg-card/50 transition-all duration-300 hover:border-primary hover:glow-subtle"
              >
                <div className="text-center">
                  <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider mb-2">
                    {plan.washes} lavages / mois
                  </p>
                  <p className="text-5xl font-bold text-primary mb-2">
                    <span aria-label={`${plan.price} euros`}>{plan.price}€</span>
                  </p>
                  <p className="text-muted-foreground text-sm">par mois</p>
                </div>
              </article>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Subscriptions;
