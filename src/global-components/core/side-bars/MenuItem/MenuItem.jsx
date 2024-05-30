import React, { useState } from "react";
import styles from "./menuItem.module.css";
export default function MenuItem({
  icon,
  title,
  className,
  onClick,
  params,
  index,
}) {
  return (
    <div
      className={`${styles["menu__item"]} ${
        params === index ? `${styles["active"]}` : ""
      } `}
      onClick={onClick}
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
  onClick: () => {},
};
