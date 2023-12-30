import { ReactNode } from "react";
import classNames from "classnames";

interface HeadingDefaultProps {
  children: ReactNode;
  className?: string;
}

export const HeadingSmall = (props: HeadingDefaultProps) => {
  const { children, className = "" } = props;

  return (
    <h3 className={classNames("text-white uppercase font-extrabold text-sm", className)}>
      {children}
    </h3>
  );
};
