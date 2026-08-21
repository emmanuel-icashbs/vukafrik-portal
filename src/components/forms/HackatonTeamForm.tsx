"use client";
import { HackathonTeamFormType } from "@/utils/types";
import FormMessageZone from "../ui/FormMessageZone";
import { usePost } from "@/hooks/use_post";
import SubmitButton from "../ui/SubmitButton";
import { form_area } from "@/data/HackatonData";

const INIT_HACKATON_TEAM_DATA: HackathonTeamFormType = {
  team_name: "",
  team_leader_name: "",
  team_leader_email: "",
  team_leader_phone: "",
  accept_review_and_contact: false,
};

const HackatonTeamForm = () => {
  const {
    data: hackatonTeamForm,
    handleChange,
    successMessage,
    errorMessage,
    isSubmitting,
    handleSubmit,
    isToastOpen,
  } = usePost<HackathonTeamFormType>({
    initialData: INIT_HACKATON_TEAM_DATA,
    apiUrl: "/api/hackathon",
    dataModelName: "Équipe du Hackathon",
  });

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
            placeholder={form_area.fields[0]}
            title={form_area.fields[0]}
            value={hackatonTeamForm.team_name}
            onChange={(e) => handleChange("team_name", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[1]}
            title={form_area.fields[1]}
            value={hackatonTeamForm.team_leader_name}
            onChange={(e) => handleChange("team_leader_name", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="email"
            placeholder={form_area.fields[2]}
            title={form_area.fields[2]}
            value={hackatonTeamForm.team_leader_email}
            onChange={(e) => handleChange("team_leader_email", e.target.value)}
            required
            maxLength={255}
          />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[3]}
            title={form_area.fields[3]}
            value={hackatonTeamForm.team_leader_phone}
            onChange={(e) => handleChange("team_leader_phone", e.target.value)}
            required
            maxLength={100}
          />
        </div>

        <div className="col-md-12 mb-25">
          <label className="text-white">
            <input
              className="input mr-10 "
              type="checkbox"
              title={form_area.fields[4]}
              checked={hackatonTeamForm.accept_review_and_contact}
              onChange={(e) =>
                handleChange("accept_review_and_contact", e.target.checked)
              }
              required
            />
            {form_area.fields[4]}
          </label>
        </div>
        <SubmitButton
          isSubmitting={isSubmitting}
          title={form_area.submit_button}
        />
      </div>
    </form>
  );
};

export default HackatonTeamForm;
