import visaImg from "../../assets/images/card-visa.png";
import mastercardImg from "../../assets/images/card-mastercard.png";
import classNames from "classnames";

interface PaymentCardsProps {
  className?: string;
}

export const PaymentCards = (props: PaymentCardsProps) => {
  const { className } = props;

  return (
    <div className={classNames("flex flex-wrap gap-3", className)}>
      <img src={visaImg} alt="Visa" />
      <img src={mastercardImg} alt="Mastercard" />
    </div>
  );
};
