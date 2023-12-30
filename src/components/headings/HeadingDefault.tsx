import { ReactNode } from "react";
import classNames from "classnames";

interface HeadingDefaultProps {
  children: ReactNode;
  className?: string;
}

export const HeadingDefault = (props: HeadingDefaultProps) => {
  const { children, className = "" } = props;

  return (
    <h2 className={classNames("text-white uppercase font-extrabold text-2xl", className)}>
      {children}
    </h2>
  );
};
