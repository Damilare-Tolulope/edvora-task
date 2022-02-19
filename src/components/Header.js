import React from "react";
import profile from "./icons/profile.png";

const Header = ({ user }) => {
  return (
    <header>
      <h1>Edvora</h1>
      <div className="profile">
        <p className="name">{user.name}</p>
        <img src={profile} alt="profile" />
      </div>
    </header>
  );
};

export default Header;
