"use client";

import { form_area } from "@/data/VolonteerData";

const BecomeVolonteerForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} id="volonteer_form">
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
          <select
            name="sessionPreference"
            className="vuka-form-input"
            required={true}
            aria-invalid="false"
            defaultValue={""}
          >
            <option value="" disabled>
              {form_area.fields[4]}{" "}
            </option>
            <option value="Avant l'evenement">Avant l'evenement</option>
            <option value="Jour 1 uniquement">Jour 1 uniquement</option>
            <option value="Jour 2 uniquement">Jour 2 uniquement</option>
            <option value="Jour 3 uniquement">Jour 3 uniquement</option>
            <option value="Tous les jours de l'evenement">
              Tous les jours de l'evenement
            </option>
            <option value="Flexible">Flexible</option>
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
              {form_area.fields[5]}{" "}
            </option>
            <option value="Accueil et inscription">
              Accueil et inscription
            </option>
            <option value="Support visiteurs">Support visiteurs</option>
            <option value="Support speakers">Support speakers</option>
            <option value="Support media">Support media</option>
            <option value="Support exposants">Support exposants</option>
            <option value="Protocole / VIP">Protocole / VIP</option>
            <option value="Logistics">Logistics</option>
            <option value="Support technique">Support technique</option>
            <option value="Reseaux sociaux / contenu">
              Reseaux sociaux / contenu
            </option>
            <option value="Support general">Support general</option>
          </select>{" "}
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={form_area.fields[6]} rows={5} />
        </div>

        <div className="col-lg-12 mb-25">
          <textarea placeholder={form_area.fields[7]} rows={5} />
        </div>

        <div className="col-lg-12 mb-25">
          <label>
            <input className="input mr-10" type="checkbox" />
            {form_area.fields[8]}
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

export default BecomeVolonteerForm;
