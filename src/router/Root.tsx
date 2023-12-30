import { Outlet } from "react-router-dom";
import { Container } from "../layout";
// import patternBackground from "../assets/svg/bg-pattern.svg";

export const Root = () => {
  return (
    <>
      <div className="bg-main-pattern bg-black min-h-screen min-w-screen">
        {/* <div
          className="absolute inset-0 h-full w-full bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${patternBackground})` }}
        /> */}
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
};
