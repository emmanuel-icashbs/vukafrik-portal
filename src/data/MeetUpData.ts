import { StaticImageData } from "next/image";

import blog_1 from "@/assets/img/blog/blog.jpg";
import blog_2 from "@/assets/img/blog/blog-2.jpg";
import blog_3 from "@/assets/img/blog/blog-3.jpg";

export interface BlogDataType {
  id: number;
  thumb: StaticImageData;
  title: string;
  desc?: string;
  date: string;
  comment: string;
  tag: string;
}

const blog_data: BlogDataType[] = [
  {
    id: 1,
    thumb: blog_1,
    title: "Innovation, régulation et inclusion numérique",
    date: "16 Jan, 2025",
    comment: "Dr LOMAMI, Pres KATENDE",
    tag: "Business",
  },
  {
    id: 2,
    thumb: blog_2,
    title: "Développer le capital humain",
    date: "16 Jan, 2025",
    comment: "12 Comments",
    tag: "Conference",
  },
  {
    id: 3,
    thumb: blog_3,
    title: "Construire une nation d’entrepreneurs",
    date: "16 Jan, 2025",
    comment: "12 Comments",
    tag: "Marketing",
  },
];

const title = "Des échanges privilégiés avec les leaders qui façonnent l’avenir.";
const sub_title = "Fireside Chats";
const description =
  "Des Echanges privilégiés avec des dirigeants d’entreprises, investisseurs, décideurs publics et entrepreneurs visionnaires. Dans un format interactif, offrant un accès unique aux idées, aux expériences et aux stratégies qui accélèrent l’innovation et la transformation économique.";

export { title, sub_title, description };

export default blog_data;
