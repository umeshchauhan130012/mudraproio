import React from "react";
import ReferralCopy from "../components/referralLinkCopy";
import AvailableBalanceCard from "../components/availableBalanceCard";
import TopUpWallet from "../components/topUpWallet";
import styles from "../styles/dashboard.module.css";
import TotalEarningsIncomeCard from "../components/totalEarningsIncomeCard";
import LatestNewsEvents from "../components/slider/latestNewsEvents";
import CommunityPoll from "../components/slider/communityPoll";
import RobertFoxCard from "../components/robertFoxCard";
import PearlCard from "../components/pearlCard";
import Bonanza from "../components/slider/bonanza";
import BscScan from "../components/bscScanLink";


const Dashboard = () => {
  document.title = `Mudra - Dashboard`;
 
  return (
    <div className={styles.dashboadrrightside}>
      <div className={`${styles.dashboard_content}`}>
        <div className={`${styles.dashboard_content_item} ${styles.coylinker} ${styles.padding10}`}>
          <ReferralCopy />
        </div>
        <div className={`${styles.dashboard_content_item} ${styles.coylinker} ${styles.padding10}`}>
          <BscScan />
        </div>
        <div className={`${styles.dashboard_content_item} ${styles.has2col}`}>
          <div className={`${styles.dashboard_contalhalf} ${styles.padding10}`}>
            <AvailableBalanceCard
              button={false}
              rateValue={true}
              height100={true}
              contenttop={false}
            />
          </div>
          <div className={`${styles.dashboard_contalhalf} ${styles.padding10}`}>
          <TopUpWallet
          button={false}
          rateValue={false}
          height100={true}
          contenttop={true}
          />
          </div>
        </div>
        <div
          className={`${styles.dashboard_content_item} ${styles.hasfullcol}`}
        >
          <TotalEarningsIncomeCard />
        </div>
        <div className={`${styles.dashboard_content_item} ${styles.has2col}`}>
          <div className={`${styles.dashboard_contalhalf} ${styles.padding10}`}>
            <RobertFoxCard />
          </div>
          <div className={`${styles.dashboard_contalhalf} ${styles.padding10}`}>
            <PearlCard />
          </div>
        </div>
      </div>
      <div className={styles.dashboard_rsides}>
        <div className={`${styles.dashboard_rsides_item} ${styles.item_slides}`}>
          <Bonanza />
        </div>
        <div className={`${styles.dashboard_rsides_item} ${styles.item_slides}`}>
          <LatestNewsEvents />
        </div>
        <div className={`${styles.dashboard_rsides_item} ${styles.item_slides}`}>
          <CommunityPoll />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
