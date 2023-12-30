import { useEffect, useState } from "react";
import { Pill } from "../../../components/Pill";

interface WorkoutEquipmentItem {
  id: number;
  name: string;
  isSelected: boolean;
}

const initWorkoutEquipment = [
  { id: 1, name: "Машина", isSelected: false },
  { id: 2, name: "Вратило", isSelected: false },
  { id: 3, name: "Разбој", isSelected: false },
  { id: 4, name: "Шипка", isSelected: false },
  { id: 5, name: "Бучици", isSelected: false },
  { id: 6, name: "Руско ѕвоно", isSelected: false },
  { id: 7, name: "Кардио машина", isSelected: false },
  { id: 8, name: "Јаже за скокање", isSelected: false },
  { id: 9, name: "Кутија за скокање", isSelected: false },
  { id: 10, name: "Конуси", isSelected: false },
];

export const WorkoutEquipmentPills = () => {
  const [isAllSelected, set_isAllSelected] = useState(false);
  const [workoutEquipment, set_workoutEquipment] =
    useState<WorkoutEquipmentItem[]>(initWorkoutEquipment);

  const workoutEquipmentToggleHandler = (id: number) => {
    set_workoutEquipment((prevState) =>
      prevState.map((item) => (item.id === id ? { ...item, isSelected: !item.isSelected } : item))
    );
  };

  const selectAllHandler = () => {
    set_workoutEquipment((prevState) =>
      prevState.map((item) => ({ ...item, isSelected: !isAllSelected }))
    );
    set_isAllSelected(!isAllSelected);
  };

  useEffect(() => {
    const isAllItemsSelected =
      workoutEquipment.filter((item) => item.isSelected).length >= workoutEquipment.length;

    set_isAllSelected(isAllItemsSelected);
  }, [workoutEquipment]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {workoutEquipment.map((item, index) => {
          return (
            <Pill
              key={index}
              onClick={() => workoutEquipmentToggleHandler(item.id)}
              style={item.isSelected ? "primary" : "outline"}
            >
              {item.name}
            </Pill>
          );
        })}
        <Pill onClick={selectAllHandler} style={isAllSelected ? "primary" : "outline"}>
          Се од наведеното
        </Pill>
      </div>
    </>
  );
};
