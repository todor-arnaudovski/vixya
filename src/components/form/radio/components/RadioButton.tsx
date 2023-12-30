import classNames from "classnames";
import { RadioInput } from "./RadioInput";

export interface RadioOption {
  label?: string;
  name: string;
  value: string;
  checked: boolean;
}

interface RadioButtonProps {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: RadioOption[];
}

export const RadioButton = (props: RadioButtonProps) => {
  const { className = "", onChange, options } = props;

  return (
    <div className={classNames("flex gap-10", className)}>
      {options.length &&
        options.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <RadioInput
              name={item.name}
              value={item.value}
              checked={item.checked}
              onChange={onChange}
            />
            {item.label && (
              <label
                className="font-extrabold text-xs uppercase text-light cursor-pointer"
                htmlFor={`radio-input-${item.name}-${item.value}`}
              >
                {item.label}
              </label>
            )}
          </div>
        ))}
    </div>
  );
};
