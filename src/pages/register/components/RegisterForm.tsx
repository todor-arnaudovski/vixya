import { useState } from "react";
import { Checkbox, DateInput, Form, HeadingDefault, TextInput } from "../../../components";

interface InputValues {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
}

const defaultInputValues: InputValues = {
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  password: "",
  confirmPassword: "",
};

export const RegisterForm = () => {
  const [inputValues, set_inputValues] = useState<InputValues>(defaultInputValues);

  const onInputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    set_inputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitHandler = () => {};

  return (
    <>
      <HeadingDefault className="text-center mb-5">Регистрација</HeadingDefault>
      <Form onSubmit={onSubmitHandler}>
        <TextInput
          className="mb-3"
          label="Име"
          placeholder="Име"
          name="firstName"
          value={inputValues.firstName}
          onChange={onInputValueChangeHandler}
        />
        <TextInput
          className="mb-3"
          label="Презиме"
          placeholder="Презиме"
          name="lastName"
          value={inputValues.lastName}
          onChange={onInputValueChangeHandler}
        />
        <TextInput
          className="mb-3"
          label="E-mail"
          placeholder="E-mail"
          name="email"
          value={inputValues.email}
          onChange={onInputValueChangeHandler}
        />
        <DateInput
          className="mb-3"
          label="Датум н раѓање"
          placeholder="Датум н раѓање"
          name="dateOfBirth"
          value={inputValues.dateOfBirth}
          onChange={onInputValueChangeHandler}
        />
        <TextInput
          className="mb-3"
          label="Лозинка"
          placeholder="Лозинка"
          name="password"
          value={inputValues.password}
          onChange={onInputValueChangeHandler}
        />
        <TextInput
          className="mb-3"
          label="Потврди лозинка"
          placeholder="Потврди лозинка"
          name="confirmPassword"
          value={inputValues.confirmPassword}
          onChange={onInputValueChangeHandler}
        />
        <label className="flex justify-start gap-3 text-sm text-white">
          <Checkbox className="self-start mt-1" />
          <p>
            Датете согласност на правилата за користење со цел да овозможиме пристап до апликацијата
          </p>
        </label>
      </Form>
    </>
  );
};
