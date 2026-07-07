import BecomeSponsorForm from "@/components/forms/BecomeSponsorForm";
import { form_area } from "@/data/SponsorData";

const FormArea = () => {
  return (
    <div className="tg-login-area pt-110 pb-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="tg-login-wrapper">
              <div className="tg-login-top text-center mb-30">
                <h2>{form_area.title}</h2>
                <p>{form_area.sub_title}</p>
              </div>
              <div className="tg-login-form">
                <div className="tg-tour-about-review-form">
                  <BecomeSponsorForm />
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
