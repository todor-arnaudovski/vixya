import { useEffect, useState } from "react";

export const useIsPageScrolled = () => {
  const [isScrolled, set_isScrolled] = useState(false);

  const scrollHandler = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    set_isScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return { isScrolled };
};
