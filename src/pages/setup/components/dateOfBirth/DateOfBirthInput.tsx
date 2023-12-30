import { useState } from "react";
import { NumberInput } from "../../../../components";
import classNames from "classnames";
import { DateOfBirthErrors, DateOfBirthFormat, DatePart } from "./types";

const initialDateOfBirthErrors: DateOfBirthErrors = {
  day: false,
  month: false,
  year: false,
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

interface DateOfBirthInputProps {
  enteredDateOfBirth: DateOfBirthFormat;
  setEnteredDateOfBirth: (name: DatePart, value: string) => void;
}

export const DateOfBirthInput = (props: DateOfBirthInputProps) => {
  const { enteredDateOfBirth, setEnteredDateOfBirth } = props;
  const [dateOfBirthErrors, set_dateOfBirthErrors] =
    useState<DateOfBirthErrors>(initialDateOfBirthErrors);

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

    setEnteredDateOfBirth(name, computedValue);
    set_dateOfBirthErrors((prevState) => ({ ...prevState, [name]: !isValid }));
  };

  return (
    <>
      <div className="mb-10">
        <div className={classNames("grid grid-cols-3 gap-3")}>
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
        {(dateOfBirthErrors.day || dateOfBirthErrors.month || dateOfBirthErrors.year) && (
          <span className="text-danger text-center inline-block w-full mt-2">
            Внесениот датум не е валиден
          </span>
        )}
      </div>
    </>
  );
};
