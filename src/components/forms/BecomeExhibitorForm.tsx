"use client";
import PhoneInput from "../ui/PhoneInput";

import {
  exhibitions_formats,
  exhibitor_form_area,
} from "@/data/ExhibitionData";
import village_data from "@/data/VillageData";
import { usePost } from "@/hooks/use_post";
import { ExhibitorFormType } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FormMessageZone from "../ui/FormMessageZone";
import SubmitButton from "../ui/SubmitButton";

const INIT_EXHIBITOR_DATA: ExhibitorFormType = {
  organisation: "",
  contact_person: "",
  email: "",
  phone: "",
  website: "",
  sector: "",
  product_service_description: "",
  preferred_format: "",
  specific_needs: "",
  social_media_links: "",
  no_of_participants: "",
  accept_review_and_contact: false,
};
const BecomeExhibitorForm = () => {
  const searchParams = useSearchParams();
  const [village_id, setVillageId] = useState(searchParams.get("village_id"));
  const {
    data: exhibitorForm,
    handleChange,
    successMessage,
    errorMessage,
    isSubmitting,
    handleSubmit,
    isToastOpen,
  } = usePost<ExhibitorFormType>({
    initialData: INIT_EXHIBITOR_DATA,
    apiUrl: "/api/exhibitor",
    dataModelName: "Exposant",
  });

  useEffect(() => {
    if (village_id) {
      const foundVillage = village_data.find(
        (village) => String(village.id) == village_id,
      );
      handleChange("sector", foundVillage?.title || "");
    }
  }, [village_id]);

  return (
    <form onSubmit={(e) => handleSubmit(e)} id={exhibitor_form_area.id}>
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
            placeholder={exhibitor_form_area.fields[0]}
            title={exhibitor_form_area.fields[0]}
            value={exhibitorForm.organisation}
            onChange={(e) => handleChange("organisation", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={exhibitor_form_area.fields[1]}
            title={exhibitor_form_area.fields[1]}
            value={exhibitorForm.contact_person}
            onChange={(e) => handleChange("contact_person", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={exhibitor_form_area.fields[2]}
            title={exhibitor_form_area.fields[2]}
            value={exhibitorForm.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <PhoneInput
            className="input"
            placeholder={exhibitor_form_area.fields[3]}
            title={exhibitor_form_area.fields[3]}
            value={exhibitorForm.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            maxLength={100}
          />
        </div>

        <div className="col-lg-6 mb-25">
          <select
            name="sponsorCategory"
            className="vuka-form-input"
            required={true}
            aria-invalid="false"
            title={exhibitor_form_area.fields[5]}
            value={exhibitorForm.sector}
            onChange={(e) => handleChange("sector", e.target.value)}
          >
            <option value="" disabled>
              {exhibitor_form_area.fields[5]}
            </option>
            {village_data.map((village) => (
              <option key={village.id} value={village.title}>
                {village.title}
              </option>
            ))}
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div className="col-lg-6 mb-25">
          <select
            name="budgetRange"
            className="vuka-form-input"
            aria-invalid="false"
            title={exhibitor_form_area.fields[7]}
            value={exhibitorForm.preferred_format}
            onChange={(e) => handleChange("preferred_format", e.target.value)}
          >
            <option value="" disabled>
              {exhibitor_form_area.fields[7]}
            </option>
            {exhibitions_formats.map((format) => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-12 mb-25">
          <textarea
            placeholder={exhibitor_form_area.fields[6]}
            rows={5}
            title={exhibitor_form_area.fields[6]}
            value={exhibitorForm.product_service_description}
            onChange={(e) =>
              handleChange("product_service_description", e.target.value)
            }
            required
          />
        </div>

        <div className="col-lg-12 mb-25">
          <textarea
            placeholder={exhibitor_form_area.fields[8]}
            rows={5}
            title={exhibitor_form_area.fields[8]}
            value={exhibitorForm.specific_needs}
            onChange={(e) => handleChange("specific_needs", e.target.value)}
            required
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={exhibitor_form_area.fields[10]}
            title={exhibitor_form_area.fields[10]}
            value={exhibitorForm.no_of_participants}
            onChange={(e) => handleChange("no_of_participants", e.target.value)}
            maxLength={10}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={exhibitor_form_area.fields[4]}
            title={exhibitor_form_area.fields[4]}
            value={exhibitorForm.website}
            onChange={(e) => handleChange("website", e.target.value)}
            maxLength={255}
          />
        </div>

        <div className="col-lg-12 mb-25">
          <textarea
            placeholder={exhibitor_form_area.fields[9]}
            rows={5}
            title={exhibitor_form_area.fields[9]}
            value={exhibitorForm.social_media_links}
            onChange={(e) => handleChange("social_media_links", e.target.value)}
          />
        </div>

        <div className="col-lg-12 mb-25">
          <label>
            <input
              className="input mr-10"
              type="checkbox"
              title={exhibitor_form_area.fields[10]}
              checked={exhibitorForm.accept_review_and_contact}
              onChange={(e) =>
                handleChange("accept_review_and_contact", e.target.checked)
              }
              required
            />
            {exhibitor_form_area.fields[11]}
          </label>
        </div>
        <SubmitButton
          isSubmitting={isSubmitting}
          title={exhibitor_form_area.submit_button}
        />
      </div>
    </form>
  );
};

export default BecomeExhibitorForm;
