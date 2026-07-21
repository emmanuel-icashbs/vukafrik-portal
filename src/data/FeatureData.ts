import bg_img from "@/assets/img/feature/special-features.jpg";
import { vukafrik_event_data } from "./VukAfrikData";

interface DataType {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

const feature_data: DataType[] = [
  {
    id: 1,
    icon: "flaticon-meeting",
    title: "Panels stratégiques",
    desc: "Des discussions de haut niveau entre décideurs, acteurs de développement  , investisseurs et leaders d'opinion autour des grands enjeux économiques et technologiques.",
  },
  {
    id: 2,
    icon: "flaticon-teamwork-2",
    title: "Ateliers Pratiques",
    desc: "Sessions interactives pour développer des compétences, découvrir des outils pratiques et partager les meilleures approches en innovation, entrepreneuriat et transformation digitale.",
  },
  {
    id: 3,
    icon: "flaticon-puzzle",
    title: "Hackathon",
    desc: "Des développeurs, designers et entrepreneurs collaborent pour imaginer des solutions innovantes répondant aux défis économiques, sociaux et technologiques de la RDC",
  },
  {
    id: 4,
    icon: "flaticon-share",
    title: "Exposition",
    desc: "Découvrez les innovations, produits, services et technologies présentés par des startups, PME, grandes entreprises et partenaires venus de plusieurs secteurs.",
  },
];

const title = "Pourquoi participer à notre événement ?";
const sub_title = "Une plateforme, Plusieurs expériences";
const description = `Contrairement à un événement traditionnel, ${vukafrik_event_data.name} combine plusieurs espaces complémentaires pour favoriser les échanges, l'apprentissage, les partenariats et les opportunités d'investissement.`;

export { feature_data, bg_img, title, sub_title, description };
