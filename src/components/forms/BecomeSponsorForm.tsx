"use client";

import {
  sponsor_form_area,
  sponsor_budgets,
  sponsor_categories,
  visibility_zones,
} from "@/data/SponsorData";

const BecomeSponsorForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} id={sponsor_form_area.id}>
      <div className="row">
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={sponsor_form_area.fields[0]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={sponsor_form_area.fields[1]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={sponsor_form_area.fields[2]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={sponsor_form_area.fields[3]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={sponsor_form_area.fields[4]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <select
            id="_r_i_"
            name="sponsorCategory"
            className="vuka-form-input"
            required={true}
            aria-invalid="false"
            defaultValue=""
          >
            <option value="" disabled>
              {sponsor_form_area.fields[5]}
            </option>
            {sponsor_categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="col-lg-6 mb-25">
          <select
            id="_r_k_"
            name="budgetRange"
            className="vuka-form-input"
            aria-invalid="false"
            defaultValue={""}
          >
            <option value="" disabled>
              {sponsor_form_area.fields[7]}
            </option>
            {sponsor_budgets.map((budget, index) => (
              <option key={index} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-6 mb-25">
          <select
            id="_r_i_"
            name="sponsorCategory"
            className="vuka-form-input"
            required={true}
            aria-invalid="false"
            defaultValue=""
          >
            <option value="" disabled>
              {sponsor_form_area.fields[8]}
            </option>
            {visibility_zones.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={sponsor_form_area.fields[9]}
          />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={sponsor_form_area.fields[6]} rows={5} />
        </div>

        <div className="col-lg-12 mb-25">
          <label>
            <input className="input mr-10" type="checkbox" />
            {sponsor_form_area.fields[10]}
          </label>
        </div>

        <div className="col-lg-12">
          <button type="submit" className="td-btn w-100">
            {sponsor_form_area.submit_button}
          </button>
        </div>
      </div>
    </form>
  );
};

export default BecomeSponsorForm;
