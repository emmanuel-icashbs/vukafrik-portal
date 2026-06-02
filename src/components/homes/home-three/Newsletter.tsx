import { NewsletterSignup } from "@/components/vukafrik/forms/FormSystem";

const Newsletter = () => {
  return (
    <section className="vuka-newsletter-section pt-0 pb-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <NewsletterSignup sourcePage="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
