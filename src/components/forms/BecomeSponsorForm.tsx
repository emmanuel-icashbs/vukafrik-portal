"use client";

import { form_area } from "@/data/SponsorData";

const BecomeSponsorForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} id="sponsor_form">
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
            type="text"
            placeholder={form_area.fields[1]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
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
          <select
            id="_r_i_"
            name="sponsorCategory"
            className="vuka-form-input"
            required={true}
            aria-invalid="false"
            defaultValue=""
          >
            <option value="" disabled>
              {form_area.fields[5]}
            </option>
            <option value="Founding Partner">Founding Partner</option>
            <option value="Strategic Partner">Strategic Partner</option>
            <option value="Innovation Partner">Innovation Partner</option>
            <option value="Sector Partner">Sector Partner</option>
            <option value="Media Partner">Media Partner</option>
            <option value="Technical Partner">Technical Partner</option>
            <option value="Institutional Partner">Institutional Partner</option>
            <option value="A definir">A definir</option>
          </select>
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={form_area.fields[6]} rows={5} />
        </div>
        <div className="col-lg-6 mb-25">
          <select
            id="_r_k_"
            name="budgetRange"
            className="vuka-form-input"
            aria-invalid="false"
            defaultValue={""}
          >
            <option value="">{form_area.fields[7]}</option>
            <option value="A discuter">A discuter</option>
            <option value="Moins de $5,000">Moins de $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000+">$25,000+</option>
            <option value="Prefere ne pas preciser">
              Prefere ne pas preciser
            </option>
          </select>
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[8]}
          />
        </div>

        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[9]}
          />
        </div>

        <div className="col-lg-12 mb-25">
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

export default BecomeSponsorForm;
