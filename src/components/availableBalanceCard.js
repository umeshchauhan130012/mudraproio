import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { userWalletDetails } from "../redux/actions/userAuth";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../styles/dashboard.module.css";

export default function AvailableBalanceCard(props) {
  const [mdrvalue, setMdrValue] = useState("");
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const status = useSelector((state) => state);
  // const apiData = {};
  // useEffect(() => {
  //   dispatch(userWalletDetails(apiData));
  // }, []);

  useEffect(() => {
    if (status.dashboardDetails.data !== "") {
      if (status.dashboardDetails.data.data.statusCode === "200") {
        setMdrValue(status.dashboardDetails.data.data.result[0]);
      }
    }
    if (status.dashboardDetails.error === '500') {
      setLoader(false);
    }
  }, [status]);

  return (
    <div
      className={`${styles.bordercolor} ${styles.padding15} ${styles.displayflex } ${props.height100 === true ? "height100" : ""} ${props.contenttop === true ? "topcontent" : ""}`}>
      <div className={styles.available_balance}>
        <div className={styles.coin_icon}>
          <img src="/images/mudraic.png" height={30} width={30} alt="ic" />{" "}
          <span>Available Balance</span>
        </div>
        <h3>
          {mdrvalue.mdrBalance === null || mdrvalue === "" ? (
            <>{loader ? <CircularProgress size="20px" style={{ color: "#0164eb" }} /> : '0' }</>
          ) : (
            mdrvalue && mdrvalue.mdrBalance
          )}{" "}
          <span>MDR</span>
        </h3>
        {props.rateValue === true ? (
          <>
            <ul className={styles.modraprice}>
              <li>
                <span>MDR Rate </span>
                <span>
                  {mdrvalue.mdRrate === null || mdrvalue === "" ? (
                    <>{loader ? <CircularProgress
                      size="10px"
                      style={{ color: "#0164eb" }}
                    /> : "0"} </>
                  ) : (
                    mdrvalue && mdrvalue.mdRrate
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
  );
}
