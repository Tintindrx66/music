import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner">
      <div className="main_cover">
        <div className="logo">
          <Link to="/music">MUSIC ANYWHERE</Link>
        </div>
      </div>
      <span></span>
    </div>
  );
};
export default Banner;
