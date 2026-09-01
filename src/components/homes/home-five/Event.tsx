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
              className="nav td-schedule-4-tab-btn justify-content-center mb-30  wow fadeInUp"
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
                        <div className="col-xl-3 col-lg-5">
                          <div className="td-schedule-5-left-content d-flex align-items-center">
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
                                  {item.category}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-19">
                          <div className="td-schedule-4-content td-schedule-5-content mb-30">
                            <h4 className="td-schedule-4-title">
                              <Link href="#">{item.topic}</Link>
                            </h4>
                            <p>
                              {item.speakers.map((speaker_id, index) => (
                                <a
                                  key={index}
                                  href="#"
                                  className="my-link"
                                  style={{ cursor: "pointer" }}
                                >
                                  {getSpeakerById(speaker_id)?.name}
                                  {index + 1 < item.speakers.length ? ", " : ""}
                                </a>
                              ))}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-12">
                          <div className="td-schedule-5-btn text-xl-end">
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
