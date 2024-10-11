import React, { useState } from "react";
import styles from "../../styles/profile.module.css";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { settingChangePassword } from "../../redux/actions/setting";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const ChangePassword = () => {
  const dispatch = useDispatch();
  // let navigate = useNavigate();
  const status = useSelector((state) => state);
  const initialInput = { oldPassword: "", password: "", confirm: "" };
  const [formInput, setFormInput] = useState(initialInput);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const [failed, setFailed] = useState("");
  const [success, setSuccess] = useState("");
  const [loader, setLoader] = useState(false);
  const handleChange = (e) => {
    setFormInput((preState) => {
      return { ...preState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput.oldPassword === initialInput.oldPassword) {
      setError1("Please enter your required field");
      removeError1();
    }
    if (formInput.password === initialInput.password) {
      setError2("Please enter your required field");
      removeError2();
    }
    if (formInput.password !== formInput.confirm) {
      setError3("Password does not match");
      removeError4();
      return;
    }
    setLoader(true);
    if (formInput.oldPassword !== "" && formInput.password !== "") {
    const apiData = {
      OldPassword: formInput.oldPassword,
      Password: formInput.password,
    };
    dispatch(settingChangePassword(apiData));
  }else {
    setLoader(false);
  }

  };

  useEffect(() => {
    if (status.settingChangePassword.data !== "") {
      if (status.settingChangePassword.data.data.statusCode === "200") {
        setSuccess("Password change successfully");
        // setTimeout(() => {
        //   let path = `/user/setting/change-password`;
        //   navigate(path);
        //   window.location.reload();
        // }, 2000);
        removeSuccess();
        setLoader(false);
      }
    }
    if (status.settingChangePassword.data !== "") {
      if (status.settingChangePassword.data.data.statusCode === "400") {
        setFailed(status.settingChangePassword.data.data.message);
        removeError3();
      }
    }
  }, [status]);

  const removeError1 = () => {
    setTimeout(() => {
      setError1("");
    }, 5000);
  };
  const removeError2 = () => {
    setTimeout(() => {
      setError2("");
    }, 5000);
  };
  const removeError3 = () => {
    setTimeout(() => {
      setFailed("");
      setLoader(false);
    }, 5000);
  };

  const removeError4 = () => {
    setTimeout(() => {
      setError3("");
    }, 4000);
  };

  const removeSuccess = () => {
    setTimeout(() => {
      setSuccess("");
      setFormInput(initialInput);
    }, 3000);
  };
  

  return (
    <div
      className={`${styles.dashboard_content} ${styles.accountSetting} ${styles.changePassword}`}
    >
      <div className={`${styles.p} ${styles.mx}`}>
        <div
          className={`${styles.profileContainer} ${styles.settingContainer}`}
        >
          <h3>Change Password</h3>
          <div className={styles.changePasswordGroup}>
            <div className={styles.settingGroup1}>
              {" "}
              <div className="input_item">
                <FormControl variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">
                    Current Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    name="oldPassword"
                    type={showPassword1 ? "text" : "password"}
                    value={formInput.oldPassword}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword1(!showPassword1)}
                          edge="end"
                        >
                          {showPassword1 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {error1 && error1 ? (<div className="validationalert">{error1 && error1}</div>) : ("")}
              </div>
              <div className="input_item">
                <FormControl variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">
                    New Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    name="password"
                    type={showPassword2 ? "text" : "password"}
                    value={formInput.password}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword2(!showPassword2)}
                          edge="end"
                        >
                          {showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {error2 && error2 ? (<div className="validationalert">{error2 && error2}</div>) : ("")}
              </div>
              <div className="input_item">
                <FormControl variant="filled">
                  <InputLabel htmlFor="filled-adornment-password1">
                    Confirm Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password1"
                    name="confirm"
                    type={showPassword3 ? "text" : "password"}
                    value={formInput.confirm}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword3(!showPassword3)}
                          edge="end"
                        >
                          {showPassword3 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {error3 && error3 ? (<div className="validationalert">{error3 && error3}</div>) : ("")}
              </div>
              <div className="buttoncontain top20">
                {failed && failed ? (<div className="invalidMessageabsolute">{failed && failed}</div>) : ("")}
                {success && success ? (<div className="successMessageabsolute">{success && success}</div>) : ("")}
                <Button type="button" onClick={handleSubmit} className="primary">Save Password {loader ? (<CircularProgress size="15px" style={{ color: "#ffffff" }}/>) : ("")}</Button>
              </div>
            </div>

            <div className={styles.settingGroup2}>
              <p>Password should contain only allowed characters.</p>
              <p>Password must be at least 8 and no more than 14 characters.</p>
              <p>Minimum 1 letter of the Latin alphabet (A-Z) is uppercase.</p>
              <p>Minimum 1 letter of the Latin alphabet (a-z) lowercase.</p>
              <p>At least 1 digit (0-9).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
