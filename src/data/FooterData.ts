import logo from "@/assets/img/logo/vukafrik-white-gold-logo.png";
import bg_img from "@/assets/img/footer/bg.jpg";

import { cta_data } from "./CtaData";
import { vukafrik_event_data } from "./VukAfrikData";

export const footer_data = {
  logo: logo,
  bg_img: bg_img,
  blurb:
    "VUK'AFRIK 2026 relie initiatives locales, partenaires regionaux et opportunites de croissance a travers un Sommet strategique, une foire multisectorielle et des espaces de networking a Kinshasa.",
  titles: ["Événement", "Participer", "Contact"],
  quickLinks: [
    { label: "A propos", href: "/about" },
    { label: "Programme", href: "/program" },
    { label: "Speakers", href: "/team" },
    { label: "Lieu & acces", href: "/event-venue" },
    { label: "FAQ", href: "/faq" },
  ],
  actionLinks: [
    { label: cta_data.register.title, href: cta_data.register.href },
    { label: "Devenir sponsor", href: "/sponsors#sponsor_form" },
    {
      label: "S'inscrire comme exposant",
      href: "/exhibitions#exhibitor_form",
    },
    { label: "Proposer une intervention", href: "/team#team_form" },
    { label: "Accreditation media", href: "/media-accreditation#media_form" },
    { label: "Volontariat", href: "/volonteer#volonteer_form" },
  ],
  contactLinks: [
    {
      label: vukafrik_event_data.contacts.generalEmail,
      href: `mailto:${vukafrik_event_data.contacts.generalEmail}`,
    },
    {
      label: vukafrik_event_data.contacts.partnershipsEmail,
      href: `mailto:${vukafrik_event_data.contacts.partnershipsEmail}`,
    },
    {
      label: vukafrik_event_data.contacts.phoneLabel,
      href: vukafrik_event_data.contacts.phoneHref,
    },
    { label: vukafrik_event_data.venue, href: "/event-venue" },
  ],
  copyright: vukafrik_event_data.copyright,
};
