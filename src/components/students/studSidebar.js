import React, { useState } from "react";
import { FaBars, FaTh, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StudSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUser />,
    }
   
  ];
  return (
    <>
      <div >
        <div style={{ width: isOpen ? "200px" : "45px" }} className="sidebar">
          <div className="top_section">
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export const isOpen = () => {
  return isOpen;
};
export default StudSidebar;
