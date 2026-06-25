export interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: false,
    title: "Accueil",
    link: "/",
  },
  {
    id: 2,
    has_dropdown: false,
    title: "À propos",
    link: "/about",
  },
  {
    id: 3,
    has_dropdown: false,
    title: "Programme",
    link: "/events",
  },
  {
    id: 4,
    has_dropdown: false,
    title: "Intervenants",
    link: "/team",
  },
  {
    id: 5,
    has_dropdown: false,
    title: "Expositions",
    link: "/exhibitions",
  },
  {
    id: 6,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;
