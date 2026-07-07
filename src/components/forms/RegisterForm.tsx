"use client";

import { form_area } from "@/data/RegisterData";

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
            name="budgetRange"
            className="vuka-form-input"
            aria-invalid="false"
            defaultValue={""}
          >
            <option value="" disabled>
              {form_area.fields[8]}
            </option>
            <option value="Entrepreneur">Entrepreneur</option>
            <option value="Fondateur de startup">Fondateur de startup</option>
            <option value="Dirigeant de PME">Dirigeant de PME</option>
            <option value="Representant corporate">
              Representant corporate
            </option>
            <option value="Investisseur">Investisseur</option>
            <option value="Institution / Gouvernement">
              Institution / Gouvernement
            </option>
            <option value="Etudiant">Etudiant</option>
            <option value="Media">Media</option>
            <option value="Partenaire">Partenaire</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div className="col-md-6 mb-25">
          <select
            name="budgetRange"
            className="vuka-form-input"
            aria-invalid="false"
            defaultValue={""}
          >
            <option value="" disabled>
              {form_area.fields[9]}
            </option>
            <option value="Strategic Summit">Strategic Summit</option>
            <option value="Innovation Showcase">Innovation Showcase</option>
            <option value="Villages thematiques">Villages thematiques</option>
            <option value="Pitch startup">Pitch startup</option>
            <option value="Sponsoring">Sponsoring</option>
            <option value="Exposition">Exposition</option>
            <option value="Opportunites d'investissement">
              Opportunites d'investissement
            </option>
            <option value="Networking">Networking</option>
            <option value="Media">Media</option>
            <option value="Volontariat">Volontariat</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div className="col-md-6 mb-25">
          <select
            name="budgetRange"
            className="vuka-form-input"
            aria-invalid="false"
            defaultValue={""}
          >
            <option value="" disabled>
              {form_area.fields[10]}
            </option>
            <option value="Jour 1 - Strategic Summit">
              Jour 1 - Strategic Summit
            </option>
            <option value="Jour 2 - Foire multisectorielle">
              Jour 2 - Foire multisectorielle
            </option>
            <option value="Jour 3 - Showcases & cloture">
              Jour 3 - Showcases & cloture
            </option>
            <option value="Les trois jours">Les trois jours</option>
          </select>
        </div>
        <div className="col-md-12 mb-25">
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

export default RegisterForm;
