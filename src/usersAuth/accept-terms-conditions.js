import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { userEmailVarification } from "../redux/actions/userAuth";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../styles/login.module.css";

export default function AcceptAllTermsCondition() {
  const [loader, setLoader] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);

  const status = useSelector((state) => state);
  // let [searchParams, setSearchParams] = useSearchParams();
  // let param = searchParams.get("param");
  // console.log(param);

  let param = window.location.href
  // param = param.split("?")[1].split("=")[1]

  const routeChange = (e) => {
    e.preventDefault();
    if (checkbox1 && checkbox2 && checkbox3 && checkbox4 && checkbox5) {
      let apiData = { ActivationUrl: `${param}`};
      //console.log(apiData);
      dispatch(userEmailVarification(apiData));
    }
  };

  useEffect(() => {
    if (status.emailVerification.data !== "") {
      if (status.emailVerification.data.data.message === "Success") {
        setSuccessMessage(status.emailVerification.data.data.message);
        removeSuccessr();
        setLoader(false);
        setTimeout(() => {
          let path = `/login`;
          navigate(path);
        }, 500);
      }
      if (status.emailVerification.data.data.statusCode === "400") {
        setErrorMessage(status.emailVerification.data.data.message);
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
            <div
              className={`${styles.logincontent_center} ${styles.logincontent_checkbx} `}
            >
              <div className={styles.usertitleicon}>
                <label>
                  <h5>Accept Legal Document</h5>
                  <p>
                    Please accept all actual versions of Privacy Policies, Terms
                    and Conditions, Terms of Use for these homepages:
                  </p>
                </label>
              </div>
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
                  <h5>Mudra Pro</h5>
                  <p>
                    <Link to="">mudrapro.io</Link>
                  </p>
                </label>
              </div>
              <ul className={styles.checkstyle}>
                <li>
                  <label>
                    <input
                      name="checkbox1"
                      onChange={() => setCheckbox1(!checkbox1)}
                      type="checkbox"
                    />
                    <span></span>
                  </label>
                  <p>
                    I confirm that I have read, understood and agreed to the
                    General <Link>Terms and Conditions</Link>
                  </p>
                </li>
                <li>
                  <label>
                    <input
                      name="checkbox2"
                      onChange={() => setCheckbox2(!checkbox2)}
                      type="checkbox"
                    />
                    <span></span>
                  </label>
                  <p>
                    I confirm that I have read, understood and agreed to the{" "}
                    <Link>Data and Privacy Policy</Link>
                  </p>
                </li>
                <li>
                  <label>
                    <input
                      name="checkbox3"
                      onChange={() => setCheckbox3(!checkbox3)}
                      type="checkbox"
                    />
                    <span></span>
                  </label>
                  <p>
                    I confirm that all information provided by myself is correct
                    and that Mudra Genesis will be notified of any changes.
                  </p>
                </li>
              </ul>
              <div className={styles.extracover}>
                <ul className={styles.extracoverul}>
                  <li>
                    <label className={styles.headingul}>Accept All</label>
                    <span className={styles.arrocheck}>
                      <input
                        name="checkbox4"
                        onChange={() => setCheckbox4(!checkbox4)}
                        type="checkbox"
                      />
                      <span></span>
                    </span>
                  </li>
                  <li>
                    <label>
                      I hereby accept and confirm my agreement with mentioned
                      documents
                    </label>
                    <span className={styles.arrocheck}>
                      <input
                        name="checkbox5"
                        onChange={() => setCheckbox5(!checkbox5)}
                        type="checkbox"
                      />
                      <span></span>
                    </span>
                  </li>
                </ul>
                <div className="buttoncontain top25">
                  {successMessage && successMessage ? (<div className="successMessageabsolute">{successMessage && successMessage}</div>) : ("")}
                  {errorMessage && errorMessage ? (<div className="invalidMessageabsolute">{errorMessage && errorMessage}</div>) : ("")}
                  <Button onClick={routeChange} className="primary" >Continue {loader ? (<CircularProgress size="15px" style={{ color: "#ffffff" }}/>) : ("")}</Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
