import { Link } from "react-router-dom";
import { ActionsBottom, HeadingDefault, Logo } from "../components";
import backgroundImage from "../assets/images/bg-init.jpg";

export const Init = () => {
  return (
    <>
      <div
        className="fixed inset-0 h-screen w-screen bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="flex flex-col justify-between h-full w-full lg:w-1/2 mx-auto">
        <div className="relative inset-x-0 top-[45vh]">
          <div className="flex flex-col items-center justify-center text-center mx-10">
            <div className="mb-20">
              <Logo width="170px" />
            </div>
            <HeadingDefault className="mb-5">Откриј го твојот потенцијал</HeadingDefault>
            <p className="text-white">Таа обезбедува комплетен текст симулатор за да се</p>
          </div>
        </div>
        <ActionsBottom className="mb-20">
          <div className="flex justify-around items-center">
            <Link to={"register"} className="block text-white uppercase font-extrabold">
              Претплати се
            </Link>
            <div className="vertical-dash" />
            <Link to={"login"} className="block text-white uppercase font-extrabold">
              Најави се
            </Link>
          </div>
        </ActionsBottom>
      </div>
    </>
  );
};
