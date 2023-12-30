import classNames from "classnames";
import { IconMinus, IconPlus } from "../../assets/icons";

interface NumberInputProps {
  className?: string;
  label?: string;
  placeholder?: string;
  name: string;
  value: string;
  min: number;
  max: number;
  step?: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export const StepInput = (props: NumberInputProps) => {
  const {
    className = "",
    label,
    placeholder,
    name,
    value = "",
    min,
    max,
    step = 1,
    onDecrease,
    onIncrease,
  } = props;

  return (
    <div className={classNames("flex flex-col", className)}>
      {label && (
        <label className="text-white" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="flex gap-3">
        <button onClick={onDecrease} disabled={+value <= min} className="disabled:opacity-30">
          <IconMinus />
        </button>
        <input
          type="number"
          className="placeholder:text-gray-300 focus:outline-0 bg-transparent text-center font-extrabold p-1 w-10"
          name={name}
          value={value || min}
          step={step}
          readOnly
          {...(placeholder && { placeholder })}
        />
        <button onClick={onIncrease} disabled={+value >= max} className="disabled:opacity-30">
          <IconPlus />
        </button>
      </div>
    </div>
  );
};
