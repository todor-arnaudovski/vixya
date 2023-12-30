import { useState } from "react";
import { HeadingDefault, StepInput } from "../../../components";
import { WorkoutEquipmentPills } from "./WorkoutEquipmentPills";

type AvailabilityProperties = "daysPerWeek" | "hoursPerWorkout";

export const Availability = () => {
  const [daysPerWeek, set_daysPerWeek] = useState(3);
  const [hoursPerWorkout, set_hoursPerWorkout] = useState(30);

  const onValueChangeHandler = (
    forName: AvailabilityProperties,
    action: "increase" | "decrease",
    amount: number
  ) => {
    if (forName === "daysPerWeek") {
      set_daysPerWeek((prevState) => {
        if (action === "increase") return prevState + amount;
        if (action === "decrease") return prevState - amount;
        return prevState;
      });
    }

    if (forName === "hoursPerWorkout") {
      set_hoursPerWorkout((prevState) => {
        if (action === "increase") return prevState + amount;
        if (action === "decrease") return prevState - amount;
        return prevState;
      });
    }
  };

  return (
    <>
      <HeadingDefault className="text-center mb-5">
        Достапни денови <br /> и опрема
      </HeadingDefault>
      <p className="text-center text-white mb-10">
        Потребна ни е информација за твоите достапни денови за вежбање и опрема за вежбање
      </p>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-between items-center gap-5 w-full text-white border-b border-white pb-7 mb-7">
          <p>Колку пати неделно преферираш да вежбаш?</p>
          <StepInput
            name="daysPerWeek"
            value={daysPerWeek.toString()}
            min={3}
            max={7}
            onDecrease={() => onValueChangeHandler("daysPerWeek", "decrease", 1)}
            onIncrease={() => onValueChangeHandler("daysPerWeek", "increase", 1)}
          />
        </div>
        <div className="flex justify-between items-center gap-5 w-full text-white border-b border-white pb-7 mb-7">
          <p>Колку време би сакал да трае еден тренинг? (во минути)</p>
          <StepInput
            name="hoursPerWorkout"
            value={hoursPerWorkout.toString()}
            min={30}
            max={120}
            step={15}
            onDecrease={() => onValueChangeHandler("hoursPerWorkout", "decrease", 15)}
            onIncrease={() => onValueChangeHandler("hoursPerWorkout", "increase", 15)}
          />
        </div>
        <div className="w-full text-white ">
          <p className="mb-5">Опрема достапла за вежбање:</p>
          <WorkoutEquipmentPills />
        </div>
      </div>
    </>
  );
};
