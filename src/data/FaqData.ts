import { vukafrik_event_data as event } from "./VukAfrikData";
import { exhibitionOffers, formatExhibitionPrice, exhibitionPricingNote } from "./ExhibitionOffers";
import villages from "./VillageData";
import { cta_data } from "./CtaData";
import { paths_holder as paths } from "./MenuData";

export interface FaqItem {
  id: string;
  title: string;
  desc: string;
  links?: { label: string; href: string }[];
}
export interface FaqGroup { id: string; title: string; items: FaqItem[]; }
const link = (label: string, href: string) => ({ label, href });
const contactLinks = [link(event.contacts.generalEmail, `mailto:${event.contacts.generalEmail}`), link(event.contacts.phoneLabel, event.contacts.phoneHref)];
export const faqGroups: FaqGroup[] = [
  { id: "evenement", title: "L’événement", items: [
    { id: "presentation", title: "Qu’est-ce que VUK’AFRIK ?", desc: "VUK’AFRIK est une rencontre consacrée à l’innovation, à l’entrepreneuriat et à la transformation économique. L’événement associe un sommet stratégique, une foire multisectorielle, des villages thématiques et des espaces de networking pour connecter les initiatives locales aux opportunités régionales et africaines." },
    { id: "lieu", title: "Quand et où se déroule VUK’AFRIK 2026 ?", desc: `${event.name} se tiendra du ${event.dates} au ${event.venue}, en République démocratique du Congo. Consultez la page « Lieu & accès » pour préparer votre déplacement.`, links: [link("Lieu & accès", paths.events.venue.link)] },
    { id: "organisateur", title: "Qui organise l’événement ?", desc: `VUK’AFRIK est organisé par la ${event.organiser}.` },
    { id: "public", title: "À qui s’adresse VUK’AFRIK ?", desc: "L’événement s’adresse aux entrepreneurs, startups, PME, grandes entreprises, investisseurs, institutions publiques, étudiants, médias et acteurs de l’écosystème économique et de l’innovation." },
    { id: "secteurs", title: "VUK’AFRIK est-il réservé au secteur numérique ?", desc: "Non. Le numérique fait partie des secteurs représentés, aux côtés de l’agriculture, de la finance, de l’industrie, des industries créatives, de l’environnement et de l’entrepreneuriat." },
  ] },
  { id: "inscription", title: "Inscription & programme", items: [
    { id: "inscrire", title: "Comment m’inscrire ?", desc: "Remplissez le formulaire « S’inscrire » en précisant vos coordonnées, votre profil et les jours auxquels vous souhaitez participer. Pour une demande particulière, contactez l’équipe organisatrice.", links: [link("S’inscrire", cta_data.register.href)] },
    { id: "jours", title: "Puis-je participer à une seule journée ?", desc: "Oui, le formulaire permet d’indiquer une journée, une combinaison de deux journées ou les trois jours." },
    { id: "entree", title: "L’entrée est-elle gratuite ou payante ?", desc: "Pour connaître les conditions d’accès et les éventuels frais de participation, contactez l’organisation.", links: contactLinks },
    { id: "programme", title: "Que propose le programme ?", desc: "Le programme prévoit notamment des conférences, panels, fireside chats, ateliers pratiques, présentations de projets, expositions et temps de networking. Consultez la page « Programme » pour les horaires, lieux et intervenants annoncés.", links: [link("Consulter le programme", paths.events.list.link)] },
    { id: "villages", title: "Quels sont les villages thématiques ?", desc: `${villages.length} villages sont présentés : ${villages.map(v => v.title).join(" ; ")}.`, links: [link("Découvrir les villages", paths.exhibitions.list.link)] },
  ] },
  { id: "partenariats", title: "Exposer & devenir partenaire", items: [
    { id: "exposer", title: "Comment exposer mes produits ou services ?", desc: "Consultez les offres sur la page « Expositions », puis remplissez le formulaire exposant en précisant votre organisation, votre activité et le format souhaité.", links: [link("S’inscrire comme exposant", cta_data.become_exhibitor.href)] },
    { id: "tarifs", title: "Quels sont les tarifs des espaces d’exposition ?", desc: `Les offres vont de ${formatExhibitionPrice(Math.min(...exhibitionOffers.map(o => o.price)))} à ${formatExhibitionPrice(Math.max(...exhibitionOffers.map(o => o.price)))}. ${exhibitionPricingNote} Les dimensions, badges et prestations incluses sont détaillés sur la page « Expositions ».`, links: [link("Voir les offres d’exposition", paths.exhibitions.list.link)] },
    { id: "personnalise", title: "Puis-je demander un espace d’exposition personnalisé ?", desc: "Oui. Le formulaire exposant propose l’option « À définir / demande personnalisée ». Décrivez vos besoins pour permettre à l’équipe d’étudier votre demande.", links: [link("Présenter mes besoins", cta_data.become_exhibitor.href)] },
    { id: "sponsor", title: "Comment devenir sponsor ou partenaire ?", desc: "Remplissez le formulaire « Devenir sponsor » sur la page « Partenaires », en indiquant vos objectifs, votre catégorie de partenariat et votre budget indicatif.", links: [link("Devenir sponsor", cta_data.become_sponsor.href), link(event.contacts.partnershipsEmail, `mailto:${event.contacts.partnershipsEmail}`)] },
  ] },
  { id: "contribuer", title: "Contribuer & nous contacter", items: [
    { id: "intervention", title: "Comment proposer une intervention ?", desc: "Utilisez le formulaire « Proposer une intervention » sur la page « Intervenants » pour soumettre votre proposition à l’équipe organisatrice.", links: [link("Proposer une intervention", cta_data.become_speaker.href)] },
    { id: "media", title: "Comment demander une accréditation média ?", desc: "Remplissez le formulaire de la page « Accréditation des médias » pour transmettre votre demande à l’organisation.", links: [link("Accréditation des médias", cta_data.become_journalist.href)] },
    { id: "volontaire", title: "Comment rejoindre l’équipe de volontaires ?", desc: "Rendez-vous sur la page « Volontariat » et remplissez le formulaire de candidature.", links: [link("Devenir volontaire", cta_data.become_volonteer.href)] },
    { id: "contact", title: "Comment contacter l’organisation ?", desc: "Contactez l’équipe pour les demandes générales ou les partenariats. Elle est également joignable par téléphone ou WhatsApp.", links: [...contactLinks, link(event.contacts.partnershipsEmail, `mailto:${event.contacts.partnershipsEmail}`), link("WhatsApp", event.contacts.whatsappHref)] },
  ] },
];
export const breadcrumb_data = { title: "Questions fréquentes", sub_title: "FAQ" };
export const title = "Vos questions sur VUK’AFRIK";
export const sub_title = "Les informations essentielles pour préparer votre participation, exposer et contribuer à l’événement.";
export default faqGroups.flatMap(group => group.items);
