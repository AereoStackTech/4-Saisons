import type { StaticImageData } from 'next/image';
import heroPastillaImg from '@/src/assets/images/hero_pastilla_craft_1794673855170.jpg';
import fruitsDeMerImg from '@/src/assets/images/pastilla_fruits_de_mer_1794673855173.jpg';
import pouletAmandesImg from '@/src/assets/images/pastilla_poulet_amandes_1794673854716.jpg';
import miniAssortimentImg from '@/src/assets/images/pastilla_mini_assortiment_1794673855616.jpg';
import receptionsFeastImg from '@/src/assets/images/receptions_feast_table_1794673858458.jpg';

export type Language = 'fr' | 'en';
export type PastillaRecipeId = 'fruits-de-mer' | 'poulet-amandes' | 'mini-assortiment';
export type TraySizeId = 'individuelle' | 'moyenne-6' | 'grande-10' | 'reception-12';
export type FulfillmentChoice = 'sur-place' | 'retrait-rue-187' | 'livraison-safi';

export interface LocalizedText {
  fr: string;
  en: string;
}

export interface PastillaRecipe {
  id: PastillaRecipeId;
  kicker: LocalizedText;
  title: LocalizedText;
  shortTitle: LocalizedText;
  description: LocalizedText;
  ingredientsNote: LocalizedText;
  priceRangeMad: LocalizedText;
  indicativeBasePriceMad: Record<TraySizeId, number>;
  accentTone: 'atlantic' | 'saffron' | 'neutral';
  image: StaticImageData;
  imageAlt: LocalizedText;
}

export interface TraySizeOption {
  id: TraySizeId;
  label: LocalizedText;
  guestsLabel: LocalizedText;
  diameterNote: LocalizedText;
  leadTimeNote: LocalizedText;
}

export interface FulfillmentOption {
  id: FulfillmentChoice;
  label: LocalizedText;
  detail: LocalizedText;
}

export const BRAND_INFO = {
  name: 'Pastillasafi',
  domain: 'pastillasafi.com',
  domainUrl: 'https://pastillasafi.com',
  phoneDisplay: '+212 7 67 20 05 46',
  phoneHref: 'tel:+212767200546',
  whatsappNumber: '212767200546',
  address: 'RUE 187, Safi 46000, Maroc',
  addressEn: 'RUE 187, Safi 46000, Morocco',
  plusCode: '7Q32+5X Safi',
  closingTime: '22h30',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=RUE+187,+Safi+46000,+Morocco',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=7Q32%2B5X%20Safi,%20Morocco&t=&z=16&ie=UTF8&iwloc=&output=embed',
};

export const HERO_MEDIA = {
  image: heroPastillaImg,
  alt: {
    fr: 'Pastilla dorée artisanale garnie d’amandes grillées et cannelle sur plateau en laiton avec céramique de Safi',
    en: 'Artisanal golden Moroccan pastilla topped with toasted almonds and cinnamon on a hammered brass tray with Safi ceramics',
  },
};

export const RECEPTIONS_MEDIA = {
  image: receptionsFeastImg,
  alt: {
    fr: 'Grande table de réception marocaine à Safi garnie de plateaux de pastilla dorés et céramiques bleues traditionnelles',
    en: 'Moroccan family celebration table in Safi set with golden pastilla platters and traditional cobalt ceramic tableware',
  },
};

export const PASTILLA_RECIPES: PastillaRecipe[] = [
  {
    id: 'fruits-de-mer',
    kicker: {
      fr: 'Spécialité Atlantique · Prix à confirmer',
      en: 'Atlantic Specialty · Pricing to confirm',
    },
    title: {
      fr: 'Pastilla Royale aux Fruits de Mer de Safi',
      en: 'Royal Safi Seafood Pastilla',
    },
    shortTitle: {
      fr: 'Fruits de Mer de Safi',
      en: 'Safi Seafood',
    },
    description: {
      fr: 'Calamars, crevettes, poisson blanc, vermicelle et épices douces enveloppés dans une warqa dorée et croustillante.',
      en: 'Calamari, shrimp, white fish, vermicelli and gentle Moroccan spices folded in crisp golden warqa pastry.',
    },
    ingredientsNote: {
      fr: 'Calamars · Crevettes · Poisson blanc · Herbes fraîches',
      en: 'Calamari · Shrimp · White fish · Fresh herbs',
    },
    priceRangeMad: {
      fr: '95 – 480 MAD · Indicatif',
      en: '95 – 480 MAD · Indicative',
    },
    indicativeBasePriceMad: {
      individuelle: 95,
      'moyenne-6': 260,
      'grande-10': 380,
      'reception-12': 480,
    },
    accentTone: 'atlantic',
    image: fruitsDeMerImg,
    imageAlt: {
      fr: 'Pastilla Royale aux Fruits de Mer de Safi servie sur un grand plat en céramique bleue de Safi',
      en: 'Royal Safi Seafood Pastilla served on a hand-painted blue Safi ceramic platter',
    },
  },
  {
    id: 'poulet-amandes',
    kicker: {
      fr: 'Recette Traditionnelle · Prix à confirmer',
      en: 'Traditional Recipe · Pricing to confirm',
    },
    title: {
      fr: 'Pastilla Traditionnelle Poulet & Amandes',
      en: 'Traditional Chicken & Almond Pastilla',
    },
    shortTitle: {
      fr: 'Poulet & Amandes',
      en: 'Chicken & Almonds',
    },
    description: {
      fr: 'Poulet fermier effiloché, oignons confits et amandes grillées parfumées à la fleur d’oranger et à la cannelle.',
      en: 'Shredded farm chicken, caramelized onions and toasted almonds scented with orange blossom water and cinnamon.',
    },
    ingredientsNote: {
      fr: 'Poulet fermier · Amandes grillées · Fleur d’oranger · Cannelle',
      en: 'Farm chicken · Toasted almonds · Orange blossom · Cinnamon',
    },
    priceRangeMad: {
      fr: '75 – 390 MAD · Indicatif',
      en: '75 – 390 MAD · Indicative',
    },
    indicativeBasePriceMad: {
      individuelle: 75,
      'moyenne-6': 210,
      'grande-10': 310,
      'reception-12': 390,
    },
    accentTone: 'saffron',
    image: pouletAmandesImg,
    imageAlt: {
      fr: 'Pastilla traditionnelle au poulet et amandes grillées saupoudrée de cannelle et sucre glace sur plateau en bronze',
      en: 'Traditional chicken and almond pastilla dusted with cinnamon and toasted whole almonds on hammered bronze',
    },
  },
  {
    id: 'mini-assortiment',
    kicker: {
      fr: 'Cocktails & Sur Place · Prix à confirmer',
      en: 'Cocktails & Dine-In · Pricing to confirm',
    },
    title: {
      fr: 'Pastilla Mixte & Assortiment Mini-Pastillas',
      en: 'Mixed Platter & Mini-Pastilla Assortment',
    },
    shortTitle: {
      fr: 'Assortiment Mini-Pastillas',
      en: 'Mini-Pastilla Assortment',
    },
    description: {
      fr: 'Formats mini-pastillas croustillantes pour apéritifs et réceptions, ou portions individuelles cuites à la commande.',
      en: 'Crisp bite-sized mini-pastillas ideal for receptions and cocktail tables, or individual portions baked to order.',
    },
    ingredientsNote: {
      fr: 'Duo Fruits de Mer & Poulet Amandes · Service plateau ou assiette',
      en: 'Seafood & Chicken Almond duo · Platter or individual plate',
    },
    priceRangeMad: {
      fr: '85 – 420 MAD · Indicatif',
      en: '85 – 420 MAD · Indicative',
    },
    indicativeBasePriceMad: {
      individuelle: 85,
      'moyenne-6': 230,
      'grande-10': 340,
      'reception-12': 420,
    },
    accentTone: 'neutral',
    image: miniAssortimentImg,
    imageAlt: {
      fr: 'Assortiment de mini-pastillas dorées et briouates servies sur plateau en céramique et laiton',
      en: 'Assortment of golden mini-pastillas served on an ivory ceramic and brass reception platter',
    },
  },
];

export const TRAY_SIZES: TraySizeOption[] = [
  {
    id: 'individuelle',
    label: { fr: 'Individuelle', en: 'Individual' },
    guestsLabel: { fr: '1 pers.', en: '1 guest' },
    diameterNote: { fr: 'Ø ~14 cm (indicatif)', en: 'Ø ~14 cm (indicative)' },
    leadTimeNote: {
      fr: 'Préparation rapide conseillée ~45 min à 1h (à confirmer)',
      en: 'Suggested prep notice ~45 min to 1h (to confirm)',
    },
  },
  {
    id: 'moyenne-6',
    label: { fr: 'Plateau Moyen', en: 'Medium Platter' },
    guestsLabel: { fr: '4–6 convives', en: '4–6 guests' },
    diameterNote: { fr: 'Ø ~28 cm (indicatif)', en: 'Ø ~28 cm (indicative)' },
    leadTimeNote: {
      fr: 'Pré-commande conseillée 2h à 4h à l’avance (à confirmer)',
      en: 'Suggested pre-order 2h to 4h in advance (to confirm)',
    },
  },
  {
    id: 'grande-10',
    label: { fr: 'Grand Plateau Familial', en: 'Large Family Platter' },
    guestsLabel: { fr: '8–10 convives', en: '8–10 guests' },
    diameterNote: { fr: 'Ø ~36 cm (indicatif)', en: 'Ø ~36 cm (indicative)' },
    leadTimeNote: {
      fr: 'Pré-commande conseillée la veille ou 6h avant (à confirmer)',
      en: 'Suggested pre-order 6h+ or day before (to confirm)',
    },
  },
  {
    id: 'reception-12',
    label: { fr: 'Format Réception / Événement', en: 'Reception / Event Platter' },
    guestsLabel: { fr: '12+ convives', en: '12+ guests' },
    diameterNote: { fr: 'Ø ~45 cm ou multi-plateaux', en: 'Ø ~45 cm or multi-tray' },
    leadTimeNote: {
      fr: 'Réservation conseillée 24h à 48h à l’avance (à confirmer)',
      en: 'Suggested booking 24h to 48h in advance (to confirm)',
    },
  },
];

export const FULFILLMENT_OPTIONS: FulfillmentOption[] = [
  {
    id: 'sur-place',
    label: { fr: 'Repas sur Place', en: 'Dine-In' },
    detail: { fr: 'Table à Rue 187, Safi', en: 'Table at Rue 187, Safi' },
  },
  {
    id: 'retrait-rue-187',
    label: { fr: 'Retrait à Rue 187', en: 'Pickup at Rue 187' },
    detail: { fr: 'Prêt chaud au comptoir', en: 'Hot pickup at counter' },
  },
  {
    id: 'livraison-safi',
    label: { fr: 'Livraison à Safi', en: 'Delivery in Safi' },
    detail: { fr: 'Zone & frais confirmés sur WhatsApp', en: 'Zone & fee confirmed on WhatsApp' },
  },
];

export const COPY = {
  fr: {
    nav: {
      recipes: 'Nos Recettes',
      configurator: 'Composer ma Pastilla',
      receptions: 'Réceptions',
      location: 'Rue 187 & Horaires',
      cta: 'Commander',
    },
    hero: {
      statusLine: 'Ouvert jusqu’à 22h30 · Rue 187, Safi',
      headline: 'L’Art de la Pastilla Traditionnelle & Fruits de Mer à Safi.',
      subheadline:
        'Feuilles de warqa croustillantes, farce généreuse préparée à la commande — à savourer sur place ou en plateau familial pour vos réceptions.',
      primaryCta: 'Composer ma Pastilla',
      secondaryCta: 'Découvrir nos Recettes',
      craftStrip: [
        'Préparée à la Commande',
        'Fruits de Mer de Safi & Poulet Amandes',
        'Sur Place, Retrait & Livraison',
        'Règlement sur place ou à la réception',
      ],
    },
    recipes: {
      kicker: 'Savoir-Faire Maison',
      title: 'Trois signatures de la Maison Pastillasafi',
      subtitle:
        'Chaque plateau est monté et doré à la demande. Les tarifs en MAD, diamètres et disponibilités exactes sont indiqués à titre illustratif et confirmés directement par la cuisine.',
      selectAction: 'Configurer ce plateau',
      disclaimer:
        'Note : Les variétés, diamètres, délais de préparation et fourchettes de prix en MAD présentés ci-dessus sont indicatifs et à confirmer avec la maison ou selon la carte officielle sur pastillasafi.com.',
    },
    configurator: {
      kicker: 'Configurateur de Plateau',
      title: 'Composez votre Pastilla sur mesure',
      subtitle:
        'Sélectionnez votre recette, le nombre de convives et votre horaire avant 22h30 pour transmettre une pré-commande structurée sur WhatsApp.',
      steps: [
        { num: '01', label: 'Recette' },
        { num: '02', label: 'Format' },
        { num: '03', label: 'Retrait & Date' },
      ],
      step1Title: 'Étape 1 — Choisir la Recette',
      step2Title: 'Étape 2 — Choisir le Format & Quantité',
      quantityLabel: 'Nombre de plateaux',
      step3Title: 'Étape 3 — Retrait / Livraison & Date',
      dateLabel: 'Date souhaitée',
      timeLabel: 'Heure souhaitée (avant 22h30)',
      nameLabel: 'Votre nom complet',
      namePlaceholder: 'Ex. Karima Benali',
      notesLabel: 'Précisions pour la cuisine (optionnel)',
      notesPlaceholder: 'Quartier de livraison à Safi, préférences d’épices, occasion...',
      nextStep: 'Étape suivante',
      prevStep: 'Étape précédente',
      summaryTitle: 'Récapitulatif de Pré-commande',
      summaryRecipe: 'Recette',
      summaryFormat: 'Format',
      summaryQuantity: 'Quantité',
      summaryMode: 'Mode',
      summarySchedule: 'Date & Heure',
      summaryGuest: 'Nom',
      summaryEstimate: 'Estimation indicative (à confirmer)',
      summaryLeadTimeLabel: 'Délai de préparation conseillé',
      summaryPaymentNote:
        'Aucun paiement par carte en ligne : règlement en espèces sur place, à la livraison ou acompte convenu directement sur WhatsApp.',
      whatsappCta: 'Envoyer ma Pré-commande sur WhatsApp',
      copyBtn: 'Copier le récapitulatif',
      copiedBtn: 'Récapitulatif copié',
      missingNameHint: 'Indiquez votre nom ci-contre pour personnaliser le message WhatsApp (facultatif).',
    },
    receptions: {
      kicker: 'Événements & Réceptions à Safi',
      title: 'Mariages, Aqiqah, dîners de famille & déjeuners d’entreprise',
      description:
        'Confiez vos grandes tablées à Pastillasafi : plateaux familiaux dorés à la demande, assortiments de mini-pastillas cocktail et coordination horaire directe pour vos réceptions à Safi.',
      cta: 'Demander un Devis Événement',
    },
    location: {
      kicker: 'Visiter la Maison ou Commander',
      title: 'Rue 187, Safi — Ouvert jusqu’à 22h30',
      addressLabel: 'Adresse',
      hoursLabel: 'Horaires',
      hoursValue: 'Tous les jours · Ouvert jusqu’à 22h30 (horaire d’ouverture à confirmer)',
      phoneLabel: 'Téléphone & WhatsApp',
      webLabel: 'Site officiel',
      directionsCta: 'Itinéraire Google Maps',
      whatsappDirectCta: 'Écrire sur WhatsApp',
    },
    footer: {
      tagline:
        'Maison spécialisée dans la pastilla artisanale aux fruits de mer de Safi et au poulet aux amandes.',
      upgradeNote:
        'Interface de pré-commande et configurateur de plateaux conçu en complément de pastillasafi.com.',
      rights: 'Pastillasafi · RUE 187, Safi 46000, Maroc',
    },
  },
  en: {
    nav: {
      recipes: 'Our Recipes',
      configurator: 'Build Your Pastilla',
      receptions: 'Events',
      location: 'Rue 187 & Hours',
      cta: 'Order Now',
    },
    hero: {
      statusLine: 'Open until 22:30 · Rue 187, Safi',
      headline: 'The Art of Traditional & Seafood Pastilla in Safi.',
      subheadline:
        'Crisp golden warqa pastry, generous fillings prepared to order — dine in at Rue 187 or order family platters for your gatherings.',
      primaryCta: 'Build My Pastilla',
      secondaryCta: 'Explore Recipes',
      craftStrip: [
        'Baked Fresh to Order',
        'Safi Seafood & Chicken Almond',
        'Dine-In, Pickup & Local Delivery',
        'Pay on pickup, delivery or dine-in',
      ],
    },
    recipes: {
      kicker: 'House Craftsmanship',
      title: 'Three Signatures from Pastillasafi',
      subtitle:
        'Each platter is assembled and baked to order. MAD price ranges, diameters, and lead times shown are illustrative placeholders to be confirmed directly with the kitchen.',
      selectAction: 'Configure this platter',
      disclaimer:
        'Note: Specific varieties, tray diameters, prep lead times, and MAD prices displayed here are indicative placeholders to be verified with the kitchen or on pastillasafi.com.',
    },
    configurator: {
      kicker: 'Platter Configurator',
      title: 'Configure Your Custom Pastilla',
      subtitle:
        'Choose your recipe, guest count, and preferred slot before 22:30 to send a structured, error-free pre-order directly on WhatsApp.',
      steps: [
        { num: '01', label: 'Recipe' },
        { num: '02', label: 'Size' },
        { num: '03', label: 'Pickup & Date' },
      ],
      step1Title: 'Step 1 — Choose Recipe',
      step2Title: 'Step 2 — Choose Format & Quantity',
      quantityLabel: 'Number of platters',
      step3Title: 'Step 3 — Fulfillment & Date',
      dateLabel: 'Preferred Date',
      timeLabel: 'Preferred Time (before 22:30)',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g. Karima Benali',
      notesLabel: 'Kitchen Notes (optional)',
      notesPlaceholder: 'Safi delivery neighborhood, spice level, special occasion...',
      nextStep: 'Next Step',
      prevStep: 'Previous Step',
      summaryTitle: 'Pre-Order Summary',
      summaryRecipe: 'Recipe',
      summaryFormat: 'Format',
      summaryQuantity: 'Quantity',
      summaryMode: 'Fulfillment',
      summarySchedule: 'Date & Time',
      summaryGuest: 'Guest Name',
      summaryEstimate: 'Indicative Estimate (to confirm)',
      summaryLeadTimeLabel: 'Recommended prep notice',
      summaryPaymentNote:
        'No online card checkout: pay in cash upon pickup, delivery, dine-in, or arrange deposit directly on WhatsApp.',
      whatsappCta: 'Send Pre-Order on WhatsApp',
      copyBtn: 'Copy Summary',
      copiedBtn: 'Copied',
      missingNameHint: 'Add your name on the left to personalize your WhatsApp order (optional).',
    },
    receptions: {
      kicker: 'Events & Receptions in Safi',
      title: 'Weddings, Aqiqah, Family Dinners & Corporate Lunches',
      description:
        'Host your Safi celebrations with Pastillasafi: large family platters baked fresh on schedule, cocktail mini-pastilla assortments, and direct WhatsApp event coordination.',
      cta: 'Request Event Quote',
    },
    location: {
      kicker: 'Visit or Pre-Order',
      title: 'Rue 187, Safi — Open daily until 22:30',
      addressLabel: 'Address',
      hoursLabel: 'Hours',
      hoursValue: 'Open daily until 22:30 (opening hours to be confirmed)',
      phoneLabel: 'Phone & WhatsApp',
      webLabel: 'Official Domain',
      directionsCta: 'Google Maps Directions',
      whatsappDirectCta: 'Message on WhatsApp',
    },
    footer: {
      tagline:
        'Artisanal Moroccan pastilla house specializing in Safi Atlantic seafood and traditional chicken & almond platters.',
      upgradeNote:
        'Interactive platter configurator & WhatsApp pre-order experience designed to complement pastillasafi.com.',
      rights: 'Pastillasafi · RUE 187, Safi 46000, Morocco',
    },
  },
} as const;
