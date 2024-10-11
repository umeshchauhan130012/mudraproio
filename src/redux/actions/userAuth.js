import axios from "axios";
import { auth, base_url } from "../../config";
import { user } from "../constant";
import { toast } from 'react-toastify';

export const userSignup = (formData) => (dispatch) => {
  const url = `${base_url}/auth/user-registration`;
  const data = formData;
  axios.post(url, data).then((response) => {
    dispatch({
      type: user.USER_SIGNUP,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const userLogin = (formData) => (dispatch) => {
  const url = `${base_url}/auth/user-auth`;
  const data = formData;
  axios.post(url, data).then((response) => {
    window.sessionStorage.setItem("mdrToken", `Bearer ${response.data.result.authToken}`);
    window.sessionStorage.setItem("mdrName", response.data.result.fullname);
    window.sessionStorage.setItem("loginId", response.data.result.loginId);
    window.sessionStorage.setItem("mdrEmail", response.data.result.email);
    window.sessionStorage.setItem("mdr2FA", response.data.result.google2FAAuthentication);
    dispatch({
      type: user.USER_LOGIN,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const userForgotPasswordSendOTP = (formData) => (dispatch) => {
  const url = `${base_url}/auth/forgot-password-send-otp`;
  const data = formData;
  axios.post(url, data).then((response) => {
    dispatch({
      type: user.USER_FORGOT_PASSWORD_SEND_OTP,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const userForgotPasswordVerifyOTP = (formData) => (dispatch) => {
  const url = `${base_url}/auth/forgot-password-verify-otp`;
  const data = formData;
  axios.post(url, data).then((response) => {
    dispatch({
      type: user.USER_FORGOT_PASSWORD_VERIFY_OTP,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const userChangePassword = (formData) => (dispatch) => {
  const url = `${base_url}/auth/forgot-password-change-pass`;
  const data = formData;
  axios.post(url, data).then((response) => {
    dispatch({
      type: user.USER_CHANGE_PASSWORD,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const userReferralId = (formData) => (dispatch) => {
  const url = `${base_url}/auth/verify-referral-code`;
  const data = formData;
  axios.post(url, data).then((response) => {
    dispatch({
      type: user.USER_REFERRAL_ID,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const userResendEmail = (formData) => (dispatch) => {
  const url = `${base_url}/auth/user-registration-email-resend`;
  const data = formData;
  axios.post(url, data).then((response) => {
    dispatch({
      type: user.USER_RESEND_EMAIL,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const userEmailVarification = (formData) => (dispatch) => {
  const url = `${base_url}/auth/user-email-verification`;
  const data = formData;
  axios.post(url, data).then((response) => {
    dispatch({
      type: user.USER_EMAIL_VARIFICATION,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const userWalletDetails = (formData) => (dispatch) => {
  const url = `${base_url}/member/get-wallet-details`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: user.USER_WALLET_DETAILS,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

// 2FA varification
export const userEnable2FAEnablGenerateQr = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-2FA-enable-generate-qr`;
  const data = formData;
  const headers = { Authorization: auth };
  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: user.USER_ENABLE2FAGENERATEQR,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const userEnable2FAVarifyOTP = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-2FA-enable`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: user.USER_ENABLE2FA,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const user2FADisable = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-2FA-disable`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: user.USER_DISABLE2FA,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const user2FAValidate = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-2FA-validate`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: user.USER_VALIDATE2FA,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};
