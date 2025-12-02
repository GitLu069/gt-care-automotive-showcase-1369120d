import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send, Users, ChevronRight, ChevronLeft, User, Car, Calendar } from "lucide-react";

type FormStep = 1 | 2;

const Contact = () => {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    modele: "",
    date: "",
    creneau: "",
    lieuRamassage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const getLieuLabel = (lieu: string) => {
    switch (lieu) {
      case "domicile": return "Domicile";
      case "travail": return "Lieu de travail";
      case "depot": return "Je dépose le véhicule";
      default: return lieu;
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Bonjour GT Care,

Je souhaite réserver un lavage.

👤 *Informations personnelles*
Nom: ${formData.nom}
Prénom: ${formData.prenom}
Téléphone: ${formData.telephone}
Email: ${formData.email}

🚗 *Véhicule*
Modèle: ${formData.modele}

📅 *Rendez-vous souhaité*
Date: ${formData.date}
Créneau: ${formData.creneau === "matin" ? "Matin (8h-12h)" : "Après-midi (14h-18h)"}
Lieu de ramassage: ${getLieuLabel(formData.lieuRamassage)}

Merci !`;

    const whatsappUrl = `https://wa.me/33782404808?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const isStep1Valid = formData.prenom && formData.nom && formData.telephone && formData.email;
  const isStep2Valid = formData.modele && formData.date && formData.creneau && formData.lieuRamassage;

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Prêt à faire <span className="text-gradient">briller</span> votre véhicule ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contactez-nous pour réserver votre créneau ou demander un devis personnalisé pour une flotte de véhicules.
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <aside className="space-y-6" aria-label="Informations de contact">
              <address className="not-italic">
                <div className="glass p-6 rounded-lg flex items-center gap-4 hover:border-primary transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                      Téléphone
                    </p>
                    <a
                      href="tel:+33782404808"
                      className="text-lg font-semibold hover:text-primary transition-colors"
                      aria-label="Appeler GT Care au 07 82 40 48 08"
                    >
                      07 82 40 48 08
                    </a>
                  </div>
                </div>

                <div className="glass p-6 rounded-lg flex items-center gap-4 hover:border-primary transition-all duration-300 mt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:gtcarslyon.commercial@gmail.com"
                      className="text-lg font-semibold hover:text-primary transition-colors break-all"
                      aria-label="Envoyer un email à GT Care"
                    >
                      gtcarslyon.commercial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="glass p-6 rounded-lg flex items-center gap-4 hover:border-primary transition-all duration-300 mt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-primary" aria-hidden="true" />
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
                      aria-label="Suivre GT Care sur Instagram"
                    >
                      @gtcarelyon
                    </a>
                    <p className="text-muted-foreground text-sm">Découvrez nos prestations en photos</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-lg flex items-center gap-4 hover:border-primary transition-all duration-300 mt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                      Adresse
                    </p>
                    <p className="text-lg font-semibold">662 rue des Jonchères</p>
                    <p className="text-muted-foreground">69730 Genay - Région Lyonnaise</p>
                  </div>
                </div>
              </address>

              <div className="glass p-6 rounded-lg flex items-center gap-4 hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                    Flottes & Professionnels
                  </p>
                  <p className="text-lg font-semibold">Devis personnalisé sur demande</p>
                </div>
              </div>
            </aside>

            {/* WhatsApp Reservation Form - Multi-step */}
            <div className="glass p-8 rounded-lg glow-subtle">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-green-500" aria-hidden="true" />
                <h3 className="text-2xl font-bold">Réservation WhatsApp</h3>
              </div>
              
              {/* Progress indicator */}
              <div className="flex items-center gap-2 mb-6">
                <div className={`flex items-center gap-2 ${step === 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step === 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                    1
                  </div>
                  <span className="text-sm hidden sm:inline">Vos informations</span>
                </div>
                <div className="flex-1 h-0.5 bg-border mx-2" />
                <div className={`flex items-center gap-2 ${step === 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step === 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                    2
                  </div>
                  <span className="text-sm hidden sm:inline">Rendez-vous</span>
                </div>
              </div>

              {/* Step 1: Personal Info */}
              {step === 1 && (
                <form onSubmit={handleNextStep} className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <User className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm font-medium">Vos coordonnées</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="prenom" className="text-sm text-muted-foreground mb-1 block">Prénom *</label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Jean"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="nom" className="text-sm text-muted-foreground mb-1 block">Nom *</label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Dupont"
                        aria-required="true"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="telephone" className="text-sm text-muted-foreground mb-1 block">Téléphone *</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      maxLength={20}
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="06 00 00 00 00"
                      aria-required="true"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm text-muted-foreground mb-1 block">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={255}
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="jean.dupont@email.com"
                      aria-required="true"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={!isStep1Valid}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-primary-foreground px-8 py-4 rounded-sm text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 mt-6"
                  >
                    Continuer
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </form>
              )}

              {/* Step 2: Vehicle & Appointment */}
              {step === 2 && (
                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Car className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm font-medium">Véhicule & Rendez-vous</span>
                  </div>
                  
                  <div>
                    <label htmlFor="modele" className="text-sm text-muted-foreground mb-1 block">Modèle du véhicule *</label>
                    <input
                      type="text"
                      id="modele"
                      name="modele"
                      value={formData.modele}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="BMW Série 3, Audi A4..."
                      aria-required="true"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="text-sm text-muted-foreground mb-1 block">Date souhaitée *</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="creneau" className="text-sm text-muted-foreground mb-1 block">Créneau horaire *</label>
                      <select
                        id="creneau"
                        name="creneau"
                        value={formData.creneau}
                        onChange={handleChange}
                        required
                        className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        aria-required="true"
                      >
                        <option value="">Choisir...</option>
                        <option value="matin">Matin (8h-12h)</option>
                        <option value="apres-midi">Après-midi (14h-18h)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="lieuRamassage" className="text-sm text-muted-foreground mb-1 block">Lieu de ramassage *</label>
                    <select
                      id="lieuRamassage"
                      name="lieuRamassage"
                      value={formData.lieuRamassage}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      aria-required="true"
                    >
                      <option value="">Choisir...</option>
                      <option value="domicile">À mon domicile</option>
                      <option value="travail">Sur mon lieu de travail</option>
                      <option value="depot">Je dépose le véhicule chez vous</option>
                    </select>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex-1 border border-border hover:border-primary text-foreground px-4 py-4 rounded-sm text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                      Retour
                    </button>
                    <button
                      type="submit"
                      disabled={!isStep2Valid}
                      className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-muted disabled:text-muted-foreground text-white px-4 py-4 rounded-sm text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Envoyer
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;