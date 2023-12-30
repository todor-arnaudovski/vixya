import { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  style?: "primary" | "outline";
}

export const Button = (props: ButtonProps) => {
  const { children, className = "", onClick, style = "primary" } = props;

  return (
    <>
      <button
        onClick={onClick}
        className={classNames(
          "button uppercase text-white w-full py-3 font-extrabold",
          `button-${style}`,
          className
        )}
      >
        {children}
      </button>
    </>
  );
};
