"use client";

import { form_data } from "@/data/MediaAccreditationData";

const MediaAccreditationForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} id="team_form">
      <div className="row">
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_data.fields[0]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_data.fields[1]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={form_data.fields[2]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_data.fields[3]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_data.fields[4]}
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
              {form_data.fields[5]}{" "}
            </option>
            <option value="TV">TV</option>
            <option value="Radio">Radio</option>
            <option value="Presse ecrite">Presse ecrite</option>
            <option value="Media en ligne">Media en ligne</option>
            <option value="Blog">Blog</option>
            <option value="Podcast">Podcast</option>
            <option value="Photo / Video">Photo / Video</option>
            <option value="Reseaux sociaux / Createur de contenu">
              Reseaux sociaux / Createur de contenu
            </option>
            <option value="Autre">Autre</option>
          </select>{" "}
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={form_data.fields[6]} rows={5} />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_data.fields[7]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_data.fields[8]}
          />
        </div>

        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_data.fields[9]}
          />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={form_data.fields[10]} rows={5} />
        </div>

        <div className="col-lg-12 mb-25">
          <label>
            <input className="input mr-10" type="checkbox" />
            {form_data.fields[11]}
          </label>
        </div>

        <div className="col-lg-12">
          <button type="submit" className="td-btn w-100">
            {form_data.submit_button}
          </button>
        </div>
      </div>
    </form>
  );
};

export default MediaAccreditationForm;
