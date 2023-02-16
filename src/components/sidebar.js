import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar_wrap">
      <div className="sidebar">
        {/* <Link to="/lecturer/" className={mycourse ? "active" : "inactive"}></Link> */}
        <Link to="" className="active" style={{ textDecoration: "none" }}>
          <span>Home</span>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <span>Services</span>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <span>News</span>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <span>Blog</span>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
