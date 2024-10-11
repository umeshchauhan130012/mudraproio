import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/dashboard.module.css";
import BuyPackageform from "../../../components/buyPackageform";
import TopUpWallet from "../../../components/topUpWallet";

const Packages = () => {
     
    const [userName, setUserName] = useState("");
    const status = useSelector((state) => state);
  
    useEffect(() => {
      if (status.varifyTransfer.data !== "") {
        if (status.varifyTransfer.data.data.statusCode === "200") {
          setUserName(status.varifyTransfer.data.data.result.fullname);
          return;
        }
        setUserName(null);
      }
    }, [status]);
    return (
        <div className={` ${styles.dashboard_content} pt10 nosidebarinner`}>
        <div className={` ${styles.padding10}`} id="section1">
          <div
            className={` ${styles.bordercolor} ${styles.has2col} ${styles.padding15} `}
          >
            <div className={styles.col7w}>
              <BuyPackageform />
            </div>
            
            <div className={styles.col3w}>
              <TopUpWallet button={false} contenttop={false} rateValue={true} />
              {userName ? (
                <div className={styles.verifyusercheck}>
                  <div className={styles.usericverify}>
                    <img
                      src="/images/circleuser.png"
                      height="40"
                      width="40"
                      alt="user"
                    />
                  </div>  
                  <div className={styles.userverify}>
                    <h5>{userName}</h5>
                    <p>Verified</p>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        </div>
    )
}

export default Packages;