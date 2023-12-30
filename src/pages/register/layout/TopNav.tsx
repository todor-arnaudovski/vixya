import { Logo } from "../../../components";
import { IconChevron } from "../../../assets/icons";
import { NavigationTop } from "../../../layout";

interface TopNavProps {
  onPrevStep: () => void;
}

export const TopNav = (props: TopNavProps) => {
  const { onPrevStep } = props;

  return (
    <>
      <NavigationTop>
        <button onClick={onPrevStep} className="absolute left-5">
          <IconChevron />
        </button>
        <Logo width="120px" />
      </NavigationTop>
    </>
  );
};
