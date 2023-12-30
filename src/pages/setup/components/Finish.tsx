import { HeadingDefault } from "../../../components";

export const Finish = () => {
  return (
    <>
      <HeadingDefault className="text-center mb-5">
        Започни ја твојата трансформација
      </HeadingDefault>
      <p className="text-center text-white mb-10">Честитки! Може да започнеме.</p>
      <div className="flex justify-center items-center mb-7">
        <img src={`${import.meta.env.BASE_URL}/images/male-female.png`} alt="Male and female" />
      </div>
    </>
  );
};
