import { IconSearch } from "../../../assets/icons";
import { Logo } from "../../../components";
import { NavigationTop } from "../../../layout";

export const TopNav = () => {
  return (
    <>
      <NavigationTop logoPosition="left">
        <Logo width="120px" />
        <button onClick={() => {}} className="absolute right-5">
          <IconSearch />
        </button>
      </NavigationTop>
    </>
  );
};
