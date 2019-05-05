import React from "react";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./Header.css";

const Header: React.FC = () => {
  const displayImgStyle = {
    backgroundImage: "url('https://i.pravatar.cc/100')"
  };

  return (
    <div className="header">
      <div className="left-nav">
        <div className="logo-container">
          <div className="logo-image">
            <Logo />
          </div>
          <span>MediCure.</span>
        </div>
      </div>
      <Search />
      <div className="right-nav">
        <div className="notifications">
          <FontAwesomeIcon icon={faBell} color="#ccc" />
          <div className="notifications__indicator" />
        </div>
        <div className="dropdown">
          <div className="account">
            <div className="account__display-image" style={displayImgStyle} />
            <span>Maikko Aleman</span>
            <div className="account__online-indicator" />
          </div>
          <FontAwesomeIcon icon={faChevronDown} color="#aaa" />
        </div>
      </div>
    </div>
  );
};

export default Header;
