import classNames from "classnames";
import styles from "./Progress.module.scss";

interface ActionsTopProps {
  className?: string;
  steps: number;
  step: number;
}

export const Progress = (props: ActionsTopProps) => {
  const { className = "", steps = 1, step = 0 } = props;

  const stepElements = [];

  for (let i = 0; i < steps; i++) {
    stepElements.push(
      <li
        key={i}
        className={classNames(styles["indicator"], i + 1 <= step && styles["is-filled"])}
      />
    );
  }

  return (
    <>
      <ul
        className={classNames(
          "flex flex-wrap justify-center gap-x-10 gap-y-3",
          styles["progress"],
          className
        )}
      >
        {stepElements}
      </ul>
    </>
  );
};
