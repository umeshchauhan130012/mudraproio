import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PhoneIcon from "@mui/icons-material/Phone";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from "../styles/login.module.css";
// import { countryCode } from "../components/countryCode";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { userReferralId, userSignup } from "../redux/actions/userAuth";
import { useEffect } from "react";
import { countryList } from "../redux/actions/profile";

export default function Signup() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let initialInput = {
    email: "",
    name: "",
    phone: "",
  };
  let status = useSelector((state) => state);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [referralId, setReferralId] = useState("");
  const [loader, setLoader] = useState(false);
  const [referralIdVerify, setReferralIdVerify] = useState("");
  const [emailIdVerify, setEmailIdVerify] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [userNameVerify, setUserNameVerify] = useState("");
  const [userNumberVerify, setUserNumberVerify] = useState("");
  const [formInput, setFormInput] = useState(initialInput);
  const [checkbox, setcheckbox] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const [values, setValues] = useState({ password: "", showPassword: false });
  const [valuesOld, setValuesOld] = useState({
    password: "",
    showPassword: false,
  });
  const [referralName, setReferralName] = useState("");
  const [allcountryList, setAllCountryList] = useState("");
  const [countryListRegister, setCountryListRegister] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  let param = searchParams.get("refid");


  useEffect(() => {
    let apiData = {};
    dispatch(countryList(apiData));
  }, []);

  useEffect(() => {
    let apiData = {
      ReferralCode: param ? param : referralId,
    };
    dispatch(userReferralId(apiData));
  }, [referralId, param]);

  useEffect(() => {
    if (status.countryList.data !== "") {
      if (status.countryList.data.data.statusCode === "200") {
        setAllCountryList(status.countryList.data.data.result);
      }
    }
  }, [status]);

  const residential = (event) => {
    setCountryListRegister(event.target.value);
  };

  const handleInputChange = (e) => {
    setFormInput((preState) => {
      return { ...preState, [e.target.name]: e.target.value };
    });
    if (formInput.name.length > 3) {
      setUserNameVerify("");
    }
    if (formInput.phone.length > 7) {
      setUserNumberVerify("");
    }
    if (!formInput.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailIdVerify("Please enter valid email");
      return;
    }
    setEmailIdVerify("");
  };

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


  const routeChange = async (event) => {
    event.preventDefault();
    setLoader(true);
    if (status.referralId.data !== "") {
      if (status.referralId.data.data.statusCode === "400") {
        setReferralIdVerify("Invalid Referral ID");
        setLoader(false);
        return;
      }
    }

    if (!formInput.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailIdVerify("Please enter valid email");
      setLoader(false);
      return;
    }


    if (values.password.length === 0) {
      setPasswordVerify("Please enter your password");
      setLoader(false);
      return;
    }

    if (formInput.name.length === 0) {
      setUserNameVerify("Enter your name");
      setLoader(false);
      return;
    }

    if (formInput.phone.length < 7) {
      setUserNumberVerify("Phone must be at least 10 characters");
      setLoader(false);
      return;
    }

    if (
      referralId || param &&
      formInput &&
      values.password &&
      countryListRegister &&
      valuesOld.password &&
      values.password === valuesOld.password &&
      checkbox.checkbox1 &&
      checkbox.checkbox2 &&
      checkbox.checkbox3 &&
      status.referralId.data.data.message === "Success"
    ) {
      let apiData = {
        Fullname: formInput.name,
        Email: formInput.email,
        Password: values.password,
        Mobile: formInput.phone,
        Country: countryListRegister.toString(),
        ReferralCode: param ? param : referralId,
      };
      dispatch(userSignup(apiData));
      return;
    }
    // alert("error");
    
  };


  useEffect(() => {
    let path = `/registration-successfully`;
    if (status.signUp.data !== "") {
      if (status.signUp.data.data.message === "Success") {
        window.sessionStorage.setItem("registeredEmail", formInput.email);
        setSuccessMessage(status.signUp.data.data.message);
        removeSuccessr();
        setTimeout(() => {
          navigate(path);
          window.location.reload();
        }, 500);
        return;
      }
      if (status.signUp.data.data.statusCode === "400") {
        setErrorMessage(status.signUp.data.data.message);
        removeError();
        setLoader(false);
        return;
      }
    }
    if (status.referralId.data !== "") {
      if (status.referralId.data.data.statusCode === "200") {
        setReferralName(status.referralId.data.data.result.fullname);
        setReferralIdVerify("");
        return;
      }
      setReferralName("Referral ID");
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
          <div className={`col-md-6 commd6 ${styles.gradientbrd}`}>
            <div className={styles.logincontentwrp}>
              <div className="logincontent">
                <h1>Sign up</h1>
                <p>Hello, Create a new account</p>
                <div className="inputcontain">
                  <div className="input_item">
                    <FormControl variant="filled">
                      <InputLabel htmlFor="filled-adornment-name">
                        Referral Code
                      </InputLabel>
                      <FilledInput
                        id="referralId"
                        value={param ? param : referralId}
                        disabled={param ? true : false}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton>
                              <SwapHorizIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                        onChange={(e) => {
                          setReferralId(e.target.value);
                        }}
                        name="referralId"
                        variant="filled"
                      />
                    </FormControl>
                    {referralIdVerify && referralIdVerify ? (
                      <label className="validationalert">
                        {referralIdVerify && referralIdVerify}
                      </label>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="input_item">
                    <FormControl variant="filled">
                      <InputLabel htmlFor="filled-adornment-name">
                        Email
                      </InputLabel>
                      <FilledInput
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="off"
                        variant="filled"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton>
                              <AlternateEmailIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                        onChange={ (e) => handleInputChange(e)}
                        onKeyUp={ (e) => handleInputChange(e)}
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
                    {values.password === valuesOld.password ? (
                      ""
                    ) : (
                      <div className="validationalert">
                        Password not Matching
                      </div>
                    )}
                  </div>
                  <div className="input_item">
                    <FormControl variant="filled">
                      <InputLabel htmlFor="filled-adornment-name">
                        Full Name
                      </InputLabel>
                      <FilledInput
                        id="name"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton>
                              <PersonOutlineOutlinedIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                        onChange={handleInputChange}
                        name="name"
                        variant="filled"
                      />
                    </FormControl>
                    {userNameVerify && userNameVerify ? (
                      <label className="validationalert">
                        {userNameVerify && userNameVerify}
                      </label>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="input_item">
                    <FormControl variant="filled">
                      <InputLabel htmlFor="filled-adornment-name">
                        Phone Number
                      </InputLabel>
                      <FilledInput
                        id="phone"
                        type="number"
                        maxLength="10"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton>
                              <PhoneIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                        onChange={handleInputChange}
                        name="phone"
                        variant="filled"
                      />
                    </FormControl>
                    {userNumberVerify && userNumberVerify ? (
                      <label className="validationalert">
                        {userNumberVerify && userNumberVerify}
                      </label>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="input_item">
                    <FormControl variant="filled">
                      <InputLabel id="demo-simple-select-filled-label">
                        Country
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={countryListRegister}
                        onChange={residential}
                      >
                        <MenuItem value="None">
                          <em>None</em>
                        </MenuItem>
                        {allcountryList &&
                          allcountryList.map((data, index) => (
                            <MenuItem value={data.dataFieldId} key={index}>
                              {data.dataFieldText}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 commd6">
            <div className={styles.logincontent_right}>
              <div className={styles.text_lft}>
                <div className={styles.usertitleicon}>
                  <span className={styles.usercircle}>
                    <img
                      src="/images/circleuser.png"
                      alt="user"
                      height={38}
                      width={38}
                    />
                  </span>
                  <label>
                    <h5>{referralName}</h5>
                    <p>Your sponsor</p>
                  </label>
                </div>
                <ul className={styles.checkstyle}>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        checked={checkbox.checkbox1}
                        name="checkbox1"
                        onChange={() =>
                          setcheckbox((preState) => ({
                            ...preState,
                            checkbox1: !checkbox.checkbox1,
                          }))
                        }
                      />
                      <span></span>
                    </label>
                    <p>
                      I confirm that I have read, understood and agreed to the
                      General <Link to="/terms-conditions">Terms and Conditions</Link>
                    </p>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="checkbox1"
                        checked={checkbox.checkbox2}
                        onChange={() =>
                          setcheckbox((preState) => ({
                            ...preState,
                            checkbox2: !checkbox.checkbox2,
                          }))
                        }
                      />
                      <span></span>
                    </label>
                    <p>
                      I confirm that I have read, understood and agreed to the{" "}
                      <Link to="">Data and Privacy Policy</Link>
                    </p>
                  </li>
                  <li>
                    <label>
                      <input
                        type="checkbox"
                        name="checkbox1"
                        checked={checkbox.checkbox3}
                        onChange={() =>
                          setcheckbox((preState) => ({
                            ...preState,
                            checkbox3: !checkbox.checkbox3,
                          }))
                        }
                      />
                      <span></span>
                    </label>
                    <p>
                      I confirm that all information provided by myself is
                      correct and that Mudra Genesis will be notified of any
                      changes.
                    </p>
                  </li>
                </ul>
                <div className="buttoncontain top25">
                {successMessage && successMessage ? (<div className="successMessageabsolute">{successMessage && successMessage}</div>) : ("")}
                {errorMessage && errorMessage ? (<div className="invalidMessageabsolute">{errorMessage && errorMessage}</div>) : ("")}
                
                  <Button
                    onClick={routeChange}
                    className="primary"
                    disabled={
                      checkbox.checkbox1 &&
                      checkbox.checkbox2 &&
                      checkbox.checkbox3
                        ? false
                        : true
                    }
                  >
                    Sign Up{" "}
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
                    Already have a account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
