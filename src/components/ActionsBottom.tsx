import classNames from "classnames";
import { ReactNode } from "react";

interface ActionsBottomProps {
  children: ReactNode;
  className?: string;
}

export const ActionsBottom = (props: ActionsBottomProps) => {
  const { children, className = "" } = props;

  return (
    <>
      <div
        className={classNames("fixed left-0 right-0 bottom-[0] px-5 lg:w-1/2 mx-auto", className)}
      >
        {children}
      </div>
    </>
  );
};
