"use client";
import bg_img from "@/assets/img/cta/cta-bg.png";
import { JSX } from "react";

const CtaWrapper = ({
  title,
  sub_title,
  children,
}: {
  title: string;
  sub_title: string;
  children: JSX.Element;
}) => {
  return (
    <div className="td-cta-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="td-cta-2-wrap bg-position"
              style={{ backgroundImage: `url(${bg_img.src})` }}
            >
              <div className="row align-items-end d-flex align-items-center">
                <div className="col-lg-5">
                  <div className="td-cta-2-content mb-20">
                    <span className="td-cta-2-subtitle d-inline-block mb-5">
                      {sub_title}
                    </span>
                    <h2 className="td-cta-2-title">{title}</h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="td-cta-2-form mb-25">
                    <div className="p-relative">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaWrapper;
