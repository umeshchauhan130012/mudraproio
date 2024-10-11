import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../styles/dashboard.module.css";
import CircularProgress from "@mui/material/CircularProgress";

export default function TotalEarningsIncomeCard() {
  const [totalEarningsIncome, setTotalEarningsIncome] = useState("");
  const [loader, setLoader] = useState(true);
  const status = useSelector((state) => state);
  useEffect(() => {
    if (status.dashboardDetails.data !== "") {
      if (status.dashboardDetails.data.data.statusCode === "200") {
        setTotalEarningsIncome(status.dashboardDetails.data.data.result[0]);
      }
    }
    if (status.dashboardDetails.error === '500') {
      setLoader(false);
    }
  }, [status]);

  return (
    <div className={`${styles.dashboard_contantfull} ${styles.padding10}`}>
      <div className={`${styles.bordercolor} ${styles.padding15}`}>
        <div className={styles.allavailabel}>
          <div className={styles.coin_icon}>
            <img src="/images/coin.png" height={30} width={30} alt="ic" />{" "}
            <span>Total Earnings Income</span>
          </div>
          <h3>
            {totalEarningsIncome.totalEarningIncome === null ||
            totalEarningsIncome === "" ? (
              <>{loader ? <CircularProgress size="15px" style={{ color: "#0164eb" }} />: "0" } </>
            ) : (
              totalEarningsIncome && totalEarningsIncome.totalEarningIncome
            )}{" "}
            <span>USDT</span>
          </h3>
        </div>
        <ul className={styles.tblviewcontent}>
          <li>
            <ul className={styles.tblcolumn}>
              <li>Direct Income</li>
              <li>
                <h4>
                  {totalEarningsIncome.directIncome === null ||
                  totalEarningsIncome === "" ? (
                    <>{loader ? <CircularProgress
                      size="15px"
                      style={{ color: "#0164eb" }}
                    />: "0" } </>
                  ) : (
                    totalEarningsIncome && totalEarningsIncome.directIncome
                  )}{" "}
                  <span>MDR</span>
                </h4>
              </li>
              <li>
                <Link to="/user/transactions/directIncome">View report</Link>
              </li>
            </ul>
            <ul className={styles.tblcolumn}>
              <li>Stacking Income</li>
              <li>
                <h4>
                  {totalEarningsIncome.stackingIncome === null ||
                  totalEarningsIncome === "" ? (
                    <>{loader ? <CircularProgress
                      size="15px"
                      style={{ color: "#0164eb" }}
                    />: "0" } </>
                  ) : (
                    totalEarningsIncome && totalEarningsIncome.stackingIncome
                  )}{" "}
                  <span>MDR</span>
                </h4>
              </li>
              <li>
                <Link to="/user/transactions/dailyIncome">View report</Link>
              </li>
            </ul>
            <ul className={styles.tblcolumn}>
              <li>Level Income</li>
              <li>
                <h4>
                  {totalEarningsIncome.levelIncome === null ||
                  totalEarningsIncome === "" ? (
                    <>{loader ? <CircularProgress
                      size="15px"
                      style={{ color: "#0164eb" }}
                    />: "0" } </>
                  ) : (
                    totalEarningsIncome && totalEarningsIncome.levelIncome
                  )}{" "}
                  <span>MDR</span>
                </h4>
              </li>
              <li>
                <Link to="/user/transactions/levelIncome">View report</Link>
              </li>
            </ul>
            <ul className={styles.tblcolumn}>
              <li>NTCL</li>
              <li>
                <h4>
                  {totalEarningsIncome.ntclIncome === null ||
                  totalEarningsIncome === "" ? (
                    <>{loader ? <CircularProgress
                      size="15px"
                      style={{ color: "#0164eb" }}
                    />: "0" } </>
                  ) : (
                    totalEarningsIncome && totalEarningsIncome.ntclIncome
                  )}{" "}
                  <span>MDR</span>
                </h4>
              </li>
              <li>
                <Link to="/user/transactions/ntcl">View report</Link>
              </li>
            </ul>
            <ul className={styles.tblcolumn}>
              <li>Reward Income</li>
              <li>
                <h4>
                  {totalEarningsIncome.rewardIncome === null ||
                  totalEarningsIncome === "" ? (
                    <>{loader ? <CircularProgress
                      size="15px"
                      style={{ color: "#0164eb" }}
                    />: "0" } </>
                  ) : (
                    totalEarningsIncome && totalEarningsIncome.rewardIncome
                  )}{" "}
                  <span>USDT</span>
                </h4>
              </li>
              <li>
                <Link to="/user/rewards">View report</Link>
              </li>
            </ul>
            <ul className={styles.tblcolumn}>
              <li>Withdrawal</li>
              <li>
                <h4>
                  {totalEarningsIncome.totalWithdrawal === null ||
                  totalEarningsIncome === "" ? (
                    <>{loader ? <CircularProgress
                      size="15px"
                      style={{ color: "#0164eb" }}
                    />: "0" } </>
                  ) : (
                    totalEarningsIncome && totalEarningsIncome.totalWithdrawal
                  )}{" "}
                  <span>MDR</span>
                </h4>
              </li>
              <li>
                <Link to="/user/widthdrawal/withdrawalCoin">View Statement</Link>
              </li>
            </ul>
            <ul className={styles.tblcolumn}>
              <li>Self Stake</li>
              <li>
                <h4>
                  {totalEarningsIncome.selfStake === null ||
                  totalEarningsIncome === "" ? (
                    <>{loader ? <CircularProgress
                      size="15px"
                      style={{ color: "#0164eb" }}
                    />: "0" } </>
                  ) : (
                    totalEarningsIncome && totalEarningsIncome.selfStake
                  )}{" "}
                  <span>USDT</span>
                </h4>
              </li>
              <li>
                <Link to="/user/buy-package/buying-history">View Statement</Link>
              </li>
            </ul>
            <ul className={styles.tblcolumn}>
              <li>Maturity Wallet</li>
              <li>
                <h4>
                  {totalEarningsIncome.maturityWallet === null ||
                  totalEarningsIncome === "" ? (
                    <>{loader ? <CircularProgress
                      size="15px"
                      style={{ color: "#0164eb" }}
                    />: "0" } </>
                  ) : (
                    totalEarningsIncome && totalEarningsIncome.maturityWallet
                  )}{" "}
                  <span>USDT</span>
                </h4>
              </li>
              <li>
                <Link to="/user/transactions/maturityWallet">View Statement</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
