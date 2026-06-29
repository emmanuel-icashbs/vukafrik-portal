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

const brands: StaticImageData[] = [
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  brand_6,
  brand_7,
  brand_8,
];

const sub_title = "Sponsors";
const title = "Sponsors et partenaires officiels";
const description = `Comme l'année dernière, nous organisons cette année ${vukafrik_event_data.name}. Il s'agit du rendez-vous de tous les grands`;
const see_more_label = "Voir plus";
const see_more_link = "/team";
const become_sponsor_title = cta_data.become_sponsor.title;
const cta_wrapper_sub_title = "Nous irons toujours plus loin!";
const cta_wrapper_title = "Avec nos partenaires!";

export {
  sub_title,
  title,
  description,
  see_more_label,
  become_sponsor_title,
  cta_wrapper_title,
  cta_wrapper_sub_title,
  see_more_link,
};
export default brands;
