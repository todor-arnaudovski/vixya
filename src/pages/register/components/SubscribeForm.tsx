import { useState } from "react";
import {
  CardExpirationDateInput,
  Checkbox,
  Form,
  HeadingDefault,
  PaymentCards,
  TextInput,
} from "../../../components";

interface InputValues {
  cardNumber: string;
  expirationDate: string;
  CVV: string;
  firstAndLastName: string;
}

const defaultInputValues: InputValues = {
  cardNumber: "",
  expirationDate: "",
  CVV: "",
  firstAndLastName: "",
};

export const SubscribeForm = () => {
  const [inputValues, set_inputValues] = useState<InputValues>(defaultInputValues);
  const [isTOSAccepted, set_isTOSAccepted] = useState(false);

  const onInputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    set_inputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const onTOSAcceptedChangeHandler = () => {
    set_isTOSAccepted(!isTOSAccepted);
  };

  const onSubmitHandler = () => {};

  return (
    <>
      <HeadingDefault className="text-center mb-5">Претплата</HeadingDefault>
      <PaymentCards className="mb-3" />
      <Form onSubmit={onSubmitHandler}>
        <TextInput
          className="mb-3"
          label="Број на картичка"
          placeholder="Број на картичка"
          name="cardNumber"
          value={inputValues.cardNumber}
          onChange={onInputValueChangeHandler}
        />
        <div className="grid grid-cols-2 gap-5 mb-3">
          <CardExpirationDateInput
            label="Датум на истекување"
            placeholder="MM/YY"
            name="expirationDate"
            value={inputValues.expirationDate}
            onChange={onInputValueChangeHandler}
          />
          <TextInput
            label="CVV"
            placeholder="CVV"
            name="CVV"
            value={inputValues.CVV}
            onChange={onInputValueChangeHandler}
          />
        </div>
        <TextInput
          className="mb-7"
          label="Име и презиме"
          placeholder="JOHN DOE"
          name="firstAndLastName"
          value={inputValues.firstAndLastName}
          onChange={onInputValueChangeHandler}
        />
        <div className="flex justify-start gap-3">
          <Checkbox
            className="self-start mt-1"
            checked={isTOSAccepted}
            onChange={onTOSAcceptedChangeHandler}
          />
          <p className="text-sm text-white">
            By clicking the “Start Paid Membership” button below, you agree to our Terms of Use and
            that you are over 18 and acknowledge the Privacy Statement.
          </p>
        </div>
      </Form>
    </>
  );
};
