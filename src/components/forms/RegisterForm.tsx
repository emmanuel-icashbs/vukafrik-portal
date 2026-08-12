"use client";
import {
  attendance_days,
  form_area,
  participant_types,
} from "@/data/RegisterData";
import { AttendeeFormType } from "@/utils/types";
import FormMessageZone from "../ui/FormMessageZone";
import { usePost } from "@/hooks/use_post";
const INIT_ATTENDEE_DATA: AttendeeFormType = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  organisation: "",
  function: "",
  country: "",
  city: "",
  participant_type: "",
  participation_days: "",
  accept_review_and_contact: false,
};
const RegisterForm = () => {
  const {
    data: registerForm,
    handleChange,
    successMessage,
    errorMessage,
    isSubmitting,
    handleSubmit,
  } = usePost({
    initialData: INIT_ATTENDEE_DATA,
    apiUrl: "/api/attendee",
    dataModelName: "Participant",
  });

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        <FormMessageZone
          errorMessage={errorMessage}
          successMessage={successMessage}
        />
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[0]}
            title={form_area.fields[0]}
            value={registerForm.first_name}
            onChange={(e) => handleChange("first_name", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[1]}
            title={form_area.fields[1]}
            value={registerForm.last_name}
            onChange={(e) => handleChange("last_name", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={form_area.fields[2]}
            title={form_area.fields[2]}
            value={registerForm.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[3]}
            title={form_area.fields[3]}
            value={registerForm.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            maxLength={100}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[4]}
            title={form_area.fields[4]}
            value={registerForm.organisation}
            onChange={(e) => handleChange("organisation", e.target.value)}
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[5]}
            title={form_area.fields[5]}
            value={registerForm.function}
            onChange={(e) => handleChange("function", e.target.value)}
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[6]}
            title={form_area.fields[6]}
            value={registerForm.country}
            onChange={(e) => handleChange("country", e.target.value)}
            maxLength={255}
            required
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[7]}
            title={form_area.fields[7]}
            value={registerForm.city}
            onChange={(e) => handleChange("city", e.target.value)}
            maxLength={255}
            required
          />
        </div>
        <div className="col-md-6 mb-25">
          <select
            className="vuka-form-input"
            aria-invalid="false"
            title={form_area.fields[8]}
            value={registerForm.participant_type}
            onChange={(e) => handleChange("participant_type", e.target.value)}
            required
          >
            <option value="" disabled>
              {form_area.fields[8]}
            </option>
            {participant_types.map((participant_type, index) => (
              <option key={index} value={participant_type}>
                {participant_type}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6 mb-25">
          <select
            className="vuka-form-input"
            aria-invalid="false"
            title={form_area.fields[9]}
            value={registerForm.participation_days}
            onChange={(e) => handleChange("participation_days", e.target.value)}
            required
          >
            <option value="" disabled>
              {form_area.fields[9]}
            </option>
            {attendance_days.map((day, index) => (
              <option key={index} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-12 mb-25">
          <label>
            <input
              className="input mr-10"
              type="checkbox"
              title={form_area.fields[10]}
              checked={registerForm.accept_review_and_contact}
              onChange={(e) =>
                handleChange("accept_review_and_contact", e.target.checked)
              }
              required
            />
            {form_area.fields[10]}
          </label>
        </div>
        <div className="col-lg-12">
          <button
            type="submit"
            className="td-btn w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi encours..." : form_area.submit_button}
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
