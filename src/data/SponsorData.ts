import type { StaticImageData } from "next/image";
import sponsor0 from "@/assets/img/sponsors/min-economie.webp";
import sponsor1 from "@/assets/img/sponsors/min-formation.webp";
import sponsor2 from "@/assets/img/sponsors/min-numerique.webp";
import sponsor3 from "@/assets/img/sponsors/min-industrie.webp";
import sponsor4 from "@/assets/img/sponsors/arptc.webp";
import sponsor5 from "@/assets/img/sponsors/arsp.webp";
import sponsor6 from "@/assets/img/sponsors/fpi.webp";
import sponsor7 from "@/assets/img/sponsors/fogec.webp";
import sponsor8 from "@/assets/img/sponsors/anadec.webp";
import sponsor9 from "@/assets/img/sponsors/aprocm.webp";
import sponsor10 from "@/assets/img/sponsors/ena.webp";
import sponsor11 from "@/assets/img/sponsors/cadeco.webp";
import sponsor12 from "@/assets/img/sponsors/fec.webp";
import sponsor13 from "@/assets/img/sponsors/animf.webp";
import sponsor14 from "@/assets/img/sponsors/aprofeec.webp";
import sponsor15 from "@/assets/img/sponsors/finca.webp";
import sponsor16 from "@/assets/img/sponsors/firstbank.webp";
import sponsor17 from "@/assets/img/sponsors/rawsur.webp";
import sponsor18 from "@/assets/img/sponsors/express.webp";
import sponsor19 from "@/assets/img/sponsors/kl-energy.webp";
import sponsor20 from "@/assets/img/sponsors/maajabu.webp";
import sponsor21 from "@/assets/img/sponsors/pepsi.webp";
import sponsor22 from "@/assets/img/sponsors/delegation-unikin.webp";
import sponsor23 from "@/assets/img/sponsors/zola-kifuma.webp";
import { vukafrik_event_data } from "./VukAfrikData";
import { paths_holder } from "./MenuData";

export interface Sponsor {
  id: string;
  name: string;
  image: StaticImageData;
  order: number;
  website?: string;
}

// Display order agreed for both the homepage and the complete sponsor listing.
const brands: Sponsor[] = [
  { id: "min-economie", name: "Ministère de l’Économie nationale", image: sponsor0, order: 1 },
  { id: "min-formation", name: "Ministère de la Formation professionnelle", image: sponsor1, order: 2 },
  { id: "min-numerique", name: "Ministère de l’Économie numérique", image: sponsor2, order: 3 },
  { id: "min-industrie", name: "Ministère de l’Industrie et Développement des PME", image: sponsor3, order: 4 },
  { id: "arptc", name: "ARPTC", image: sponsor4, order: 5 },
  { id: "arsp", name: "ARSP", image: sponsor5, order: 6 },
  { id: "fpi", name: "FPI", image: sponsor6, order: 7 },
  { id: "fogec", name: "FOGEC", image: sponsor7, order: 8 },
  { id: "anadec", name: "ANADEC", image: sponsor8, order: 9 },
  { id: "aprocm", name: "APROCM", image: sponsor9, order: 10 },
  { id: "ena", name: "ENA", image: sponsor10, order: 11 },
  { id: "cadeco", name: "CADECO", image: sponsor11, order: 12 },
  { id: "fec", name: "FEC", image: sponsor12, order: 13 },
  { id: "animf", name: "ANIMF", image: sponsor13, order: 14 },
  { id: "aprofeec", name: "APROFEEC-RDC", image: sponsor14, order: 15 },
  { id: "finca", name: "FINCA", image: sponsor15, order: 16 },
  { id: "firstbank", name: "FirstBank DRC", image: sponsor16, order: 17 },
  { id: "rawsur", name: "RAWSUR", image: sponsor17, order: 18 },
  { id: "express", name: "Express / Copie Cat", image: sponsor18, order: 19 },
  { id: "kl-energy", name: "KL Energy", image: sponsor19, order: 20 },
  { id: "maajabu", name: "Maajabu Holding", image: sponsor20, order: 21 },
  { id: "pepsi", name: "PEPSI", image: sponsor21, order: 22 },
  { id: "delegation-unikin", name: "Délégation facultaire — UNIKIN", image: sponsor22, order: 23 },
  { id: "zola-kifuma", name: "Zola Kifuma", image: sponsor23, order: 24 },
];

const sub_title = "Nos Sponsors";
const title = "Sponsors et partenaires officiels";
const description = `Comme l'année dernière, nous organisons cette année ${vukafrik_event_data.name}. Il s'agit du rendez-vous de tous les grands`;
const see_more_label = "Voir plus";
const see_more_link = paths_holder.sponsors.link;

const cta_wrapper_sub_title = "Nous irons toujours plus loin!";
const cta_wrapper_title = "Avec nos partenaires!";
const breadcrumb = {
  title: "Sponsors",
  sub_title: "Sponsors",
};
const sponsor_form_area = {
  id: "sponsor_form",
  title: "Devenir sponsor ou partenaire",
  sub_title:
    "Soumettez l'interet de votre organisation pour un sponsoring ou un partenariat et laissez l'equipe VUK'AFRIK vous orienter vers le bon dispositif.",
  fields: [
    "Nom de l'organisation *",
    "Personne de contact *",
    "Email *",
    "Téléphone *",
    "Site web",
    "Categorie de partenariat *",
    "Message",
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
  cta_wrapper_title,
  cta_wrapper_sub_title,
  see_more_link,
  breadcrumb,
  sponsor_form_area,
  sponsor_faq_data,
  sponsor_budgets,
  sponsor_categories,
  visibility_zones,
};
export default brands;
