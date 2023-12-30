import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopNav } from "./layout";
import { DateOfBirth, Finish, GenderInfo, GenderSelect, Goals, Notifications } from "./components";
import { Button, Steps } from "../../components";
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
  {
    component: Notifications,
    label: "goals",
  },
  {
    component: Finish,
    label: "finish",
  },
];

export const SetupPage = () => {
  const [currentStepIndex, set_currentStepIndex] = useState(0);
  const [isPrevDisabled, set_isPrevDisabled] = useState(false);
  const [isNextDisabled, set_isNextDisabled] = useState(false);
  const CurrentStepComponent = steps[currentStepIndex].component;
  const navigate = useNavigate();

  const resetState = () => {
    set_isPrevDisabled(false);
    set_isNextDisabled(false);
  };

  const onPrevStepHandler = () => {
    if (currentStepIndex > 0) {
      resetState();
      set_currentStepIndex(currentStepIndex - 1);
    } else {
      navigate(import.meta.env.BASE_URL || "/");
    }
  };

  const onNextStepHandler = () => {
    if (currentStepIndex < steps.length - 1) {
      resetState();
      set_currentStepIndex(currentStepIndex + 1);
    } else {
      navigate(`${import.meta.env.BASE_URL}setup` || "setup");
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
      <div className="flex flex-col justify-between min-h-screen h-full w-full lg:w-1/2 pt-28 mx-auto">
        <div className="mb-10">
          <CurrentStepComponent setIsNextDisabled={setisNextDisabledHandler} />
        </div>
        {currentStepIndex < steps.length - 1 ? (
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
        ) : (
          <div className="mb-20">
            <Button onClick={onNextStepHandler}>Започни</Button>
          </div>
        )}
      </div>
    </>
  );
};
