import React, { useState } from "react";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StorageIcon from "@mui/icons-material/Storage";
import { Button } from "semantic-ui-react";
import styles from "../styles/dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import {
  walletFundTransfer,
  walletGetMDR,
  walletGetUSDT,
  walletVerifyTransfer,
} from "../redux/actions/wallet";
import { user2FAValidate } from "../redux/actions/userAuth";
import { useEffect } from "react";
import { userProfileDetails } from "../redux/actions/profile";

export default function TransferFund() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [amountUsd, setAmountUsd] = useState("");
  const [amountMdr, setAmountMdr] = useState("");
  const [validAmount, setValidAmount] = useState("");
  const [loader, setLoader] = useState(false);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [invalidUser, setInvalidUser] = useState(false);
  const [invalidUserAlert, setInvalidUserAlert] = useState("");
  const [amountConvertedUsdt, setAmountConvertedUsdt] = useState("");
  const [amountConvertedMdr, setAmountConvertedMdr] = useState("");
  const [getKycStatus, setGetKycStatus] = useState("");
  const [successRequest, setSuccessRequest] = useState("");
  const [enableAuthVal, setenableAuthVal] = useState("");
  const [lightFun, setLightFun] = useState("off");
  const [emptyAuthCode, setemptyAuthCode] = useState("");
  const [authCode, setAuthCode] = useState('');
  const [VerSucc, setVerSucc] = useState("");
  const [kycErrorCode, setKytErrorCode] = useState("");
  const [notVerifyAuthCode, setNotVerifyAuthCode] = useState(false);
  const [varification, setVarification] = useState(window.sessionStorage.getItem("mdr2FA"));
  const [hasAuth, setHasAuth] = useState(window.sessionStorage.getItem("mdr2FA"));
  const status = useSelector((state) => state);


  useEffect(() => {
    let apiData = {};
    dispatch(userProfileDetails(apiData));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(getKycStatus.kycStatus === 5 || getKycStatus.walletId === "") {
      setKytErrorCode("Please update your wallet address on edit profile & Complete KYC");
      removeKytErrorCode();
      return;
    }  
    if( varification === "0"){
      setenableAuthVal("Firstly Enable Authentication");
      removeAuthAliert();
      return
    }
    if (amountUsd.length < 1 && amountMdr.length < 1) {
      setValidAmount("Enter Amount");
      setLoader(false);
    }
    if (userId.length < 3) {
      setInvalidUserAlert("Enter Valid Id");
      setLoader(false);
    }
    if(authCode === ""){
      setemptyAuthCode("Please enter valid code");
      setLoader(false);
      return;
    }

    if(notVerifyAuthCode === true){
      setLoader(false);
      return
    }

    setLoader(true);
    if ((userId && amountUsd) || amountMdr) {
      const apiData = {
        ChildLoginId: userId,
        AuthenticationCode: authCode,
        Amount: parseFloat(
          amountUsd !== "" ? amountUsd : amountConvertedUsdt.usdTamount,
          10
        ),
      };
      dispatch(walletFundTransfer(apiData));
      setTimeout(() => {
        let path = `/user/wallet`;
        navigate(path);
        window.location.reload();
      }, 3000);
      return;
    }
  };

  useEffect(() => {
    if (userId) {
      const apiData = { ChildLoginId: userId };
      dispatch(walletVerifyTransfer(apiData));
    }
  }, [userId]);

  useEffect(() => {
    if (amountUsd) {
      let apiData = { Amount: parseFloat(amountUsd, 10) };
      dispatch(walletGetMDR(apiData));
    }
    if (amountMdr) {
      let apiData = { Amount: parseFloat(amountMdr, 10) };
      dispatch(walletGetUSDT(apiData));
    }
  }, [amountMdr, amountUsd]);

  useEffect(() => {
    if (status.varifyTransfer.data !== "") {
      if (status.varifyTransfer.data.data.statusCode === "200") {
        setUserName(status.varifyTransfer.data.data.result.fullname);
        setInvalidUser(true);
        setInvalidUserAlert("");
        return;
      }
      setUserName(null);
      setInvalidUser(false);
      setInvalidUserAlert("Invalid User Id");
    }
    if (status.getMdr.data !== "") {
      if (status.getMdr.data.data.statusCode === "200") {
        setAmountConvertedMdr(status.getMdr.data.data.result);
        setValidAmount("");
      }
    }
    if (status.getUsdt.data !== "") {
      if (status.getUsdt.data.data.statusCode === "200") {
        setAmountConvertedUsdt(status.getUsdt.data.data.result);
        setValidAmount("");
      }
    }
  }, [status]);
  useEffect(() => {
    if (status.fundTransfer.data !== "") {
      if (status.fundTransfer.data.data.statusCode === "200") {
        //console.log(status.fundTransfer.data.data.statusCode);
        setSuccessRequest("Fund transfer successfully. !");
        removePaymentError();
        setLoader(false);
        setAmountMdr("");
        setAmountUsd("");
        setUserId("");
        setUserName("");
        return;
      }
    }
  }, [status]);

  const handlevarification = (e) => {
    setAuthCode(e.target.value);
  }

  useEffect(()=>{
    if(authCode){
      let apiData = {AuthenticationCode: authCode};
      dispatch(user2FAValidate(apiData));
    } 
    if(authCode.length === 0){
    setVerSucc('');
    }
},[authCode]);

  useEffect(() => {
    if (status.user2FAValidate.data !== "") {
      if (status.user2FAValidate.data.data.message === "success") {
          setemptyAuthCode(""); 
          setNotVerifyAuthCode(false);
          setVerSucc('true');
      }
      if (status.user2FAValidate.data.data.statusCode === "400") {
        setVerSucc('false');
        setemptyAuthCode("Please enter valid code");
        setNotVerifyAuthCode(true);
        removValiInvalid();
    }
    }
  }, [status]);

  useEffect(() => {
    if (status.userProfileDetails.data !== "") {
      if (status.userProfileDetails.data.data.statusCode === "200") {
        setGetKycStatus(status.userProfileDetails.data.data.result[0]);
        setLoader(false);
      }
    }
  }, [status]);

  const lightEnableHandle = () => {
    setLightFun("on");
    setTimeout(() => {
      navigate("/user/setting/account");
    }, 500);

  }

  const removeAuthAliert = () => {
    setTimeout(() => {
      setenableAuthVal("");
      setLoader(false);
    }, 3000);
  }

  const removePaymentError = () => {
    setTimeout(() => {
      setSuccessRequest("");
      setLoader(false);
    }, 2000);
  };

  const removValiInvalid = () => {
    setTimeout(() => {
      setemptyAuthCode("");
      setLoader(false);
    }, 3000);
  };

  const removeKytErrorCode = () => {
    setTimeout(() => {
      setKytErrorCode("");
      setLoader(false);
    }, 4000);
  }

  return (
    <div className="bypackages">
      <div className="input_item">
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-adornment-name">
            Enter amount in USD
          </InputLabel>
          <FilledInput
            id="filled-adornment-name"
            value={
              amountMdr !== "" ? amountConvertedUsdt.usdTamount : amountUsd
            }
            readOnly={amountMdr !== "" ? true : false}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <MonetizationOnOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
            variant="filled"
            type="number"
            onChange={(e) => setAmountUsd(e.target.value)}
          />
        </FormControl>
        {validAmount && validAmount ? (
          <div className="validationalert">{validAmount && validAmount}</div>
        ) : (
          ""
        )}
        {/* {amountUsd && (
          <div className="minimumval">
            {amountConvertedMdr && amountConvertedMdr.mdRamount} in MDR
          </div>
        )} */}
      </div>
      <div className="input_item">
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-adornment-name">
            Enter amount in MDR
          </InputLabel>
          <FilledInput
            id="filled-adornment-name"
            value={amountUsd !== "" ? amountConvertedMdr.mdRamount : amountMdr}
            readOnly={amountUsd !== "" ? true : false}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <StorageIcon />
                </IconButton>
              </InputAdornment>
            }
            variant="filled"
            type="number"
            onChange={(e) => setAmountMdr(e.target.value)}
          />
        </FormControl>
        {validAmount && validAmount ? (
          <div className="validationalert">{validAmount && validAmount}</div>
        ) : (
          ""
        )}
        {/* {amountMdr && (
          <div className="minimumval">
            {amountConvertedUsdt && amountConvertedUsdt.usdTamount} in USDT
          </div>
        )} */}
      </div>

      <div className="input_item">
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-adornment-name">User id</InputLabel>
          <FilledInput
            id="filled-adornment-name"
            value={userId}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
            variant="filled"
            successuser={invalidUser && invalidUser ? "validuser" : "invalid"}
            onChange={(e) => setUserId(e.target.value)}
          />
        </FormControl>
        {invalidUserAlert && invalidUserAlert ? (
          <div className="validationalert">{invalidUserAlert}</div>
        ) : (
          ""
        )}
      </div>
      {userName ? (
        <div
          className={` ${styles.verifyusercheck} ${styles.verifyusercheckleft} `}
        >
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


        <div className="input_item" style={{marginBottom: "20px"}}>
          {hasAuth && hasAuth === "1" ?
          <div className="enter2fainputWrp" verify={VerSucc}>
            <input tupe="text" placeholder="2FA Code" className="enter2fainput" value={authCode} maxLength={6} onChange={handlevarification} />
            {emptyAuthCode && emptyAuthCode ? <span className="validate">{emptyAuthCode}</span> : '' }
          </div> : 
            <div className="dilflxauth"><div className="enableBtnAuth" light={lightFun} onClick={lightEnableHandle}></div><label className="spanbox">Enable 2FA Authentication</label></div>
          }
        </div>
      
      <div className="buttoncontain" style={{paddingTop: "30px"}}>
      {kycErrorCode && kycErrorCode ? <div className="validationalert" style={{textAlign: "center", marginBottom: "10px"}}>{kycErrorCode}</div> : "" }
      {successRequest && successRequest ?
        <div className="successMessage">{successRequest && successRequest}</div>
        : ""}
          {enableAuthVal && enableAuthVal ? <div className="validationalert">{enableAuthVal}</div> : "" }
        <Button primary onClick={handleSubmit}>
          Transfer Fund {" "}
          {loader ? (
            <CircularProgress size="15px" style={{ color: "#ffffff" }} />
          ) : (
            ""
          )}
        </Button>
      </div>
    </div>
  );
}
