import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {

  const handleMenuClosing = () => {
    document.activeElement.blur();
  }
  return (
    <div className="navbar p-0 bg-base-100 shadow-sm md:px-10 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul onClick={handleMenuClosing}
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-800 font-bold border-b-2 border-indigo-400"
                    : ""
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointment"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-800 font-bold border-b-2 border-indigo-400"
                    : ""
                }>
                Appoinment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-800 font-bold border-b-2 border-indigo-400"
                    : ""
                }>
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-800 font-bold border-b-2 border-indigo-400"
                    : ""
                }>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="md:w-6 w-5" />
          <Link to='/' className="text-xl font-bold">DocTime</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-800 font-bold border-b-2 border-indigo-400"
                  : ""
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointment"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-800 font-bold border-b-2 border-indigo-400"
                  : ""
              }>
              Appoinment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-800 font-bold border-b-2 border-indigo-400"
                  : ""
              }>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-800 font-bold border-b-2 border-indigo-400"
                  : ""
              }>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary rounded-4xl">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;
