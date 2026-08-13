"use client";

import {
  media_accred_form_area,
  media_types,
} from "@/data/MediaAccreditationData";
import { usePost } from "@/hooks/use_post";
import { JournalistFormType } from "@/utils/types";
import FormMessageZone from "../ui/FormMessageZone";
import SubmitButton from "../ui/SubmitButton";

const INIT_JOURNALIST_DATA: JournalistFormType = {
  organisation: "",
  name: "",
  email: "",
  phone: "",
  country: "",
  media_type: "",
  request_subject: "",
  previous_content_links: "",
  press_card_number: "",
  no_of_media_representatives: "",
  specific_technical_needs: "",
  accept_review_and_contact: false,
};

const MediaAccreditationForm = () => {
  const {
    data: journalistForm,
    handleChange,
    successMessage,
    errorMessage,
    isSubmitting,
    handleSubmit,
    isToastOpen,
  } = usePost<JournalistFormType>({
    initialData: INIT_JOURNALIST_DATA,
    apiUrl: "/api/journalist",
    dataModelName: "Journaliste",
  });

  return (
    <form onSubmit={(e) => handleSubmit(e)} id={media_accred_form_area.id}>
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
            placeholder={media_accred_form_area.fields[0]}
            title={media_accred_form_area.fields[0]}
            value={journalistForm.organisation}
            onChange={(e) => handleChange("organisation", e.target.value)}
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={media_accred_form_area.fields[1]}
            title={media_accred_form_area.fields[1]}
            value={journalistForm.name}
            onChange={(e) => handleChange("name", e.target.value)}
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={media_accred_form_area.fields[2]}
            title={media_accred_form_area.fields[2]}
            value={journalistForm.email}
            onChange={(e) => handleChange("email", e.target.value)}
            maxLength={255}
            required
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={media_accred_form_area.fields[3]}
            title={media_accred_form_area.fields[3]}
            value={journalistForm.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={media_accred_form_area.fields[4]}
            title={media_accred_form_area.fields[4]}
            value={journalistForm.country}
            onChange={(e) => handleChange("country", e.target.value)}
            maxLength={255}
            required
          />
        </div>
        <div className="col-lg-6 mb-25">
          <select
            className="vuka-form-input"
            aria-invalid="false"
            title={media_accred_form_area.fields[5]}
            value={journalistForm.media_type}
            onChange={(e) => handleChange("media_type", e.target.value)}
            required
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
          <textarea
            placeholder={media_accred_form_area.fields[6]}
            rows={5}
            title={media_accred_form_area.fields[6]}
            value={journalistForm.request_subject}
            onChange={(e) => handleChange("request_subject", e.target.value)}
            required
          />
        </div>

        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={media_accred_form_area.fields[8]}
            title={media_accred_form_area.fields[8]}
            value={journalistForm.press_card_number}
            onChange={(e) => handleChange("press_card_number", e.target.value)}
            required
          />
        </div>

        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={media_accred_form_area.fields[9]}
            title={media_accred_form_area.fields[9]}
            value={journalistForm.no_of_media_representatives}
            onChange={(e) =>
              handleChange("no_of_media_representatives", e.target.value)
            }
            required
          />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea
            placeholder={media_accred_form_area.fields[10]}
            rows={5}
            title={media_accred_form_area.fields[10]}
            value={journalistForm.specific_technical_needs}
            onChange={(e) =>
              handleChange("specific_technical_needs", e.target.value)
            }
          />
        </div>

        <div className="col-lg-12 mb-25">
          <textarea
            rows={5}
            placeholder={media_accred_form_area.fields[7]}
            title={media_accred_form_area.fields[7]}
            value={journalistForm.previous_content_links}
            onChange={(e) =>
              handleChange("previous_content_links", e.target.value)
            }
          />
        </div>

        <div className="col-md-12 mb-25">
          <label>
            <input
              className="input mr-10"
              type="checkbox"
              title={media_accred_form_area.fields[11]}
              checked={journalistForm.accept_review_and_contact}
              onChange={(e) =>
                handleChange("accept_review_and_contact", e.target.checked)
              }
              required
            />
            {media_accred_form_area.fields[11]}
          </label>
        </div>
        <SubmitButton
          isSubmitting={isSubmitting}
          title={media_accred_form_area.submit_button}
        />
      </div>
    </form>
  );
};

export default MediaAccreditationForm;
