import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

export default function Header() {
    const checkClass = ({isActive})=>isActive ? s.active:''
  return (
    <div className={s.wrapper}>
      <NavLink className={checkClass} to="/">
        All Posts
      </NavLink>
      <NavLink className={checkClass} to="/addpost">
        Add Post
      </NavLink>
    </div>
  );
}
