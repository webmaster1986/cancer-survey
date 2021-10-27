import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

const localPath = [
  { pathName: "/company", label: "COMPANY" },
  { pathName: "/projects", label: "PROJECTS" },
  { pathName: "/news", label: "NEWS" },
  { pathName: "/about", label: "ABOUT" },
  { pathName: "/contact", label: "CONTACT" } // eslint-disable-line
];
const Header = () => {
  return (
    <div className="Header">
      <nav className="navbar navbar-inverse">
        <div className="nav navbar-nav">
          {localPath &&
            localPath.map((item, i) => (
              <div key={i}>
                <NavLink to={item.pathName} activeClassName="selected">
                  {item.label}
                </NavLink>
              </div>
            ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
