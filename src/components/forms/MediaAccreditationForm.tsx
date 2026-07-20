"use client";

import { media_accred_form_area, media_types } from "@/data/MediaAccreditationData";

const MediaAccreditationForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} id={media_accred_form_area.id}>
      <div className="row">
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={media_accred_form_area.fields[0]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={media_accred_form_area.fields[1]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={media_accred_form_area.fields[2]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={media_accred_form_area.fields[3]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={media_accred_form_area.fields[4]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <select
            id="_r_7_"
            name="sessionPreference"
            className="vuka-form-input"
            required={true}
            aria-invalid="false"
            defaultValue={""}
          >
            <option value="" disabled>
              {media_accred_form_area.fields[5]}{" "}
            </option>
            {media_types.map((media_type, index) => (
              <option key={index} value={media_type}>
                {media_type}
              </option>
            ))}
          </select>{" "}
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={media_accred_form_area.fields[6]} rows={5} />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={media_accred_form_area.fields[7]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={media_accred_form_area.fields[8]}
          />
        </div>

        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={media_accred_form_area.fields[9]}
          />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={media_accred_form_area.fields[10]} rows={5} />
        </div>

        <div className="col-lg-12 mb-25">
          <label>
            <input className="input mr-10" type="checkbox" />
            {media_accred_form_area.fields[11]}
          </label>
        </div>

        <div className="col-lg-12">
          <button type="submit" className="td-btn w-100">
            {media_accred_form_area.submit_button}
          </button>
        </div>
      </div>
    </form>
  );
};

export default MediaAccreditationForm;
