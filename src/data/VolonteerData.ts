import { FaqDataType } from "@/utils/types";

const breadcrumb_data: {
  title: string;
  sub_title: string;
} = {
  title: "Volontaire",
  sub_title: "Volontaire",
};
const faq_area: { title: string; sub_title: string; data: FaqDataType[] } = {
  title:
    "Avez-vous des questions concernant le volontaire ? Vous trouverez les réponses ici.",
  sub_title:
    "em ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet Quisquawe rutruman imperdieEtiam ultricies nisi vel augue. Curabitur.",
  data: [
    {
      id: 1,
      page: "inner_faq",
      showAnswer: false,
      title: "Do you get any product support?",
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
const form_area = {
  title: "Devenir volontaire a VUK'AFRIK 2026",
  sub_title:
    "Rejoignez l'equipe qui accompagne l'une des plateformes africaines emergentes de l'innovation, de l'entrepreneuriat et du business.",
  fields: [
    "Nom complet *",
    "E-mail *",
    "Téléphone *",
    "Ville *",
    "Disponibilite *",
    "Zone d'interet *",
    "Competences *",
    "Experience evenementielle precedente *",
    "J'accepte que l'equipe VUK'AFRIK examine cette soumission et me contacte si necessaire.",
  ],
  submit_button: "Soumettre",
};

export { breadcrumb_data, form_area, faq_area };
