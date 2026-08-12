import { useEffect, useState } from "react";

const useScrollToTop = (top: number = 300) => {
  const [shouldScrollToTop, setSchouldScrollToTop] = useState<boolean>(false);

  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });

      setSchouldScrollToTop(false);
    }
  }, [shouldScrollToTop]);
  return {
    setSchouldScrollToTop,
  };
};

export default useScrollToTop;
