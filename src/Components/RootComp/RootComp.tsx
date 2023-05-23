import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const RootComp = () => {
  return (
    <>
      <div className="">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default RootComp;
