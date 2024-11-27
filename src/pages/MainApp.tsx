import React, { useState } from "react";
import Nav from "../components/Nav";
import Inventories from "../components/Inventories";
import { MenuIcon } from "../assets/icons";

// Define types for state variables if needed
interface MainAppProps {}

const MainApp: React.FC<MainAppProps> = () => {
  // Define types for state variables
  const [active, setActive] = useState<number>(1);
  const [sideBarActive, setSideBarActive] = useState<boolean>(false);

  return (
    <div className="p-4 h-[100vh] bg-gray-50 flex gap-3 w-full relative">
      <Nav
        active={active}
        setActive={setActive}
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      />
      <main className="flex-1 border-l border-gray-300 relative">
        <div
          className="hidden max-md:block px-2 text-3xl ml-auto absolute right-2"
          role="button"
          onClick={() => setSideBarActive(true)}
        >
          <MenuIcon />
        </div>
        <Inventories />
      </main>
    </div>
  );
};

export default MainApp;
