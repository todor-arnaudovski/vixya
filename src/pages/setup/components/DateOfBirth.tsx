import { useCallback, useEffect, useState } from "react";
import { HeadingDefault, NumberInput } from "../../../components";
import { StepComponentProps } from "../types/stepComponentProps";
import classNames from "classnames";

type DatePart = "day" | "month" | "year";

interface DateOfBirth {
  day: number | null;
  month: number | null;
  year: number | null;
}

const initialDateOfBirth: DateOfBirth = {
  day: null,
  month: null,
  year: null,
};

const validateDatePart = (value: string, datePart: DatePart, min: number, max: number): boolean => {
  if (value && datePart === "day") {
    if (value.length >= 2 && (+value < min || +value > max)) {
      return false;
    }
  }

  if (value && datePart === "month") {
    if (value.length >= 2 && (+value < min || +value > max)) {
      return false;
    }
  }

  if (value && datePart === "year") {
    if (value.length >= 4 && (+value < min || +value > max)) {
      return false;
    }
  }

  return true;
};

const getComputedDatePartValue = (value: string) => {
  const hasLeadingZero = value?.[0] === "0";

  if (hasLeadingZero && value.length <= 1) {
    return "0";
  } else if ((hasLeadingZero && +value?.slice(1) < 10) || (!hasLeadingZero && value.length <= 2)) {
    return value;
  }

  return "";
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
  const [enteredDateOfBirth, set_enteredDateOfBirth] = useState<DateOfBirth>(initialDateOfBirth);
  const [isDateOfBirthValid, set_isDateOfBirthValid] = useState(false);
  const [calculatedAge, set_calculatedAge] = useState<number | null>(null);

  const onDateOfBirthEnteredHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    min: number,
    max: number
  ) => {
    const { name, value } = e.currentTarget as { name: DatePart; value: string };
    let computedValue = "";

    const isValid = validateDatePart(value, name, min, max);

    if (isValid) {
      computedValue = name === "year" ? value : getComputedDatePartValue(value);
    }

    set_enteredDateOfBirth((prevState) => {
      return { ...prevState, [name]: computedValue };
    });
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

  return (
    <>
      <HeadingDefault className="text-center mb-5">Датум на раѓање</HeadingDefault>
      <p className="text-center text-white mb-10">
        Овој податок ни помага при препораки за соодветните програми
      </p>
      <div className={classNames("grid grid-cols-3 gap-3", { "mb-10": calculatedAge })}>
        <label className="text-center">
          <small className="font-extrabold uppercase text-light">Ден</small>
          <NumberInput
            className="text-center font-extrabold text-xl"
            name="day"
            value={enteredDateOfBirth["day"]?.toString() || ""}
            onChange={(e) => onDateOfBirthEnteredHandler(e, 1, 31)}
            placeholder="DD"
          />
        </label>
        <label className="text-center">
          <small className="font-extrabold uppercase text-light">Месец</small>
          <NumberInput
            className="text-center font-extrabold text-xl"
            name="month"
            value={enteredDateOfBirth["month"]?.toString() || ""}
            onChange={(e) => onDateOfBirthEnteredHandler(e, 1, 12)}
            placeholder="MM"
          />
        </label>
        <label className="text-center">
          <small className="font-extrabold uppercase text-light">Година</small>
          <NumberInput
            className="text-center font-extrabold text-xl"
            name="year"
            value={enteredDateOfBirth["year"]?.toString() || ""}
            onChange={(e) => onDateOfBirthEnteredHandler(e, 1900, new Date().getFullYear())}
            placeholder="YYYY"
          />
        </label>
      </div>
      {calculatedAge && (
        <div className="flex flex-col justify-center items-center">
          <small className="font-extrabold uppercase text-light">Ти си</small>
          <strong className="text-white text-7xl my-2">{calculatedAge}</strong>
          <small className="font-extrabold uppercase text-light">Година/и</small>
        </div>
      )}
    </>
  );
};
