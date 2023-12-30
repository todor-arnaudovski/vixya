import classNames from "classnames";

interface TextInputProps {
  className?: string;
  label?: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DateInput = (props: TextInputProps) => {
  const { className = "", label, placeholder, name, value = "", onChange } = props;

  return (
    <div className={classNames("flex flex-col", className)}>
      {label && (
        <label className="text-white" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type="date"
        className="placeholder:text-gray-300 rounded-xl p-3"
        name={name}
        value={value}
        onChange={onChange}
        {...(placeholder && { placeholder })}
      />
    </div>
  );
};
