import { ReactNode } from "react";
import { useIsPageScrolled } from "../../hooks/useIsPageScrolled";
import classNames from "classnames";

interface NavigationTopProps {
  children: ReactNode;
  logoPosition?: "left" | "center" | "right";
}

export const NavigationTop = (props: NavigationTopProps) => {
  const { children, logoPosition = "center" } = props;
  const { isScrolled } = useIsPageScrolled();

  return (
    <div
      className={classNames(
        "fixed z-999 top-0 inset-x-0 w-full flex px-5 py-5",
        `justify-${logoPosition}`,
        {
          "bg-black drop-shadow": isScrolled,
        }
      )}
    >
      {children}
    </div>
  );
};
