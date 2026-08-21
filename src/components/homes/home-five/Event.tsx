"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import schedule_data, {
  description,
  sub_title,
  schedule_days,
  title,
} from "@/data/ScheduleData";
import { paths_holder } from "@/data/MenuData";
import { getSpeakerById, splitScheduleDate } from "@/utils/functions";
const Event = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [filteredScheduleData, setFilteredScheduleData] = useState(
    schedule_data.filter((item) => item.date === schedule_days[0]),
  );

  const handleTabClick = (index: number, tab: string) => {
    const data = schedule_data.filter((item) => item.date === tab);
    setFilteredScheduleData(data);
    setActiveTab(index);
  };

  return (
    <div className="td-schedule-area grey-bg-4 pt-130 p-relative z-index-1 fix pb-130">
      <div className="td-hero-4-blur td-team-5-blur"></div>
      <div className="td-hero-4-blur td-hero-4-blur-2 td-team-5-blur-2"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-9 col-lg-10">
            <div
              className="td-schedule-4-title-wrap text-center mb-30  wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <span className="td-section-subtitle td-section-subtitle-2 mb-20">
                {sub_title}
              </span>
              <h2 className="td-section-title mb-10">{title}</h2>
              <p className="td-section-text">{description}</p>
            </div>
            <div
              className="nav td-schedule-5-tab-btn justify-content-center mb-30  wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {schedule_days.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(index, item)}
                  className={`nav-link p-relative mb-10 ${activeTab === index ? "active" : ""}`}
                  id="v-pills-home1-tab"
                >
                  <span className="td-counts">{item.split(" - ")[0]}</span>
                  <span className="d-block">{item.split(" - ")[1]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="tp-contact-form-wrapper tab-content"
            id="v-pills-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="v-pills-home1"
              role="tabpanel"
              aria-labelledby="v-pills-home1-tab"
            >
              <div className="row">
                <div className="col-lg-12">
                  {filteredScheduleData.map((item) => (
                    <div key={item.id} className="td-schedule-5-wrap">
                      <div className="row gx-30 align-items-center">
                        <div className="col-xl-4 col-lg-5">
                          <div className="td-schedule-5-left-content d-flex align-items-center">
                            <div
                              className=" mb-20 mr-30"
                              style={{
                                borderRadius: "10px",
                                overflow: "hidden",
                              }}
                            >
                              <Link href="/events-details">
                                <Image src={item.image} alt="Logo" />
                              </Link>
                            </div>
                            <div className="td-schedule-5-date-wrap mb-20 w-100">
                              <div className="td-schedule-5-date d-flex mb-15">
                                <>
                                  <h4 className="mb-0 mr-10">
                                    {splitScheduleDate(item.date).month_day}
                                  </h4>
                                  <span>
                                    {splitScheduleDate(item.date).month},
                                    <br /> {splitScheduleDate(item.date).year}
                                  </span>
                                </>
                              </div>
                              <div className="td-schedule-5-left-border mb-15"></div>
                              <div className="td-schedule-5-name">
                                <span>
                                  {item.category.substring(0, 15)}
                                  {item.category.length > 15 ? "..." : ""}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-lg-7">
                          <div className="td-schedule-4-content td-schedule-5-content mb-30">
                            <h2 className="td-schedule-4-title">
                              <Link href="/events-details">{item.topic}</Link>
                            </h2>
                            <p>
                              {item.speakers.map((speaker_id, index) => (
                                <a
                                  key={index}
                                  href={`${paths_holder.speakers.list.link}/${speaker_id}`}
                                  className="my-link"
                                  style={{ cursor: "pointer" }}
                                >
                                  {getSpeakerById(speaker_id)?.name}
                                  {index + 1 < item.speakers.length ? ", " : ""}
                                </a>
                              ))}
                            </p>
                            <div className="td-schedule-4-destination mb-10">
                              <span>
                                <i className="flaticon-gps"></i>
                                {item.venue}
                              </span>
                              <span>
                                <i className="flaticon-time"></i>
                                {item.start_time} - {item.end_time}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-12">
                          <div className="td-schedule-5-btn text-xl-end">
                            <Link
                              className="td-btn td-btn-green td-btn-3-squre td-left-right text"
                              href={`${paths_holder.events.list.link}/${item.id}`}
                            >
                              <span className="td-text d-inline-block mr-5">
                                {paths_holder.events.details_title}
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
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M0.943836 13.5C0.685616 13.5 0.45411 13.4021 0.276027 13.224C0.0979452 13.0459 0 12.8055 0 12.5562C0 12.3068 0.0979452 12.0664 0.276027 11.8884L9.76781 2.38767H2.02123C1.49589 2.38767 1.0774 1.96027 1.0774 1.44384C1.0774 0.927397 1.50479 0.5 2.03014 0.5H12.0562C12.1274 0.5 12.1986 0.508904 12.2788 0.526712L12.4034 0.562329L12.537 0.633562C12.5637 0.65137 12.5993 0.678082 12.626 0.69589C12.6973 0.749315 12.7507 0.80274 12.7952 0.856164C12.8219 0.891781 12.8575 0.927397 12.8842 0.989726L12.9555 1.1411L12.9822 1.22123C13 1.29247 13.0089 1.3726 13.0089 1.44384V11.4699C13.0089 11.9952 12.5815 12.4137 12.0651 12.4137C11.5486 12.4137 11.1212 11.9863 11.1212 11.4699V3.72329L1.62055 13.224C1.44247 13.4021 1.20205 13.5 0.943836 13.5Z"
                                    fill="currentColor"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
