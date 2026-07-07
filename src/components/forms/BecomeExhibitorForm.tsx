"use client";

import { form_area } from "@/data/ExhibitionData";

const BecomeExhibitorForm = () => {
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
            name="sponsorCategory"
            className="vuka-form-input"
            required={true}
            aria-invalid="false"
            defaultValue=""
          >
            <option value="" disabled>
              {form_area.fields[5]}
            </option>
            <option value="Agriculture &amp; Agro-transformation">
              Agriculture &amp; Agro-transformation
            </option>
            <option value="Banking, Fintech &amp; Financial Inclusion">
              Banking, Fintech &amp; Financial Inclusion
            </option>
            <option value="Digital &amp; Technologies">
              Digital &amp; Technologies
            </option>
            <option value="Industry &amp; Local Transformation">
              Industry &amp; Local Transformation
            </option>
            <option value="Creative Industries &amp; Culture">
              Creative Industries &amp; Culture
            </option>
            <option value="Entrepreneurship, Youth &amp; Employability">
              Entrepreneurship, Youth &amp; Employability
            </option>
            <option value="Institutions &amp; Regulators">
              Institutions &amp; Regulators
            </option>
            <option value="Gastronomy">Gastronomy</option>
            <option value="SMEs">SMEs</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={form_area.fields[6]} rows={5} />
        </div>
        <div className="col-lg-6 mb-25">
          <select
            name="budgetRange"
            className="vuka-form-input"
            aria-invalid="false"
            defaultValue={""}
          >
            <option value="" disabled>
              {form_area.fields[7]}
            </option>
            <option value="Stand standard">Stand standard</option>
            <option value="Stand premium">Stand premium</option>
            <option value="Espace startup showcase">
              Espace startup showcase
            </option>
            <option value="Stand institutionnel">Stand institutionnel</option>
            <option value="Espace demonstration produit">
              Espace demonstration produit
            </option>
            <option value="A definir">A definir</option>
          </select>
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={form_area.fields[8]} rows={5} />
        </div>

        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[9]}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[10]}
          />
        </div>

        <div className="col-lg-12 mb-25">
          <label>
            <input className="input mr-10" type="checkbox" />
            {form_area.fields[11]}
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

export default BecomeExhibitorForm;
