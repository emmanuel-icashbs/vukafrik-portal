import logo from "@/assets/img/logo/vukafrik-white-gold-logo.png";
import bg_img from "@/assets/img/footer/bg.jpg";

import { cta_data } from "./CtaData";
import { vukafrik_event_data } from "./VukAfrikData";
import { paths_holder } from "./MenuData";

export const footer_data = {
  logo: logo,
  bg_img: bg_img,
  blurb:
    "VUK'AFRIK 2026 relie initiatives locales, partenaires regionaux et opportunites de croissance a travers un Sommet strategique, une foire multisectorielle et des espaces de networking a Kinshasa.",
  titles: ["Événement", "Participer", "Contact"],
  quickLinks: [
    { label: paths_holder.about.title, href: paths_holder.about.link },
    {
      label: paths_holder.events.list.title,
      href: paths_holder.events.list.link,
    },
    {
      label: paths_holder.speakers.list.title,
      href: paths_holder.speakers.list.link,
    },
    {
      label: paths_holder.events.venue.title,
      href: paths_holder.events.venue.link,
    },
    { label: paths_holder.faq.title, href: paths_holder.faq.link },
  ],
  actionLinks: [
    { label: cta_data.register.title, href: cta_data.register.href },
    {
      label: cta_data.become_sponsor.title,
      href: cta_data.become_sponsor.href,
    },
    {
      label: cta_data.become_exhibitor.title,
      href: cta_data.become_exhibitor.href,
    },
    {
      label: cta_data.become_speaker.title,
      href: cta_data.become_speaker.href,
    },
    {
      label: cta_data.become_journalist.title,
      href: cta_data.become_journalist.href,
    },
    {
      label: cta_data.become_volonteer.title,
      href: cta_data.become_volonteer.href,
    },
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
