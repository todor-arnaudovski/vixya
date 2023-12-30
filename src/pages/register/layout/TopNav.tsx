import { Logo } from "../../../components";
import { IconChevron } from "../../../assets/icons";

interface TopNavProps {
  onPrevStep: () => void;
}

export const TopNav = (props: TopNavProps) => {
  const { onPrevStep } = props;

  return (
    <div className="fixed top-0 inset-x-0 w-full flex justify-center py-5">
      <button onClick={onPrevStep} className="absolute left-5">
        <IconChevron />
      </button>
      <Logo width="120px" />
    </div>
  );
};
