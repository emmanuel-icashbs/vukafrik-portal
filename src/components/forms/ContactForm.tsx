"use client";
import { useActionState, useEffect } from "react";
import { handleContactFormAction } from "@/app/action/sendContactEmail";
import { toast } from "react-toastify";
import { contact_request_types, form_area } from "@/data/ContactData";

const ContactForm = () => {
  const [state, formAction] = useActionState(handleContactFormAction, {
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      toast.success("✅ Message sent successfully!");
    }
    if (state.error) {
      toast.error(`❌ Error: ${state.error}`);
    }
  }, [state.success, state.error]);

  return (
    <form id="contact-form" action={formAction}>
      <div className="td-contact-form-box">
        <h3 className="td-postbox-form-title mb-15">{form_area.title}</h3>
        <p className="mb-30">{form_area.sub_title}</p>
        <div className="row">
          <div className="col-md-6 mb-20">
            <input
              className="td-input"
              name="user_name"
              type="text"
              placeholder={form_area.fields[0]}
            />
          </div>
          <div className="col-md-6 mb-20">
            <input
              className="td-input"
              name="user_email"
              type="email"
              placeholder={form_area.fields[1]}
            />
          </div>
          <div className="col-md-6 mb-20">
            <input
              className="td-input"
              name="user_phone"
              type="text"
              placeholder={form_area.fields[2]}
            />
          </div>
          <div className="col-md-6 mb-25">
            <select
              name="budgetRange"
              className="vuka-form-input"
              aria-invalid="false"
              defaultValue={""}
            >
              <option value="" disabled>
                {form_area.fields[3]}
              </option>
              {contact_request_types.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-12 mb-15">
            <textarea
              className="td-input message"
              name="message"
              cols={30}
              rows={10}
              placeholder={form_area.fields[4]}
            ></textarea>
          </div>
          <div className="col-md-12 mb-25">
            <label>
              <input className="input mr-10" type="checkbox" />
              {form_area.fields[5]}
            </label>
          </div>
          <div className="col-12">
            <button type="submit" className="td-btn">
              {form_area.submit_button}
            </button>
          </div>
          <p className="ajax-response pt-20"></p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
