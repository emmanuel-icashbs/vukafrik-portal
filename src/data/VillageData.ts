import village_1 from "@/assets/img/vukafrik/content/village-agriculture.webp";
import village_2 from "@/assets/img/vukafrik/content/village-finance.webp";
import village_3 from "@/assets/img/vukafrik/content/village-technology.webp";
import village_4 from "@/assets/img/vukafrik/content/village-industry.webp";
import village_5 from "@/assets/img/vukafrik/content/village-creative-industries.webp";
import village_6 from "@/assets/img/vukafrik/content/village-ecology.webp";
import village_7 from "@/assets/img/vukafrik/content/village-startups.webp";
import village_8 from "@/assets/img/vukafrik/content/village-institutions.webp";
import { StaticImageData } from "next/image";

import { vukafrik_event_data } from "./VukAfrikData";

interface DataType {
  id: number;
  thumb: StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  exhibitorFit: string;
}

const village_data: DataType[] = [
  {
    id: 1,
    thumb: village_1,
    imageAlt: "Un producteur présente un panier de légumes frais",
    title: "Agriculture & Agro-transformation",
    description:
      "Un espace pour l'agritech, la transformation, les chaines de valeur alimentaires et les solutions liees a la production.",
    exhibitorFit:
      "Pour les startups agritech, cooperatives, entreprises de transformation alimentaire, projets d'innovation rurale et acteurs des chaines de valeur agricoles.",
  },
  {
    id: 2,
    thumb: village_2,
    imageAlt: "Outils numériques de gestion financière sur ordinateur et tablette",
    title: "Finance, Fintech & Inclusion financiere",
    description:
      "Un village pour les banques, fintechs, services de paiement, finance digitale et inclusion financiere.",
    exhibitorFit:
      "Pour les banques, fintechs, acteurs du mobile money, plateformes de paiement, solutions d'inclusion financiere et services d'investissement.",
  },
  {
    id: 3,
    thumb: village_3,
    imageAlt: "Un développeur travaille sur un ordinateur",
    title: "Hi-Tech, Digital & Technologies",
    description:
      "Un espace dedie aux plateformes, logiciels, solutions numeriques, intelligence artificielle et transformation digitale.",
    exhibitorFit:
      "Pour les entreprises logicielles, solutions IA, plateformes digitales, startups tech, prestataires IT et partenaires de transformation.",
  },
  {
    id: 4,
    thumb: village_4,
    imageAlt: "Des artisans travaillent le bois dans un atelier",
    title: "Industrie & Transformation locale",
    description:
      "Une vitrine pour la production, la transformation locale, les chaines de valeur industrielles et les savoir-faire de terrain.",
    exhibitorFit:
      "Pour les industriels, projets manufacturiers, entreprises de transformation locale, solutions de production et acteurs des chaines de valeur.",
  },
  {
    id: 5,
    thumb: village_5,
    imageAlt: "Des créateurs de mode utilisent une tablette dans leur atelier",
    title: "Industries creatives & Culture",
    description:
      "Un environnement pour la mode, le design, l'audiovisuel, les medias et les initiatives culturelles a fort potentiel.",
    exhibitorFit:
      "Pour les marques de mode, studios de creation, medias, producteurs audiovisuels, createurs digitaux et entrepreneurs culturels.",
  },
  {
    id: 6,
    thumb: village_6,
    imageAlt: "Des éoliennes et des panneaux solaires produisent de l’énergie",
    title: "Ecologie & Environnement",
    description:
      "Un espace pour les solutions liees a l'environnement, a la ville durable, a l'energie et a la gestion responsable des ressources.",
    exhibitorFit:
      "Pour les porteurs de solutions vertes, entreprises engagees, projets climat et acteurs de la transition environnementale.",
  },
  {
    id: 7,
    thumb: village_7,
    imageAlt: "Une équipe collabore autour d’une table",
    title: "Startup, Entrepreneuriat & PME",
    description:
      "Un espace pour les startups, PME, structures d'accompagnement, incubateurs et talents entrepreneuriaux.",
    exhibitorFit:
      "Pour les jeunes entreprises, incubateurs, structures de soutien, programmes d'employabilite et entrepreneurs en croissance.",
  },
  {
    id: 8,
    thumb: village_8,
    imageAlt: "Une équipe échange lors d’une réunion professionnelle",
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
