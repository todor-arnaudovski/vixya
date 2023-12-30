import { useCallback, useEffect, useState } from "react";
import { HeadingDefault } from "../../../../components";
import { StepComponentProps } from "../../types/stepComponentProps";
import { DateOfBirthInput } from "./DateOfBirthInput";
import { DateOfBirthFormat, DatePart } from "./types";

const initialDateOfBirth: DateOfBirthFormat = {
  day: null,
  month: null,
  year: null,
};

const validateDateOfBirth = (
  day: number | null,
  month: number | null,
  year: number | null
): boolean => {
  if (!day || !month || !year) {
    return false;
  }

  const maxDaysInMonth = new Date(year, month, 0).getDate();

  return day >= 1 && day <= maxDaysInMonth && month >= 1 && month <= 12 && year >= 1900;
};

export const DateOfBirth = (props: StepComponentProps) => {
  const { setIsNextDisabled } = props;
  const [enteredDateOfBirth, set_enteredDateOfBirth] =
    useState<DateOfBirthFormat>(initialDateOfBirth);
  const [isDateOfBirthValid, set_isDateOfBirthValid] = useState<boolean>(false);
  const [calculatedAge, set_calculatedAge] = useState<number | null>(null);

  const setEnteredDateOfBirthHandler = (name: DatePart, value: string) => {
    set_enteredDateOfBirth((prevState) => ({ ...prevState, [name]: value }));
  };

  const calculateAge = useCallback(() => {
    if (enteredDateOfBirth?.year && enteredDateOfBirth?.month && enteredDateOfBirth?.day) {
      const enteredAgeToDate = new Date(
        enteredDateOfBirth?.year,
        enteredDateOfBirth?.month - 1,
        enteredDateOfBirth?.day
      );

      const currentDate = new Date();
      const ageInMilliseconds = currentDate.getTime() - enteredAgeToDate.getTime();
      const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

      return ageInYears;
    }
  }, [enteredDateOfBirth.year, enteredDateOfBirth.month, enteredDateOfBirth.day]);

  useEffect(() => {
    const isValid = validateDateOfBirth(
      enteredDateOfBirth.day,
      enteredDateOfBirth.month,
      enteredDateOfBirth.year
    );

    set_isDateOfBirthValid(isValid);
    setIsNextDisabled(!isValid);
  }, [
    enteredDateOfBirth,
    enteredDateOfBirth.day,
    enteredDateOfBirth.month,
    enteredDateOfBirth.year,
    setIsNextDisabled,
  ]);

  useEffect(() => {
    if (!isDateOfBirthValid) {
      set_calculatedAge(null);
      return;
    }

    const ageInYears = calculateAge();

    if (ageInYears) {
      set_calculatedAge(ageInYears);
    }
  }, [isDateOfBirthValid, calculateAge]);

  useEffect(() => {}, []);

  return (
    <>
      <HeadingDefault className="text-center mb-5">Датум на раѓање</HeadingDefault>
      <p className="text-center text-white mb-10">
        Овој податок ни помага при препораки за соодветните програми
      </p>
      <DateOfBirthInput
        enteredDateOfBirth={enteredDateOfBirth}
        setEnteredDateOfBirth={setEnteredDateOfBirthHandler}
      />
      {calculatedAge && (
        <div className="flex flex-col justify-center items-center animate-fade-in">
          <small className="font-extrabold uppercase text-light">Ти си</small>
          <strong className="text-white text-7xl my-2">{calculatedAge}</strong>
          <small className="font-extrabold uppercase text-light">Година/и</small>
        </div>
      )}
    </>
  );
};
