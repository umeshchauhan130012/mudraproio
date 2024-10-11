import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { userResendEmail } from "../redux/actions/userAuth";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../styles/login.module.css";
import { useEffect } from "react";

export default function SignupSuccess() {
  const [loader, setLoader] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let status = useSelector((state) => state);
  let dispatch = useDispatch();
  const handleResend = (e) => {
    e.preventDefault();
    setLoader(true);
    let apiData = { LoginId: window.sessionStorage.getItem("registeredEmail") };
    dispatch(userResendEmail(apiData));
  };

  useEffect(() => {
    if (status.resendEmail.data !== "") {
      if (status.resendEmail.data.data.statusCode === "200") {
        setSuccessMessage(status.resendEmail.data.data.message);
        removeSuccessr();
        setLoader(false);
        return;
      }
      if (status.resendEmail.data.data.statusCode === "400") {
        setErrorMessage(status.resendEmail.data.data.message);
        removeError();
        return;
      }
    }
  }, [status]);

  const removeSuccessr = () => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  const removeError = () => {
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  };

  return (
    <div className="login_wrapper top60">
      <div className="container">
        <form className="row customrow_style">
          <div className="col-md-custom">
            <div className={styles.logincontent_center}>
              <div className={styles.usertitleicon}>
                <span className={styles.usercircle}>
                  <img
                    src="/images/success.png"
                    alt="user"
                    height={38}
                    width={38}
                  />
                </span>
                <label>
                  <h5>{window.sessionStorage.getItem("referralName")}</h5>
                  <p>Your sponsor</p>
                </label>
              </div>
              <ul className={styles.checkstyle}>
                <li>
                  <p>
                    An email to confirm your registration has been sent to your
                    email address
                  </p>
                </li>
                <li>
                  <p>
                    If you do not receive a confirmation email within 1 hour
                    Please get in touch with our team: <br />
                    <br />
                    <Link>support@mudrapro.io</Link>
                  </p>
                </li>
              </ul>
              <div className="buttoncontain top25">
                {successMessage && successMessage ? (<div className="successMessageabsolute">{successMessage && successMessage}</div>) : ("")}
                {errorMessage && errorMessage ? (<div className="invalidMessageabsolute">{errorMessage && errorMessage}</div>) : ("")}
                <Button className="primary" onClick={handleResend}>Resend confirmation email {loader ? (<CircularProgress size="15px" style={{ color: "#ffffff" }}/>) : ("")}</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
