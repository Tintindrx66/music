import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header style={{ backgroundColor: "aqua" }}>
      <Link to="/">Music db</Link>
    </header>
  );
};
export default Header;
