import {
    FilledInput,
    FormControl,
    InputAdornment,
    InputLabel,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
  import {
    userEnable2FAEnablGenerateQr
  } from "../../redux/actions/userAuth";
  import styles from "../../styles/profile.module.css";
  
  const ScanAuthentication = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state);
    const navigate = useNavigate();
    const [varificationData, setVarificationData] = useState("");
    const [copysucess, setCopysucess] = useState(false);
    
    useEffect(() => {
      // let apiData = {Email: window.sessionStorage.getItem("mdrEmail")};
      let apiData = {LoginId: window.sessionStorage.getItem("loginId")};
      const isAuth1 = window.sessionStorage.getItem("mdr2FA");
      //console.log(isAuth1);
      //let apiData = { Email: "pankaj_aggarwal@qwertycode.in" };
      if(isAuth1 != 1) {
      dispatch(userEnable2FAEnablGenerateQr(apiData));
    }
    }, []);

   
  
    const routChange = (e) => {
      let path = `/user/setting/account/2fa-verifecation`;
        navigate(path);
    };  
  
    useEffect(() => {
      if (status.Enable2FAEnablGenerateQr.data !== "") {
        if (status.Enable2FAEnablGenerateQr.data.data.message === "success") {
          setVarificationData(status.Enable2FAEnablGenerateQr.data.data.result);
        }
      }
    }, [status]);

    return (
      <div className={`${styles.dashboard_content} ${styles.accountSetting}`}>

            <div className={styles.padding10}>
              <div
                className={`${styles.flex} ${styles.fourthColor} ${styles.mx}`}
              >
                <Link to="/user/setting/account" >
                <img
                  className={styles.backButton}
                  src="/images/back-arrow.png"
                  alt="back"
                />
                &nbsp; Back to Profile Details
                </Link>
              </div>
              <div
                className={`${styles.profileContainer} ${styles.settingContainer}`}
              >
                <div className={styles.p}>
                  <h3 className={styles.settingHeading}>
                    Activation Google Authenticator
                  </h3>
                </div>
                <div className={styles.mx}>
                  <div
                    className={`${styles.indicatorGroup} ${styles.flex} ${styles.p}`}
                  >
                    <div className={styles.activeItem}>
                      <div className={styles.indicatorItem1}>Scan QR Code</div>
                    </div>
                    <div>
                      <div className={styles.indicatorItem2}>Verification</div>
                    </div>
                  </div>
                  <div >
                    <div className={styles.underLine}></div>
                  </div>
                </div>
                <div className={`${styles.settingGroup} ${styles.mx}`}>
                  <div className={`${styles.settingGroup1} ${styles.p}`}>
                    <h3>Steps to Enable</h3>
                    <div>
                      <p>
                        Open the Google Authentification app on your mobile
                        device.
                      </p>
                      <p>
                        If it is your first Google Authenticator account, press
                        Get started and then press Scan QR code or Enter a setup
                        key (step 4)
                      </p>
                      <p>
                        To add a new account click on the + icon in the right
                        corner and enter the account name.{" "}
                      </p>
                      <p>
                        If your device does not have a camera, you can instead
                        enter the 16-digit secret key shown below the QR code into
                        the app manually.
                      </p>
                      <p>
                        If everything seems to be correct - please proceed to the
                        next step.
                      </p>
                    </div>
                  </div>
                    <div className={`${styles.settingGroup2} ${styles.p}`}>
                      <h4>Scan QR Code</h4>
                      {varificationData.qrCodeSetupImageUrl ?
                      <img
                        style={{
                          border: " 1px dashed #0164EB",
                          borderRadius: 12,
                        }}
                        src={varificationData.qrCodeSetupImageUrl}
                        alt="Image"
                      />
                      : 
                      <img
                        style={{
                          border: " 1px dashed #0164EB",
                          borderRadius: 12,
                        }}
                        src="/images/mudrascan.png"
                        alt="Image"
                      />
                      }
                      <div className={styles.mx}>OR</div>
                      <div
                        className={` ${"input_item"}`}
                        style={{ margin: "35px 0" }}
                      >
                        <div className={styles.refallhfghg}>
                          <span className={styles.refraltext}>Setup Key</span>
                          <div className={styles.refallhfghginner}>
                          { varificationData.qrCodeSetupImageUrl ?
                          <input
                            type="text"
                            readOnly
                            value={
                              varificationData.manualEntryKey === null
                                ? "Setup Key not found"
                                : varificationData.manualEntryKey
                            }
                            className={styles.refallcopy}
                            onChange={(e) => setVarificationData(e.target.value)}
                          /> : 
                          <input
                            type="text"
                            readOnly
                            value="Setup Key not found"
                            className={styles.refallcopy}
                          />
                          }
                          <span
                            className={styles.copuelement}
                            data-title={copysucess ? "copied" : ""}
                          >
                            <span
                              className={styles.cpyclipboard}
                              onClick={() => {
                                navigator.clipboard.writeText(varificationData.manualEntryKey);
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
                      </div>

                      <div
                        className="secondry_dark_btn"
                        style={{ cursor: "pointer", width: "100%" }}
                        onClick={() => routChange()}
                      >
                        CONTINUE
                      </div>
                    </div> 
                </div>
                </div>
            </div>
          </div>
    );
  };
  
  export default ScanAuthentication;
  