import classNames from "classnames";
import { HeadingSmall } from "../../../components";

interface CardProps {
  img: string;
  text: string;
}

export const Card = (props: CardProps) => {
  const { img, text } = props;

  return (
    <>
      <div
        className={classNames(
          `flex items-end bg-[url('${img}')] bg-cover	bg-center	px-3 pb-3 pt-36 rounded-lg bg-gradient-black`
        )}
        style={{ backgroundImage: `url('${img}')` }}
      >
        <HeadingSmall>{text}</HeadingSmall>
      </div>
    </>
  );
};
