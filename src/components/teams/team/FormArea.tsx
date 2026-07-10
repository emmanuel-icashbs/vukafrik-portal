import BecomeSpeakerForm from "@/components/forms/BecomeSpeakerForm";
import { form_area } from "@/data/SpeakerData";

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
                  <BecomeSpeakerForm />
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
