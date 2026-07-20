"use client";

import { exhibitions_formats, form_area } from "@/data/ExhibitionData";
import village_data from "@/data/VillageData";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const BecomeExhibitorForm = () => {
  const searchParams = useSearchParams();
  const [village_id, setVillageId] = useState(searchParams.get("village_id"));
  return (
    <form onSubmit={(e) => e.preventDefault()} id={form_area.id}>
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
            name="sponsorCategory"
            className="vuka-form-input"
            required={true}
            aria-invalid="false"
            defaultValue={""}
            // onChange={(e) => setVillageId(e.target.value)}
          >
            <option value="" disabled>
              {form_area.fields[5]}
            </option>
            {village_data.map((village) => (
              <option key={village.id} value={village.title}>
                {village.title}
              </option>
            ))}
            <option value="0">Other</option>
          </select>
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
            {exhibitions_formats.map((format) => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-12 mb-25">
          <textarea placeholder={form_area.fields[6]} rows={5} />
        </div>

        <div className="col-lg-12 mb-25">
          <textarea placeholder={form_area.fields[8]} rows={5} />
        </div>
        <div className="col-lg-6 mb-25">
          <input
            className="input"
            type="text"
            placeholder={form_area.fields[10]}
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
            placeholder={form_area.fields[9]}
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
