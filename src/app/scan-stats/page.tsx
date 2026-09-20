import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { readScanStats, scanDates } from "@/lib/scan-stats";
import styles from "../welcome/scan.module.css";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const metadata = createPageMetadata("/scan-stats", "Statistiques QR", "Nombre de scans par journée de VUK’AFRIK 2026.");

export default async function ScanStatsPage() {
  let counts: Record<string, number> | null = null;
  try {
    counts = (await readScanStats()).stats;
  } catch (error) {
    console.error("Unable to read QR statistics", error);
  }
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Link href="/" className={styles.brand}>VUK’AFRIK <span>2026</span></Link>
        <p className={styles.eyebrow}>23 — 25 septembre · Kinshasa</p>
        <h1>Statistiques des scans</h1>
        <p>Nombre de visites depuis le QR code, par journée de l’événement.</p>
        {counts ? <>
          <ul className={styles.counts}>
            {scanDates.map((date, index) => <li key={date}>
              <span>Jour {index + 1} <small>({date.split("-").reverse().join("/")})</small></span>
              <strong>{counts[date].toLocaleString("fr-FR")} scans</strong>
            </li>)}
          </ul>
          <p className={styles.total}>Total : {scanDates.reduce((sum, date) => sum + counts![date], 0).toLocaleString("fr-FR")} scans</p>
        </> : <p role="alert">Les statistiques sont momentanément indisponibles. Veuillez réessayer.</p>}
        <a className={styles.primary} href="/scan-stats">Actualiser les statistiques</a>
        <p className={styles.footnote}>Dates et journées calculées à l’heure de Kinshasa. Les visites hors événement ne sont pas comptabilisées.</p>
      </section>
    </main>
  );
}
