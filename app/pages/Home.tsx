import React from "react";
import { Outlet } from "react-router";

const Home: React.FC = () => {

  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default Home;
