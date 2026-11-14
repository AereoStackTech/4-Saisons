import { BRAND_INFO, type FulfillmentChoice, type Language } from '@/data/pastilla-catalog';

export type { PastillaRecipeId, TraySizeId, FulfillmentChoice } from '@/data/pastilla-catalog';

export interface PastillaOrderConfig {
  recipeLabel: string;
  sizeLabel: string;
  quantity: number;
  fulfillment: FulfillmentChoice;
  eventDate: string;
  preferredTime: string;
  customerName: string;
  notes?: string;
  indicativeTotalMad?: number;
  lang?: Language;
}

const FULFILLMENT_LABELS: Record<FulfillmentChoice, string> = {
  'sur-place': 'Repas sur Place (Rue 187)',
  'retrait-rue-187': 'Retrait à la Boutique (Rue 187, Safi)',
  'livraison-safi': 'Livraison à Safi',
};

export function buildPastillaOrderText(config: PastillaOrderConfig): string {
  const notesLine = config.notes?.trim()
    ? `📝 Précisions : ${config.notes.trim()}`
    : undefined;

  const estimateLine = config.indicativeTotalMad
    ? `💶 Estimation indicative : ~${config.indicativeTotalMad} MAD (à confirmer avec la cuisine)`
    : undefined;

  return [
    `Bonjour Pastillasafi,`,
    `Je souhaite passer une pré-commande de Pastilla :`,
    ``,
    `🥧 Recette : ${config.recipeLabel}`,
    `👥 Format : ${config.sizeLabel} (Quantité : ${config.quantity})`,
    `🛍️ Mode : ${FULFILLMENT_LABELS[config.fulfillment]}`,
    `📅 Date souhaitée : ${config.eventDate || 'À convenir'}`,
    `⏰ Heure souhaitée : ${config.preferredTime || 'Avant 22h30'}`,
    `👤 Nom : ${config.customerName.trim() || 'Client'}`,
    estimateLine,
    notesLine,
  ]
    .filter((line): line is string => line !== undefined)
    .join('\n');
}

export function buildPastillaWhatsAppUrl(config: PastillaOrderConfig): string {
  const message = buildPastillaOrderText(config);
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildEventInquiryWhatsAppUrl(lang: Language = 'fr'): string {
  const message =
    lang === 'en'
      ? [
          `Hello Pastillasafi,`,
          `I would like to request an event / reception pastilla quote in Safi:`,
          ``,
          `🎉 Occasion: (Wedding / Aqiqah / Family Dinner / Corporate)`,
          `👥 Estimated guests:`,
          `📅 Preferred date:`,
          `🥧 Preferred recipes (Seafood / Chicken & Almond / Mini-Pastillas):`,
        ].join('\n')
      : [
          `Bonjour Pastillasafi,`,
          `Je souhaite demander un devis pour un événement / réception à Safi :`,
          ``,
          `🎉 Occasion : (Mariage / Aqiqah / Dîner de famille / Entreprise)`,
          `👥 Nombre de convives estimé :`,
          `📅 Date souhaitée :`,
          `🥧 Recettes souhaitées (Fruits de Mer / Poulet & Amandes / Mini-Pastillas) :`,
        ].join('\n');

  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
