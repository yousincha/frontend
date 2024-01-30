import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./Sections/NavItem";
import logoimage from "../../../public/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <section className="relative z-10 text-black">
      <div className="w-full border-b border-gray">
        {" "}
        {/* Add border styles here */}
        <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
          {/* logo */}
          <div className="flex items-center text-2xl h-14">
            <Link to="/">
              <img
                src={logoimage}
                alt="Your Logo Alt Text"
                className="h-full"
                style={{ width: "50%" }}
              />
            </Link>
          </div>

          {/* menu button */}
          <div className="text-2xl sm:hidden">
            <button onClick={handleMenu}>{menu ? "-" : "+"}</button>
          </div>

          {/* big screen nav-items */}
          <div className="hidden sm:block">
            <NavItem />
          </div>
        </div>
        {/* mobile nav-items */}
        <div className="block sm:hidden">{menu && <NavItem mobile />}</div>
      </div>
    </section>
  );
};

export default Navbar;
