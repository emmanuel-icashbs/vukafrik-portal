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
    title: "Civil Litigation paper’s Of Conference",
    date: "16 Jan, 2025",
    comment: "12 Comments",
    tag: "Business",
  },
  {
    id: 2,
    thumb: blog_2,
    title: "Reinventing Experiences of Creativity",
    date: "16 Jan, 2025",
    comment: "12 Comments",
    tag: "Conference",
  },
  {
    id: 3,
    thumb: blog_3,
    title: "The Save soil, save world Projects in 2025",
    date: "16 Jan, 2025",
    comment: "12 Comments",
    tag: "Marketing",
  },
];

const title = "Rencontres avec des experts du monde des affaires";
const sub_title = "Quelques rencontres";
const description =
  "Les rencontres qui bougent les lignes, qui change les affaires en mieux.";

export { title, sub_title, description };

export default blog_data;
