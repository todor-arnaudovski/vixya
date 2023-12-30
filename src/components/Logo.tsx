import logo from "../assets/logo.png";

interface LogoProps {
  width: string;
}

export const Logo = (props: LogoProps) => {
  const { width } = props;

  return (
    <>
      <img src={logo} alt="Vixya logo" style={{ width }} />
    </>
  );
};
