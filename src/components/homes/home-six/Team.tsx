"use client";
import Link from "next/link";
import SpeakerPortrait from "@/components/common/SpeakerPortrait";
import speaker_data, {
  description,
  sub_title,
  title,
} from "@/data/SpeakerData";
import styles from "./SpeakerCards.module.css";
import schedule from "@/data/ScheduleData";
import { paths_holder } from "@/data/MenuData";

const TeamHomeSix = ({ slice_number, ministerFirst = false }: { slice_number?: number; ministerFirst?: boolean }) => {
  const currentSpeakerIds = new Set(schedule.flatMap((session) => session.speakers));
  const individualSpeakers = speaker_data.filter(
    (speaker) => speaker.type === "Individual" && currentSpeakerIds.has(speaker.id),
  );
  if (ministerFirst) individualSpeakers.sort((a, b) => Number(b.id === 34) - Number(a.id === 34));
  const speakers = slice_number === undefined
    ? individualSpeakers
    : individualSpeakers.slice(0, slice_number);

  return (
    <div className="td-team-area pt-130 pb-100">
      <div className="container-fluid container-1700">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="td-team-tittle-wrap text-center mb-30">
              <span
                className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-20 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                {sub_title}
              </span>
              <h2
                className="td-section-title mb-15 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                {title}
              </h2>
              <p
                className="td-section-text wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.7s"
              >
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-xxl-5 row-cols-xl-5 row-cols-lg-5 row-cols-md-2">
          {speakers.map((item) => (
            <div key={item.id} className="col mb-30">
              <Link className={styles.card} href={{ pathname: paths_holder.speakers.list.link + "/" + item.id }}>
                <div className={styles.portrait}><SpeakerPortrait speaker={item} /></div>
                <h3>{item.name}</h3>
                <p>{item.title}</p>
                <span className={styles.more}>Voir le profil <span aria-hidden="true">→</span></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamHomeSix;
