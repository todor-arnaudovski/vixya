interface LogoProps {
  width: string;
}

export const Logo = (props: LogoProps) => {
  const { width } = props;

  return (
    <>
      <img src="/src/assets/logo.png" alt="Vixya logo" style={{ width }} />
    </>
  );
};
