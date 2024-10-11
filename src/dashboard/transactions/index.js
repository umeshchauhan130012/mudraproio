import React from "react";
import styles from "../../styles/dashboard.module.css";
import { NavLink, Route, Routes } from "react-router-dom";
import DailyIncome from "./dailyIncome";
import DirectIncome from "./directIncome";
import Topup from "./topUp";
import NTCL from "./ntcl";
// import IncomeWallet from "./incomeWallet";
import LevelIncome from "./levelIncome";
import Page404 from "../../pages/page404";
import MaturityWallet from "./maturityWallet";

const Transactions = () => {

  return (
    <>
      <ul className={`${styles.pagetabber} ${styles.pagetabberlink}`}>
        <li>
          <NavLink
            to="/user/transactions/dailyIncome"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Staking Income
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/transactions/directIncome"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Direct Income
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/transactions/levelIncome"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Level Income
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/user/transactions/incomeWallet"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Income Wallet
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/user/transactions/ntcl"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            NTCL
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/transactions/topUp"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Topup
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/transactions/maturityWallet"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Maturity Wallet
          </NavLink>
        </li>
      </ul>
      <div>
        <Routes>
          <Route exect path="/dailyIncome" element={<DailyIncome />} />
          <Route exect path="/directIncome" element={<DirectIncome />} />
          <Route exect path="/levelIncome" element={<LevelIncome />} />
          {/* <Route exect path="/incomeWallet" element={<IncomeWallet />} /> */}
          <Route exect path="/topUp" element={<Topup />} />
          <Route exect path="/ntcl" element={<NTCL />} />
          <Route exect path="/maturityWallet" element={<MaturityWallet />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </div>
      </>
  );
};

export default Transactions;