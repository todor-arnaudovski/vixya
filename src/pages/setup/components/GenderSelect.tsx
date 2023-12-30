import { useEffect, useState } from "react";
import { Button, HeadingDefault } from "../../../components";
import { Gender } from "../../../types";
import { IconFemale, IconMale } from "../../../assets/icons";
import classNames from "classnames";
import { StepComponentProps } from "../types/stepComponentProps";

export const GenderSelect = (props: StepComponentProps) => {
  const { setIsNextDisabled } = props;
  const [selectedGender, set_selectedGender] = useState<Gender>(null);

  const onGenderSelectHandler = (gender: Gender) => {
    set_selectedGender(gender);
  };

  useEffect(() => {
    setIsNextDisabled(!selectedGender);
  }, [selectedGender, setIsNextDisabled]);

  return (
    <>
      <HeadingDefault className="text-center mb-5">Избери пол</HeadingDefault>
      <p className="text-center text-white mb-10">
        Овој податок би го користеле исклучиво за прикажување на релевантна содржина
      </p>
      <div className="flex justify-center items-center gap-3 mb-7">
        <Button
          onClick={() => onGenderSelectHandler("female")}
          style={selectedGender === "female" ? "primary" : "outline"}
          className="flex justify-center items-center gap-3"
        >
          <IconFemale />
          Женско
        </Button>
        <Button
          onClick={() => onGenderSelectHandler("male")}
          style={selectedGender === "male" ? "primary" : "outline"}
          className="flex justify-center items-center gap-3"
        >
          <IconMale />
          Машко
        </Button>
      </div>
      <button onClick={() => onGenderSelectHandler("unknown")} className="block mx-auto mb-10">
        <p
          className={classNames(
            "text-center uppercase tracking-[0.4rem] text-sm",
            selectedGender === "unknown" ? "text-primary" : "text-white"
          )}
        >
          Не сакам да кажам
        </p>
      </button>
      <div className="flex items-center justify-center">
        <div
          className={classNames("transition-all", {
            "scale-90": !selectedGender,
            "grayscale brightness-50 scale-75": selectedGender && selectedGender !== "female",
          })}
        >
          <img src={`${import.meta.env.BASE_URL}/images/gender-female.png`} alt="Female workout" />
        </div>
        <div
          className={classNames("transition-all", {
            "scale-90": !selectedGender,
            "grayscale brightness-50 scale-75": selectedGender && selectedGender !== "male",
          })}
        >
          <img src={`${import.meta.env.BASE_URL}/images/gender-male.png`} alt="Male workout" />
        </div>
      </div>
    </>
  );
};
