import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopNav } from "./layout";
import { DateOfBirth, GenderInfo, GenderSelect, Goals } from "./components";
import { Steps } from "../../components";
import { Availability } from "./components/Availability";

const steps = [
  {
    component: GenderSelect,
    label: "step-gender-select",
  },
  {
    component: GenderInfo,
    label: "step-gender-info",
  },
  {
    component: DateOfBirth,
    label: "date-of-birth",
  },
  {
    component: Availability,
    label: "availability",
  },
  {
    component: Goals,
    label: "goals",
  },
];

export const SetupPage = () => {
  const [currentStepIndex, set_currentStepIndex] = useState(0);
  const [isPrevDisabled, set_isPrevDisabled] = useState(false);
  const [isNextDisabled, set_isNextDisabled] = useState(false);
  const CurrentStepComponent = steps[currentStepIndex].component;
  const navigate = useNavigate();

  const onPrevStepHandler = () => {
    if (currentStepIndex > 0) {
      set_currentStepIndex(currentStepIndex - 1);
    } else {
      navigate("/");
    }
  };

  const onNextStepHandler = () => {
    if (currentStepIndex < steps.length - 1) {
      set_currentStepIndex(currentStepIndex + 1);
    } else {
      navigate("/setup");
    }
  };

  const setisNextDisabledHandler = (isDisaled: boolean) => {
    set_isNextDisabled(isDisaled);
  };

  useEffect(() => {
    set_isPrevDisabled(currentStepIndex <= 0);
  }, [currentStepIndex]);

  return (
    <>
      <TopNav />
      <div className="flex flex-col justify-between min-h-screen h-full w-full lg:w-1/2 pt-32 mx-auto">
        <div className="mb-10">
          <CurrentStepComponent setIsNextDisabled={setisNextDisabledHandler} />
        </div>
        <div className="mb-10">
          <Steps
            onPrevStep={onPrevStepHandler}
            onNextStep={onNextStepHandler}
            isPrevDisabled={isPrevDisabled}
            isNextDisabled={isNextDisabled}
            steps={steps.length}
            step={currentStepIndex + 1}
          />
        </div>
      </div>
    </>
  );
};
