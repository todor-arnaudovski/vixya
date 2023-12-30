import classNames from "classnames";
import styles from "../assets/Checkbox.module.scss";
import { IconCheckmark } from "../../../../assets/icons";
import { useRef } from "react";

interface CheckboxProps {
  className?: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox = (props: CheckboxProps) => {
  const { className = "", checked, onChange } = props;
  const checkboxInputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    if (checkboxInputRef?.current) {
      checkboxInputRef?.current.click();
    }
  };

  return (
    <>
      <div className={classNames(className, "relative")}>
        <input
          ref={checkboxInputRef}
          className={classNames(styles["checkbox-input"])}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span
          className={classNames(
            styles["checkbox-custom"],
            "text-white  cursor-pointer transition-all",
            checked ? "bg-primary border-primary" : "bg-black border-white"
          )}
          onClick={onClickHandler}
        >
          {checked && (
            <i className="text-xs z-20">
              <IconCheckmark />
            </i>
          )}
        </span>
      </div>
    </>
  );
};
