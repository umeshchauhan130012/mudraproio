import React, { useState } from "react";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import StorageIcon from "@mui/icons-material/Storage";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { Button } from "semantic-ui-react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "../styles/dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  widthdrawalCalculateAmount,
  widthdrawalOtpSend,
  widthdrawalProcessAmount,
  widthdrawalVarifyOtp,
} from "../redux/actions/withdrawal";
import { userProfileDetails } from "../redux/actions/profile";
import { useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";
import CircularProgress from "@mui/material/CircularProgress";
import { user2FAValidate } from "../redux/actions/userAuth";

export default function WidthdrawalCoin() {
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [formInput, setFormInput] = useState("");
  const [formInputOtp, setFormInputOtp] = useState("");
  const [OTP, setOTP] = useState(false);
  const [open, setOpen] = useState(false);
  const [verifysuccess, setVerifysuccess] = useState(false);
  const [verifyError, setVerifyError] = useState("");
  const [countRunOut, setCountRunOut] = useState(false);
  const [withdrawalCalculation, setWithdrawalCalculation] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [loader, setLoader] = useState(false);
  const [authValue, setAuthValue] = useState("");
  const [enableAuthVal, setenableAuthVal] = useState("");
  const [emptyAuthCode, setemptyAuthCode] = useState("");
  const [getKycStatus, setGetKycStatus] = useState("");
  const [kycErrorCode, setKytErrorCode] = useState("");
  const [dissabledBtn, setDissabledBtn] = useState(true);
  const [notVerifyAuthCode, setNotVerifyAuthCode] = useState(false);
  const [varification, setVarification] = useState(window.sessionStorage.getItem("mdr2FA"));
  const status = useSelector((state) => state);

  const handleChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleChangeOtp = (e) => {
    setFormInputOtp(e.target.value);
  };

  const selectAuth = (e) => {
    setAuthValue(e.target.value);
  };

  useEffect(()=>{
    if(authValue.length === 6){
      let apiData = {AuthenticationCode: authValue};
      dispatch(user2FAValidate(apiData));
    } 
},[authValue]);

useEffect(() => {
  let apiData = {};
  dispatch(userProfileDetails(apiData));
}, []);

  const removeError = () => {
    setTimeout(() => {
      setError1("");
      setLoader(false);
    }, 2000);
  };

  const varifyOTP = (e) => {
    setLoader(true);
    e.preventDefault();
    if (formInputOtp && formInput) {
      let apiData1 = { Amount: parseFloat(formInput) };
      dispatch(widthdrawalCalculateAmount(apiData1));
      setTimeout(() => {
        const apiData = { Otp: formInputOtp };
        dispatch(widthdrawalVarifyOtp(apiData));
        setLoader(false);
      }, 2000);

      return;
    }
    setError1("Please enter your otp and amount");
    setLoader(false);
    removeError();
  };

  const handleWidthdrawal = (e) => {
    if( varification === "0"){
      setenableAuthVal("Firstly Enable Authentication");
      removeAuthAliert();
      return
    }
    if(authValue === ""){
      setemptyAuthCode("Please enter valid code");
      return
    }
    if(notVerifyAuthCode === true){
      setemptyAuthCode("Please enter valid code");
      return
    }
    setButtonDisabled(true);
    let apiData = { 
      Amount: parseFloat(formInput),
      AuthenticationCode: authValue,
    };
    dispatch(widthdrawalProcessAmount(apiData));
    setTimeout(() => {
      setButtonDisabled(true);
    }, 3000);
    setFormInputOtp("");
    setLoader(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 800);
    
  };

  //console.log(authValue);

  const handleOTP = () => {

    if(getKycStatus.kycStatus === 5 || getKycStatus.walletId === "") {
      setKytErrorCode("Please update your wallet address on edit profile & Complete KYC");
      removeKytErrorCode();
      return;
    }  

    setLoader(true);
    if (!formInput) {
      setError1("Please enter amount greater than 25");
      removeError();
      return;
    }
    if (formInput < 25) {
      setError1("Please enter amount greater than 25");
      removeError();
      return;
    }

    let apiData = {};
    dispatch(widthdrawalOtpSend(apiData));
  };

// let apiData1 = { Amount: parseFloat(formInput.amountMdr) };
//       dispatch(widthdrawalCalculateAmount(apiData1));

  useEffect(() => {
    if (status.widthdrawalOtpSend.data !== "") {
      if (status.widthdrawalOtpSend.data.data.statusCode === "200") {
        setOTP(true);
        setCountRunOut(true);
        setLoader(false);
      }
    }
    if (status.varifyOtp.data !== "") {
      if (status.varifyOtp.data.data.statusCode === "200") {
        setOpen(true);
        return;
      }
      setVerifyError(status.varifyOtp.data.data.message);
      setTimeout(() => {
        setVerifyError("");
      }, 3000);
    }
    if (status.calculateAmount.data !== "") {
      if (status.calculateAmount.data.data.statusCode === "200") {
        setWithdrawalCalculation(status.calculateAmount.data.data.result);
      }
    }
  }, [status]);

  useEffect(() => {
    if (status.userProfileDetails.data !== "") {
      if (status.userProfileDetails.data.data.statusCode === "200") {
        setGetKycStatus(status.userProfileDetails.data.data.result[0]);
        setDissabledBtn(false);
      }
    }
  }, [status]);
  
  
  useEffect(() => {
    if (status.processAmount.data !== "") {
      if (status.processAmount.data.data.statusCode === "200") {
        setVerifysuccess(true);
        setButtonDisabled(true);
        setOpen(false);
        return;
      }

      if (status.processAmount.data.data.statusCode !== "200") {
        setError2(status.processAmount.data.data.message);
        setOpen(false);
         setButtonDisabled(true);
        setVerifysuccess(true);
        removeError();
        setLoader(false);
        return;
      }
      if (status.processAmount.data.statusCode === "500") {
        setError2(status.processAmount.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    }
   
  }, [status]);

  useEffect(() => {
  if (status.user2FAValidate.data !== "") {
    if (status.user2FAValidate.data.data.message === "success") {
        setemptyAuthCode(""); 
        setNotVerifyAuthCode(false);
    }
    if (status.user2FAValidate.data.data.statusCode === "400") {
      setNotVerifyAuthCode(true);
  }
  }
}, [status]);


  const removeAuthAliert = () => {
    setTimeout(() => {
      setenableAuthVal("");
    }, 3000);
  }

  const removeKytErrorCode = () => {
    setTimeout(() => {
      setKytErrorCode("");
    }, 4000);
  }
  

const backnowfun = () => {
  window.location.reload();
}


  const renderer = ({ minutes, seconds }) => (
    <span>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );

  return (
    <div className={styles.bypackages}>
      {verifysuccess ? (
        ""
      ) : (
        <>
          <div className="input_item">
            <FormControl variant="filled">
              <InputLabel htmlFor="filled-adornment-name">
                Enter amount in MDR
              </InputLabel>
              <FilledInput
                id="filled-adornment-name"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <StorageIcon />
                    </IconButton>
                  </InputAdornment>
                }
                variant="filled"
                name="amountMdr"
                value={formInput}
                onChange={handleChange}
              />
            </FormControl>
            <div className="minimumval">Minimum Withdrawal 25 MDR</div>
            {error1 && error1 ? (
              <div className="validationalert">{error1}</div>
            ) : (
              ""
            )}
          </div>
        </>
      )}
      {OTP ? (
        <>
          {verifysuccess ? (
            ""
          ) : (
            <>
              <div className="input_item">
                <FormControl variant="filled">
                  <InputLabel htmlFor="filled-adornment-name">
                    Enter OTP
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-name"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          <ChatOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    variant="filled"
                    name="OTP"
                    value={formInputOtp}
                    onChange={handleChangeOtp}
                    disabled={!countRunOut}
                  />
                </FormControl>
                <div className="minimumval">
                  <b>
                    {countRunOut ? (
                      <Countdown
                        date={Date.now() + 50000}
                        autoStart={countRunOut}
                        renderer={renderer}
                        // isComplete={() => setOpen(true)}
                        onComplete={() => setCountRunOut(false)}
                      />
                    ) : (
                      <><span onClick={handleOTP} className="resendotp">Resend OTP</span></>
                    )}
                  </b>
                </div>
                <div className="validationalert">{verifyError}</div>
              </div>
            </>
          )}
        </>
      ) : (
        ""
      )}

      {verifysuccess ? (
        <>
          <div className={styles.succesdetailscontent}>
            <div
              className={` ${styles.verifyusercheck} ${styles.verifyusercheckleft} `}
            >
              <div className={styles.usericverify}>
                <img
                  src={error2 ? "/images/cancel.png" : "/images/success.png"}
                  height="40"
                  width="40"
                  alt="user"
                />
              </div>
              <div className={styles.userverify}>
                <h5>{error2 ? "Error" : "Success"}</h5>
                <p className={styles.colordefault}>
                  {error2 ? (
                    <div className="validationalert">{error2} <div className="backbtn"><span onClick={backnowfun}>Back Now</span></div></div>
                  ) : (
                    <div className="validationsucce">your withdrawal request submitted successfully <div className="backbtn"><span onClick={backnowfun}>Back Now</span></div></div>
                  )}
                </p>
              </div>
            </div>
            { !error2 ?
            <ul>
              <li>
                <span className={styles.tblpopuptitle}>Reference #</span>
                <span className={styles.widthballance}>46411313131665</span>
              </li>
              <li>
                <span className={styles.tblpopuptitle}>Widthrawal Amount</span>
                <span className={styles.widthballance}>
                  {withdrawalCalculation.withdrawalamt} <label>MDR</label>
                </span>
              </li>
              <li>
                <span className={styles.tblpopuptitle}>
                  Transaction Charges
                </span>
                <span className={styles.widthballance}>
                  {withdrawalCalculation.transactioncharges} <label>MDR</label>
                </span>
              </li>
              <li>
                <span className={styles.tblpopuptitle}>Total</span>
                <span className={styles.widthballance}>
                  {withdrawalCalculation.totalWithdrawalamt} <label>MDR</label>
                </span>
              </li>
            </ul> : ''
            }
          </div>
        </>
      ) : (
        ""
      )}

      {OTP ? (
        <>
          {verifysuccess ? (
            ""
          ) : (
            <div className="buttoncontain">
              <Button onClick={varifyOTP} className="primary">Verify {loader ? ( <CircularProgress size="15px" style={{ color: "#ffffff" }}/> ) : (  "" )}</Button>
            </div>
          )}
        </>
      ) : (
        <div className="buttoncontain">
          {kycErrorCode && kycErrorCode ? <div className="validationalert" style={{textAlign: "center", marginBottom: "10px"}}>{kycErrorCode}</div> : "" }
          <Button onClick={handleOTP} disabled={dissabledBtn && dissabledBtn} className="primary">Send otp to email {loader ? ( <CircularProgress size="15px" style={{ color: "#ffffff" }} /> ) : (  "" )}</Button>
        </div>
      )}

      <Dialog
        open={open}
        ariaLabelledby="alert-dialog-title"
        ariaDescribedby="alert-dialog-description"
        className="alertpopupdesign"
      >
        <DialogTitle>{"Are you sure?"}</DialogTitle>
        <DialogContent className="popupbodycontent">
          <ul>
            <li>
              <span className="tblpopuptitle">Widthrawal Amount</span>
              <span className="widthballance">
                {withdrawalCalculation && withdrawalCalculation.withdrawalamt}{" "}
                <label>MDR</label>
              </span>
            </li>
            <li>
              <span className="tblpopuptitle">Transaction Charges</span>
              <span className="widthballance">
                {withdrawalCalculation &&
                  withdrawalCalculation.transactioncharges}{" "}
                <label>MDR</label>
              </span>
            </li>
            <li>
              <span className="tblpopuptitle">Total</span>
              <span className="widthballance">
                {withdrawalCalculation &&
                  withdrawalCalculation.totalWithdrawalamt}{" "}
                <label>MDR</label>
              </span>
            </li>

            <li className="enter2fa">
              <label>Enter 2FA Code</label>
              <input type="text" maxLength={6} onChange={selectAuth}/>
              {enableAuthVal && enableAuthVal ? <div className="errvinv" >{enableAuthVal}</div> : "" }
              {emptyAuthCode && emptyAuthCode ? <div className="errvinv" >{emptyAuthCode}</div> : "" }    
            </li>

          </ul>
          {error2 && error2 ? <p style={{color: "red"}}>{error2}</p> : ''}
         
        </DialogContent>
        <DialogActions className="btngrouppopup">
          <Button onClick={handleClose} className="primary themebtnlink">
            Disagree
          </Button>
          <Button
            onClick={() => {
              handleWidthdrawal();
            }}
            className="primary themebtn"
            disabled={buttonDisabled}
          >
            Agree {loader ? ( <CircularProgress size="15px" style={{ color: "#ffffff" }}/> ) : (  "" )}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
