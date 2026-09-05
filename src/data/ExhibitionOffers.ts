export interface ExhibitionOffer {
  id: string;
  title: string;
  price: number;
  width?: number;
  depth?: number;
  badges: number;
  audience: string;
  benefits: string[];
}

export const exhibitionOffers: ExhibitionOffer[] = [
  { id: "table-decouverte", title: "Table Découverte", price: 150, width: 1, depth: 1, badges: 1,
    audience: "Artisans, créateurs, producteurs locaux et jeunes entrepreneurs",
    benefits: ["Table d’exposition et signalétique de l’exposant", "Présence dans le répertoire officiel des exposants", "Accès aux espaces de networking", "Participation aux activités ouvertes au public"] },
  { id: "table-business", title: "Table Business", price: 200, width: 2, depth: 1, badges: 2,
    audience: "TPE, marques émergentes, coopératives et produits agroalimentaires",
    benefits: ["Table d’exposition élargie et signalétique de l’exposant", "Meilleure visibilité des produits", "Présence dans le répertoire officiel des exposants", "Accès aux espaces de networking", "Participation aux activités ouvertes au public"] },
  { id: "booth-business", title: "Booth Business", price: 250, badges: 2,
    audience: "PME, commerces, prestataires de services et entreprises locales",
    benefits: ["Booth personnalisé avec fronton exposant", "Espace de présentation des produits", "Présence sur le plan officiel de la foire", "Présence dans le répertoire des exposants", "Accès aux espaces de networking"] },
  { id: "stand-standard", title: "Stand Standard", price: 500, width: 3, depth: 2, badges: 3,
    audience: "Startups, PME, organisations, ONG et coopératives",
    benefits: ["Table et chaises incluses", "Présence dans le guide officiel des exposants", "Localisation sur le plan officiel", "Possibilité de présenter sur le podium", "Accès aux espaces de networking"] },
  { id: "stand-corporate", title: "Stand Corporate", price: 800, width: 4, depth: 2, badges: 4,
    audience: "Entreprises établies, marques en croissance et distributeurs",
    benefits: ["Table et chaises incluses", "Emplacement amélioré sur le site", "Présence dans le guide officiel des exposants", "Localisation sur le plan officiel", "Possibilité de présenter sur le podium", "Priorité dans les communications exposants", "Accès aux espaces de networking"] },
  { id: "stand-business", title: "Stand Business", price: 1300, width: 5, depth: 2, badges: 6,
    audience: "Institutions, grandes PME, agences publiques et entreprises nationales",
    benefits: ["Emplacement privilégié", "Présence dans le guide officiel des exposants", "Localisation sur le plan officiel", "Possibilité de présenter sur le podium", "Accès prioritaire aux rencontres B2B", "Priorité dans les communications exposants", "Accès aux espaces de networking"] },
  { id: "stand-premium", title: "Stand Premium", price: 2500, width: 6, depth: 3, badges: 8,
    audience: "Banques, fintechs, télécoms, assurances et grandes entreprises",
    benefits: ["Emplacement premium et forte visibilité sur le site", "Présence dans le guide officiel des exposants", "Localisation sur le plan officiel", "Possibilité de présenter sur le podium", "Participation aux rencontres B2B", "Mention officielle comme exposant Premium"] },
  { id: "stand-premium-renforce", title: "Stand Premium Renforcé", price: 3500, width: 6, depth: 6, badges: 10,
    audience: "Sponsors, multinationales, partenaires stratégiques et grandes marques",
    benefits: ["Emplacement stratégique de premier plan et forte visibilité", "Mise en avant sur le plan officiel", "Présence renforcée sur tous les supports de communication", "Possibilité de présenter sur le podium", "Accès privilégié aux espaces VIP", "Identification comme exposant Premium Renforcé", "Priorité dans les opportunités de visibilité"] },
];

export const exhibitionGroups = [
  { id: "tables-et-booths", title: "Tables et Booth Business", description: "Des espaces accessibles pour présenter vos créations, vos produits et votre activité.", offers: exhibitionOffers.slice(0, 3) },
  { id: "stands-exposition", title: "Nos stands d’exposition", description: "Un espace dédié à votre organisation, du Stand Standard à une présence Premium Renforcée.", offers: exhibitionOffers.slice(3) },
];
export const customExhibitionFormat = "À définir / demande personnalisée";
export const exhibitionPricingNote = "Tarif pour toute la durée de l’événement, en USD hors taxes.";
export const formatExhibitionPrice = (price: number) => `${new Intl.NumberFormat("fr-FR").format(price)} USD HT`;
export const exhibitionDimensions = (offer: ExhibitionOffer) => offer.width && offer.depth
  ? `${offer.width} × ${offer.depth} m · ${offer.width * offer.depth} m²`
  : "Booth personnalisé · dimensions à préciser";
