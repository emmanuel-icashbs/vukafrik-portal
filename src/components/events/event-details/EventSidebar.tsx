"use client";
import Link from "next/link";
import { EventDataType } from "@/utils/types";
import { vukafrik_event_data } from "@/data/VukAfrikData";
import { cta_data } from "@/data/CtaData";
import { detail_page_data } from "@/data/ScheduleData";
import { useRouter } from "next/navigation";

const EventSidebar = ({ event }: { event: EventDataType }) => {
  const route = useRouter();
  const handleClickForRegistering = (event_id?: number) => {
    const path = event_id ? "?event_id=" + event_id : "";
    route.push(`/register${path}`);
  };

  return (
    <div className="td-schedule-details-right ml-40 mb-40">
      <div className="td-schedule-details-right-list grey-bg mb-40">
        <h3 className="td-schedule-team-title mb-15">
          {detail_page_data.info_title}
        </h3>
        <span className="td-schedule-team-border mb-15"></span>
        <div className="td-schedule-details-info-list">
          <ul>
            <li>
              <span className="ceta">{detail_page_data.info_category}:</span>
              <span>{event.category}</span>
            </li>
            <li>
              <span className="ceta">{detail_page_data.info_date}:</span>
              <span>{event.date}</span>
            </li>
            <li>
              <span className="ceta">{detail_page_data.info_time}:</span>
              <span>{`${event.start_time} - ${event.end_time}`}</span>
            </li>
            <li>
              <span className="ceta">{detail_page_data.info_phone}:</span>
              <span>
                <Link
                  href={vukafrik_event_data.contacts.phoneHref}
                  className="my-link"
                  style={{ fontWeight: "bold" }}
                >
                  {vukafrik_event_data.contacts.phoneLabel}
                </Link>
              </span>
            </li>
            <li>
              <span className="ceta">{detail_page_data.info_location}:</span>
              <span>{event.venue}</span>
            </li>

            <li>
              <span className="ceta">{detail_page_data.info_email}:</span>
              <span>
                <Link
                  href={`mailto:${vukafrik_event_data.contacts.generalEmail}`}
                  className="my-link"
                  style={{ fontWeight: "bold" }}
                >
                  {vukafrik_event_data.contacts.generalEmail}
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="td-schedule-details-right-list grey-bg">
        <h3 className="td-schedule-team-title mb-15">
          {detail_page_data.registration_title}
        </h3>
        <span className="td-schedule-team-border mb-15"></span>
        <div className="td-schedule-details-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="td-schedule-details-total-btn mb-35">
              <button
                type="submit"
                className="td-btn w-100"
                onClick={() => handleClickForRegistering()}
              >
                {`${cta_data.register.title} pour ce event seulement`}
              </button>
            </div>
            <div className="td-schedule-details-total mb-25"></div>
            <div className="td-schedule-details-total-btn mb-35">
              <button
                type="submit"
                className="td-btn w-100"
                onClick={() => handleClickForRegistering(event.id)}
              >
                {`${cta_data.register.title} pour tout le programme`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventSidebar;
