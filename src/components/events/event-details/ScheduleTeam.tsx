import Link from "next/link";
import Image from "next/image";

import img_1 from "@/assets/img/schedule/schedule-details/avatar.png";
import { SpeakerDataType } from "@/utils/types";
import { detail_page_data } from "@/data/ScheduleData";
import { paths_holder } from "@/data/MenuData";

const ScheduleTeam = ({ speakers }: { speakers: SpeakerDataType[] }) => {
  return (
    <div className="td-schedule-team">
      <h3 className="td-schedule-team-title mb-15">
        {detail_page_data.speakers_title}
      </h3>
      <span className="td-schedule-team-border mb-25"></span>

      {speakers.map((speaker, index) => (
        <div
          key={index}
          className={`td-schedule-team-info-wrap ${index != speakers.length - 1 ? " td-border pb-5 mb-25" : ""}`}
        >
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="td-schedule-team-thumb mb-15">
                <Image className="thumb" src={img_1} alt="avatar" />
                <div className="td-schedule-team-name">
                  <h4 className="td-title">
                    <Link href="#">{speaker.name}</Link>
                  </h4>
                  <span className="position">{speaker.title}</span>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="td-schedule-team-btn">
                <Link
                  className="td-btn td-left-right mb-20"
                  href={`${paths_holder.speakers.list.link}/${speaker.id}`}
                >
                  <span className="mr10 td-text d-inline-block mr-5">
                    {paths_holder.speakers.details_title}
                  </span>
                  <span className="td-arrow-angle">
                    <svg
                      className="td-arrow-svg-top-right"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z"
                        fill="white"
                      />
                      <path
                        d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleTeam;
