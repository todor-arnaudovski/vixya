import { HeadingDefault } from "../../../components";

export const GenderInfo = () => {
  return (
    <>
      <HeadingDefault className="text-center mb-5">Без гајле</HeadingDefault>
      <p className="text-center text-white mb-10">
        Вашиот пол може да го смените во било кое време преку “Поставки”
      </p>
      <div className="flex justify-center items-center">
        <img src={`${import.meta.env.BASE_URL}/images/phone-settings.png`} alt="Phone settings" />
      </div>
    </>
  );
};
