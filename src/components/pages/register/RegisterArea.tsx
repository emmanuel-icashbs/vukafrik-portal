import RegisterForm from "@/components/forms/RegisterForm";
import { form_area } from "@/data/RegisterData";

const RegisterArea = () => {
  return (
    <div className="tg-login-area pt-140 pb-110">
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
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterArea;
