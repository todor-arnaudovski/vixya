import classNames from "classnames";

interface NumberInputProps {
  className?: string;
  label?: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const blockedKeys = ["e", "-", "+"];

export const NumberInput = (props: NumberInputProps) => {
  const { className = "", label, placeholder, name, value = "", onChange } = props;

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;

    if (blockedKeys.includes(key)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className={classNames("flex flex-col", className)}>
        {label && (
          <label className="text-white" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          type="number"
          className="placeholder:text-gray-300 rounded-xl p-3"
          style={{ textAlign: "inherit", fontWeight: "inherit" }}
          name={name}
          value={value}
          step={1}
          onChange={onChange}
          onKeyDown={onKeyDownHandler}
          {...(placeholder && { placeholder })}
        />
      </div>
    </>
  );
};
