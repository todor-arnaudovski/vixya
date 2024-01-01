import { IconHome, IconProfile, IconProgress, IconTraining } from "../../../assets/icons";

export const BottomNav = () => {
  return (
    <>
      <div className="fixed bottom-0 inset-x-0 w-full flex justify-between items-center text-white bg-black border-top-white px-5 py-3">
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <IconHome />
          <small className="text-[0.5rem] uppercase">Програми</small>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <IconTraining />
          <small className="text-[0.5rem] uppercase">Мој тренинг</small>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <IconProgress />
          <small className="text-[0.5rem] uppercase">Прогрес</small>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <IconProfile />
          <small className="text-[0.5rem] uppercase">Профил</small>
        </div>
      </div>
    </>
  );
};
