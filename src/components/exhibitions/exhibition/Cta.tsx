"use client";
import bg_img from "@/assets/img/cta/cta-bg.png";
import { form_area } from "@/data/ExhibitionData";
import { useRouter } from "next/navigation";

const Cta = () => {
  const router = useRouter();
  return (
    <div className="td-cta-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="td-cta-2-wrap bg-position"
              style={{ backgroundImage: `url(${bg_img.src})` }}
            >
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="td-cta-2-content mb-20">
                    <span className="td-cta-2-subtitle d-inline-block mb-5">
                      Don’t Miss Our Event!
                    </span>
                    <h2 className="td-cta-2-title">Get Subscribed Today!</h2>
                  </div>
                </div>
                <div className="col-lg-7 text-center">
                  <div className="td-cta-2-form">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="p-relative"
                    >
                      <button
                        className="cta-btn"
                        type="button"
                        style={{ border: "solid 1px #fff" }}
                        onClick={() => router.push(`#${form_area.id}`)}
                      >
                        Subscribe Below
                      </button>
                    </form>
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

export default Cta;
