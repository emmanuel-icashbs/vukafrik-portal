"use client";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { ApiResponseType } from "@/utils/types";
import useToat from "./useToat";
import { normalizeDrcPhone, PHONE_ERROR } from "@/utils/contactFields";

interface UsePostProps<I> {
  initialData: I;
  apiUrl: string;
  dataModelName: string;
}

export function usePost<I>({
  initialData,
  apiUrl,
  dataModelName,
}: UsePostProps<I>) {
  const { isToastOpen, setIsToastOpen } = useToat();
  const [data, setData] = useState<I>(initialData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = { ...data };
    for (const field of ["phone", "team_leader_phone"] as const) {
      if (field in (payload as object)) {
        const fields = payload as Record<string, unknown>;
        const phone = normalizeDrcPhone(fields[field]);
        if (!phone) {
          setErrorMessage(PHONE_ERROR);
          setSuccessMessage("");
          setIsToastOpen(true);
          return;
        }
        fields[field] = phone;
      }
    }
    setData(payload);
    setIsSubmitting(true);
  };

  useEffect(() => {
    const submitForm = async () => {
      if (isSubmitting) {
        try {
          const responsePromise = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const response: ApiResponseType = await responsePromise.json();
          if (response.success) {
            setSuccessMessage(
              `Fait avec Success, a bientot cher ${dataModelName} !`,
            );
            setErrorMessage("");
          } else {
            setErrorMessage(
              response.message || `Fait avec Echec, recommencer ou contacter l'Admin cher ${dataModelName} !`,
            );
            setSuccessMessage("");
          }
        } catch {
          setErrorMessage("Impossible d’envoyer le formulaire. Veuillez réessayer.");
          setSuccessMessage("");
        } finally {
          setIsSubmitting(false);
          setIsToastOpen(true);
        }
      }
    };
    submitForm();
  }, [isSubmitting]);

  // -----------------------------
  // Sync current data
  // -----------------------------
  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  // -----------------------------
  // Generic field update
  // -----------------------------
  const handleChange = useCallback(
    <F extends keyof I>(field: F, value: I[F]) => {
      setData((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    [setData],
  );

  return {
    data,
    handleChange,
    successMessage,
    errorMessage,
    isSubmitting,
    handleSubmit,
    isToastOpen,
    setIsToastOpen,
  };
}
