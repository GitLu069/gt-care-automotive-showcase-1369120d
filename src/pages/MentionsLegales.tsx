import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const MentionsLegales = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-12">
          Mentions <span className="text-gradient">Légales</span>
        </h1>

        <div className="max-w-3xl space-y-12 text-muted-foreground">
          {/* Éditeur du site */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Éditeur du site</h2>
            <div className="space-y-1">
              <p className="font-medium text-foreground">GT Care</p>
              <p>Filiale de GT Car Lyon</p>
              <p>662 rue des Jonchères</p>
              <p>69730 Genay, France</p>
              <p className="mt-3">
                <span>Téléphone : </span>
                <a href="tel:+33782404808" className="text-primary hover:underline">07 82 40 48 08</a>
              </p>
              <p>
                <span>Email : </span>
                <a href="mailto:gtcarslyon.commercial@gmail.com" className="text-primary hover:underline">gtcarslyon.commercial@gmail.com</a>
              </p>
            </div>
          </section>

          {/* Conception & Développement */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Conception & Développement</h2>
            <div className="space-y-2">
              <p>Site conçu et développé par :</p>
              <a 
                href="https://www.weexio.fr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Weexio
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-sm">Agence de création de sites web</p>
            </div>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Hébergement</h2>
            <div className="space-y-1">
              <p className="font-medium text-foreground">OVH SAS</p>
              <p>2 rue Kellermann</p>
              <p>59100 Roubaix, France</p>
              <p className="mt-2">
                <a 
                  href="https://www.ovhcloud.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  www.ovhcloud.com
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) 
              est protégé par le droit d'auteur. Toute reproduction, même partielle, 
              est soumise à autorisation préalable de GT Care.
            </p>
          </section>

          {/* Protection des données */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Protection des données personnelles</h2>
            <p className="mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez d'un droit d'accès, de rectification et de suppression des données 
              vous concernant.
            </p>
            <p className="mb-4">
              Les informations collectées via le formulaire de contact sont 
              utilisées uniquement pour répondre à vos demandes et ne sont pas transmises à des tiers.
            </p>
            <p>
              Pour exercer vos droits, contactez-nous à l'adresse email : {" "}
              <a href="mailto:gtcarslyon.commercial@gmail.com" className="text-primary hover:underline">
                gtcarslyon.commercial@gmail.com
              </a>
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Cookies</h2>
            <p>
              Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. 
              En naviguant sur ce site, vous acceptez l'utilisation de cookies conformément 
              à notre politique de confidentialité.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} GT Care - Tous droits réservés
          </p>
        </div>
      </div>
    </main>
  );
};

export default MentionsLegales;