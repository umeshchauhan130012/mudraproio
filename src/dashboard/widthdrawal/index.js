import React from "react";
import styles from "../../styles/dashboard.module.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Page404 from "../../pages/page404";
import WithdrawalCoin from "./withdrawalCoin";
import MaturityWithdrawal from "./maturityWithdrawal";

const Widthdrawal = () => {

  return (
    <>
      <ul className={`${styles.pagetabber} ${styles.pagetabberlink}`}>
        <li>
          <NavLink
            to="/user/widthdrawal/withdrawalCoin"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Withdrawal Coin
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/widthdrawal/maturityWithdrawal"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Maturity Withdrawal
          </NavLink>
        </li>
      </ul>
      <div>
        <Routes>
          <Route exect path="/withdrawalCoin" element={<WithdrawalCoin />} />
          <Route exect path="/maturityWithdrawal" element={<MaturityWithdrawal />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </div>
      </>
  );
};

export default Widthdrawal;