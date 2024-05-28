import React from "react";
import styles from "./menuItem.module.css";
export default function MenuItem({ icon, title, className }) {
  console.log("className: ", className);

  return (
    <div
      className={`${styles["menu__item"]} ${
        className ? `${styles["active"]}` : ""
      } `}
    >
      {icon}
      <h3 className={`${styles["menu__item-title"]}`}>{title}</h3>
    </div>
  );
}

MenuItem.defaultProps = {
  icon: "",
  title: "",
  className: "",
};
