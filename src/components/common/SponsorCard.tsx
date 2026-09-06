import Image from "next/image";
import type { Sponsor } from "@/data/SponsorData";
import styles from "./SponsorCard.module.css";

export default function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const logo = (
    <Image
      src={sponsor.image}
      alt={sponsor.name}
      className={styles.logo}
      sizes="(max-width: 767px) 42vw, (max-width: 1199px) 28vw, 240px"
    />
  );

  return sponsor.website ? (
    <a href={sponsor.website} className={styles.card}>
      {logo}
    </a>
  ) : (
    <div className={styles.card}>{logo}</div>
  );
}
