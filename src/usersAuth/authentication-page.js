import React, {useEffect, useState} from "react";
import { Button } from "semantic-ui-react";
import CircularProgress from "@mui/material/CircularProgress";
import { FilledInput, FormControl, InputLabel } from "@mui/material";
import { user2FAValidate, userEnable2FAEnablGenerateQr, userEnable2FAVarifyOTP } from "../redux/actions/userAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthenticationPage = () => {
const [loader, setLoader] = useState(false);
const [qrLoader, setQrLoader] = useState(true);
const [varificationData, setVarificationData] = useState("");
const [copysucess, setCopysucess] = useState(false);
const [successMsg, setsuccessMsg] = useState("");
const [userValidate, setUserValidate] = useState("");
const [invalidMsg, setInvalidMsg] = useState("");

const [verifyuserValidate, setVerifyuserValidate] = useState("");
const [verifyloader, setVerifyloader] = useState(false);
const [verifyInvalidMsg, setVerifyInvalidMsg] = useState("");
const [verifysuccessMsg, setVerifysuccessMsg] = useState("");

const varificationActive = window.sessionStorage.getItem("mdr2FA");
const mdrtokennull = window.sessionStorage.getItem("mdrToken");
const initialInputVerify = { twofactorverify: "" };
const [formInputVerify, setFormInputVerify] = useState(initialInputVerify);
const [verifyopen, setVerifyopen] = useState(varificationActive);
    
const dispatch = useDispatch();
const status = useSelector((state) => state);
const navigate = useNavigate();
const initialInput = { twofactor: "" };
const [formInput, setFormInput] = useState(initialInput);


useEffect(() => {
  if(mdrtokennull == null) {
   let path = `/login`;
   navigate(path);
  }
 }, []); 

const handleClose = () => {
  let path = `/user/dashboard`;
  window.sessionStorage.setItem("verify2FA", 2)
  navigate(path);
};

useEffect(() => {
  if(verifyopen === "0") {
  let apiDataEmail = {Email: window.sessionStorage.getItem("mdrEmail")};
  if(varificationActive == 0) {
  dispatch(userEnable2FAEnablGenerateQr(apiDataEmail));
  }
  }
}, []);

useEffect(() => {
  if (status.Enable2FAEnablGenerateQr.data !== "") {
    if (status.Enable2FAEnablGenerateQr.data.data.message === "success") {
      setVarificationData(status.Enable2FAEnablGenerateQr.data.data.result);
      setQrLoader(false);
    }
  }
}, [status]);

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
if (formInput) {
  let apiData = { AuthenticationCode: formInput.twofactor };
  dispatch(userEnable2FAVarifyOTP(apiData));
  setLoader(false);
  return;
}
};

const verifyInputChange = (e) => {
  setFormInputVerify((preState) => {
    return { ...preState, [e.target.name]: e.target.value };
  });
};

const handleVerifySubmit = (e) => {
  e.preventDefault();
  if (formInputVerify.twofactorverify.length < 4) {
    setVerifyuserValidate("Enter Valid 2fa Code");
    return;
  }
  setVerifyloader(true);
  if (formInputVerify) {
    let apiData = { AuthenticationCode: formInputVerify.twofactorverify };
    dispatch(user2FAValidate(apiData));
    return;
  }
};

useEffect(() => {
  if (status.user2FAValidate.data !== "") {
    if (status.user2FAValidate.data.data.message === "success") {
      setVerifysuccessMsg(status.user2FAValidate.data.data.message);
      setVerifyloader(false);
      removeErrorVerify();
      window.sessionStorage.setItem("verify2FA", 1)
      setTimeout(() => {
        let path = `/user/dashboard`;
        navigate(path);
      }, 2000);
      return;
    }
  }
  if (status.user2FAValidate.data !== "") {
    if (status.user2FAValidate.data.data.statusCode === "400") {
      setVerifyInvalidMsg(status.user2FAValidate.data.data.message);
      setVerifyloader(false);
      removeInvalidErrorVerify();
    }
  }
}, [status]);

useEffect(() => {
  if (status.Enable2FAVarifyOTP.data !== "") {
      if (status.Enable2FAVarifyOTP.data.data.message === "success") {
          setsuccessMsg(status.Enable2FAVarifyOTP.data.data.message);
          removeSuccess();
          window.sessionStorage.setItem("verify2FA", 1);
          window.sessionStorage.setItem("mdr2FA", 1);
          setTimeout(() => {
            let path = `/user/dashboard`;
            navigate(path);
          }, 2000);
      }       
    }
    if (status.Enable2FAVarifyOTP.data !== "") {
      if (status.Enable2FAVarifyOTP.data.data.statusCode === "400") {
          setInvalidMsg(status.Enable2FAVarifyOTP.data.data.message);
          removeError();
      }
    }
  }, [status]);

const removeErrorVerify = () => {
  setTimeout(() => {
    setsuccessMsg("");
  }, 2000);
};

const removeInvalidErrorVerify = () => {
  setTimeout(() => {
    setVerifyInvalidMsg("");
  }, 2000);
};

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
    <div className="authPagemain">
    <div className="authPagemainmax">
     {verifyopen && verifyopen === "1" ? 
      <div className="alertpopupdesign2fa">
        <div>{"Verify Google Authentication"}</div>
        <div className="popupbodycontent">
        <div className="fasettingGroup2">
            <div className="input_item" style={{ margin: "10px 0px 0px" }} >
                <FormControl variant="filled">
                  <InputLabel htmlFor="filled-adornment-name">
                    Secret code
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-name"
                    onChange={verifyInputChange}
                    name="twofactorverify"
                    variant="filled"
                    type="number"
                  />
                </FormControl>
                {verifyuserValidate && verifyuserValidate ? <label className="validationalert">{verifyuserValidate}</label> : '' }
              </div>
          </div> 
        </div>
        <div className="btngrouppopup2fa">
          {verifysuccessMsg && verifysuccessMsg ? <div className="successMessageabsolute">{verifysuccessMsg}</div> : ''}
          {verifyInvalidMsg && verifyInvalidMsg ? <div className="invalidMessageabsolute">{verifyInvalidMsg}</div> : ''}
          <Button onClick={handleVerifySubmit} className="primary themebtn">verify  {verifyloader ? (<CircularProgress size="15px" style={{ color: "#ffffff" }}/>) : ("")}</Button>
        </div>
    </div> :

      <div className="alertpopupdesign2fa">
        <div>{"Enable Google Authentication"}</div>
        <div className="popupbodycontent">
        <div className="fasettingGroup2">
            
            {qrLoader ? (<CircularProgress size="15px" />) 
            : <img style={{ border: "1px dashed #0164EB", borderRadius: 12,}} src={varificationData.qrCodeSetupImageUrl} alt="Image" />}

            <div className="orset">OR</div>
            <div className="serkeycode">
              <div className="fagrp">
                <span className="setkeyup">Setup Key</span>
                <input
                  type="text"
                  readOnly
                  value={
                    varificationData.manualEntryKey === null
                      ? "Setup Key not found"
                      : varificationData.manualEntryKey
                  }
                  className="refallcopy2fa"
                  onChange={(e) => setVarificationData(e.target.value)}
                />
                <span
                  className="cpysecesc"
                  data-title={copysucess ? "copied" : ""}
                >
                  <span
                    className="cpyclip"
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
            <div className="input_item" style={{ margin: "10px 0px 0px" }} >
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
          </div> 
        </div>
        <div className="btngrouppopup2fa">
          {successMsg && successMsg ? <div className="successMessageabsolute">{successMsg}</div> : ''}
          {invalidMsg && invalidMsg ? <div className="invalidMessageabsolute">{invalidMsg}</div> : ''}
          <Button onClick={handleSubmit} className="primary themebtn">Enable  {loader ? (<CircularProgress size="15px" style={{ color: "#ffffff" }}/>) : ("")}</Button>
          <Button onClick={handleClose} className="primary themebtnOutline">Close</Button>
        </div>
      </div>
      }
        </div>
    </div>
    )
}

export default AuthenticationPage;