import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Page404 from "../pages/page404";
import styles from "../styles/profile.module.css";
import AccountSetting from "./accountSetting";
import Account2faSettings from "./accountSetting/2fa-verifecation";
import ScanAuthentication from "./accountSetting/scan-authentication";
import ChangePassword from "./changePassword";
import KYCVerification from "./KYC";

const Setting = () => {
  return (
    <div>
      {" "}
      <ul className={styles.pagetabber}>
        <li>
          <NavLink
            to="/user/setting/account"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Account Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/setting/kyc"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            KYC Verification
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/setting/change-password"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {" "}
            Change Password
          </NavLink>
        </li>
      </ul>
      <div>
        <Routes>
          <Route exect path="/account" element={<AccountSetting />} />
          <Route exect path="/kyc" element={<KYCVerification />} />
          <Route exect path="/change-password" element={<ChangePassword />} />
          <Route exect path="/account/scan-authentication" element={<ScanAuthentication />} />
          <Route exect path="/account/2fa-verifecation" element={<Account2faSettings />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
};

export default Setting;
