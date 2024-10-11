import React, { useEffect, useState} from 'react'
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import styles from '../styles/dashboard.module.css'

export default function RobertFoxCard() {

    const [teamBusiness, setTeamBusiness] = useState("");
    const [loader, setLoader] = useState(true);
    const status = useSelector((state) => state);
    useEffect(() => {
      if (status.dashboardDetails.data !== "") {
        if (status.dashboardDetails.data.data.statusCode === "200") {
            setTeamBusiness(status.dashboardDetails.data.data.result[0]);
        }
      }
      if (status.dashboardDetails.error === '500') {
        setLoader(false);
      }
    }, [status]);

  return (
    <div className={`${styles.bordercolor} ${styles.padding15} ${styles.height100}`}>
        <div className={styles.reborttitle}>
            <div className={styles.rebicon}>
            <img
                src="/images/circleuser.png"
                height={40}
                width={40}
                alt={teamBusiness && teamBusiness.fullname}
            />
            </div>
            <div className={styles.rebitext}>
            <h5>{teamBusiness && teamBusiness.fullname}</h5>
            <p>{teamBusiness && teamBusiness.userstatus}</p>
            </div>
        </div>
        <ul className={styles.reb_item_wrp}>
            <li>
            <span>First Line</span>
            <h5>
            {teamBusiness.directBusiness === null || teamBusiness === '' ? <>{loader ? <CircularProgress size="10px" style={{color: "#0164eb"}} />: "0" } </> : teamBusiness && teamBusiness.directBusiness} <span>USDT</span>
            </h5>
            </li>
            <li>
            <span>All Team</span>
            <h5>
            {teamBusiness.teamBusiness === null || teamBusiness === '' ? <>{loader ? <CircularProgress size="10px" style={{color: "#0164eb"}} />: "0" } </> : teamBusiness && teamBusiness.teamBusiness} <span>USDT</span>
            </h5>
            </li>
        </ul>
        </div>
  )
}
