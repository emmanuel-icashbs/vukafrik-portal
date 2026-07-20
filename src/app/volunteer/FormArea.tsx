import BecomeVolonteerForm from "@/components/forms/BecomeVolonteerForm";
import { volonteer_form_area } from "@/data/VolonteerData";

const FormArea = () => {
  return (
    <div className="tg-login-area pt-100 pb-110" id="volonteer_form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="tg-login-wrapper">
              <div className="tg-login-top text-center mb-30">
                <h2>{volonteer_form_area.title}</h2>
                <p>{volonteer_form_area.sub_title}</p>
              </div>
              <div className="tg-login-form">
                <div className="tg-tour-about-review-form">
                  <BecomeVolonteerForm />
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
