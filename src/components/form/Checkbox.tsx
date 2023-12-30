interface CheckboxProps {
  className?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const { className = "" } = props;

  return <input className={className} type="checkbox" />;
};
