"use client";
import PhoneInput from "../ui/PhoneInput";

import {
  sponsor_form_area,
  sponsor_budgets,
  sponsor_categories,
  visibility_zones,
} from "@/data/SponsorData";
import { usePost } from "@/hooks/use_post";
import { SponsorFormType } from "@/utils/types";
import FormMessageZone from "../ui/FormMessageZone";
import SubmitButton from "../ui/SubmitButton";

const INIT_SPONSOR_DATA: SponsorFormType = {
  name: "",
  contact_person: "",
  email: "",
  phone: "",
  website: "",
  partnership_category: "",
  message: "",
  budget_range: "",
  preferred_visibility_zone: "",
  interest_sector: "",
  accept_review_and_contact: false,
};
const BecomeSponsorForm = () => {
  const {
    data: sponsorForm,
    handleChange,
    successMessage,
    errorMessage,
    isSubmitting,
    handleSubmit,
    isToastOpen,
  } = usePost<SponsorFormType>({
    initialData: INIT_SPONSOR_DATA,
    apiUrl: "/api/sponsor",
    dataModelName: "Sponsor",
  });

  return (
    <form onSubmit={(e) => handleSubmit(e)} id={sponsor_form_area.id}>
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
            placeholder={sponsor_form_area.fields[0]}
            title={sponsor_form_area.fields[0]}
            value={sponsorForm.name}
            onChange={(e) => handleChange("name", e.target.value)}
            maxLength={255}
            required
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={sponsor_form_area.fields[1]}
            title={sponsor_form_area.fields[1]}
            value={sponsorForm.contact_person}
            onChange={(e) => handleChange("contact_person", e.target.value)}
            maxLength={255}
            required
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={sponsor_form_area.fields[2]}
            title={sponsor_form_area.fields[2]}
            value={sponsorForm.email}
            onChange={(e) => handleChange("email", e.target.value)}
            maxLength={255}
            required
          />
        </div>
        <div className="col-lg-6 mb-25">
          <PhoneInput
            className="input"
            placeholder={sponsor_form_area.fields[3]}
            title={sponsor_form_area.fields[3]}
            value={sponsorForm.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            maxLength={255}
            required
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={sponsor_form_area.fields[4]}
            title={sponsor_form_area.fields[4]}
            value={sponsorForm.website}
            onChange={(e) => handleChange("website", e.target.value)}
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <select
            name="sponsorCategory"
            className="vuka-form-input"
            aria-invalid="false"
            title={sponsor_form_area.fields[5]}
            value={sponsorForm.partnership_category}
            onChange={(e) =>
              handleChange("partnership_category", e.target.value)
            }
            required
          >
            <option value="" disabled>
              {sponsor_form_area.fields[5]}
            </option>
            {sponsor_categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="col-lg-6 mb-25">
          <select
            name="budgetRange"
            className="vuka-form-input"
            aria-invalid="false"
            title={sponsor_form_area.fields[7]}
            value={sponsorForm.budget_range}
            onChange={(e) => handleChange("budget_range", e.target.value)}
          >
            <option value="" disabled>
              {sponsor_form_area.fields[7]}
            </option>
            {sponsor_budgets.map((budget, index) => (
              <option key={index} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-6 mb-25">
          <select
            name="visibilityZone"
            className="vuka-form-input"
            required={true}
            aria-invalid="false"
            title={sponsor_form_area.fields[8]}
            value={sponsorForm.preferred_visibility_zone}
            onChange={(e) =>
              handleChange("preferred_visibility_zone", e.target.value)
            }
          >
            <option value="" disabled>
              {sponsor_form_area.fields[8]}
            </option>
            {visibility_zones.map((zone, index) => (
              <option key={index} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>

        <div className="col-lg-12 mb-25">
          <input
            className="input"
            type="text"
            placeholder={sponsor_form_area.fields[9]}
            title={sponsor_form_area.fields[9]}
            value={sponsorForm.interest_sector}
            onChange={(e) => handleChange("interest_sector", e.target.value)}
            maxLength={255}
          />
        </div>
        <div className="col-lg-12 mb-25">
          <textarea
            placeholder={sponsor_form_area.fields[6]}
            rows={5}
            title={sponsor_form_area.fields[6]}
            value={sponsorForm.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
        </div>

        <div className="col-lg-12 mb-25">
          <label>
            <input className="input mr-10" type="checkbox" />
            {sponsor_form_area.fields[10]}
          </label>
        </div>
        <SubmitButton
          isSubmitting={isSubmitting}
          title={sponsor_form_area.submit_button}
        />
      </div>
    </form>
  );
};

export default BecomeSponsorForm;
