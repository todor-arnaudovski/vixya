import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = (props: ContainerProps) => {
  const { children } = props;

  return <div className="container relative w-full h-full mx-auto px-5">{children}</div>;
};
