import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
import styles from "../styles/login.module.css";

export default function PasswordReset() {
  const navigate = useNavigate();
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
                  <h5>Success</h5>
                  <p>Reset Password Successfully</p>
                </label>
              </div>
              <ul className={styles.checkstyle}>
                <li>
                  <p>You may now log in with your new password</p>
                </li>
              </ul>
              <div className="buttoncontain">
                <Button
                  content="Login to mudra pro"
                  primary
                  onClick={() => navigate("/login")}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
