"use client";

import {
  attendance_days,
  form_area,
  participant_types,
} from "@/data/RegisterData";

const RegisterForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="row">
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[0]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={form_area.fields[1]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[2]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[3]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[4]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[5]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[6]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[7]}
          />
        </div>
        <div className="col-md-6 mb-25">
          <select
            className="vuka-form-input"
            aria-invalid="false"
            defaultValue={""}
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
            defaultValue={""}
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
            <input className="input mr-10" type="checkbox" />
            {form_area.fields[10]}
          </label>
        </div>
        <div className="col-lg-12">
          <button type="submit" className="td-btn w-100">
            {form_area.submit_button}
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
