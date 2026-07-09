"use client";
import Image from "next/image";
import Link from "next/link";

import bg_img from "@/assets/img/team/bg.png";
import { SpeakerDataType } from "@/utils/types";
import { info_data } from "@/data/SpeakerData";

const TeamDetailsArea = ({ speaker }: { speaker: SpeakerDataType }) => {
  return (
    <div className="td-team-area pt-130 pb-30 p-relative fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-8">
            <div
              className="td-team-item mb-25 bg-position pt-40 p-relative mb-40"
              style={{ backgroundImage: `url(${bg_img.src})` }}
            >
              <div className="td-team-thumb text-center">
                <Image src={speaker.image} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="td-team-details-content ml-50">
              <h2 className="td-schedule-team-title mb-5">{speaker.name}</h2>
              <span className="td-team-details-subtitle d-block mb-15">
                {speaker.title}
              </span>
              <span className="td-schedule-team-border mb-15"></span>
              <p>{speaker.biography}</p>

              <div className="td-team-details-info mr-170">
                <ul>
                  {speaker.email && (
                    <li>
                      <div className="td-team-details-info-item">
                        <span className="icon">
                          <i className="flaticon-mail"></i>
                        </span>
                        <div>
                          <span className="name">{info_data.email}</span>
                          <Link
                            className="links"
                            href={`mailto:${speaker.email}`}
                            target="_blank"
                          >
                            {speaker.email}
                          </Link>
                        </div>
                      </div>
                    </li>
                  )}

                  {speaker.phone && (
                    <li>
                      <div className="td-team-details-info-item">
                        <span className="icon">
                          <i className="flaticon-phone"></i>
                        </span>
                        <div>
                          <span className="name">{info_data.phone}</span>
                          <Link
                            className="links"
                            href={`tel:${speaker.phone}`}
                            target="_blank"
                          >
                            {speaker.phone}
                          </Link>
                        </div>
                      </div>
                    </li>
                  )}

                  {speaker.address && (
                    <li>
                      <div className="td-team-details-info-item">
                        <span className="icon">
                          <i className="flaticon-gps"></i>
                        </span>
                        <div>
                          <span className="name">{info_data.address}</span>
                          <Link className="links" href="#">
                            {speaker.address}
                          </Link>
                        </div>
                      </div>
                    </li>
                  )}

                  {speaker.years_of_experience && (
                    <li>
                      <div className="td-team-details-info-item">
                        <span className="icon">
                          <i className="fa-sharp fa-regular fa-shield"></i>
                        </span>
                        <div>
                          <span className="name">{info_data.experience}</span>
                          <span className="links">
                            {speaker.years_of_experience}
                          </span>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsArea;
