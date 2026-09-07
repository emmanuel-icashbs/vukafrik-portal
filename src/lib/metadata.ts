import type { Metadata } from "next";
import { vukafrik_event_data } from "@/data/VukAfrikData";

export const siteUrl = new URL("https://vukafrik.org");
export const siteName = vukafrik_event_data.name;
export const shareImage = {
  url: new URL("/images/vukafrik-social-2026.png", siteUrl).href,
  width: 1200,
  height: 630,
  alt: "VUK’AFRIK 2026 — Innovation et entrepreneuriat, du 23 au 25 septembre au Pullman Hotel à Kinshasa",
};

/** Return a complete social card: Next.js replaces nested metadata rather than merging it. */
export function createPageMetadata(path: string, heading: string, description: string): Metadata {
  const title = `${heading} | ${siteName}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: new URL(path, siteUrl).href,
      siteName,
      locale: "fr_CD",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: shareImage.url, alt: shareImage.alt }],
    },
  };
}

export const pageCopy = {
  "/": ["Innovation & entrepreneuriat à Kinshasa", "Du 23 au 25 septembre 2026 au Pullman Hotel à Kinshasa : sommet, foire multisectorielle et networking. Découvrez le programme et inscrivez-vous."],
  "/about": ["À propos de la foire", "Découvrez VUK’AFRIK, la rencontre portée par la Congolese Computer Community pour connecter innovation, entrepreneuriat et investissement depuis Kinshasa."],
  "/events": ["Programme des trois journées", "Consultez le programme de VUK’AFRIK du 23 au 25 septembre 2026 à Kinshasa : panels, ateliers et échanges autour de l’innovation et de l’entrepreneuriat."],
  "/speakers": ["Intervenants et experts", "Découvrez les intervenants de VUK’AFRIK 2026, leurs profils et leurs sessions. Retrouvez les acteurs de l’innovation et de l’entrepreneuriat à Kinshasa."],
  "/exhibitions": ["Expositions et villages thématiques", "Découvrez les villages thématiques de VUK’AFRIK 2026 et présentez votre organisation, vos produits ou vos services à la foire multisectorielle de Kinshasa."],
  "/event-venue": ["Pullman Hotel, Kinshasa : lieu et accès", "Préparez votre venue à VUK’AFRIK du 23 au 25 septembre 2026. Retrouvez le lieu de l’événement et les informations d’accès au Pullman Hotel à Kinshasa."],
  "/register": ["Inscription des participants", "Inscrivez-vous à VUK’AFRIK 2026 à Kinshasa. Indiquez votre profil et vos jours de participation à la rencontre de l’innovation et de l’entrepreneuriat."],
  "/sponsors": ["Devenir sponsor ou partenaire", "Associez votre organisation à VUK’AFRIK 2026. Présentez votre projet de sponsoring ou de partenariat et vos objectifs de visibilité à notre équipe."],
  "/volunteer": ["Devenir volontaire", "Rejoignez l’équipe de volontaires de VUK’AFRIK 2026 à Kinshasa. Présentez votre profil, vos disponibilités et votre motivation via le formulaire."],
  "/media-accreditation": ["Accréditation des médias", "Journalistes et professionnels des médias : demandez votre accréditation pour couvrir VUK’AFRIK 2026, du 23 au 25 septembre à Kinshasa."],
  "/contact": ["Contacter l’équipe", "Contactez l’équipe de VUK’AFRIK pour vos questions sur la participation, les expositions ou les partenariats. Retrouvez nos coordonnées et le formulaire."],
  "/faq": ["Questions fréquentes", "Préparez votre participation à VUK’AFRIK 2026 : consultez les réponses aux questions sur l’événement, les inscriptions et les possibilités de participation."],
  "/gallery": ["Galerie photos", "Parcourez la galerie de VUK’AFRIK et découvrez les images présentées autour de la rencontre de l’innovation et de l’entrepreneuriat à Kinshasa."],
  "/blog": ["Rencontres et échanges", "Découvrez les rencontres et échanges présentés par VUK’AFRIK autour de l’innovation, de l’entrepreneuriat et des opportunités économiques en Afrique."],
  "/exhibitions-details": ["Détails de l’exposition", "Consultez les informations présentées sur cette exposition et découvrez les espaces consacrés aux exposants sur le site de VUK’AFRIK."],
  "/pricing": ["Formules de participation", "Consultez les formules de participation présentées sur le site de VUK’AFRIK et contactez l’équipe pour obtenir des précisions."],
  "/login": ["Connexion", "Accédez au formulaire de connexion de votre espace sur le site de VUK’AFRIK."],
  "/product": ["Catalogue", "Parcourez les articles présentés dans le catalogue du site de VUK’AFRIK et consultez leurs fiches détaillées."],
  "/product-details": ["Détails du produit", "Consultez les caractéristiques du produit présenté dans le catalogue du site de VUK’AFRIK."],
  "/cart": ["Panier", "Consultez les articles ajoutés à votre panier sur le site de VUK’AFRIK et vérifiez votre sélection."],
  "/checkout": ["Finaliser la commande", "Retrouvez le récapitulatif de votre commande et le formulaire de finalisation sur le site de VUK’AFRIK."],
  "/wishlist": ["Favoris", "Retrouvez les articles enregistrés dans votre liste de favoris sur le site de VUK’AFRIK."],
} as const;

export function getPageMetadata(path: keyof typeof pageCopy): Metadata {
  const [heading, description] = pageCopy[path];
  return createPageMetadata(path, heading, description);
}
