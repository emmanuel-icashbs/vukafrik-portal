interface DataType {
  id: number;
  page: string;
  title: string;
  desc: string;
  showAnswer: boolean;
}

const faq_data: DataType[] = [
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
];
const breadcrumb_data: {
  title: string;
  sub_title: string;
} = {
  title: "Faq’ s",
  sub_title: "Faq’ s",
};

const title = "Vous avez des questions ? Vous trouverez les réponses ici !";
const sub_title =
  "em ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet Quisquawe rutruman imperdieEtiam ultricies nisi vel augue. Curabitur.";

export { breadcrumb_data, title, sub_title };
export default faq_data;
