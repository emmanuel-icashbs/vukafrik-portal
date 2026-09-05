"use client";
import PhoneInput from "../ui/PhoneInput";
import { contact_request_types, form_area } from "@/data/ContactData";
import { usePost } from "@/hooks/use_post";
import { GeneralContactFormType } from "@/utils/types";
import FormMessageZone from "../ui/FormMessageZone";
import SubmitButton from "../ui/SubmitButton";

const INIT_GENERAL_CONTACT_DATA: GeneralContactFormType = {
  name: "",
  email: "",
  phone: "",
  request_type: "",
  message: "",
  accept_review_and_contact: false,
};
const ContactForm = () => {
  const {
    data: contactForm,
    handleChange,
    successMessage,
    errorMessage,
    isSubmitting,
    handleSubmit,
    isToastOpen,
  } = usePost<GeneralContactFormType>({
    initialData: INIT_GENERAL_CONTACT_DATA,
    apiUrl: "/api/general_contact",
    dataModelName: "Contact",
  });

  return (
    <form id="contact-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="td-contact-form-box">
        <h3 className="td-postbox-form-title mb-15">{form_area.title}</h3>
        <p className="mb-30">{form_area.sub_title}</p>
        <div className="row">
          <FormMessageZone
            isOpen={isToastOpen}
            errorMessage={errorMessage}
            successMessage={successMessage}
          />
          <div className="col-md-6 mb-20">
            <input
              className="td-input"
              name="user_name"
              type="text"
              placeholder={form_area.fields[0]}
              title={form_area.fields[0]}
              value={contactForm.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              maxLength={255}
            />
          </div>
          <div className="col-md-6 mb-20">
            <input
              className="td-input"
              name="user_email"
              type="email"
              placeholder={form_area.fields[1]}
              title={form_area.fields[1]}
              value={contactForm.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-20">
            <PhoneInput
              className="td-input"
              name="user_phone"
              placeholder={form_area.fields[2]}
              title={form_area.fields[2]}
              value={contactForm.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-25">
            <select
              className="vuka-form-input"
              aria-invalid="false"
              title={form_area.fields[3]}
              value={contactForm.request_type}
              onChange={(e) => handleChange("request_type", e.target.value)}
              required
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
              title={form_area.fields[4]}
              value={contactForm.message}
              onChange={(e) => handleChange("message", e.target.value)}
            ></textarea>
          </div>
          <div className="col-md-12 mb-25">
            <label>
              <input
                className="input mr-10"
                type="checkbox"
                title={form_area.fields[5]}
                checked={contactForm.accept_review_and_contact}
                onChange={(e) =>
                  handleChange("accept_review_and_contact", e.target.checked)
                }
                required
              />
              {form_area.fields[5]}
            </label>
          </div>
          <SubmitButton
            isSubmitting={isSubmitting}
            title={form_area.submit_button}
          />

          <p className="ajax-response pt-20"></p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
