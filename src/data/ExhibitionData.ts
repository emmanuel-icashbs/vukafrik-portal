import { StaticImageData } from "next/image";

import event_1 from "@/assets/img/schedule/schedule-3/schedule.jpg";
import event_2 from "@/assets/img/schedule/schedule-3/schedule-2.jpg";
import event_3 from "@/assets/img/schedule/schedule-3/schedule-3.jpg";

import avatar_1 from "@/assets/img/schedule/schedule-3/user.jpg";
import avatar_2 from "@/assets/img/schedule/schedule-3/user-2.jpg";
import avatar_3 from "@/assets/img/schedule/schedule-3/user-3.jpg";

interface BtnData {
  id: number;
  title: string;
}
interface DataType {
  id: number;
  event_details: {
    id: number;
    thumb: StaticImageData;
    date: string;
    title: string;
    location: string;
    time: string;
    desc?: string;
    author_avatar: StaticImageData;
    author_name: string;
    author_designation: string;
  }[];
}

export interface FaqDataType {
  id: number;
  title: string;
  desc: string;
  showAnswer: boolean;
}

const tab_title: BtnData[] = [
  {
    id: 1,
    title: "Digital Marketing",
  },
  {
    id: 2,
    title: " Marketing Strategy",
  },
  {
    id: 3,
    title: " Modern Trend of Marketing",
  },
];
const breadcrumb = {
  title: "Toutes les expositions",
  sub_title: "Expositions",
};
const exhibition_data: DataType[] = [
  {
    id: 1,
    event_details: [
      {
        id: 1,
        thumb: event_1,
        date: "jan 10, 2025",
        title:
          "Innovate 2022 Your Pathway to Business Transformation Energy Save",
        location: "Apple Upper West Side, Brooklyn",
        time: "19:15 a.m. – 07:15 a.m.",
        desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
        author_avatar: avatar_1,
        author_name: "Parker Roben",
        author_designation: "Author, Cleaner",
      },
      {
        id: 2,
        thumb: event_2,
        date: "jan 10, 2025",
        title:
          "Innovate 2022 Your Pathway to Business Transformation Energy Save",
        location: "Apple Upper West Side, Brooklyn",
        time: "19:15 a.m. – 07:15 a.m.",
        desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
        author_avatar: avatar_2,
        author_name: "Parker Roben",
        author_designation: "Author, Cleaner",
      },
      {
        id: 3,
        thumb: event_3,
        date: "jan 10, 2025",
        title:
          "Innovate 2022 Your Pathway to Business Transformation Energy Save",
        location: "Apple Upper West Side, Brooklyn",
        time: "19:15 a.m. – 07:15 a.m.",
        desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
        author_avatar: avatar_3,
        author_name: "Parker Roben",
        author_designation: "Author, Cleaner",
      },
    ],
  },
  {
    id: 2,
    event_details: [
      {
        id: 1,
        thumb: event_2,
        date: "jan 10, 2025",
        title:
          "Innovate 2022 Your Pathway to Business Transformation Energy Save",
        location: "Apple Upper West Side, Brooklyn",
        time: "19:15 a.m. – 07:15 a.m.",
        desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
        author_avatar: avatar_2,
        author_name: "Parker Roben",
        author_designation: "Author, Cleaner",
      },
      {
        id: 2,
        thumb: event_3,
        date: "jan 10, 2025",
        title:
          "Innovate 2022 Your Pathway to Business Transformation Energy Save",
        location: "Apple Upper West Side, Brooklyn",
        time: "19:15 a.m. – 07:15 a.m.",
        desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
        author_avatar: avatar_3,
        author_name: "Parker Roben",
        author_designation: "Author, Cleaner",
      },
    ],
  },
  {
    id: 3,
    event_details: [
      {
        id: 1,
        thumb: event_3,
        date: "jan 10, 2025",
        title:
          "Innovate 2022 Your Pathway to Business Transformation Energy Save",
        location: "Apple Upper West Side, Brooklyn",
        time: "19:15 a.m. – 07:15 a.m.",
        desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
        author_avatar: avatar_3,
        author_name: "Parker Roben",
        author_designation: "Author, Cleaner",
      },
      {
        id: 2,
        thumb: event_2,
        date: "jan 10, 2025",
        title:
          "Innovate 2022 Your Pathway to Business Transformation Energy Save",
        location: "Apple Upper West Side, Brooklyn",
        time: "19:15 a.m. – 07:15 a.m.",
        desc: "when an unknown printer took a galley of type and scrambled it to make a type specimen bookIt has survived not only five centuries, but also the leap into electronic.",
        author_avatar: avatar_2,
        author_name: "Parker Roben",
        author_designation: "Author, Cleaner",
      },
    ],
  },
];
const title = "Notre programme d'expositions";
const sub_title = "Calendrier des expositions";
const description =
  "Like previous year this year we are arranging world marketing summit 2025. Its the gathering of all the big";
const exhibitor_faq_data: {
  title: string;
  sub_title: string;
  data: FaqDataType[];
} = {
  title: "Vous avez des questions ? Vous trouverez les réponses ici !",
  sub_title:
    "em ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet Quisquawe rutruman imperdieEtiam ultricies nisi vel augue. Curabitur.",
  data: [
    {
      id: 1,
      showAnswer: false,
      title: "Pourquoi exposer ?",
      desc: "Applications are like the lifeblood of mobile phones and tablets today. The true potential of your area gear jimanwe mobile phon harnessed by applications can provide utility. Apps come under various segments.Applications are like the lifeblood.",
    },
    {
      id: 2,
      showAnswer: false,
      title: "How is the selection process organized?",
      desc: "Applications are like the lifeblood of mobile phones and tablets today. The true potential of your area gear jimanwe mobile phon harnessed by applications can provide utility. Apps come under various segments.Applications are like the lifeblood.",
    },
    {
      id: 3,
      showAnswer: false,
      title: "What is your customer geography?",
      desc: "Applications are like the lifeblood of mobile phones and tablets today. The true potential of your area gear jimanwe mobile phon harnessed by applications can provide utility. Apps come under various segments.Applications are like the lifeblood.",
    },
    {
      id: 4,
      showAnswer: false,
      title: "How quickly can you source developers?",
      desc: "Applications are like the lifeblood of mobile phones and tablets today. The true potential of your area gear jimanwe mobile phon harnessed by applications can provide utility. Apps come under various segments.Applications are like the lifeblood.",
    },
    {
      id: 5,
      showAnswer: false,
      title: "What are the main industries we serve?",
      desc: "Applications are like the lifeblood of mobile phones and tablets today. The true potential of your area gear jimanwe mobile phon harnessed by applications can provide utility. Apps come under various segments.Applications are like the lifeblood.",
    },
    {
      id: 6,
      showAnswer: false,
      title: "Is Evente payment processing secure?",
      desc: "Applications are like the lifeblood of mobile phones and tablets today. The true potential of your area gear jimanwe mobile phon harnessed by applications can provide utility. Apps come under various segments.Applications are like the lifeblood.",
    },
  ],
};
const exhibition_stands: {
  title: string;
  sub_title: string;
  description: string;
  data: {
    id: number;
    title: string;
    price: string;
    advantages: string[];
  }[];
  submit_button: string;
} = {
  title: "Nos stands d'exposition",
  sub_title: "Découvrez nos forfaits de prix flexibles",
  description:
    "Découvrez nos forfaits de prix flexibles pour votre exposition.",
  data: [
    {
      id: 1,
      title: "Standard",
      price: "$50",
      advantages: [
        "advantage 1",
        "advantage 2",
        "advantage 3",
        "advantage 4",
        "advantage 5",
      ],
    },
    {
      id: 2,
      title: "Business",
      price: "$100",
      advantages: [
        "advantage 1",
        "advantage 2",
        "advantage 3",
        "advantage 4",
        "advantage 5",
      ],
    },
    {
      id: 3,
      title: "Premium",
      price: "$200",
      advantages: [
        "advantage 1",
        "advantage 2",
        "advantage 3",
        "advantage 4",
        "advantage 5",
      ],
    },
  ],
  submit_button: "Souscrire",
};

const form_area = {
  title: "S'inscrire comme exposant",
  sub_title:
    "Soumettez votre interet exposant pour integrer un village thematique, renforcer votre visibilite et activer des interactions business.",
  fields: [
    "Organisation / entreprise *",
    "Personne de contact *",
    "Email *",
    "Téléphone *",
    "Site web *",
    "Secteur / village *",
    "Description du produit ou service *",
    "Format souhaité *",
    "Besoins specifiques *",
    "Liens reseaux sociaux",
    "Nombre de representants",
    "J'accepte que l'equipe VUK'AFRIK examine cette soumission et me contacte si necessaire.",
  ],
  submit_button: "Soumettre",
};

export {
  title,
  sub_title,
  description,
  tab_title,
  breadcrumb,
  exhibitor_faq_data,
  exhibition_stands,
  form_area,
};
export default exhibition_data;
