import { cta_data } from "@/data/CtaData";
import { exhibitionGroups, exhibitionPricingNote, exhibitionDimensions, formatExhibitionPrice } from "@/data/ExhibitionOffers";
import Link from "next/link";
import styles from "./Pricing.module.css";

const Pricing = () => {
  const [formPath, formAnchor] = cta_data.become_exhibitor.href.split("#");
  return (
    <div className={styles.wrapper}>
      <div className="container">
        {exhibitionGroups.map((group) => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className={styles.section}>
            <header className={styles.heading}>
              <span className="td-section-subtitle">EXPOSER À VUK’AFRIK</span>
              <h2 id={`${group.id}-title`} className="td-section-title">{group.title}</h2>
              <p>{group.description}</p>
              <p className={styles.note}>{exhibitionPricingNote}</p>
            </header>
            <div className={styles.grid}>
              {group.offers.map((offer) => (
                <article key={offer.id} className={styles.card}>
                  <h3>{offer.title}</h3>
                  <p className={styles.price}>{formatExhibitionPrice(offer.price)}</p>
                  <p className={styles.duration}>Pour tous les jours de l’événement</p>
                  <div className={styles.specs}>
                    <strong>{exhibitionDimensions(offer)}</strong>
                    <span>{offer.badges} badge{offer.badges > 1 ? "s" : ""} exposant{offer.badges > 1 ? "s" : ""}</span>
                  </div>
                  <p className={styles.audience}>{offer.audience}</p>
                  <ul>{offer.benefits.slice(0, 2).map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
                  <details className={styles.details}>
                    <summary>Voir tous les avantages</summary>
                    <ul>{offer.benefits.slice(2).map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
                  </details>
                  <Link className={styles.button} href={{ pathname: formPath, query: { offer: offer.id }, hash: formAnchor }} aria-label={`Demander : ${offer.title}`}>Demander cet espace <span aria-hidden="true">↗</span></Link>
                </article>
              ))}
            </div>
          </section>
        ))}
        <aside className={styles.conditions} aria-label="Conditions de réservation">
          <h3>Préparez votre demande d’exposition</h3>
          <p>Les espaces sont attribués selon l’ordre d’arrivée des inscriptions confirmées. L’envoi du formulaire constitue une demande et ne confirme pas l’attribution d’un espace.</p>
          <p>Chaque stand figure sur le plan officiel de la foire et dans le répertoire des exposants. Des arrangements personnalisés sont possibles selon vos besoins.</p>
          <Link href={cta_data.become_exhibitor.href}>Faire une demande personnalisée →</Link>
        </aside>
      </div>
    </div>
  );
};
export default Pricing;
