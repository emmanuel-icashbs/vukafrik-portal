import bg_img from "@/assets/img/feature/special-features.jpg";
import { vukafrik_event_data } from "./VukAfrikData";

const countdown_data = {
  bg_img: bg_img,
  message1: "Hâtez-vous!",
  message2: "Réservez votre place dès maintenant",
  expiryTimestamp: new Date("2026-08-25T08:00:00"),
  location: vukafrik_event_data.venue,
};

export default countdown_data;
