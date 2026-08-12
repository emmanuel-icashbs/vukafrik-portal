import { useEffect, useState } from "react";

const useToat = () => {
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isToastOpen) {
      setTimeout(() => {
        setIsToastOpen(false);
      }, 5000);
    }
  }, [isToastOpen]);
  return { isToastOpen, setIsToastOpen };
};

export default useToat;
