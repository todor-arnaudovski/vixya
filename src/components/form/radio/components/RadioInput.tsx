import classNames from "classnames";
import styles from "../assets/RadioInput.module.scss";
import { useRef } from "react";

interface RadioInputProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInput = (props: RadioInputProps) => {
  const { name, value, checked, onChange } = props;
  const radioInputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    if (radioInputRef?.current) {
      radioInputRef.current?.click();
    }
  };

  return (
    <>
      <div className="mb-1 relative">
        <input
          ref={radioInputRef}
          className={classNames(styles["radio-input"])}
          type="radio"
          id={`radio-input-${name}-${value}`}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <span
          onClick={onClickHandler}
          className={classNames(
            styles["custom-radio-input"],
            checked && styles["is-checked"],
            checked ? "bg-primary" : "bg-black"
          )}
        />
      </div>
    </>
  );
};
