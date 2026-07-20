import { FaqDataType } from "@/utils/types";

const breadcrumb_data: {
  title: string;
  sub_title: string;
} = {
  title: "Accréditation des médias",
  sub_title: "Accréditation des médias",
};
const faq_data: { title: string; sub_title: string; data: FaqDataType[] } = {
  title:
    "Avez-vous des questions concernant l'accréditation des médias ? Vous trouverez les réponses ici.",
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

const media_accred_form_area = {
  id: "media_form",
  title: "Demande d'accreditation media",
  sub_title:
    "Demandez un acces media pour couvrir VUK'AFRIK 2026, son Strategic Summit, ses expositions, ses innovation showcases et ses activites ecosystemiques.",
  fields: [
    "Organisation / media *",
    "Nom du journaliste / representant *",
    "E-mail *",
    "Téléphone *",
    "Pays *",
    "Type de media *",
    "Objet de la demande *",
    "Lien vers des contenus precedents",
    "Numero de carte de presse *",
    "Nombre de representants media *",
    "Besoins techniques specifiques",
    "J'accepte que l'equipe VUK'AFRIK examine cette soumission et me contacte si necessaire.",
  ],
  submit_button: "Soumettre",
};

const media_types = [
  "TV",
  "Radio",
  "Presse ecrite",
  "Media en ligne",
  "Blog",
  "Podcast",
  "Photo / Video",
  "Reseaux sociaux / Createur de contenu",
  "Autre",
];
export { breadcrumb_data, faq_data, media_accred_form_area, media_types };
