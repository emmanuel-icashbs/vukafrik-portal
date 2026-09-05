"use client";

import { InputHTMLAttributes, useId, useState } from "react";
import { DRC_PHONE_PREFIX, normalizeDrcPhone, PHONE_ERROR } from "@/utils/contactFields";

export default function PhoneInput({ value, onChange, id, required, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [invalid, setInvalid] = useState(false);
  const displayed = typeof value === "string" && value.startsWith(DRC_PHONE_PREFIX) ? value.slice(4) : value;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "stretch", gap: 8 }}>
        <span style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>{DRC_PHONE_PREFIX}</span>
        <input
          {...props}
          id={inputId}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          aria-label={props["aria-label"] ?? props.title ?? "Téléphone"}
          aria-describedby={`${inputId}-help`}
          aria-invalid={invalid}
          style={{ ...props.style, minWidth: 0, flex: 1 }}
          value={displayed}
          required={required}
          onChange={(event) => {
            const raw = event.currentTarget.value;
            const normalized = normalizeDrcPhone(raw);
            const error = (raw || required) && !normalized ? PHONE_ERROR : "";
            event.currentTarget.setCustomValidity(error);
            setInvalid(false);
            if (normalized) event.currentTarget.value = normalized;
            onChange?.(event);
          }}
          onBlur={(event) => {
            const error = (event.currentTarget.value || required) && !normalizeDrcPhone(event.currentTarget.value) ? PHONE_ERROR : "";
            event.currentTarget.setCustomValidity(error);
            setInvalid(Boolean(error));
            props.onBlur?.(event);
          }}
          onInvalid={() => setInvalid(true)}
        />
      </div>
      <small id={`${inputId}-help`} style={{ display: "block", color: invalid ? "#b42318" : "inherit" }}>
        {invalid ? PHONE_ERROR : "République démocratique du Congo : +243 89 847 0448"}
      </small>
    </div>
  );
}
