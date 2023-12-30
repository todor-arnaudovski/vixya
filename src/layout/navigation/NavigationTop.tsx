import { ReactNode } from "react";
import { useIsPageScrolled } from "../../hooks/useIsPageScrolled";
import classNames from "classnames";

interface NavigationTopProps {
  children: ReactNode;
}

export const NavigationTop = (props: NavigationTopProps) => {
  const { children } = props;
  const { isScrolled } = useIsPageScrolled();

  console.log("isScrolled", isScrolled);

  return (
    <div
      className={classNames(
        "fixed z-999 top-0 inset-x-0 w-full flex justify-center py-5 transition-all",
        {
          "bg-black drop-shadow": isScrolled,
        }
      )}
    >
      {children}
    </div>
  );
};
