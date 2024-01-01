import { HeadingDefault } from "../../components";

import { BottomNav, TopNav } from "./layout";
import { Programs } from "./components";

export const HomePage = () => {
  return (
    <>
      <TopNav />
      <div className="flex flex-col justify-between w-full lg:w-1/2 py-16 mx-auto">
        <div className="pt-5 mb-6 max-h-full overflow-y-auto">
          <HeadingDefault className="mb-3">Програми</HeadingDefault>
          <Programs />
        </div>
        <BottomNav />
      </div>
    </>
  );
};
