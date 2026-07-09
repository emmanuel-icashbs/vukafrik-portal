import { StaticImageData } from "next/image";
import { vukafrik_event_data } from "./VukAfrikData";
import pullman from "@/assets/img/vukafrik/pullman_hotel.png";
import pullman2 from "@/assets/img/vukafrik/pullman_hotel2.png";

const breadcrumb_data: {
  title: string;
  sub_title: string;
} = {
  title: "Lieu de l'événement",
  sub_title: "Lieu de l'événement",
};
const event_venue_data: {
  image: StaticImageData;
  image2: StaticImageData;
  title: string;
  sub_title: string;
  description: string;
  address: {
    label: string;
    value: string;
  };
  phone: {
    label: string;
    value: string;
  };
  email: {
    label: string;
    value: string;
  };
} = {
  image: pullman2,
  image2: pullman,
  title: vukafrik_event_data.venue,
  sub_title: vukafrik_event_data.name,
  address: {
    label: "Adresse",
    value: "4 Avenue Batetela dans la commune de Gombe, à Kinshasa",
  },
  phone: {
    label: "Téléphone",
    value: vukafrik_event_data.contacts.phoneLabel,
  },
  email: {
    label: "E-mail",
    value: vukafrik_event_data.contacts.generalEmail,
  },
  description:
    "Au coeur de la ville, le Pullman Kinshasa Grand Hotel avec ses 369 chambres et suites climatisées avec literie haut de gamme, salle de bain privée et accès wifi vous offrent tout le confort moderne. Pour votre détente, notre hôtel dispose d'un jardin avec piscine et terrasse, d'une salle de fitness, d'un spa, des courts de tennis, de 4 restaurants et de 2 bars et une discothèque. Comptant 11 salles de conférence et séminaire, il convient aussi à l'organisation de vos événements professionnels.",
};

export { breadcrumb_data, event_venue_data };
