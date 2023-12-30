import { ReactNode } from "react";
// import { Form as ReactRouterForm } from 'react-router-dom'

interface FormProps {
  children: ReactNode;
  onSubmit: () => void;
}

export const Form = (props: FormProps) => {
  const { children, onSubmit } = props;

  return <form onSubmit={onSubmit}>{children}</form>;
};
