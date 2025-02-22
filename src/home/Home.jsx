import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Login></Login> */}
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Home;
