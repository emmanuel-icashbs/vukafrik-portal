import Image from "next/image";
import speakerPlaceholder from "@/assets/img/team/team-5/thumb.png";
import type { SpeakerDataType } from "@/utils/types";
import styles from "./SpeakerPortrait.module.css";

export default function SpeakerPortrait({ speaker, size = 220 }: { speaker: SpeakerDataType; size?: number }) {
  const hasPortrait = speaker.id === 34 || speaker.id === 38;
  return (
    <span className={styles.frame} style={{ width: size }}>
      <Image
        src={hasPortrait ? speaker.image : speakerPlaceholder}
        alt={hasPortrait ? speaker.name : ""}
        className={styles.image}
        sizes={`${size}px`}
      />
    </span>
  );
}
