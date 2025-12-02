import { Sparkles, Clock } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card/50" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Nos prestations
          </span>
          <h2 id="services-heading" className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Un service <span className="text-gradient">sur-mesure</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choisissez la formule adaptée à vos besoins parmi nos prestations Premium et Éco.
          </p>
        </header>

        {/* Lavage Premium */}
        <article className="mb-16" aria-labelledby="premium-heading">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-primary w-6 h-6" aria-hidden="true" />
            <h3 id="premium-heading" className="text-2xl md:text-3xl font-bold text-gradient">
              Lavage Premium
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Lavage
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Citadine / Compacte
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Break / Berline / 4x4 / Monospace
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Complet", price1: "130€", price2: "160€" },
                  { type: "Intérieur", price1: "80€", price2: "100€" },
                  { type: "Extérieur", price1: "70€", price2: "90€" },
                ].map((row, index) => (
                  <tr
                    key={row.type}
                    className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                  >
                    <td className="py-5 px-6 font-semibold uppercase tracking-wide">
                      {row.type}
                    </td>
                    <td className="py-5 px-6 text-center text-primary text-xl font-bold">
                      {row.price1}
                    </td>
                    <td className="py-5 px-6 text-center text-primary text-xl font-bold">
                      {row.price2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-2 mt-4 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm italic">Prestation d'environ 5h</span>
          </div>
        </article>

        {/* Lavage Éco */}
        <article aria-labelledby="eco-heading">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-primary w-6 h-6" aria-hidden="true" />
            <h3 id="eco-heading" className="text-2xl md:text-3xl font-bold text-gradient">
              Lavage Éco
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Lavage
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Citadine / Compacte
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Break / Berline / 4x4 / Monospace
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-5 px-6 font-semibold uppercase tracking-wide">
                    Complet
                  </td>
                  <td className="py-5 px-6 text-center text-primary text-xl font-bold">
                    70€
                  </td>
                  <td className="py-5 px-6 text-center text-primary text-xl font-bold">
                    90€
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-2 mt-4 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm italic">Prestation d'environ 2h</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
