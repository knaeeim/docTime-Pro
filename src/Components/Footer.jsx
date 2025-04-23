import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" />
          <p className="text-xl font-bold">DocTime</p>
        </div>
        <nav className="grid grid-flow-col gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-800 font-bold border-b-2 border-indigo-400"
                : ""
            }>
            Home
          </NavLink>

          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-800 font-bold border-b-2 border-indigo-400"
                : ""
            }>
            Appoinment
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-800 font-bold border-b-2 border-indigo-400"
                : ""
            }>
            Blogs
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-800 font-bold border-b-2 border-indigo-400"
                : ""
            }>
            Contact
          </NavLink>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/k.naeeim" target="_blank">
              <FaFacebook size={30}/>
            </a>
            <a href="https://www.linkedin.com/in/khairulnaeeim/" target="_blank">
              <FaLinkedin size={30}/>
            </a>
            <a href="https://github.com/knaeeim" target="_blank">
              <FaGithub size={30}/>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by DocTime
            Bangladesh Ltd.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
