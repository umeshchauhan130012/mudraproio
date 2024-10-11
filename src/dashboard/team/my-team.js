import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReferralCopy from "../../components/referralLinkCopy";
import { dashboardTeamSummaryDetail } from "../../redux/actions/dashboard";
import styles from "../../styles/dashboard.module.css";
import QRCode from "react-qr-code";
import { image_url } from "../../config";

export const MyTeam = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state);
  const [loader, setLoader] = useState(true);
  const [summaryDetails, setSummaryDetails] = useState("");
  const [isVarified, setIsVarified] = useState("");

  useEffect(() => {
    let apiData = {};
    dispatch(dashboardTeamSummaryDetail(apiData));
  }, []);

  const userName = window.sessionStorage.getItem("mdrName");

  useEffect(() => {
    if (status.teamSummaryDetail.data !== "") {
      if (status.teamSummaryDetail.data.data.statusCode === "200") {
        setSummaryDetails(status.teamSummaryDetail.data.data.result[0]);
        setLoader(false);
      }
    }
    if (status.dashboardDetails.data !== "") {
      if (status.dashboardDetails.data.data.statusCode === "200") {
        setIsVarified(status.dashboardDetails.data.data.result[0]);
      }
    }
  }, [status]);

  return (
    <div className={` ${styles.dashboard_content} pt10 tabsglobalstyle `}>
      <div className={`${styles.dashboard_content_item} ${styles.padding10}`}>
        <div className={styles.teammembercardswrap}>
          <div className={styles.teammembercardmain}>
            <Link
              className={`${styles.teammembercarditem} ${styles.crdstyleswrp} ${styles.height100}`}
              to="/user/team/team-overview"
            >
              <h5>Total Members</h5>
              <label>{summaryDetails.totalMember}</label>
              <p>Members added in your team</p>
            </Link>
          </div>
          <div className={styles.teammembercardmain}>
            <Link
              className={`${styles.teammembercarditem} ${styles.crdstyleswrp} ${styles.height100}`}
              to="/user/team/team-overview"
            >
              <h5>Active Team Members</h5>
              <label>{summaryDetails.activeTeamMember}</label>
              <p>Members Active</p>
            </Link>
          </div>
          <div className={styles.teammembercardmain}>
            <Link
              className={`${styles.teammembercarditem} ${styles.crdstyleswrp} ${styles.height100}`}
              to="/user/team/team-overview"
            >
              <h5>Direct Team Members</h5>
              <label>{summaryDetails.directTeamMember}</label>
              <p>Members joined through referral</p>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${styles.dashboard_content_item} ${styles.coylinker} ${styles.padding10}`}
      >
        <ReferralCopy />
      </div>
      <div className={`${styles.dashboard_content_item} ${styles.padding10}`}>
        <div className={styles.teammembercardswrap}>
          {/* <div className={styles.teammembercardmain}>
            <div className={`${styles.teammembercarditem} ${styles.height100}`}>
              <div className={styles.reborttitle}>
                <div className={styles.rebicon}>
                  <img
                    src={
                      summaryDetails.sponsorImageUrl
                        ? summaryDetails.sponsorImageUrl
                        : "/images/circleuser.png"
                    }
                    height={40}
                    width={40}
                    alt={summaryDetails.sponsorName}
                  />
                </div>
                <div className={styles.rebitext}>
                  <h5>
                    {summaryDetails.sponsorName
                      ? summaryDetails.sponsorName
                      : "Sponser Name"}
                  </h5>
                  <p>Not Verified</p> 
                </div>
              </div>
              <div className={styles.userportfolio}>
                <label>Email</label>
                <div className={styles.userportfolioitm}>
                  {summaryDetails.sponsorEmail}
                </div>
                <label>Mobile</label>
                <div className={styles.userportfolioitm}>
                  {summaryDetails.sponsorMobile}
                </div>
              </div>
              <div className={styles.userportfoliobtn}>
                <Link to="" className={styles.payoutbtn}>
                  Public profile
                </Link>
              </div>
            </div>
          </div> */}
          <div className={` ${styles.dashboard_contalhalf} ${styles.padding10} `}>
            <div className={`${styles.teammembercarditem} ${styles.height100}`}>
              <div className={styles.uservreycard}>
                <div className={styles.reborttitle}>
                  <div className={styles.rebicon}>
                    <img src={isVarified.userImageUrl === null ? '/images/circleuser.png' : image_url+isVarified.userImageUrl } alt={isVarified.fullname}
                      height={40}
                      width={40}
                    />
                  </div>
                  <div className={styles.rebitext}>
                    <h5>{userName}</h5>
                    <p>{isVarified ? isVarified.userstatus : ""}</p>
                  </div>
                </div>
                <ul className={styles.reb_item_wrp}>
                  <li>
                    <span>First Line</span>
                    <h5>
                      {isVarified.directBusiness} <span>USDT</span>
                    </h5>
                  </li>
                  <li>
                    <span>All Team</span>
                    <h5>
                      {isVarified.teamBusiness} <span>USDT</span>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={` ${styles.dashboard_contalhalf} ${styles.padding10}` }>
            <div className={`${styles.teammembercarditem} ${styles.height100}`}>
              <div className={styles.userportcard}>
                <div className={styles.reborttitle}>
                  <div className={styles.rebitext}>
                    <h5>{userName}</h5>
                    <p>{isVarified ? isVarified.userstatus : ""}</p>
                  </div>
                </div>
                <div className={styles.scannercode}>
                  <div
                    className={styles.scannerinner}
                    style={{ padding: "15px" }}
                  >
                    <QRCode
                      title="MDR-QR"
                      value={
                        isVarified.referralLinkurl
                          ? isVarified.referralLinkurl
                          : ""
                      }
                      size={120}
                    />
                  </div>
                  <span className={styles.scannerlabel}>
                    Terms and conditions of sale and distribution
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
