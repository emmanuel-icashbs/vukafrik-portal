import { StaticImageData } from "next/image";

import brand_1 from "@/assets/img/brands/brands.png";
import brand_2 from "@/assets/img/brands/brands-2.png";
import brand_3 from "@/assets/img/brands/brands-3.png";
import brand_4 from "@/assets/img/brands/brands-4.png";
import brand_5 from "@/assets/img/brands/brands-5.png";
import brand_6 from "@/assets/img/brands/brands-6.png";
import brand_7 from "@/assets/img/brands/brands-7.png";
import brand_8 from "@/assets/img/brands/brands-8.png";
import { vukafrik_event_data } from "./VukAfrikData";
import { cta_data } from "./CtaData";
import { paths_holder } from "./MenuData";

const brands: StaticImageData[] = [
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  brand_6,
  brand_7,
  brand_8,
  brand_4,
  brand_3,
];

const sub_title = "Nos Sponsors";
const title = "Sponsors et partenaires officiels";
const description = `Comme l'année dernière, nous organisons cette année ${vukafrik_event_data.name}. Il s'agit du rendez-vous de tous les grands`;
const see_more_label = "Voir plus";
const see_more_link = paths_holder.sponsors.link;
const become_sponsor_title = cta_data.become_sponsor.title;
const cta_wrapper_sub_title = "Nous irons toujours plus loin!";
const cta_wrapper_title = "Avec nos partenaires!";
const breadcrumb = {
  title: "Sponsors",
  sub_title: "Sponsors",
};
const form_area = {
  title: "Devenir sponsor ou partenaire",
  sub_title:
    "Soumettez l'interet de votre organisation pour un sponsoring ou un partenariat et laissez l'equipe VUK'AFRIK vous orienter vers le bon dispositif.",
  fields: [
    "Nom de l'organisation *",
    "Personne de contact *",
    "Email *",
    "Téléphone *",
    "Site web *",
    "Categorie de partenariat *",
    "Message *",
    "Fourchette budgetaire",
    "Zone de visibilite souhaitee *",
    "Secteur d'interet *",
    "J'accepte que l'equipe VUK'AFRIK examine cette soumission et me contacte si necessaire.",
  ],
  submit_button: "Soumettre",
};

interface DataType {
  id: number;
  page: string;
  title: string;
  desc: string;
  showAnswer: boolean;
}

const sponsor_faq_data: { title: string; sub_title: string; data: DataType[] } =
  {
    title: "Vous avez des questions ? Vous trouverez les réponses ici !",
    sub_title:
      "em ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet Quisquawe rutruman imperdieEtiam ultricies nisi vel augue. Curabitur.",
    data: [
      {
        id: 1,
        page: "inner_faq",
        showAnswer: false,
        title: "Do you get any event support?",
        desc: "Applications are like the lifeblood of mobile phones and tablets today. The true potential of your area gear jimanwe mobile phon harnessed by applications can provide utility. Apps come under various segments.Applications are like the lifeblood.",
      },
      {
        id: 2,
        page: "inner_faq",
        showAnswer: false,
        title: "How is the selection process organized?",
        desc: "Applications are like the lifeblood of mobile phones and tablets today. The true potential of your area gear jimanwe mobile phon harnessed by applications can provide utility. Apps come under various segments.Applications are like the lifeblood.",
      },
      {
        id: 3,
        page: "inner_faq",
        showAnswer: false,
        title: "What is your customer geography?",
        desc: "Applications are like the lifeblood of mobile phones and tablets today. The true potential of your area gear jimanwe mobile phon harnessed by applications can provide utility. Apps come under various segments.Applications are like the lifeblood.",
      },
      {
        id: 4,
        page: "inner_faq",
        showAnswer: false,
        title: "How quickly can you source developers?",
        desc: "Applications are like the lifeblood of mobile phones and tablets today. The true potential of your area gear jimanwe mobile phon harnessed by applications can provide utility. Apps come under various segments.Applications are like the lifeblood.",
      },
      {
        id: 5,
        page: "inner_faq",
        showAnswer: false,
        title: "What are the main industries we serve?",
        desc: "Applications are like the lifeblood of mobile phones and tablets today. The true potential of your area gear jimanwe mobile phon harnessed by applications can provide utility. Apps come under various segments.Applications are like the lifeblood.",
      },
      {
        id: 6,
        page: "inner_faq",
        showAnswer: false,
        title: "Is Evente payment processing secure?",
        desc: "Applications are like the lifeblood of mobile phones and tablets today. The true potential of your area gear jimanwe mobile phon harnessed by applications can provide utility. Apps come under various segments.Applications are like the lifeblood.",
      },
    ],
  };
const sponsor_budgets = [
  "A discuter",
  "Moins de $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
  "Prefere ne pas preciser",
];
const sponsor_categories = [
  "Founding Partner",
  "Strategic Partner",
  "Innovation Partner",
  "Sector Partner",
  "Media Partner",
  "Technical Partner",
  "Institutional Partner",
  "A definir",
];
const visibility_zones = [
  "Zone Innovation",
  "Zone Business",
  "Zone Entrepreneurship",
  "Zone Startup",
  "Zone Investissement",
];
export {
  sub_title,
  title,
  description,
  see_more_label,
  become_sponsor_title,
  cta_wrapper_title,
  cta_wrapper_sub_title,
  see_more_link,
  breadcrumb,
  form_area,
  sponsor_faq_data,
  sponsor_budgets,
  sponsor_categories,
  visibility_zones,
};
export default brands;
