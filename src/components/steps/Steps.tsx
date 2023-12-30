import classNames from "classnames";
import { IconArrow } from "../../assets/icons";

interface StepsProps {
  className?: string;
  steps: number;
  step: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
}

export const Steps = (props: StepsProps) => {
  const {
    className = "",
    steps = 1,
    step = 0,
    onPrevStep,
    onNextStep,
    isPrevDisabled = false,
    isNextDisabled = false,
  } = props;

  return (
    <>
      <div
        className={classNames(
          "flex items-center justify-between text-white font-extrabold",
          className
        )}
      >
        {
          <button
            onClick={onPrevStep}
            disabled={isPrevDisabled}
            className={classNames("flex items-center gap-3 text-xs uppercase", {
              "opacity-0": isPrevDisabled,
            })}
          >
            <div className="rotate-180">
              <IconArrow />
            </div>
            Врати се
          </button>
        }
        <div>
          {step} / {steps}
        </div>
        <button
          onClick={onNextStep}
          disabled={isNextDisabled}
          className={classNames("flex items-center gap-3 text-xs uppercase disabled:opacity-30")}
        >
          Продолжи
          <div>
            <IconArrow />
          </div>
        </button>
      </div>
    </>
  );
};
