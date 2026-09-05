"use client";
import PhoneInput from "../ui/PhoneInput";

import {
  volunteer_form_area,
  volunteer_availabilities,
  volunteer_zones_of_interest,
} from "@/data/VolonteerData";
import { usePost } from "@/hooks/use_post";
import { VolunteerFormType } from "@/utils/types";
import FormMessageZone from "../ui/FormMessageZone";
import SubmitButton from "../ui/SubmitButton";

const INIT_VOLUNTEER_DATA: VolunteerFormType = {
  full_name: "",
  email: "",
  phone: "",
  city: "",
  availability: "",
  interest_area: "",
  skills: "",
  previous_event_experience: "",
  accept_review_and_contact: false,
};
const BecomeVolunteerForm = () => {
  const {
    data: volunteerForm,
    handleChange,
    successMessage,
    errorMessage,
    isSubmitting,
    handleSubmit,
    isToastOpen,
  } = usePost<VolunteerFormType>({
    initialData: INIT_VOLUNTEER_DATA,
    apiUrl: "/api/volunteer",
    dataModelName: "Volunteer",
  });

  return (
    <form onSubmit={(e) => handleSubmit(e)} id={volunteer_form_area.id}>
      <div className="row">
        <FormMessageZone
          isOpen={isToastOpen}
          errorMessage={errorMessage}
          successMessage={successMessage}
        />
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={volunteer_form_area.fields[0]}
            title={volunteer_form_area.fields[0]}
            value={volunteerForm.full_name}
            onChange={(e) => handleChange("full_name", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={volunteer_form_area.fields[1]}
            title={volunteer_form_area.fields[1]}
            value={volunteerForm.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <PhoneInput
            className="input"
            placeholder={volunteer_form_area.fields[2]}
            title={volunteer_form_area.fields[2]}
            value={volunteerForm.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            maxLength={100}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={volunteer_form_area.fields[3]}
            title={volunteer_form_area.fields[3]}
            value={volunteerForm.city}
            onChange={(e) => handleChange("city", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <select
            name="sessionPreference"
            className="vuka-form-input"
            aria-invalid="false"
            title={volunteer_form_area.fields[4]}
            value={volunteerForm.availability}
            onChange={(e) => handleChange("availability", e.target.value)}
            required
          >
            <option value="" disabled>
              {volunteer_form_area.fields[4]}{" "}
            </option>
            {volunteer_availabilities.map((availability, index) => (
              <option key={index} value={availability}>
                {availability}
              </option>
            ))}
          </select>{" "}
        </div>
        <div className="col-lg-6 mb-25">
          <select
            className="vuka-form-input"
            aria-invalid="false"
            title={volunteer_form_area.fields[5]}
            value={volunteerForm.interest_area}
            onChange={(e) => handleChange("interest_area", e.target.value)}
            required
          >
            <option value="" disabled>
              {volunteer_form_area.fields[5]}{" "}
            </option>
            {volunteer_zones_of_interest.map((zone, index) => (
              <option key={index}>{zone}</option>
            ))}
          </select>{" "}
        </div>
        <div className="col-lg-12 mb-25">
          <textarea
            placeholder={volunteer_form_area.fields[6]}
            rows={5}
            title={volunteer_form_area.fields[6]}
            value={volunteerForm.skills}
            onChange={(e) => handleChange("skills", e.target.value)}
            required
          />
        </div>

        <div className="col-lg-12 mb-25">
          <textarea
            placeholder={volunteer_form_area.fields[7]}
            rows={5}
            title={volunteer_form_area.fields[7]}
            value={volunteerForm.previous_event_experience}
            onChange={(e) =>
              handleChange("previous_event_experience", e.target.value)
            }
            required
          />
        </div>

        <div className="col-lg-12 mb-25">
          <label>
            <input
              className="input mr-10"
              type="checkbox"
              title={volunteer_form_area.fields[8]}
              checked={volunteerForm.accept_review_and_contact}
              onChange={(e) =>
                handleChange("accept_review_and_contact", e.target.checked)
              }
              required
            />
            {volunteer_form_area.fields[8]}
          </label>
        </div>
        <SubmitButton
          isSubmitting={isSubmitting}
          title={volunteer_form_area.submit_button}
        />
      </div>
    </form>
  );
};

export default BecomeVolunteerForm;
