const LegalMentions = () => {
  return (
    <section id="mentions-legales" className="py-16 bg-card/30 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Mentions Légales</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-sm text-muted-foreground">
          {/* Éditeur du site */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-base">Éditeur du site</h3>
            <div>
              <p className="font-medium text-foreground">GT Care</p>
              <p>Filiale de GT Car Lyon</p>
              <p>662 rue des Jonchères</p>
              <p>69730 Genay, France</p>
              <p className="mt-2">
                <span className="text-muted-foreground">Téléphone : </span>
                <a href="tel:+33782404808" className="hover:text-primary transition-colors">07 82 40 48 08</a>
              </p>
              <p>
                <span className="text-muted-foreground">Email : </span>
                <a href="mailto:gtcarslyon.commercial@gmail.com" className="hover:text-primary transition-colors">gtcarslyon.commercial@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Conception & Développement */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-base">Conception & Développement</h3>
            <div>
              <p>Site conçu et développé par :</p>
              <p className="font-medium text-foreground mt-1">Vincent Lucas</p>
              <p className="font-medium text-foreground">Weexio</p>
            </div>
          </div>

          {/* Hébergement */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-base">Hébergement</h3>
            <div>
              <p className="font-medium text-foreground">OVH SAS</p>
              <p>2 rue Kellermann</p>
              <p>59100 Roubaix, France</p>
              <p className="mt-1">
                <a 
                  href="https://www.ovhcloud.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  www.ovhcloud.com
                </a>
              </p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-base">Propriété intellectuelle</h3>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) 
              est protégé par le droit d'auteur. Toute reproduction, même partielle, 
              est soumise à autorisation préalable.
            </p>
          </div>

          {/* Protection des données */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-foreground font-semibold text-base">Protection des données personnelles</h3>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez d'un droit d'accès, de rectification et de suppression des données 
              vous concernant. Les informations collectées via le formulaire de contact sont 
              utilisées uniquement pour répondre à vos demandes et ne sont pas transmises à des tiers.
              Pour exercer vos droits, contactez-nous à l'adresse email indiquée ci-dessus.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GT Care - Tous droits réservés
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalMentions;