# Bascule post-événement — Phase 1

Modifications locales, sans déploiement.

## Résultat

- Textes fournis repris intégralement : hero, archive du programme, remerciement des intervenants et message de clôture.
- Formulaires participant, exposant, hackathon, intervenant, sponsor, bénévole et accréditation média fermés.
- Newsletters et autres formulaires du thème masqués et remplacés par le même message.
- Sept API d'inscription refusent les soumissions avec HTTP 403 avant tout appel externe.
- Code des formulaires conservé. La réactivation passe par registrationClosed dans src/data/RegistrationStatus.ts ; les dates et textes devront ensuite être adaptés à l'édition 2027.
- Contact et API general_contact inchangés. Programme, liste des intervenants, médias et destinations des réseaux sociaux conservés.

## Vérifications

- Build Next.js réussi (126 routes générées).
- TypeScript : aucune erreur.
- ESLint : aucune erreur, deux avertissements de dépendances de hooks préexistants.
- Analyse de 113 fichiers HTML générés : un seul formulaire rendu, sur /contact.
- Tests des sept API fermées : HTTP 403 et texte exact, zéro appel au service externe.
- Contact : soumission valide acceptée (HTTP 200), service Brevo simulé ; aucun message réel envoyé et aucune réception réelle vérifiée.
- Vérification visuelle dans le navigateur : accueil, /events, /speakers et message exposant sur /exhibitions.
- Avertissements de build préexistants : imports Sass dépréciés et données baseline-browser-mapping anciennes.

## Fichiers modifiés ou ajoutés

- [src/app/api/exhibitor/route.ts](C:/repositories/gbs/vukafrik/vukafrik-portal/src/app/api/exhibitor/route.ts)
- [src/app/api/journalist/route.ts](C:/repositories/gbs/vukafrik/vukafrik-portal/src/app/api/journalist/route.ts)
- [src/app/api/speaker/route.ts](C:/repositories/gbs/vukafrik/vukafrik-portal/src/app/api/speaker/route.ts)
- [src/app/api/sponsor/route.ts](C:/repositories/gbs/vukafrik/vukafrik-portal/src/app/api/sponsor/route.ts)
- [src/app/api/volunteer/route.ts](C:/repositories/gbs/vukafrik/vukafrik-portal/src/app/api/volunteer/route.ts)
- [src/app/media-accreditation/Cta.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/app/media-accreditation/Cta.tsx)
- [src/app/media-accreditation/FormArea.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/app/media-accreditation/FormArea.tsx)
- [src/app/sponsors/Cta.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/app/sponsors/Cta.tsx)
- [src/app/sponsors/FormArea.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/app/sponsors/FormArea.tsx)
- [src/app/volunteer/Cta.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/app/volunteer/Cta.tsx)
- [src/app/volunteer/FormArea.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/app/volunteer/FormArea.tsx)
- [src/components/common/DealCounter.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/common/DealCounter.tsx)
- [src/components/common/RegistrationGate.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/common/RegistrationGate.tsx)
- [src/components/events/event-details/EventSidebar.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/events/event-details/EventSidebar.tsx)
- [src/components/events/event/index.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/events/event/index.tsx)
- [src/components/exhibitions/exhibition-details/EventSidebar.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/exhibitions/exhibition-details/EventSidebar.tsx)
- [src/components/exhibitions/exhibition/Cta.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/exhibitions/exhibition/Cta.tsx)
- [src/components/exhibitions/exhibition/FormArea.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/exhibitions/exhibition/FormArea.tsx)
- [src/components/exhibitions/exhibition/Schedule.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/exhibitions/exhibition/Schedule.tsx)
- [src/components/forms/BecomeExhibitorForm.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/forms/BecomeExhibitorForm.tsx)
- [src/components/forms/BecomeSpeakerForm.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/forms/BecomeSpeakerForm.tsx)
- [src/components/forms/BecomeSponsorForm.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/forms/BecomeSponsorForm.tsx)
- [src/components/forms/BecomeVolunteerForm.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/forms/BecomeVolunteerForm.tsx)
- [src/components/forms/BlogForm.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/forms/BlogForm.tsx)
- [src/components/forms/HackatonTeamForm.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/forms/HackatonTeamForm.tsx)
- [src/components/forms/LoginForm.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/forms/LoginForm.tsx)
- [src/components/forms/MediaAccreditationForm.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/forms/MediaAccreditationForm.tsx)
- [src/components/forms/RegisterForm.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/forms/RegisterForm.tsx)
- [src/components/forms/ReviewForm.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/forms/ReviewForm.tsx)
- [src/components/homes/home-five/Event.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/homes/home-five/Event.tsx)
- [src/components/homes/home-one/Experience.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/homes/home-one/Experience.tsx)
- [src/components/homes/home-six/Countdown.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/homes/home-six/Countdown.tsx)
- [src/components/homes/home-six/Cta.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/homes/home-six/Cta.tsx)
- [src/components/homes/home-three/Banner.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/homes/home-three/Banner.tsx)
- [src/components/homes/home-three/Countdown.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/homes/home-three/Countdown.tsx)
- [src/components/homes/home-three/Pricing.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/homes/home-three/Pricing.tsx)
- [src/components/homes/home-three/Testimonial.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/homes/home-three/Testimonial.tsx)
- [src/components/homes/home-three/index.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/homes/home-three/index.tsx)
- [src/components/homes/home-two/Countdown.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/homes/home-two/Countdown.tsx)
- [src/components/homes/home-two/Cta.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/homes/home-two/Cta.tsx)
- [src/components/homes/home-two/Event.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/homes/home-two/Event.tsx)
- [src/components/pages/blogs/blog/BlogSidebar.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/pages/blogs/blog/BlogSidebar.tsx)
- [src/components/pages/products/cart/CartArea.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/pages/products/cart/CartArea.tsx)
- [src/components/pages/products/checkout/CheckOutForm.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/pages/products/checkout/CheckOutForm.tsx)
- [src/components/pages/products/checkout/CheckoutArea.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/pages/products/checkout/CheckoutArea.tsx)
- [src/components/teams/team/Cta.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/teams/team/Cta.tsx)
- [src/components/teams/team/FormArea.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/teams/team/FormArea.tsx)
- [src/components/teams/team/index.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/teams/team/index.tsx)
- [src/components/ui/ButtonLink.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/components/ui/ButtonLink.tsx)
- [src/data/RegistrationStatus.ts](C:/repositories/gbs/vukafrik/vukafrik-portal/src/data/RegistrationStatus.ts)
- [src/layouts/footers/FooterOne.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/layouts/footers/FooterOne.tsx)
- [src/layouts/footers/FooterThree.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/layouts/footers/FooterThree.tsx)
- [src/layouts/headers/HeaderThree.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/layouts/headers/HeaderThree.tsx)
- [src/layouts/headers/menu/Searchbar.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/layouts/headers/menu/Searchbar.tsx)
- [src/layouts/headers/menu/Sidebar.tsx](C:/repositories/gbs/vukafrik/vukafrik-portal/src/layouts/headers/menu/Sidebar.tsx)

Le fichier .idea/workspace.xml comportait déjà des modifications et n'a pas été modifié par cette tâche.
