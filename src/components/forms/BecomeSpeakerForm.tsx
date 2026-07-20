"use client";

import { speaker_form_area, session_preferences } from "@/data/SpeakerData";

const BecomeSpeakerForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} id={speaker_form_area.id}>
      <div className="row">
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={speaker_form_area.fields[0]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={speaker_form_area.fields[1]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={speaker_form_area.fields[2]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={speaker_form_area.fields[3]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={speaker_form_area.fields[4]}
          />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={speaker_form_area.fields[5]} rows={5} />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={speaker_form_area.fields[6]} rows={5} />
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
              {speaker_form_area.fields[7]}
            </option>
            {session_preferences.map((preference, index) => (
              <option key={index} value={preference}>
                {preference}
              </option>
            ))}
          </select>{" "}
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={speaker_form_area.fields[8]}
          />
        </div>

        <div className="col-lg-12 mb-25">
          <textarea placeholder={speaker_form_area.fields[9]} rows={5} />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={speaker_form_area.fields[10]} rows={5} />
        </div>

        <div className="col-lg-12 mb-25">
          <label>
            <input className="input mr-10" type="checkbox" />
            {speaker_form_area.fields[11]}
          </label>
        </div>

        <div className="col-lg-12">
          <button type="submit" className="td-btn w-100">
            {speaker_form_area.submit_button}
          </button>
        </div>
      </div>
    </form>
  );
};

export default BecomeSpeakerForm;
