import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import ScanTracker from "./ScanTracker";
import styles from "./scan.module.css";

export const metadata = createPageMetadata("/welcome", "Bienvenue à VUK’AFRIK", "Retrouvez le programme et les informations pratiques de VUK’AFRIK 2026.");

export default function WelcomePage() {
  return (
    <main className={styles.page}>
      <ScanTracker />
      <section className={styles.card}>
        <Link href="/" className={styles.brand}>VUK’AFRIK <span>2026</span></Link>
        <p className={styles.eyebrow}>23 — 25 septembre · Kinshasa</p>
        <h1>Bienvenue à VUK’AFRIK !</h1>
        <p>Trois jours de rencontres, d’innovation et d’entrepreneuriat. Retrouvez toutes les informations pour profiter de votre visite.</p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/events">Découvrir le programme</Link>
          <Link className={styles.secondary} href="/exhibitions">Explorer les expositions</Link>
          <Link className={styles.secondary} href="/event-venue">Lieu et informations pratiques</Link>
        </div>
        <p className={styles.footnote}>Pullman Hôtel · Kinshasa</p>
      </section>
    </main>
  );
}
