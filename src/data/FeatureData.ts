import bg_img from "@/assets/img/feature/special-features.jpg";

interface DataType {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

const feature_data: DataType[] = [
  {
    id: 1,
    icon: "flaticon-meeting",
    title: "Panel",
    desc: "anunknown printer took galley type and scrambled type specimen book survived.",
  },
  {
    id: 2,
    icon: "flaticon-teamwork-2",
    title: "Ateliers",
    desc: "anunknown printer took galley type and scrambled type specimen book survived.",
  },
  {
    id: 3,
    icon: "flaticon-puzzle",
    title: "Hackathon",
    desc: "anunknown printer took galley type and scrambled type specimen book survived.",
  },
  {
    id: 4,
    icon: "flaticon-share",
    title: "Exposition",
    desc: "anunknown printer took galley type and scrambled type specimen book survived.",
  },
];

export { feature_data, bg_img };
