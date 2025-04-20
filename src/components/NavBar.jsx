import React from "react";
import reactLogo from "../assets/react.svg";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const active_Link = ({ isActive }) => {
    return isActive
      ? "bg-blue-700/60 rounded px-3 py-2"
      : "hover:bg-blue-700/20 rounded px-3 py-2";
  };

  return (
    <header>
      <div className="flex">
        <div className="mr-auto flex gap-x-2 text-2xl font-semibold">
          <Link to="/">
            <img src={reactLogo} />
          </Link>
          React : Todo List with tiw version3
        </div>
        <ul className="hidden md:flex gap-8">
          <li>
            <NavLink to="/" className={active_Link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={active_Link}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
