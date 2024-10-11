import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/dashboard.module.css";

export default function BscScan() {
  const [referralLink, setReferralLink] = useState("0x4505e2ae4f9c512fd2e7e4d99c99dc94e0e93ccb");
  const [copysucess, setCopysucess] = useState(false);

  return (
    <div className={`${styles.refralcopywrap} ${styles.bordercolor}`}>
      <div className={styles.refall}>
        <span className={styles.refraltext}>Smart contract address</span>
        <a href="https://bscscan.com/token/0x4505e2ae4f9c512fd2e7e4d99c99dc94e0e93ccb" target="_blank" className={styles.refallcopy}>0x4505e2ae4f9c512fd2e7e4d99c99dc94e0e93ccb</a>
        <span
          className={styles.copuelement}
          data-title={copysucess ? "copied" : ""}
        >
          <span
            className={styles.cpyclipboard}
            onClick={() => {
              navigator.clipboard.writeText(referralLink);
              setCopysucess(true);
              setTimeout(() => {
                setCopysucess(false);
              }, 1000);
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 19.5C18 20.2956 17.6839 21.0587 17.1213 21.6213C16.5587 22.1839 15.7956 22.5 15 22.5H4.5C3.70435 22.5 2.94129 22.1839 2.37868 21.6213C1.81607 21.0587 1.5 20.2956 1.5 19.5V9C1.5 8.20435 1.81607 7.44129 2.37868 6.87868C2.94129 6.31607 3.70435 6 4.5 6V7.5C4.10218 7.5 3.72064 7.65804 3.43934 7.93934C3.15804 8.22064 3 8.60218 3 9V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H15C15.3978 21 15.7794 20.842 16.0607 20.5607C16.342 20.2794 16.5 19.8978 16.5 19.5H18Z"
                fill="#0164EB"
              />
              <path
                d="M9 3C8.60218 3 8.22064 3.15804 7.93934 3.43934C7.65804 3.72064 7.5 4.10218 7.5 4.5V15C7.5 15.3978 7.65804 15.7794 7.93934 16.0607C8.22064 16.342 8.60218 16.5 9 16.5H19.5C19.8978 16.5 20.2794 16.342 20.5607 16.0607C20.842 15.7794 21 15.3978 21 15V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3H9ZM9 1.5H19.5C20.2956 1.5 21.0587 1.81607 21.6213 2.37868C22.1839 2.94129 22.5 3.70435 22.5 4.5V15C22.5 15.7956 22.1839 16.5587 21.6213 17.1213C21.0587 17.6839 20.2956 18 19.5 18H9C8.20435 18 7.44129 17.6839 6.87868 17.1213C6.31607 16.5587 6 15.7956 6 15V4.5C6 3.70435 6.31607 2.94129 6.87868 2.37868C7.44129 1.81607 8.20435 1.5 9 1.5Z"
                fill="#0164EB"
              />
            </svg>
          </span>
        </span>
      </div>

    </div>
  );
}
