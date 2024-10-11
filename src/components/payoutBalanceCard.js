import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/dashboard.module.css";

export default function PayoutBalanceCard() {
  return (
    <div className={`${styles.dashboard_contalhalf} ${styles.padding10}`}>
      <div
        className={`${styles.bordercolor} ${styles.padding15} ${styles.height100} ${styles.displayflex}`}
      >
        <div className={styles.available_balance}>
          <div className={styles.coin_icon}>
            <img src="/images/coin.png" height={30} width={30} alt="ic" />{" "}
            <span>Available Balance</span>
          </div>
          <h3>
            49579.18 <span>MDR</span>
          </h3>
          <ul className={styles.modraprice}>
            <li>
              <Link to="" className={styles.payoutbtn}>
                payout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
