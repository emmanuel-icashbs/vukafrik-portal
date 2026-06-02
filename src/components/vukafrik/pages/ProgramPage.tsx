"use client";
import Link from "next/link";
import { useState } from "react";

import CorePageHero from "@/components/vukafrik/CorePageHero";
import CorePageLayout from "@/components/vukafrik/CorePageLayout";
import {
  programDays,
  programPageHero,
  programSessions,
} from "@/data/vukafrik-content";

const ProgramPage = () => {
  const [activeDay, setActiveDay] = useState(programDays[0].id);

  return (
    <CorePageLayout>
      <CorePageHero data={programPageHero} />

      <section className="vuka-page-section pb-120">
        <div className="container">
          <div className="vuka-tab-row mb-40">
            {programDays.map((day) => (
              <button
                key={day.id}
                className={`vuka-tab-pill ${activeDay === day.id ? "active" : ""}`}
                onClick={() => setActiveDay(day.id)}
                type="button"
              >
                <span>{day.label}</span>
                {day.title}
              </button>
            ))}
          </div>

          {programDays
            .filter((day) => day.id === activeDay)
            .map((day) => (
              <div key={day.id}>
                <div className="vuka-program-summary mb-30">
                  <p>{day.description}</p>
                </div>
                <div className="row">
                  {programSessions
                    .filter((session) => session.day === day.id)
                    .map((session) => (
                      <div key={`${session.day}-${session.time}-${session.title}`} className="col-12">
                        <div className="vuka-session-card mb-25">
                          <div className="vuka-session-side">
                            <span className="vuka-session-date">{session.date}</span>
                            <h3>{session.time}</h3>
                            <span className="vuka-session-badge">{session.sessionType}</span>
                          </div>
                          <div className="vuka-session-main">
                            <div className="vuka-session-meta">
                              <span>{session.track}</span>
                              <span>{session.location}</span>
                            </div>
                            <h2>{session.title}</h2>
                            <p>{session.description}</p>
                            <div className="vuka-speaker-links">
                              {session.speakers.map((speaker) => (
                                <span key={speaker} className="vuka-chip">
                                  {speaker}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="vuka-page-section pb-140">
        <div className="container">
          <div className="vuka-info-card text-center">
            <span className="vuka-card-eyebrow">Actions programme</span>
            <h2>Restez au plus pres de l&apos;agenda pendant l&apos;ouverture des parcours de participation</h2>
            <div className="vuka-page-hero__actions">
              <Link className="td-btn td-left-right" href="/register">
                <span className="mr10 td-text d-inline-block mr-5">S&apos;inscrire</span>
              </Link>
              <Link className="td-btn td-btn-3-border td-left-right" href="/speaker-application">
                <span className="mr10 td-text d-inline-block mr-5">Proposer une intervention</span>
              </Link>
              <Link
                className="td-btn td-btn-3-border td-left-right"
                href="/sponsors-partners#sponsor-inquiry"
              >
                <span className="mr10 td-text d-inline-block mr-5">Devenir sponsor</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CorePageLayout>
  );
};

export default ProgramPage;
