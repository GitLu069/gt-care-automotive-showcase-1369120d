import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send, Users } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    modele: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Bonjour GT Care,

Je souhaite réserver un lavage.

Nom: ${formData.nom}
Prénom: ${formData.prenom}
Téléphone: ${formData.telephone}
Email: ${formData.email}
Véhicule: ${formData.modele}
Date souhaitée: ${formData.date}

Merci!`;

    const whatsappUrl = `https://wa.me/33782404808?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Prêt à faire <span className="text-gradient">briller</span> votre véhicule ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contactez-nous pour réserver votre créneau ou demander un devis personnalisé pour une flotte de véhicules.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-lg flex items-center gap-4 hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                    Téléphone
                  </p>
                  <a
                    href="tel:+33782404808"
                    className="text-lg font-semibold hover:text-primary transition-colors"
                  >
                    07 82 40 48 08
                  </a>
                </div>
              </div>

              <div className="glass p-6 rounded-lg flex items-center gap-4 hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:gtcarslyon.commercial@gmail.com"
                    className="text-lg font-semibold hover:text-primary transition-colors break-all"
                  >
                    gtcarslyon.commercial@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass p-6 rounded-lg flex items-center gap-4 hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/gtcarelyon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold hover:text-primary transition-colors"
                  >
                    @gtcarelyon
                  </a>
                  <p className="text-muted-foreground text-sm">Découvrez nos prestations en photos</p>
                </div>
              </div>

              <div className="glass p-6 rounded-lg flex items-center gap-4 hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                    Adresse
                  </p>
                  <p className="text-lg font-semibold">662 rue des Jonchères</p>
                  <p className="text-muted-foreground">69730 Genay - Région Lyonnaise</p>
                </div>
              </div>

              <div className="glass p-6 rounded-lg flex items-center gap-4 hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                    Flottes & Professionnels
                  </p>
                  <p className="text-lg font-semibold">Devis personnalisé sur demande</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Reservation Form */}
            <div className="glass p-8 rounded-lg glow-subtle">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-green-500" />
                <h3 className="text-2xl font-bold">Réservation WhatsApp</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Remplissez le formulaire et envoyez votre demande directement via WhatsApp.
              </p>
              
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Prénom</label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Nom</label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Dupont"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Téléphone</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="06 00 00 00 00"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="jean.dupont@email.com"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Modèle du véhicule</label>
                  <input
                    type="text"
                    name="modele"
                    value={formData.modele}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="BMW Série 3, Audi A4..."
                  />
                </div>
                
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Date souhaitée</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-sm text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Envoyer via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
