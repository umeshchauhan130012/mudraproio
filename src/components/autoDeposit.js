import React, { useState, useEffect } from "react";
import QRCode from 'react-qr-code';
import styles from "../styles/dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { walletAutoDeposit } from "../redux/actions/wallet";

export default function AutoDeposit() {
  const [referralLink, setReferralLink] = useState("");
  const [copysucess, setCopysucess] = useState(false);
  const dispatch = useDispatch();
  const [qrCode, setQrCode] = useState('');
  const [alertActive, setAlertActive] = useState(false);
  const [closeAlertActive, setCloseAlertActive] = useState(false);

  const status = useSelector((state) => state);

  useEffect(() => {
    let apiData = {
      PayModeId: qrCode,
    };
    dispatch(walletAutoDeposit(apiData));
  }, [qrCode]);

  useEffect(() => {
    if (status.autoDeposit.data !== "") {
      if (status.autoDeposit.data.data.statusCode === "200") {
        setQrCode(status.autoDeposit.data.data.result.walletAddress);
        setReferralLink(status.autoDeposit.data.data.result.walletAddress)
      }
    }
  }, [status]);

  useEffect(() => {
    setTimeout(() => {
      setAlertActive(true);
      document.body.classList.add("alertActive");
    }, 500);
  }, []);

  useEffect(() => {
      document.body.classList.remove("alertActive");
  }, [closeAlertActive]);

  return (
    <div className="bypackages">
        <div className={styles.toplfttitledeposit}>Deposit Address</div>
      <div className="input_item">
        <div className={`${styles.refall} ${styles.refallinpst}`}>
          <input
            type="text"
            placeholder="Payment Mode Address"
            readOnly
            value={referralLink && referralLink}
            className={styles.refallcopy}
            onChange={(e) => setReferralLink(e.target.value)}
          />
          <span className={styles.copuelement} data-title={copysucess ? "copied" : ""}>
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
        <div className="minimumval">Network - BEP20</div>
      </div>
      <div className={styles.input_item_qrimg}>
        <div className={styles.input_item_qrimgborder}>
           {qrCode && (
            <QRCode
                title="MDR-QR"
                value={qrCode}
                size={170}
            />
            )}
        </div>
      </div>
      <div className={styles.formlbl}>
         <h6>Notes : </h6>
         <p>Coins will be deposited immediately after network confirmations</p>
         <p>After making a deposit, you can track its progress on transactions history.</p>
         <p><b>Deposit is allow only multiplication of 10</b></p>
      </div>
      <div className={`alertpopup ${alertActive && alertActive ? 'active' : ''}`}>
          <div className="alertpopupIn">
            <div className="alertpopupclose" onClick={() => {setAlertActive(false); setCloseAlertActive(true)}}></div>
            <div className="alertpopupCongtent">
            <h5>Notes : </h5>
            <p>Deposit is allow only multiplication of 10</p>
            </div>
          </div>
      </div>
    </div>
  );
}
