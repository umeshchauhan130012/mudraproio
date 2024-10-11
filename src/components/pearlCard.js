import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { rewardsStatusDetails } from "../redux/actions/reward";

export default function PearlCard() {

  const [rewardStatus, setRewardStatus] = useState('');
  const dispatch = useDispatch();
  const status = useSelector((state) => state);
  useEffect(() => {
    const apiData = {};
    dispatch(rewardsStatusDetails(apiData));
  }, []);


  useEffect(() => {
    if (status.rewardDetail.data !== "") {
      if (status.rewardDetail.data.data.statusCode === "200") {
        setRewardStatus(status.rewardDetail.data.data.result[0]);
      }
    }
  }, [status]);


  return (
    <div
      className={`${styles.bordercolor} ${styles.padding15} ${styles.height100}`}
    >
      <div className={styles.reborttitle}>
        <div className={styles.rebicon}>
          <img src={rewardStatus && rewardStatus.uRankimgurl === '' ? '/images/smallLogo.png' : rewardStatus && rewardStatus.uRankimgurl} height={40} width={40} alt={rewardStatus && rewardStatus.uRank} />
        </div>
        <div className={styles.rebitext}>
          <h5>{rewardStatus && rewardStatus.uRank}</h5>
          <p>Current Rank</p>
        </div>
      </div>
      <ul className={`${styles.reb_item_wrp} ${styles.paddindics}`}>
        <li className={styles.nobefore}>
          <div className={styles.teamidwrp}>
            <div className={styles.teamid}>
              <span>First strong team ID</span>
              <h5>{rewardStatus && rewardStatus.strongLeg}</h5>
            </div>
            <div className={styles.viewteamid}>
            {rewardStatus && rewardStatus.strongLeg ? <Link to="/user/team/my-team">View Team</Link> : ''}
            </div>
          </div>
        </li>
        <li>
          <span>First strong team business</span>
          <h5>
            {rewardStatus && rewardStatus.strongLegBusines} <span>USD</span>
          </h5>
        </li>
        <li className={styles.nobefore}>
          <div className={styles.teamidwrp}>
            <div className={styles.teamid}>
              <span>Second strong team ID</span>
              <h5>{rewardStatus && rewardStatus.secondLeg}</h5>
            </div>
            <div className={styles.viewteamid}>
            {rewardStatus && rewardStatus.secondLeg ? <Link to="/user/team/my-team">View Team</Link> : '' }
            </div>
          </div>
        </li>
        <li>
          <span>Second strong team business</span>
          <h5>
          {rewardStatus && rewardStatus.secondLegLegBusines} <span>USD</span>
          </h5>
        </li>
        <li>
          <span>All leg business</span>
          <h5>
            {rewardStatus && rewardStatus.weakerLegBusines} <span>USD</span>
          </h5>
        </li>
        <li>
          <span>Target ratio</span>
        </li>
          <ol className={styles.legalbusines} style={{paddingLeft: "50px"}}>
            <li>
              <label>
                F1 <span>{rewardStatus && rewardStatus.targetFirst}</span> %
              </label>{" "}
              <label>
                <span>{rewardStatus && rewardStatus.targetFirstBusiness}</span> USD
              </label>
            </li>
            <li>
              <label>
                F2 <span>{rewardStatus && rewardStatus.targetsecond}</span> %
              </label>{" "}
              <label>
                <span>{rewardStatus && rewardStatus.targetsecondBusiness}</span> USD
              </label>
            </li>
            <li>
            <label>
            All <span>{rewardStatus && rewardStatus.targetall}</span> %
            </label>{" "}
            <label>
              <span>{rewardStatus && rewardStatus.targetallBusiness}</span> USD
            </label>
          </li>
        </ol>
      </ul>
      <div className={styles.teamidwrpall}>
        <div className={styles.rebicon}>
          <img src={rewardStatus && rewardStatus.uRanknextimgurl} height={30} width={30} alt={rewardStatus && rewardStatus.uNextRank} />
        </div>
        <div className={styles.teamidwrpallinner}>
          <div className={styles.teamidall}>
            <h5>{rewardStatus && rewardStatus.uNextRank}</h5>
            <span>Next Rank</span>
          </div>
          <div className={styles.viewteamid}>
            <Link to="/user/rewards">Track Reward</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
