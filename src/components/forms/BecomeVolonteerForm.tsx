"use client";

import { volonteer_form_area, volonteer_availabilities, volonteer_zones_of_interest } from "@/data/VolonteerData";

const BecomeVolonteerForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} id={volonteer_form_area.id}>
      <div className="row">
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={volonteer_form_area.fields[0]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={volonteer_form_area.fields[1]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={volonteer_form_area.fields[2]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={volonteer_form_area.fields[3]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <select
            name="sessionPreference"
            className="vuka-form-input"
            required={true}
            aria-invalid="false"
            defaultValue={""}
          >
            <option value="" disabled>
              {volonteer_form_area.fields[4]}{" "}
            </option>
            {volonteer_availabilities.map((availability, index) => (
              <option key={index} value={availability}>
                {availability}
              </option>
            ))}
          </select>{" "}
        </div>
        <div className="col-lg-6 mb-25">
          <select
            name="sessionPreference"
            className="vuka-form-input"
            required={true}
            aria-invalid="false"
            defaultValue={""}
          >
            <option value="" disabled>
              {volonteer_form_area.fields[5]}{" "}
            </option>
            {
              volonteer_zones_of_interest.map((zone, index)=>(
                <option key={index}>{zone}</option>
              ))
            }
          </select>{" "}
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={volonteer_form_area.fields[6]} rows={5} />
        </div>

        <div className="col-lg-12 mb-25">
          <textarea placeholder={volonteer_form_area.fields[7]} rows={5} />
        </div>

        <div className="col-lg-12 mb-25">
          <label>
            <input className="input mr-10" type="checkbox" />
            {volonteer_form_area.fields[8]}
          </label>
        </div>

        <div className="col-lg-12">
          <button type="submit" className="td-btn w-100">
            {volonteer_form_area.submit_button}
          </button>
        </div>
      </div>
    </form>
  );
};

export default BecomeVolonteerForm;
