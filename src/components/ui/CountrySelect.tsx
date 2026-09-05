import { SelectHTMLAttributes } from "react";
import { DRC_COUNTRY } from "@/utils/contactFields";

export default function CountrySelect(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} {...(props.onChange ? { value: DRC_COUNTRY } : { defaultValue: DRC_COUNTRY })} aria-label={props["aria-label"] ?? props.title ?? "Country"}>
      <option value={DRC_COUNTRY}>{DRC_COUNTRY}</option>
    </select>
  );
}
