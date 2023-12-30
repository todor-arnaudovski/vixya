import { useState } from "react";
import { HeadingDefault, HeadingSmall, RadioButton, RadioOption } from "../../../components";

enum PriorityValue {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

interface Priority {
  name: string;
  value: PriorityValue;
}

interface Goal {
  name: string;
  label: string;
  priorities: Priority[];
}

const goalsList: Goal[] = [
  {
    name: "buildingMuscle",
    label: "Градење мускул",
    priorities: [
      { name: "Малку", value: PriorityValue.LOW },
      { name: "Средно", value: PriorityValue.MEDIUM },
      { name: "Многу", value: PriorityValue.HIGH },
    ],
  },
  {
    name: "reducingFat",
    label: "Намалување масти",
    priorities: [
      { name: "Малку", value: PriorityValue.LOW },
      { name: "Средно", value: PriorityValue.MEDIUM },
      { name: "Многу", value: PriorityValue.HIGH },
    ],
  },
  {
    name: "increasingStrength",
    label: "Зголемување сила",
    priorities: [
      { name: "Малку", value: PriorityValue.LOW },
      { name: "Средно", value: PriorityValue.MEDIUM },
      { name: "Многу", value: PriorityValue.HIGH },
    ],
  },
  {
    name: "flexibilityAndMobility",
    label: "Флексибилност и мобилност",
    priorities: [
      { name: "Малку", value: PriorityValue.LOW },
      { name: "Средно", value: PriorityValue.MEDIUM },
      { name: "Многу", value: PriorityValue.HIGH },
    ],
  },
  {
    name: "speedExplosivenessAgilitySportsPerformance",
    label: "Брзина, експлозивност, агилности спортски перформанс",
    priorities: [
      { name: "Малку", value: PriorityValue.LOW },
      { name: "Средно", value: PriorityValue.MEDIUM },
      { name: "Многу", value: PriorityValue.HIGH },
    ],
  },
  {
    name: "buildingGlutes",
    label: "Зголемување на задник",
    priorities: [
      { name: "Малку", value: PriorityValue.LOW },
      { name: "Средно", value: PriorityValue.MEDIUM },
      { name: "Многу", value: PriorityValue.HIGH },
    ],
  },
];

export const Goals = () => {
  const [checkedValues, set_checkedValues] = useState<Record<string, string>>();

  const onRadioButtonChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    set_checkedValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <HeadingDefault className="text-center mb-5">Кои се твоите цели?</HeadingDefault>
      {console.log(checkedValues)}
      <p className="text-center text-white mb-10">
        Оцени колку ти е важна секоја од следниве категории
      </p>
      <div className="flex flex-col justify-center items-center">
        {goalsList.length &&
          goalsList.map((goal, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-full text-white mb-12"
            >
              <HeadingSmall className="text-center mb-5">{goal?.label}</HeadingSmall>
              <RadioButton
                onChange={onRadioButtonChangeHandler}
                options={goal.priorities.map(
                  (priority) =>
                    ({
                      label: priority.name,
                      name: goal?.name,
                      value: priority.value,
                      checked: checkedValues?.[goal?.name] === priority.value,
                    } as RadioOption)
                )}
              />
            </div>
          ))}
      </div>
    </>
  );
};
