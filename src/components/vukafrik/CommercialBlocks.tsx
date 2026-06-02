import Link from "next/link";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export const SectionHeading = ({
  eyebrow: _eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => {
  void _eyebrow;

  return (
    <div className={`vuka-section-heading vuka-section-heading--${align} mb-35`}>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
      <hr className="vuka-section-divider" />
    </div>
  );
};

export const FeatureListCard = ({
  eyebrow: _eyebrow,
  title,
  description,
  items,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: string[];
  dark?: boolean;
}) => {
  void _eyebrow;

  return (
    <div className={`vuka-info-card ${dark ? "vuka-info-card--dark" : ""}`}>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      <ul className="vuka-stakeholder-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export const ActionCard = ({
  title,
  description,
  items,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  description: string;
  items?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}) => {
  return (
    <div className="vuka-commercial-card h-100">
      <h3>{title}</h3>
      <p>{description}</p>
      {items?.length ? (
        <ul className="vuka-stakeholder-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {ctaLabel && ctaHref ? (
        <Link className="vuka-commercial-card__link" href={ctaHref}>
          {ctaLabel}
        </Link>
      ) : null}
    </div>
  );
};

export const MetricCard = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  return (
    <div className="vuka-stat-card h-100">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
};

export const JourneyStep = ({
  index,
  text,
}: {
  index: number;
  text: string;
}) => {
  return (
    <div className="vuka-process-card h-100">
      <span className="vuka-process-card__index">{index}</span>
      <p>{text}</p>
    </div>
  );
};
