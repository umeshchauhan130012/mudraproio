import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";
import SidebarMenu from "../components/sidebarMenu";
import styles from "../styles/dashboard.module.css";
import BuyPackage from "../dashboard/buyPackage";
import Wallet from "./wallet";
import Widthdrawal from "./widthdrawal";
import ProfileDetails from "../userProfile/profileDetails";
import ProfileEdit from "../userProfile/profileEdit";
import Transactions from "./transactions";
import { Event } from "./event";
import TeamPage from "./team";
import Setting from "../settings";
import { Level } from "./level";
import { Rewards } from "./rewards";
import { InfinityBonus } from "./bonus"
import Support from "./support";
import Page404 from "../pages/page404";

const UserPageRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // if(mdr2FAVerify === "1") {
    //   let path = `/user/dashboard`;
    //   navigate(path);
    //   return;
    // }
    //const mdr2FAVerify = window.sessionStorage.getItem("verify2FA");
    // if(mdr2FAVerify === null) {
    //   let path = `/authentication-page`;
    //   navigate(path);
    //   return;
    // }
    // if(mdr2FAVerify === "3") {
    //   let path = `/user/dashboard`;
    //   navigate(path);
    //   return;
    // }

  }, []);

  return (
    <div className="dashbordmaincontain">
      <div className="dashboardwrapper">
        <div className="customdashboard_container">
          <div className={styles.dashboarddevider}>
            <div className="dashboardoverlay"></div>
            <div className={`${styles.dashboard_sidebar} dashboard_sidebargloble`}>
              <SidebarMenu />
            </div>
            <div className={`${styles.dashboard_content_wrap} dashboadrrightsidegloble`} >
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/buy-package/*" element={<BuyPackage />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/widthdrawal/*" element={<Widthdrawal />} />
                <Route path="/transactions/*" element={<Transactions />} />
                <Route path="/event" element={<Event />} />
                <Route path="/team/*" element={<TeamPage />} />
                <Route path="/level" element={<Level />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/infinity-bonus" element={<InfinityBonus />} />
                <Route path="/user-details" element={<ProfileDetails />} />
                <Route path="/user-profile-edit" element={<ProfileEdit />} />
                <Route path="/support" element={<Support />} />
                <Route path="/setting/*" element={<Setting />} />
                <Route path="/*" element={<Page404 />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPageRoutes;
