"use client";
import { useState } from "react";
import Link from "next/link";

import { vukafrikProgramme } from "@/data/vukafrik-content";

const Event = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id={vukafrikProgramme.id}
      className="td-schedule-area pt-140 pb-120 bg-position"
      style={{ backgroundImage: `url(${vukafrikProgramme.background.src})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-9 col-lg-10">
            <div
              className="td-schedule-2-title-wrap text-center mb-20 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <span className="td-section-subtitle td-section-subtitle-2 td-section-subtitle-3 mb-30">
                Apercu du programme
              </span>
              <h2 className="td-section-title mb-10">
                Trois jours penses pour la strategie, la visibilite et l&apos;action
              </h2>
              <p className="td-section-text">
                Une lecture claire du parcours evenementiel, concue pour etre lisible
                immediatement par les decideurs, participants, sponsors et exposants.
              </p>
            </div>
            <div
              className="nav td-schedule-tab-btn td-schedule-3-tab-btn justify-content-center mb-50 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
              role="tablist"
              aria-orientation="vertical"
            >
              {vukafrikProgramme.tabs.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`nav-link p-relative ${activeTab === index ? "active" : ""}`}
                >
                  <span className="td-counts">{item.dayLabel}</span>
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="tab-content">
          {vukafrikProgramme.tabs.map((day, index) => (
            <div
              key={day.id}
              className={`tab-pane fade ${activeTab === index ? "show active" : ""}`}
            >
              <div className="vuka-program-summary mb-30">
                <p>{day.summary}</p>
                <Link href="/program">Voir le programme complet</Link>
              </div>
              {day.sessions.map((item) => (
                <div key={item.title} className="td-schedule-3-wrap vuka-program-card mb-30">
                  <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-4">
                      <div className="vuka-program-time">
                        <span className="td-schedule-2-date">
                          <i className="flaticon-calendar"></i>
                          {day.title}
                        </span>
                        <h3>{item.time}</h3>
                        <p>{item.meta}</p>
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                      <div className="td-schedule-3-content">
                        <h2 className="td-schedule-3-title">{item.title}</h2>
                        <p className="mb-25 para">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
