import React from "react";
import Header from "../global-components/core/headers/Header";
import Footer from "../global-components/core/footers/Footer";
import SideBar from "../global-components/core/side-bars/SideBar";
import styles from "./mainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={`${styles["container"]}`}>
        <div>
          <SideBar />
        </div>
        <div className={`${styles["child"]}`}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
