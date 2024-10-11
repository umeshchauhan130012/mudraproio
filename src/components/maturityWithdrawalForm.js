import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { userProfileDetails } from "../redux/actions/profile";
import { user2FAValidate } from "../redux/actions/userAuth";
import { getMdrUsdtRetopAmount, withdrawalMaturityAmount } from "../redux/actions/withdrawal";

export default function MaturityWithdrawalForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [getKycStatus, setGetKycStatus] = useState("");
  const [kycErrorCode, setKytErrorCode] = useState("");
  const [dissabledBtn, setDissabledBtn] = useState(true);
  const [successRequest, setSuccessRequest] = useState("");
  const [unSuccess, setUnSuccess] = useState("");
  const [requestFor, setRequestFor] = useState();
  const [successResponse, setSuccessResponse] = useState("");
  const [valideRequest, setValideRequest] = useState("");
  const [enableAuthVal, setenableAuthVal] = useState("");
  const [VerSucc, setVerSucc] = useState("");
  const [authCode, setAuthCode] = useState('');
  const [emptyAuthCode, setemptyAuthCode] = useState("");
  const [lightFun, setLightFun] = useState("off");
  const [packages, setPackages] = useState(0);
  const [selectPackages, setSelectPackages] = useState("");
  const [notVerifyAuthCode, setNotVerifyAuthCode] = useState(false);
  const [varification, setVarification] = useState(window.sessionStorage.getItem("mdr2FA"));
  const [hasAuth, setHasAuth] = useState(window.sessionStorage.getItem("mdr2FA"));
  const status = useSelector((state) => state);


  useEffect(() => {
    let apiData = {};
    dispatch(userProfileDetails(apiData));
  }, []);


  useEffect(() => {
    let apiData = {"Processname" : requestFor};
    dispatch(getMdrUsdtRetopAmount(apiData));
  }, [requestFor]);

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


  const handleSubmitTopup = (e) => {
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

    if (requestFor === "") {
      setValideRequest("Please select a request");
      removeValidRequestError();
      return
    }

    if(packages === 0){
      setSelectPackages("Please select a package");
      removeSelectPackageError();
      return
    }

    if(authCode === ""){
      setemptyAuthCode("Please enter valid code");
      return
    }
    
    if(notVerifyAuthCode === true){
      return
    }
    setLoader(true);
    if ((requestFor)) {
      const apiData = {
        WithdrowalReqtype: requestFor,
        PackageId: packages,
        AuthenticationCode: authCode,
      };
      dispatch(withdrawalMaturityAmount(apiData));
      setAuthCode("");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      return;
    }
  };

  const handleSubmiCoin = (e) => { 
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

    if (requestFor === "") {
      setValideRequest("Please select a request");
      removeValidRequestError();
      return
    }

    if(authCode === ""){
      setemptyAuthCode("Please enter valid code");
      return
    }
    if(notVerifyAuthCode === true){
      return
    }
    setLoader(true);
    if ((requestFor)) {
      const apiData = {
        WithdrowalReqtype: requestFor,
        PackageId: packages,
        AuthenticationCode: authCode,
      };
      dispatch(withdrawalMaturityAmount(apiData));
      setAuthCode("");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      return;
    }
  };


  const lightEnableHandle = () => {
    setLightFun("on");
    setTimeout(() => {
      navigate("/user/setting/account");
    }, 500);

  }

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
    if (status.maturityAmount.data !== "") {
      if (status.maturityAmount.data.data.statusCode === "200") {
        setSuccessRequest(status.maturityAmount.data.data.message);
        removePaymentError();
        setLoader(false);
        return;
      }
      if (status.maturityAmount.data.data.statusCode === "400") {
        setUnSuccess(status.maturityAmount.data.data.message);
        removePaymentErrorFaild();
        setLoader(false);
        return;
      }
    }
  }, [status]);

  useEffect(() => {
    if (status.userProfileDetails.data !== "") {
      if (status.userProfileDetails.data.data.statusCode === "200") {
        setGetKycStatus(status.userProfileDetails.data.data.result[0]);
        setDissabledBtn(false);
        setLoader(false);
      }
    }
  }, [status]);

  useEffect(() => {
    if (status.getMdrUsdtRetopAmount.data !== "") {
      if (status.getMdrUsdtRetopAmount.data.data.message === "success") {
        setSuccessResponse(status.getMdrUsdtRetopAmount.data.data.result);
      }
    }
  }, [status]);
  
  const removePaymentError = () => {
    setTimeout(() => {
      setSuccessRequest("");
    }, 5000);
  };

  const removePaymentErrorFaild = () => {
    setTimeout(() => {
      setUnSuccess("");
    }, 5000);
  };

  const removeKytErrorCode = () => {
    setTimeout(() => {
      setKytErrorCode("");
    }, 4000);
  }
  
  const removeAuthAliert = () => {
    setTimeout(() => {
      setenableAuthVal("");
    }, 3000);
  }

  const removValiInvalid = () => {
    setTimeout(() => {
      setemptyAuthCode("");
    }, 3000);
  }

  const removeValidRequestError = () => {
    setTimeout(() => {
      setValideRequest("");
    }, 3000);
  }

  const removeSelectPackageError = () => {
    setTimeout(() => {
      setSelectPackages("");
    }, 3000);
  }


  return (
    <div className="bypackages">
      <div className="input_item hasnoicon">
        <FormControl variant="filled">
          <InputLabel id="demo-simple-select-filled-label">
             Request For
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={requestFor}
            onChange={(e) => setRequestFor(e.target.value)}
          >
            <MenuItem value="">
              <label>--Select--</label>
            </MenuItem>
            <MenuItem value="topup">Topup</MenuItem>
            <MenuItem value="mdrcoin">MDR Coin</MenuItem>
          </Select>
        </FormControl>
        {valideRequest && valideRequest ? (
          <div className="validationalert">{valideRequest && valideRequest}</div>
        ) : (
          ""
        )}
      </div>
      {requestFor && requestFor === "topup" ?
      <>
      <div className="hascheckbox">
        <div className="checkboxcontent">
          <div className="checkboxcontentin">
            <input
              type="radio"
              name="modetype"
              defaultChecked={true}
              value={packages}
              onClick={() => setPackages(1)}
            />
            <div className="checkboxlabel">
              <h5 style={{ color: "#1dbf74" }}>Safe Mode</h5>
            </div>
          </div>
        </div>
        <div className="checkboxcontent">
          <div className="checkboxcontentin">
            <input
              type="radio"
              name="modetype"
              defaultChecked={false}
              value={packages}
              onClick={() => setPackages(2)}
            />
            <div className="checkboxlabel">
              <h5>Risk Mode</h5>
            </div>
          </div>
        </div>
      </div>
      {selectPackages && selectPackages ? (
          <div className="validationalert" style={{position: "relative", top: "-19px" }}>{selectPackages && selectPackages}</div>
        ) : (
          ""
        )}
      
      </>
      : '' }

    <div className="input_item">
      <div className="inputLabelStyle dissabled" data-success={successResponse && successResponse ? 'success' : 'dissabled'}>
        <span>Usd Amount</span>
        <div className="inputitemst">{successResponse && successResponse.res_USDTamount}</div>
        <div className="inputlabesvg"><svg fill="#7F7F7F" aria-hidden="true" width="24" data-testid="MonetizationOnOutlinedIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"></path></svg></div>
      </div>
    </div>
    <div className="input_item">
      <div className="inputLabelStyle dissabled" data-success={successResponse && successResponse ? 'success' : 'dissabled'}>
        <span>MDR Coin</span>
        <div className="inputitemst">{successResponse && successResponse.res_MDRamount}</div>
        <div className="inputlabesvg"><img src="/images/mudraic.png" height={24} width={24} alt="mdr" /></div>
      </div>
    </div>

      <div className="input_item">
        {hasAuth && hasAuth === "1" ?
        <div className="enter2fainputWrp" verify={VerSucc}>
          <input tupe="text" placeholder="2FA Code" className="enter2fainput" value={authCode} maxLength={6} onChange={handlevarification} />
          {emptyAuthCode && emptyAuthCode ? <span className="validate">{emptyAuthCode}</span> : '' }
        </div> : 
          <div className="dilflxauth"><div className="enableBtnAuth" light={lightFun} onClick={lightEnableHandle}></div><label className="spanbox">Enable 2FA Authentication</label></div>
        }
      </div>
      
      <div className="buttoncontain" style={{paddingTop: "30px"}}>
        {successRequest && successRequest ? <div className="successMessage">{successRequest && successRequest}</div>: ""}
        {kycErrorCode && kycErrorCode ? <div className="validationalert" style={{textAlign: "center", marginBottom: "10px"}}>{kycErrorCode}</div> : "" }
        {enableAuthVal && enableAuthVal ? <div className="validationalert">{enableAuthVal}</div> : "" }
        {unSuccess && unSuccess ? <div className="validationalert">{unSuccess}</div> : "" }
        {requestFor && requestFor === "topup" ?
        <Button primary onClick={handleSubmitTopup} disabled={dissabledBtn && dissabledBtn}>
          Send Request {" "}
          {loader ? (
            <CircularProgress size="15px" style={{ color: "#ffffff" }} />
          ) : (
            ""
          )}
        </Button> : requestFor && requestFor === "mdrcoin" ?

        <Button primary onClick={handleSubmiCoin} disabled={dissabledBtn && dissabledBtn}>
          Send Request {" "}
          {loader ? (
            <CircularProgress size="15px" style={{ color: "#ffffff" }} />
          ) : (
            ""
          )}
        </Button> : <Button primary disabled={true}>Send Request</Button> }
      </div>
    </div>
  );
}
