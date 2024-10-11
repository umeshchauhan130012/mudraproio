import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import styles from "../styles/login.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userAuth";
import { useEffect } from "react";
// import { auth } from "../config";

export default function Login() {
  const [invalidUser, setInvalidUser] = useState("");
  const [userValidate, setUserValidate] = useState("");
  const [passwordValid, setPasswordValid] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialInput = { email: "" };
  const initialValue = { password: "", showPassword: false };

  const [formInput, setFormInput] = useState(initialInput);
  const [values, setValues] = useState(initialValue);
  const status = useSelector((state) => state);

  const handleInputChange = (e) => {
    setFormInput((preState) => {
      return { ...preState, [e.target.name]: e.target.value };
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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

  useEffect(() => {
    if (formInput.email.length < 4) {
      setUserValidate("");
    }
  }, [formInput.email]);

  useEffect(() => {
    if (values.password.length < 4) {
      setPasswordValid("");
    }
  }, [values.password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput.email.length < 4) {
      setUserValidate("Enter Your ID");
    }

    if (values.password.length < 4) {
      setPasswordValid("Enter Your Password");
    }
    setLoader(true);
    if (!values.password.match(/^\S*$/i)) {
      alert("Password must not contain spaces");
    }
    if (formInput.email !== initialInput.email && values.password !== "") {
      let apiData = {
        LoginId: formInput.email,
        Password: values.password,
      };
      dispatch(userLogin(apiData));
      setLoader(true);
      setValues(initialValue);
      setFormInput(initialInput);
    } else {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (status.login.data !== "") {
      if (status.login.data.data.message === "Success") {
        setLoader(true);
        if(status.login.data.data.result.google2FAAuthentication === 1) {
        // let path = `/authentication-page`;
        let path = `/user/dashboard`
        navigate(path);
        window.location.reload();
        return;
        }
        if(status.login.data.data.result.google2FAAuthentication === 0) {
          // let path = `/authentication-page`;
          let path = `/user/dashboard`
          navigate(path);
          window.location.reload();
          return;
        }
        return;
      }
    }
  }, [status, navigate]);

  useEffect(() => {
    if (status.login.data !== "") {
      if (status.login.data.data.statusCode === "400") {
        let path = `/login`;
        navigate(path);
        setInvalidUser(status.login.data.data.message);
        setLoader(false);
        return;
      }
    }
  }, [status]);

  return (
    <div className="login_wrapper top60 bottom30">
      <div className="container">
        <form className="row customrow_style">
          <div className={`col-md-6 commd6 ${styles.gradientbrd}`}>
            <div className={styles.logincontentwrp}>
              <div className="logincontent">
                <h1>Login</h1>
                <p>Hello, Welcome back to your account!</p>
                <div className="inputcontain">
                  <div className="input_item">
                    <FormControl variant="filled">
                      <InputLabel htmlFor="filled-adornment-name">
                        User ID
                      </InputLabel>
                      <FilledInput
                        id="filled-adornment-name"
                        onChange={handleInputChange}
                        name="email"
                        autoComplete="off"
                        value={formInput.email}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton>
                              <PersonOutlineOutlinedIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                        variant="filled"
                      />
                    </FormControl>
                    {userValidate && userValidate ? (
                      <div className="validationalert">
                        {userValidate && userValidate}
                      </div>
                    ) : (
                      ""
                    )}
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
                        name="password"
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
                    {passwordValid && passwordValid ? (
                      <div className="validationalert">
                        {passwordValid && passwordValid}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="forgotlink">
                  <div>
                    {/* <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={"6LeSgZsdAAAAAKEBqbUahrhNaCvBMN2I6Wa6fYPJ"}
                      onChange={onReCAPTCHAChange}
                    /> */}
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                </div>
                <div className="buttoncontain">
                  {invalidUser && invalidUser ? (
                    <div className="errorresponse">
                      {invalidUser && invalidUser}
                    </div>
                  ) : (
                    ""
                  )}
                  <Button onClick={handleSubmit} primary>
                    Login{" "}
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
                <div className="createaccountlink">
                  <p>
                    Not register yet? <Link to="/sign-up">Create Account</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 commd6">
            <div className={styles.logincontent_right}>
              <h3>Scan to Login</h3>
              <p>
                Scan the QR code using your preferred method. For example, you
                can open the Mudra Pro app, tap in the search bar and point the
                camera at the QR code:
              </p>
              <div className={styles.scan_container}>
                <div className={styles.scanner}>
                  <img
                    src="/images/mudrascan.png"
                    alt="scanner"
                    height={130}
                    width={130}
                  />
                </div>
              </div>
              <div className={styles.instalitation}>
                <h5>Install Application</h5>
                <div className={styles.applive}>
                  <div className={`${styles.appliveiytm} ${styles.appstore}`}>
                    <Link to="">
                      <img
                        src="/images/appstore.png"
                        alt="app store"
                        height={44}
                        width={148}
                      />
                    </Link>
                  </div>
                  <div className={`${styles.appliveiytm} ${styles.googleplay}`}>
                    <Link to="">
                      <img
                        src="/images/googleplay.png"
                        alt="app store"
                        height={44}
                        width={148}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
