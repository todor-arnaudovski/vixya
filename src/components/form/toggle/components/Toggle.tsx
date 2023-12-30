import { useRef } from "react";
import styles from "../assets/Toggle.module.scss";
import classNames from "classnames";

interface ToggleProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Toggle = (props: ToggleProps) => {
  const { checked, onChange } = props;
  const checkboxInputRef = useRef<HTMLInputElement>(null);

  const toggleHandler = () => {
    if (checkboxInputRef?.current) {
      checkboxInputRef?.current?.click();
    }
  };

  return (
    <>
      <input
        ref={checkboxInputRef}
        className={classNames(styles["checkbox-input"])}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={classNames(
          styles["toggle-outer"],
          checked && styles["checked"],
          checked ? "bg-primary" : "bg-light",
          "curor-pointer"
        )}
        onClick={toggleHandler}
      />
    </>
  );
};
