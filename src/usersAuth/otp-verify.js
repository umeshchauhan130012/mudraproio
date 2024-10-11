import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import styles from "../styles/login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userForgotPasswordVerifyOTP } from "../redux/actions/userAuth";
import { useEffect } from "react";

export default function OtpVerify() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (code) => setCode(code);
  let status = useSelector((state) => state);

  const routeChange = (e) => {
    e.preventDefault();
    if (!code) {
      return;
    }
    let apiData = {
      LoginId: window.sessionStorage.getItem("forgotEmail"),
      Otp: code,
    };
    dispatch(userForgotPasswordVerifyOTP(apiData));
  };

  useEffect(() => {
    let path = `/password-recovery`;
    if (status.forgotPasswordVerifyOtp.data !== "") {
      if (status.forgotPasswordVerifyOtp.data.data.message === "Success") {
        navigate(path);
      }
      if (status.forgotPasswordVerifyOtp.data.data.statusCode === "400") {
        setErrorMessage(status.forgotPasswordVerifyOtp.data.data.message);
        removeError();
      }
    }
  }, [status]);

  const removeError = () => {
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };

  return (
    <div className="login_wrapper top60">
      <div className="container">
        <form className="row customrow_style">
          <div className="col-md-custom">
            <div className={styles.logincontent_center}>
              <div className={styles.usertitleicon}>
                <label>
                  <h5>OTP Verify</h5>
                  <p>To recover your password, enter your email address</p>
                </label>
              </div>
              <div className="input_item otpinputwrp">
                <OtpInput
                  value={code}
                  onChange={handleChange}
                  numInputs={4}
                  separator={<span style={{ width: "8px" }}></span>}
                  isInputNum={true}
                  shouldAutoFocus={true}
                />
              </div>
              <div className="buttoncontain top20">
                {errorMessage && errorMessage ? (<div className="errorresponse">{errorMessage && errorMessage}</div>) : ("")}
                <Button onClick={routeChange} content="Send" primary />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
