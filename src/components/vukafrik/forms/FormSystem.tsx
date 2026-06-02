"use client";
import { ChangeEvent, ReactNode, useId, useState } from "react";
import Link from "next/link";

import {
  newsletterSignupForm,
  VukafrikFieldConfig,
  VukafrikFormConfig,
} from "@/data/vukafrik-forms";

type FormValues = Record<string, string | boolean>;
type FormErrors = Record<string, string>;

type FieldCommonProps = {
  field: VukafrikFieldConfig;
  value: string | boolean;
  error?: string;
  onChange: (name: string, value: string | boolean) => void;
};

const RequiredFieldLabel = ({
  htmlFor,
  label,
  required,
}: {
  htmlFor: string;
  label: string;
  required?: boolean;
}) => (
  <label className="vuka-form-label" htmlFor={htmlFor}>
    {label}
    {required ? <span aria-hidden="true"> *</span> : null}
  </label>
);

const FormErrorMessage = ({ message }: { message?: string }) =>
  message ? <p className="vuka-form-error">{message}</p> : null;

const FormSuccessMessage = ({
  message,
  cta,
}: {
  message: string;
  cta?: {
    label: string;
    href: string;
  };
}) => (
  <div className="vuka-form-feedback vuka-form-feedback--success" role="status">
    <p>{message}</p>
    {cta ? (
      <Link href={cta.href} className="vuka-form-feedback__link">
        {cta.label}
      </Link>
    ) : null}
  </div>
);

const FormSection = ({
  title,
  copy,
  children,
}: {
  title: string;
  copy?: string;
  children: ReactNode;
}) => (
  <section className="vuka-form-card">
    <div className="vuka-form-card__header">
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
    {children}
  </section>
);

const TextInput = ({ field, value, error, onChange }: FieldCommonProps) => {
  const inputId = useId();

  return (
    <div className="vuka-form-group">
      <RequiredFieldLabel
        htmlFor={inputId}
        label={field.label}
        required={field.required}
      />
      <input
        id={inputId}
        name={field.name}
        className="vuka-form-input"
        type={field.type === "email" ? "email" : field.type === "tel" ? "tel" : field.type === "number" ? "number" : "text"}
        value={String(value || "")}
        onChange={(event) => onChange(field.name, event.target.value)}
        placeholder={field.placeholder || field.label}
        required={field.required}
        aria-invalid={Boolean(error)}
      />
      {field.description ? <p className="vuka-form-help">{field.description}</p> : null}
      <FormErrorMessage message={error} />
    </div>
  );
};

const SelectInput = ({ field, value, error, onChange }: FieldCommonProps) => {
  const inputId = useId();

  return (
    <div className="vuka-form-group">
      <RequiredFieldLabel
        htmlFor={inputId}
        label={field.label}
        required={field.required}
      />
      <select
        id={inputId}
        name={field.name}
        className="vuka-form-input"
        value={String(value || "")}
        onChange={(event) => onChange(field.name, event.target.value)}
        required={field.required}
        aria-invalid={Boolean(error)}
      >
        <option value="">Selectionner une option</option>
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {field.description ? <p className="vuka-form-help">{field.description}</p> : null}
      <FormErrorMessage message={error} />
    </div>
  );
};

const TextArea = ({ field, value, error, onChange }: FieldCommonProps) => {
  const inputId = useId();

  return (
    <div className="vuka-form-group vuka-form-group--full">
      <RequiredFieldLabel
        htmlFor={inputId}
        label={field.label}
        required={field.required}
      />
      <textarea
        id={inputId}
        name={field.name}
        className="vuka-form-input vuka-form-input--textarea"
        rows={field.rows ?? 5}
        value={String(value || "")}
        onChange={(event) => onChange(field.name, event.target.value)}
        placeholder={field.placeholder || field.label}
        required={field.required}
        aria-invalid={Boolean(error)}
      />
      {field.description ? <p className="vuka-form-help">{field.description}</p> : null}
      <FormErrorMessage message={error} />
    </div>
  );
};

const Checkbox = ({ field, value, error, onChange }: FieldCommonProps) => {
  const inputId = useId();

  return (
    <div className="vuka-form-group vuka-form-group--full">
      <div className="vuka-checkbox-row">
        <input
          id={inputId}
          type="checkbox"
          checked={Boolean(value)}
          onChange={(event) => onChange(field.name, event.target.checked)}
          aria-invalid={Boolean(error)}
        />
        <RequiredFieldLabel
          htmlFor={inputId}
          label={field.label}
          required={field.required}
        />
      </div>
      {field.description ? <p className="vuka-form-help">{field.description}</p> : null}
      <FormErrorMessage message={error} />
    </div>
  );
};

const RadioGroup = ({ field, value, error, onChange }: FieldCommonProps) => {
  const groupName = useId();

  return (
    <div className="vuka-form-group vuka-form-group--full">
      <span className="vuka-form-label">
        {field.label}
        {field.required ? <span aria-hidden="true"> *</span> : null}
      </span>
      <div className="vuka-radio-grid">
        {field.options?.map((option) => {
          const optionId = `${groupName}-${option.value}`;
          return (
            <label key={option.value} htmlFor={optionId} className="vuka-radio-card">
              <input
                id={optionId}
                name={field.name}
                type="radio"
                checked={value === option.value}
                onChange={() => onChange(field.name, option.value)}
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
      <FormErrorMessage message={error} />
    </div>
  );
};

const FileUploadPlaceholder = ({
  field,
  value,
  error,
  onChange,
}: FieldCommonProps) => {
  const inputId = useId();

  return (
    <div className="vuka-form-group vuka-form-group--full">
      <RequiredFieldLabel
        htmlFor={inputId}
        label={field.label}
        required={field.required}
      />
      <label htmlFor={inputId} className="vuka-file-placeholder">
        <span>{String(value || "Choisir un fichier")}</span>
        <span>Champ preparatoire uniquement</span>
      </label>
      <input
        id={inputId}
        className="vuka-file-input"
        type="file"
        accept={field.accept}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange(field.name, event.target.files?.[0]?.name || "")
        }
        aria-invalid={Boolean(error)}
      />
      {field.description ? <p className="vuka-form-help">{field.description}</p> : null}
      <FormErrorMessage message={error} />
    </div>
  );
};

const SubmitButton = ({
  loading,
  label,
}: {
  loading: boolean;
  label: string;
}) => (
  <button className="td-btn vuka-submit-btn" type="submit" disabled={loading}>
    {loading ? "Envoi en cours..." : label}
  </button>
);

const createInitialValues = (config: VukafrikFormConfig) =>
  config.fields.reduce<FormValues>((acc, field) => {
    acc[field.name] = field.type === "checkbox" ? false : "";
    return acc;
  }, {});

const validateValues = (config: VukafrikFormConfig, values: FormValues) => {
  const errors: FormErrors = {};

  config.fields.forEach((field) => {
    const rawValue = values[field.name];
    const normalizedValue =
      typeof rawValue === "string" ? rawValue.trim() : rawValue;

    if (field.required) {
      if (field.type === "checkbox") {
        if (!normalizedValue) {
          errors[field.name] = "Ce champ est obligatoire.";
        }
      } else if (!normalizedValue) {
        errors[field.name] = "Ce champ est obligatoire.";
      }
    }

    if (!errors[field.name] && field.type === "email" && normalizedValue) {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(normalizedValue));
      if (!isValidEmail) {
        errors[field.name] = "Veuillez saisir une adresse email valide.";
      }
    }

    if (
      !errors[field.name] &&
      typeof normalizedValue === "string" &&
      field.minLength &&
      normalizedValue.length > 0 &&
      normalizedValue.length < field.minLength
    ) {
      errors[field.name] = `Veuillez saisir au moins ${field.minLength} caracteres.`;
    }
  });

  return errors;
};

const renderField = (
  field: VukafrikFieldConfig,
  values: FormValues,
  errors: FormErrors,
  onChange: (name: string, value: string | boolean) => void,
) => {
  const props = {
    field,
    value: values[field.name],
    error: errors[field.name],
    onChange,
  };

  if (field.type === "select") return <SelectInput key={field.name} {...props} />;
  if (field.type === "textarea") return <TextArea key={field.name} {...props} />;
  if (field.type === "checkbox") return <Checkbox key={field.name} {...props} />;
  if (field.type === "radio") return <RadioGroup key={field.name} {...props} />;
  if (field.type === "file") return <FileUploadPlaceholder key={field.name} {...props} />;
  return <TextInput key={field.name} {...props} />;
};

const fakeSubmit = async () => {
  await new Promise((resolve) => setTimeout(resolve, 900));
};

export const StakeholderForm = ({
  config,
  sourcePage,
  submitLabel,
  compact = false,
}: {
  config: VukafrikFormConfig;
  sourcePage: string;
  submitLabel: string;
  compact?: boolean;
}) => {
  const [values, setValues] = useState<FormValues>(() => createInitialValues(config));
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (name: string, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateValues(config, values);
    setErrors(nextErrors);
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      setLoading(true);
      await fakeSubmit();
      setSubmitted(true);
      setValues(createInitialValues(config));
    } catch {
      setSubmitError(
        "Une erreur s'est produite. Merci de reessayer ou de contacter l'equipe VUK'AFRIK.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <FormSuccessMessage
        message={config.successMessage}
        cta={config.successCta}
      />
    );
  }

  return (
    <FormSection title={config.title} copy={config.intro}>
      <form
        className={`vuka-form ${compact ? "vuka-form--compact" : ""}`}
        onSubmit={handleSubmit}
        noValidate
        data-source-page={sourcePage}
      >
        <div className="row">
          {config.fields.map((field) => (
            <div
              key={field.name}
              className={field.type === "textarea" || field.type === "checkbox" || field.type === "radio" || field.type === "file"
                ? "col-12"
                : compact
                  ? "col-12"
                  : "col-lg-6"}
            >
              {renderField(field, values, errors, handleChange)}
            </div>
          ))}
        </div>
        {submitError ? (
          <div className="vuka-form-feedback vuka-form-feedback--error" role="alert">
            <p>{submitError}</p>
          </div>
        ) : null}
        <div className="vuka-form-footer">
          <p className="vuka-form-note">
            Cette soumission prepare deja les donnees utiles pour une future integration backend.
          </p>
          <SubmitButton loading={loading} label={submitLabel} />
        </div>
      </form>
    </FormSection>
  );
};

export const NewsletterSignup = ({
  sourcePage,
  title = "S'abonner aux actualites VUK'AFRIK",
}: {
  sourcePage: string;
  title?: string;
}) => (
  <div className="vuka-newsletter-card">
    <StakeholderForm
      config={{
        ...newsletterSignupForm,
        title,
        intro: "Recevez les annonces, mises a jour du programme et informations utiles.",
      }}
      sourcePage={sourcePage}
      submitLabel="S'abonner"
      compact
    />
  </div>
);
