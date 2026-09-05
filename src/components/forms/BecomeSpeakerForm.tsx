"use client";
import PhoneInput from "../ui/PhoneInput";

import { speaker_form_area, session_preferences } from "@/data/SpeakerData";
import { usePost } from "@/hooks/use_post";
import { SpeakerFormType } from "@/utils/types";
import SubmitButton from "../ui/SubmitButton";
import FormMessageZone from "../ui/FormMessageZone";

const INIT_SPEAKER_DATA = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  title: "",
  biography: "",
  proposed_topic: "",
  preference_of_session: "",
  linkedin_or_website: "",
  speaking_experience: "",
  additional_notes: "",
  accept_review_and_contact: false,
};
const BecomeSpeakerForm = () => {
  const {
    data: speakerForm,
    handleChange,
    successMessage,
    errorMessage,
    isSubmitting,
    handleSubmit,
    isToastOpen,
  } = usePost<SpeakerFormType>({
    initialData: INIT_SPEAKER_DATA,
    apiUrl: "/api/speaker",
    dataModelName: "Intervenant",
  });

  return (
    <form onSubmit={(e) => handleSubmit(e)} id={speaker_form_area.id}>
      <div className="row">
        <FormMessageZone
          isOpen={isToastOpen}
          errorMessage={errorMessage}
          successMessage={successMessage}
        />
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={speaker_form_area.fields[0]}
            title={speaker_form_area.fields[0]}
            value={speakerForm.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={speaker_form_area.fields[1]}
            title={speaker_form_area.fields[1]}
            value={speakerForm.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <PhoneInput
            className="input"
            placeholder={speaker_form_area.fields[2]}
            title={speaker_form_area.fields[2]}
            value={speakerForm.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            maxLength={100}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={speaker_form_area.fields[3]}
            title={speaker_form_area.fields[3]}
            value={speakerForm.organisation}
            onChange={(e) => handleChange("organisation", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-12 mb-25">
          <input
            className="input"
            type="text"
            placeholder={speaker_form_area.fields[4]}
            title={speaker_form_area.fields[4]}
            value={speakerForm.title}
            onChange={(e) => handleChange("title", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea
            placeholder={speaker_form_area.fields[5]}
            rows={5}
            title={speaker_form_area.fields[5]}
            value={speakerForm.biography}
            onChange={(e) => handleChange("biography", e.target.value)}
            required
          />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea
            placeholder={speaker_form_area.fields[6]}
            rows={5}
            title={speaker_form_area.fields[6]}
            value={speakerForm.proposed_topic}
            onChange={(e) => handleChange("proposed_topic", e.target.value)}
            required
          />
        </div>
        <div className="col-lg-6 mb-25">
          <select
            name="sessionPreference"
            className="vuka-form-input"
            aria-invalid="false"
            title={speaker_form_area.fields[7]}
            value={speakerForm.preference_of_session}
            onChange={(e) =>
              handleChange("preference_of_session", e.target.value)
            }
            required
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
            title={speaker_form_area.fields[8]}
            value={speakerForm.linkedin_or_website}
            onChange={(e) =>
              handleChange("linkedin_or_website", e.target.value)
            }
            maxLength={255}
          />
        </div>

        <div className="col-lg-12 mb-25">
          <textarea
            placeholder={speaker_form_area.fields[9]}
            rows={5}
            title={speaker_form_area.fields[9]}
            value={speakerForm.speaking_experience}
            onChange={(e) =>
              handleChange("speaking_experience", e.target.value)
            }
          />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea
            placeholder={speaker_form_area.fields[10]}
            rows={5}
            title={speaker_form_area.fields[10]}
            value={speakerForm.additional_notes}
            onChange={(e) => handleChange("additional_notes", e.target.value)}
          />
        </div>

        <div className="col-lg-12 mb-25">
          <label>
            <input
              className="input mr-10"
              type="checkbox"
              title={speaker_form_area.fields[10]}
              checked={speakerForm.accept_review_and_contact}
              onChange={(e) =>
                handleChange("accept_review_and_contact", e.target.checked)
              }
              required
            />
            {speaker_form_area.fields[11]}
          </label>
        </div>
        <SubmitButton
          isSubmitting={isSubmitting}
          title={speaker_form_area.submit_button}
        />
      </div>
    </form>
  );
};

export default BecomeSpeakerForm;
