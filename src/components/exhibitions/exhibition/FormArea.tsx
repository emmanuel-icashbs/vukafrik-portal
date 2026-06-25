import RegisterForm from "@/components/forms/RegisterForm";

const FormArea = () => {
  return (
    <div className="tg-login-area pt-140 pb-110" id="exhibitor_form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="tg-login-wrapper">
              <div className="tg-login-top text-center mb-30">
                <h2>Register Now!</h2>
                <p>You can signup with you social account below</p>
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

export default FormArea;
