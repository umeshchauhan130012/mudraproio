import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../styles/login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userForgotPasswordSendOTP } from "../redux/actions/userAuth";
import { useState } from "react";
import { useEffect } from "react";

export default function SignupSuccess() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [emailIdVerify, setEmailIdVerify] = useState("");
  const [emailNotFound, setEmailNotFound] = useState("");
  let status = useSelector((state) => state);

  const routeChange = (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailIdVerify("Please enter user Id");
      return;
    }
    if (email !== "") {
      let apiData = { LoginId: email };
      dispatch(userForgotPasswordSendOTP(apiData));
      setLoader(true);
      return;
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    if (status.forgotPasswordSendOtp.data !== "") {
      if (status.forgotPasswordSendOtp.data.data.message === "Success") {
        setLoader(false);
        window.sessionStorage.setItem("forgotEmail", email);
        let path = `/otp-verify`;
        navigate(path);
      }
    }
    if (status.forgotPasswordSendOtp.data !== "") {
      if (status.forgotPasswordSendOtp.data.data.statusCode === "400") {
        setEmailNotFound(status.forgotPasswordSendOtp.data.data.message);
        setLoader(false);
      }
    }
  }, [status]);

  return (
    <div className="login_wrapper top60">
      <div className="container">
        <form className="row customrow_style">
          <div className="col-md-custom">
            <div className={styles.logincontent_center}>
              <div className={styles.usertitleicon}>
                <label>
                  <h5>Forgot Password?</h5>
                  <p>
                    To recover your password, enter your email address and click
                    Send. Then, follow the instructions in the message.
                  </p>
                </label>
              </div>
              <div className="input_item">
                <FormControl variant="filled">
                  <InputLabel htmlFor="filled-adornment-name">Enter Your Id</InputLabel>
                  <FilledInput
                    id="filled-adornment-name"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          <AlternateEmailIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    onChange={handleChange}
                    onKeyUp={handleChange}
                    variant="filled"
                  />
                </FormControl>
                {emailIdVerify && emailIdVerify ? (
                  <label className="validationalert">
                    {emailIdVerify && emailIdVerify}
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="buttoncontain top20">
                <Button onClick={routeChange} className="primary">
                  Send OTP{" "}
                  {loader ? (
                    <CircularProgress
                      size="15px"
                      style={{ color: "#ffffff" }}
                    />
                  ) : (
                    ""
                  )}
                </Button>
                {emailNotFound && emailNotFound ? (
                  <label className="validationalert">
                    {emailNotFound && emailNotFound}
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
