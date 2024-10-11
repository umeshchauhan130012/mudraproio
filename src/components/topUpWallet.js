import React, { useEffect, useState} from 'react'
// import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import styles from '../styles/dashboard.module.css'
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';

export default function TopUpWallet(props) {
  const [topUpWalletVal, setTopUpWalletVal] = useState("");
  const [loader, setLoader] = useState(true);
  const status = useSelector((state) => state);
  useEffect(() => {
    if (status.dashboardDetails.data !== "") {
      if (status.dashboardDetails.data.data.statusCode === "200") {
        setTopUpWalletVal(status.dashboardDetails.data.data.result[0]);
      }
    }
    if (status.dashboardDetails.error === '500') {
      setLoader(false);
    }
  }, [status]);

  return (
      <div className={`${styles.bordercolor} ${styles.padding15} ${ styles.displayflex } ${props.height100 === true ? "height100" : ""} ${props.contenttop === true ? "topcontent" : ""}`}>
        <div className={styles.available_balance}>
          <div className={styles.coin_icon}>
            <img
              src="/images/coin.png"
              height={30}
              width={30}
              alt="ic"
            />{" "}
            <span>Top Up Wallet</span>
          </div>
          <h3>
            <Link to="/user/transactions/topUp">
         {topUpWalletVal.topupBalance === null || topUpWalletVal === '' ? <>{loader ? <CircularProgress size="20px" style={{color: "#0164eb"}} />: "0" }</> : topUpWalletVal && topUpWalletVal.topupBalance} <span>USDT</span>
            </Link>
          </h3>
          {props.rateValue === true ? (
          <>
            <ul className={styles.modraprice}>
              <li>
                <span>MDR Rate </span>
                <span>
                  {topUpWalletVal.mdRrate === null || topUpWalletVal === "" ? (
                    <>{loader ? <CircularProgress
                      size="10px"
                      style={{ color: "#0164eb" }}
                    /> : "0" } </>
                  ) : (
                    topUpWalletVal && topUpWalletVal.mdRrate
                  )}{" "}
                  USD
                </span>
              </li>
            </ul>
          </>
        ) : (
          ""
        )}
        {props.button === true ? (
          <>
            <ul className={styles.modraprice}>
              <li>
                <Link to="" className={styles.payoutbtn}>
                  payout
                </Link>
              </li>
            </ul>
          </>
        ) : (
          ""
        )}
        </div>
      </div>
  )
}
