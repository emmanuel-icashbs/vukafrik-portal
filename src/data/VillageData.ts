import { StaticImageData } from "next/image";

import event_thumb1 from "@/assets/img/schedule/schedule-2/thumb.jpg";
import event_thumb2 from "@/assets/img/schedule/schedule-2/thumb-2.jpg";
import event_thumb3 from "@/assets/img/schedule/schedule-2/thumb-3.jpg";
import event_thumb4 from "@/assets/img/schedule/schedule-2/thumb-4.jpg";
import { vukafrik_event_data } from "./VukAfrikData";

interface DataType {
  id: number;
  thumb: StaticImageData;
  title: string;
  description: string;
  exhibitorFit: string;
}

const village_data: DataType[] = [
  {
    id: 1,
    thumb: event_thumb1,
    title: "Agriculture & Agro-transformation",
    description:
      "Un espace pour l'agritech, la transformation, les chaines de valeur alimentaires et les solutions liees a la production.",
    exhibitorFit:
      "Pour les startups agritech, cooperatives, entreprises de transformation alimentaire, projets d'innovation rurale et acteurs des chaines de valeur agricoles.",
  },
  {
    id: 2,
    thumb: event_thumb2,
    title: "Finance, Fintech & Inclusion financiere",
    description:
      "Un village pour les banques, fintechs, services de paiement, finance digitale et inclusion financiere.",
    exhibitorFit:
      "Pour les banques, fintechs, acteurs du mobile money, plateformes de paiement, solutions d'inclusion financiere et services d'investissement.",
  },
  {
    id: 3,
    thumb: event_thumb3,
    title: "Hi-Tech, Digital & Technologies",
    description:
      "Un espace dedie aux plateformes, logiciels, solutions numeriques, intelligence artificielle et transformation digitale.",
    exhibitorFit:
      "Pour les entreprises logicielles, solutions IA, plateformes digitales, startups tech, prestataires IT et partenaires de transformation.",
  },
  {
    id: 4,
    thumb: event_thumb4,
    title: "Industrie & Transformation locale",
    description:
      "Une vitrine pour la production, la transformation locale, les chaines de valeur industrielles et les savoir-faire de terrain.",
    exhibitorFit:
      "Pour les industriels, projets manufacturiers, entreprises de transformation locale, solutions de production et acteurs des chaines de valeur.",
  },
  {
    id: 5,
    thumb: event_thumb2,
    title: "Industries creatives & Culture",
    description:
      "Un environnement pour la mode, le design, l'audiovisuel, les medias et les initiatives culturelles a fort potentiel.",
    exhibitorFit:
      "Pour les marques de mode, studios de creation, medias, producteurs audiovisuels, createurs digitaux et entrepreneurs culturels.",
  },
  {
    id: 6,
    thumb: event_thumb3,
    title: "Ecologie & Environnement",
    description:
      "Un espace pour les solutions liees a l'environnement, a la ville durable, a l'energie et a la gestion responsable des ressources.",
    exhibitorFit:
      "Pour les porteurs de solutions vertes, entreprises engagees, projets climat et acteurs de la transition environnementale.",
  },
  {
    id: 7,
    thumb: event_thumb4,
    title: "Startup, Entrepreneuriat & PME",
    description:
      "Un espace pour les startups, PME, structures d'accompagnement, incubateurs et talents entrepreneuriaux.",
    exhibitorFit:
      "Pour les jeunes entreprises, incubateurs, structures de soutien, programmes d'employabilite et entrepreneurs en croissance.",
  },
  {
    id: 8,
    thumb: event_thumb4,
    title: "Institutionnel",
    description:
      "Un espace de representation pour les institutions, regulateurs, agences de developpement et partenaires publics.",
    exhibitorFit:
      "Pour les institutions publiques, structures d'appui, regulateurs et organismes qui accompagnent les dynamiques economiques.",
  },
];

const title = "Nos villages thematiques 2026";
const sub_title = "villages thematiques";
const description = `Comme l'année dernière, nous organisons cette année ${vukafrik_event_data.name}. Il s'agit du rendez-vous de tous les grands`;

export { title, sub_title, description };
export default village_data;
