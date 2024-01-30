/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../store/thunkFunctions";
import adminlogo from "../../../../public/admin.png";

const routes = [
  { to: "/", name: "HOME", auth: false },
  { to: "/aboutus", name: "ABOUT US", auth: false },
  { to: "/technology", name: "TECHNOLOGY", auth: false },
  { to: "/product", name: "PRODUCT", auth: false },
  { to: "/notice", name: "NOTICE", auth: false },
  { to: "/library", name: "LIBRARY", auth: false },

  {
    to: "/login",
    name: "ADMIN",
    auth: false,
    icon: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={adminlogo}
          alt="Admin Logo"
          style={{ width: "25px", height: "25px", marginRight: "5px" }}
        />
        ADMIN
      </div>
    ),
  },
  { to: "/", name: "HOME", auth: true },
  { to: "/aboutus", name: "ABOUT US", auth: true },
  { to: "/technology", name: "TECHNOLOGY", auth: true },
  { to: "/product", name: "PRODUCT", auth: true },
  { to: "/notice", name: "NOTICE", auth: true },
  { to: "/library", name: "LIBRARY", auth: true },
  // { to: "/imgupload", name: "IMGUPLOAD", auth: true },
  // { to: "/upload", name: "UPLOAD", auth: true },
  { to: "", name: "로그아웃", auth: true },
];
const NavItem = ({ mobile }) => {
  const isAuth = useSelector((state) => state.user?.isAuth);
  const cart = useSelector((state) => state.user?.userData?.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      navigate("/login");
    });
  };

  return (
    <ul
      className={`text-md justify-center w-full flex gap-4 ${
        mobile && "flex-col h-full"
      } items-center`}
    >
      {routes.map(({ to, name, auth, icon }) => {
        if (isAuth !== auth) return null;

        if (name === "로그아웃") {
          return (
            <li key={name} className="py-2 text-center cursor-pointer">
              <Link onClick={handleLogout} className="nav-link">
                {" "}
                {/* Add a class for styling */}
                {name}
              </Link>
            </li>
          );
        } else if (icon) {
          return (
            <li className="relative py-2 text-center cursor-pointer" key={name}>
              <Link to={to} className="nav-link">
                {icon}
                <span className="absolute top-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white border-white rounded-full -right-3">
                  {cart?.length}
                </span>
              </Link>
            </li>
          );
        } else {
          return (
            <li key={name} className="py-2 text-center cursor-pointer">
              <Link to={to} className="nav-link">
                {" "}
                {/* Add a class for styling */}
                {name}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default NavItem;
