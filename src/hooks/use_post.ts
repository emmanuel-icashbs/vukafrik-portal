"use client";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { ApiResponseType } from "@/utils/types";
import useScrollToTop from "./use_scroll_to_top";

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
  const { setSchouldScrollToTop } = useScrollToTop();
  const [data, setData] = useState<I>(initialData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  useEffect(() => {
    const submitForm = async () => {
      if (isSubmitting) {
        const responsePromise = await fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify(data),
        });
        const response: ApiResponseType = await responsePromise.json();
        if (response.success) {
          setSuccessMessage(
            `Fait avec Success !!\n A bientot cher ${dataModelName}`,
          );
          setErrorMessage("");
        } else {
          setErrorMessage(
            `Fait avec Echec !!\n Recommencer ou contacter l'Admin cher ${dataModelName}.`,
          );
          setSuccessMessage("");
        }
        setIsSubmitting(false);
        setSchouldScrollToTop(true);
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
  };
}
