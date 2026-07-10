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

const paths_holder = {
  home: {
    link: "/",
    title: "Accueil",
  },
  about: {
    link: "/about",
    title: "À propos",
  },
  events: {
    // Programme
    list: {
      link: "/events",
      title: "Programme",
    },
    venue: { title: "Lieu & acces", link: "/event-venue" },
    details_title: "Détails",
  },
  speakers: {
    list: {
      link: "/speakers",
      title: "Intervenants",
    },
    details_title: "Détails",
  },
  exhibitions: {
    list: {
      link: "/exhibitions",
      title: "Expositions",
    },
  },
  contact: {
    link: "/contact",
    title: "Contact",
  },
  faq: {
    link: "/faq",
    title: "FAQ",
  },
  sponsors: {
    link: "/sponsors",
    title: "Sponsors",
  },
  register: {
    title: "S'inscrire",
    link: "/register",
  },
  medias_accreditation: {
    link: "/media-accreditation",
    title: "Accreditation des Médias",
  },
  volunteer: {
    title: "Volontariat",
    link: "/volunteer",
  },
};

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: false,
    title: paths_holder.home.title,
    link: paths_holder.home.link,
  },
  {
    id: 2,
    has_dropdown: false,
    title: paths_holder.about.title,
    link: paths_holder.about.link,
  },
  {
    id: 3,
    has_dropdown: false,
    title: paths_holder.events.list.title,
    link: paths_holder.events.list.link,
  },
  {
    id: 4,
    has_dropdown: false,
    title: paths_holder.speakers.list.title,
    link: paths_holder.speakers.list.link,
  },
  {
    id: 5,
    has_dropdown: false,
    title: paths_holder.exhibitions.list.title,
    link: paths_holder.exhibitions.list.link,
  },
  {
    id: 6,
    has_dropdown: false,
    title: paths_holder.contact.title,
    link: paths_holder.contact.link,
  },
];

export { paths_holder };
export default menu_data;
