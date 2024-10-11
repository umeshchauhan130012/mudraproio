import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "../styles/login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userChangePassword } from "../redux/actions/userAuth";

export default function PasswordRecovery() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [valuesOld, setValuesOld] = useState({
    password: "",
    showPassword: false,
  });
  const [passwordVerify, setPasswordVerify] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const status = useSelector((state) => state);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    if (values.password.length < 3) {
      setPasswordVerify("Password length must be at least 3 characters");
      return;
    }
    if (!values.password.match(/^\S*$/i)) {
      setPasswordVerify("Password must not contain spaces");
      return;
    }
    setPasswordVerify("");
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange1 = (prop) => (event) => {
    setValuesOld({ ...valuesOld, [prop]: event.target.value });
  };
  const handleClickShowPassword1 = () => {
    setValuesOld({
      ...valuesOld,
      showPassword: !valuesOld.showPassword,
    });
  };
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };
  let navigate = useNavigate();
  const routeChange = (e) => {
    e.preventDefault();
    if (values.password !== valuesOld.password) {
      setConfirmPassword("Password does not match");
      return;
    }
    setConfirmPassword("");
    if (values.password && valuesOld.password) {
      let apiData = {
        Email: window.sessionStorage.getItem("forgotEmail"),
        Password: values.password,
      };
      dispatch(userChangePassword(apiData));
    }
  };

  useEffect(() => {
    let path = `/successfully-reset-password`;
    if (status.changePassword.data !== "") {
      if (status.changePassword.data.data.message === "Success") {
        navigate(path);
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
                  <h5>Password Recovery</h5>
                  <p>Please enter new password</p>
                </label>
              </div>
              <div className="input_item">
                <FormControl variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {passwordVerify && passwordVerify ? (
                  <label className="validationalert">
                    {passwordVerify && passwordVerify}
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="input_item">
                <FormControl variant="filled">
                  <InputLabel htmlFor="filled-adornment-password1">
                    Confirm Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password1"
                    type={valuesOld.showPassword ? "text" : "password"}
                    value={valuesOld.password}
                    onChange={handleChange1("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword1}
                          onMouseDown={handleMouseDownPassword1}
                          edge="end"
                        >
                          {valuesOld.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {confirmPassword && confirmPassword ? (
                  <label className="validationalert">
                    {confirmPassword && confirmPassword}
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="buttoncontain top20">
                <Button onClick={routeChange} content="Change Password" primary />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
