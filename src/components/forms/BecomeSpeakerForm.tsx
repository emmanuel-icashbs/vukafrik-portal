"use client";
const BecomeSpeakerForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} id="team_form">
      <div className="row">
        <div className="col-lg-6 mb-25">
          <input className="input" type="text" placeholder="Nom complet *" />
        </div>
        <div className="col-lg-6 mb-25">
          <input className="input" type="email" placeholder="Email *" />
        </div>
        <div className="col-lg-6 mb-25">
          <input className="input" type="text" placeholder="Telephone *" />
        </div>
        <div className="col-lg-6 mb-25">
          <input className="input" type="text" placeholder="Organisation *" />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder="Fonction / titre *"
          />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder="Courte bio... *" rows={5} />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder="Sujet propose *" rows={5} />
        </div>
        <div className="col-lg-6 mb-25">
          <select
            id="_r_7_"
            name="sessionPreference"
            className="vuka-form-input"
            required={true}
            aria-invalid="false"
          >
            <option value="">Selectionner une option *</option>
            <option value="Keynote">Keynote</option>
            <option value="Panel">Panel</option>
            <option value="Fireside Chat">Fireside Chat</option>
            <option value="Workshop">Workshop</option>
            <option value="Session de formation">Session de formation</option>
            <option value="Jury pitch">Jury pitch</option>
            <option value="Moderateur">Moderateur</option>
            <option value="Autre">Autre</option>
          </select>{" "}
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder="LinkedIn / site web *"
          />
        </div>

        <div className="col-lg-12 mb-25">
          <textarea placeholder="Experience de prise de parole" rows={5} />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder="Notes complementaires" rows={5} />
        </div>

        <div className="col-lg-12 mb-25">
          <label>
            <input className="input mr-10" type="checkbox" />
            {
              "J'accepte que l'equipe VUK'AFRIK examine cette soumission et me contacte si necessaire."
            }
          </label>
        </div>

        <div className="col-lg-12">
          <button type="submit" className="td-btn w-100">
            Soumettre
          </button>
        </div>
      </div>
    </form>
  );
};

export default BecomeSpeakerForm;
