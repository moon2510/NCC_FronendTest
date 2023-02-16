import React from "react";

import "../styles/content.css";
import logo from "../images/logoNCC.png";
import css from "../images/css.png";
import html from "../images/html.png";
import url from "../images/url.png";
const Content = () => {
  return (
    <div className="content_wrap">
      <div className="logoncc">
        <img src={logo} alt="" />
      </div>

      <div className="description">
        <h2>Lorem ipsum dolor sit asmet?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>

      <div className="learn">
        <div className="detail css">
          <h1>Lorem ipsum dolor sit amet</h1>
          <div className="flexdetail">
            <img align="left" src={css} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit
              nulla, vel sodales est ullamcorper id. Aenean consequat
              condimentum velit ut tempor. Nam porta massa in metus bibendum
              congue. Pellentesque ultrices vestibulum mattis.
            </p>
          </div>
        </div>
        <div className="detail html">
          <h1>Lorem ipsum dolor sit amet</h1>
          <div className="flexdetail">
            <img align="left" src={html} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit
              nulla, vel sodales est ullamcorper id. Aenean consequat
              condimentum velit ut tempor. Nam porta massa in metus bibendum
              congue. Pellentesque ultrices vestibulum mattis.
            </p>
          </div>
        </div>
        <div className="detail url">
          <h1>Lorem ipsum dolor sit amet</h1>
          <div className="flexdetail">
            <img align="left" src={url} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit
              nulla, vel sodales est ullamcorper id. Aenean consequat
              condimentum velit ut tempor. Nam porta massa in metus bibendum
              congue. Pellentesque ultrices vestibulum mattis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
