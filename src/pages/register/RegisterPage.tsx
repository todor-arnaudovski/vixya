import { useState } from "react";
import { TopNav } from "./layout";
import { RegisterForm, SubscribeForm } from "./components";
import { useNavigate } from "react-router-dom";
import { Button, Progress } from "../../components";

const steps = [
  {
    component: SubscribeForm,
    label: "step-subscribe",
    buttonText: "Претплати се",
  },
  {
    component: RegisterForm,
    label: "step-register",
    buttonText: "Регистрирај се",
  },
];

export const RegisterPage = () => {
  const [currentStepIndex, set_currentStepIndex] = useState(0);
  const CurrentStepComponent = steps[currentStepIndex].component;
  const navigate = useNavigate();

  const onPrevStepHandler = () => {
    if (currentStepIndex > 0) {
      set_currentStepIndex(currentStepIndex - 1);
    } else {
      navigate(import.meta.env.BASE_URL || "/");
    }
  };

  const onNextStepHandler = () => {
    if (currentStepIndex < steps.length - 1) {
      set_currentStepIndex(currentStepIndex + 1);
    } else {
      navigate(`${import.meta.env.BASE_URL}setup` || "/setup");
    }
  };

  return (
    <>
      <TopNav onPrevStep={onPrevStepHandler} />
      <div className="flex flex-col justify-between min-h-screen h-full w-full lg:w-1/2 pt-32 mx-auto">
        <div className="mb-10">
          <CurrentStepComponent />
        </div>
        <div className="mb-10">
          <Button onClick={onNextStepHandler} className="mb-7">
            {steps[currentStepIndex].buttonText}
          </Button>
          <Progress steps={steps.length} step={currentStepIndex + 1} />
        </div>
      </div>
    </>
  );
};
