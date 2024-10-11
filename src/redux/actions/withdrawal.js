import axios from "axios";
import { auth, base_url } from "../../config";
import { widthdrawal } from "../constant";
import { ToastContainer, toast } from 'react-toastify';

export const widthdrawalOtpSend = (formData) => (dispatch) => {
  const url = `${base_url}/member/send-withdrawal-otp`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: widthdrawal.WIDTHDRAWAL_OTP_SEND,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const widthdrawalVarifyOtp = (formData) => (dispatch) => {
  const url = `${base_url}/member/verify-withdrawal-otp`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: widthdrawal.WIDTHDRAWAL_VARIFY_OTP,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const widthdrawalCalculateAmount = (formData) => (dispatch) => {
  const url = `${base_url}/member/calculate-withdrawal-amount`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: widthdrawal.WIDTHDRAWAL_CALCULATE_AMOUNT,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const widthdrawalProcessAmount = (formData) => (dispatch) => {
  const url = `${base_url}/member/process-withdrawal-amount`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    //console.log("datatat",response);
    dispatch({
      type: widthdrawal.WIDTHDRAWAL_PROCESS_AMOUNT,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const withdrawalMaturityAmount = (formData) => (dispatch) => {
  const url = `${base_url}/member/maturity-withdrawal-or-retopup`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: widthdrawal.WIDTHDRAWAL_MATURITY_AMOUNT,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const getMdrUsdtRetopAmount = (formData) => (dispatch) => {
  const url = `${base_url}/member/get-mdr-usdt-retop-amount`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: widthdrawal.MDR_USDT_RETOP_AMOUNT,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};


