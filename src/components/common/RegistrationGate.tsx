import type { ReactNode } from "react";
import { registrationClosed, registrationClosedMessage } from "@/data/RegistrationStatus";

export function RegistrationClosedNotice() {
  const email = "info@congocs.org";
  const [before, after] = registrationClosedMessage.split(email);
  return <p role="status" className="py-4" style={{ color: "inherit", lineHeight: 1.7 }}>{before}<a href={`mailto:${email}`} style={{ color: "inherit", textDecoration: "underline" }}>{email}</a>{after}</p>;
}

// Keep the original form available for a future edition without rendering its controls.
export default function RegistrationGate({ children }: { children: ReactNode }) {
  return registrationClosed ? <RegistrationClosedNotice /> : children;
}
