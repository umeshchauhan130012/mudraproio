import {
    FilledInput,
    FormControl,
    InputLabel,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import { Button } from "semantic-ui-react";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import { Link } from "react-router-dom";
  import {
    user2FADisable,
    userEnable2FAEnablGenerateQr,
    userEnable2FAVarifyOTP,
  } from "../../redux/actions/userAuth";
  import styles from "../../styles/profile.module.css";
  import CircularProgress from "@mui/material/CircularProgress";
  
  const Account2faSettings = () => {
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const [verifySuccess, setVerifySuccess] = useState(false);
    const status = useSelector((state) => state);
    const navigate = useNavigate();
    const initialInput = { twofactor: "" };
    const [formInput, setFormInput] = useState(initialInput);
    const [successMsg, setsuccessMsg] = useState("");
    const [userValidate, setUserValidate] = useState("");
    const [invalidMsg, setInvalidMsg] = useState("");
    const varificationActive = window.sessionStorage.getItem("mdr2FA");

  
    // useEffect(() => {
    //   let apiData = {Email: window.sessionStorage.getItem("mdrEmail")};
    //   //let apiData = { Email: "pankaj_aggarwal@qwertycode.in" };
    //   dispatch(userEnable2FAEnablGenerateQr(apiData));
    // }, []);


    const handleInputChange = (e) => {
      setFormInput((preState) => {
        return { ...preState, [e.target.name]: e.target.value };
      });
    };
  
    useEffect(() => {
      if (formInput.twofactor.length < 6) {
        setUserValidate("");
      }
    }, [formInput.twofactor]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formInput.twofactor.length < 4) {
        setUserValidate("Enter Valid 2fa Code");
        return;
      }
      setLoader(true);
      if (formInput && varificationActive === '0') {
        setLoader(false); 
        let apiData = {AuthenticationCode: formInput.twofactor};
        dispatch(userEnable2FAVarifyOTP(apiData));
        return;
    } else if (formInput && varificationActive === '1') {
        let apiData = { AuthenticationCode: formInput.twofactor };
        dispatch(user2FADisable(apiData));
        setLoader(false);
        return;
    }
};

    useEffect(() => {
    if (status.Enable2FAVarifyOTP.data !== "") {
        if (status.Enable2FAVarifyOTP.data.data.message === "success") {
            window.sessionStorage.setItem("mdr2FA", 1);
            setsuccessMsg(status.Enable2FAVarifyOTP.data.data.message);
            removeSuccess();
            setTimeout(() => {
              let path = `/user/setting/account`;
              navigate(path);
              window.location.reload();
            }, 1000);
        }
      }
      if (status.Enable2FAVarifyOTP.data !== "") {
        if (status.Enable2FAVarifyOTP.data.data.statusCode === "400") {
            setInvalidMsg(status.Enable2FAVarifyOTP.data.data.message);
            removeError();
        }
      }
    }, [status]);

    useEffect(() => {
    if (status.user2FADisable.data !== "") {
        if (status.user2FADisable.data.data.message === "success") {
            window.sessionStorage.setItem("mdr2FA", 0);
            setsuccessMsg(status.user2FADisable.data.data.message);
            removeSuccess();
            setTimeout(() => {
              let path = `/user/setting/account`;
              navigate(path);
              window.location.reload();
            }, 1000);
        }
      }
      if (status.user2FADisable.data !== "") {
        if (status.user2FADisable.data.data.statusCode === "400") {
          setInvalidMsg(status.user2FADisable.data.data.message);
          removeError();
        }
      }
    }, [status]);

    const removeError = () => {
      setTimeout(() => {
        setInvalidMsg("");
      }, 2000);
    };

    const removeSuccess = () => {
      setTimeout(() => {
        setsuccessMsg("");
      }, 2000);
    };
  


    return (
      <div className={`${styles.dashboard_content} ${styles.accountSetting}`}>
          <div>
            <div className={styles.padding10}>
              <div
                className={`${styles.flex} ${styles.fourthColor} ${styles.mx}`}
              >
                {window.sessionStorage.getItem("mdr2FA") === '1' ? 
                <Link to="/user/setting/account" ><img className={styles.backButton} src="/images/back-arrow.png" alt="back"/>
                &nbsp; Back to Profile Details
                </Link> : 
                <Link to="/user/setting/account/scan-authentication" >
                <img className={styles.backButton} src="/images/back-arrow.png" alt="back"/>
                &nbsp; Back to Profile Details
                </Link>
               }
              </div>
              <div
                className={`${styles.profileContainer} ${styles.settingContainer}`}
              >
                <div className={styles.p}>
                  <h3 className={styles.settingHeading}>
                  {window.sessionStorage.getItem("mdr2FA") === '1' ? 'Disable' : 'Enable' } Google Authenticator
                  </h3>
                </div>
                {window.sessionStorage.getItem("mdr2FA") === '0' ?
                <div className={styles.mx}>
                  <div
                    className={`${styles.indicatorGroup} ${styles.flex} ${styles.p}`}
                  >
                    <div>
                      <div className={styles.indicatorItem1}>Scan QR Code</div>
                    </div>
                    <div className={styles.activeItem}>
                      <div className={styles.indicatorItem2}>Verification</div>
                    </div>
                  </div>
                  <div className={styles.activeUnderLine}>
                    <div className={styles.underLine}></div>
                  </div>
                </div> : "" }

                <div className={`${styles.settingGroup} ${styles.mx}`}>
                  <div className={`${styles.settingGroup1} ${styles.p}`}>
                    <h3>Steps to {window.sessionStorage.getItem("mdr2FA") === '1' ? 'Disable' : 'Enable' }</h3>
                    <div>
                      <p>
                      Enter the 6 digit generated code of your account from Google Authenticator app .
                      </p>
                      <p>
                      If everything seems to be correct - please proceed to the next step.
                      </p>
                    </div>
                    </div>
                 
                      <div className={`${styles.settingGroup2} ${styles.p}`}>
                        <h4>Confirmation</h4>
                        <p>
                          When the Google Authenticator app displays a 6-digit
                          passcode, enter it in the passcode field without G-part,
                          Numbers only
                        </p>  
                        <div
                          className={` ${"input_item"}`}
                          style={{ margin: "35px 0px 10px" }}  
                        >
                          <FormControl variant="filled">
                            <InputLabel htmlFor="filled-adornment-name">
                              Secret code
                            </InputLabel>
                            <FilledInput
                              id="filled-adornment-name"
                              onChange={handleInputChange}
                              name="twofactor"
                              variant="filled"
                              type="number"
                            />
                          </FormControl>
                          {userValidate && userValidate ? <label className="validationalert">{userValidate}</label> : '' }
                        </div>
                       
                        <div className="buttoncontain top25">
                        {successMsg && successMsg ? <div className="successMessageabsolute">{successMsg}</div> : ''}
                        {invalidMsg && invalidMsg ? <div className="invalidMessageabsolute">{invalidMsg}</div> : ''}
                          <Button onClick={handleSubmit} className="primary">
                          CONTINUE{" "}
                            {loader ? (
                              <CircularProgress
                                size="15px"
                                style={{ color: "#ffffff" }}
                              />
                            ) : (
                              ""
                            )}
                          </Button>
                        </div>
                      </div>
                      </div>
                </div>
            </div>
            </div>
      </div>
    );
  };
  
  export default Account2faSettings;
  