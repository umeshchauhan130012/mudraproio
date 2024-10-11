import React from "react";
import styles from "../../styles/dashboard.module.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Page404 from "../../pages/page404";
import Packages from "./package";
import BuyingHistory from "./buyingHistory";
import MyStakes from "./myStakes";

const BuyPackage =() => {

  return (
    <>

      <ul className={`${styles.pagetabber} ${styles.pagetabberlink}`}>
        <li>
          <NavLink
            to="/user/buy-package/package"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Buy Packages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/buy-package/my-stakes"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            My Stakes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/buy-package/buying-history"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Buying History
          </NavLink>
        </li>
        
      </ul>
      <div>
        <Routes>
          <Route exect path="/package" element={<Packages />} />
          <Route exect path="/buying-history" element={<BuyingHistory />} />
          <Route exect path="/my-stakes" element={<MyStakes />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </div>
    </>
  );
}

export default BuyPackage;
