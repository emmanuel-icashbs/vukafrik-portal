import BecomeExhibitorForm from "@/components/forms/BecomeExhibitorForm";
import { exhibitor_form_area } from "@/data/ExhibitionData";
import { Suspense } from "react";

const FormArea = () => {
  return (
    <div className="tg-login-area content-section-spacing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="tg-login-wrapper">
              <div className="tg-login-top text-center mb-30">
                <h2>{exhibitor_form_area.title}</h2>
                <p>{exhibitor_form_area.sub_title}</p>
              </div>
              <div className="tg-login-form">
                <div className="tg-tour-about-review-form">
                  <Suspense fallback={<p role="status">Chargement du formulaire exposant…</p>}>
                    <BecomeExhibitorForm />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormArea;
