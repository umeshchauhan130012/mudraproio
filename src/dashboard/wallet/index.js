import React from "react";
import styles from "../../styles/dashboard.module.css";
import { Tab } from "semantic-ui-react";
import AddFund from "../../components/addFund";
// import AvailableBalanceCard from "../../components/availableBalanceCard";
import TransferFund from "../../components/transferFund";
import AutoDeposit from "../../components/autoDeposit";
import TopUpWallet from "../../components/topUpWallet";
import FundTransctionHistory from "../../components/fundTransctionHistory";
import AutoDepositHistory from "../../components/autoDepositHistory";
import AddFundList from "../../components/addFundList";

export default function Wallet() {
 
  const panes = [
    {
      menuItem: "Add Fund",
      render: () => (
        <Tab.Pane attached={false}>
          <>
            <div className={styles.padding10}>
              <div
                className={` ${styles.bordercolor} ${styles.has2col} ${styles.padding15} `}
              >
                <div className={styles.col7w}>
                  <AddFund />
                </div>
                <div className={styles.col3w}>
                  {/* <AvailableBalanceCard button={false}  rateValue={true} height100={false} /> */}
                  <TopUpWallet button={false} rateValue={true} contenttop={false} height100={false} />
                </div>
              </div>
            </div>
            <div
              className={`${styles.dashboard_content_item} ${styles.padding10}`}
            >
              <AddFundList />
            </div>
          </>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Auto Deposit",
      render: () => (
        <Tab.Pane attached={false}>
          <>
            <div className={styles.padding10}>
              <div
                className={` ${styles.bordercolor} ${styles.has2col} ${styles.padding15} `}
              >
                <div className={styles.col7w}>
                  <AutoDeposit />
                </div>
                <div className={styles.col3w}>
                  {/* <AvailableBalanceCard button={false} rateValue={true} height100={false} /> */}
                  <TopUpWallet button={false} rateValue={true} contenttop={false} height100={false} />
                </div>
              </div>
            </div>
            <div
              className={`${styles.dashboard_content_item} ${styles.padding10}`}
            >
              <AutoDepositHistory />
            </div>
          </>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Transfer Fund",
      render: () => (
        <Tab.Pane attached={false}>
          <>
            <div className={styles.padding10}>
              <div
                className={` ${styles.bordercolor} ${styles.has2col} ${styles.padding15} `}
              >
                <div className={styles.col7w}>
                  <TransferFund />
                </div>
                <div className={styles.col3w}>
                  {/* <AvailableBalanceCard button={false} rateValue={true} height100={false} /> */}
                  <TopUpWallet button={false} rateValue={true} contenttop={false} height100={false} />
                </div>
              </div>
            </div>
            <div
              className={`${styles.dashboard_content_item} ${styles.padding10}`}
            >
              <FundTransctionHistory />
            </div>
          </>
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div className={` ${styles.dashboard_content} tabsglobalstyle `}>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  );
}
