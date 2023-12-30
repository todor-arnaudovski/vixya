import { ReactNode } from "react";
import classNames from "classnames";

interface PillProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: "primary" | "outline";
}

export const Pill = (props: PillProps) => {
  const { children, className = "", onClick, style = "primary" } = props;

  return (
    <>
      <div
        onClick={onClick}
        className={classNames(
          "pill uppercase font-extrabold text-sm text-white transition-all duration-300 py-3 px-5 cursor-pointer",
          `pill-${style}`,
          className
        )}
      >
        {children}
      </div>
    </>
  );
};
