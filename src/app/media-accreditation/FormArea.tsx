import MediaAccreditationForm from "@/components/forms/MediaAccreditationForm";
import { media_accred_form_area } from "@/data/MediaAccreditationData";

const FormArea = () => {
  return (
    <div className="tg-login-area pt-100 pb-110" id="media_form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="tg-login-wrapper">
              <div className="tg-login-top text-center mb-30">
                <h2>{media_accred_form_area.title}</h2>
                <p>{media_accred_form_area.sub_title}</p>
              </div>
              <div className="tg-login-form">
                <div className="tg-tour-about-review-form">
                  <MediaAccreditationForm />
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
