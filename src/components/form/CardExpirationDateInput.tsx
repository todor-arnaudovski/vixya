import classNames from "classnames";

interface TextInputProps {
  className?: string;
  label?: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CardExpirationDateInput = (props: TextInputProps) => {
  const { className = "", label, placeholder, name, value = "", onChange } = props;

  return (
    <div className={classNames("flex flex-col", className)}>
      {label && (
        <label className="text-white" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type="text"
        pattern="(0[1-9]|1[0-2])\/\d{2}"
        className="placeholder:text-gray-300 rounded-xl p-3"
        name={name}
        value={value}
        onChange={onChange}
        {...(placeholder && { placeholder })}
      />
    </div>
  );
};
