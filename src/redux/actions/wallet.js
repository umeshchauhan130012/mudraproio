import axios from "axios";
import { auth, base_url } from "../../config";
import { walletGetApi } from "../constant";
import { ToastContainer, toast } from 'react-toastify';

export const walletPaymodeList = () => (dispatch) => {
  const url = `${base_url}/master/paymode-list`;

  axios.get(url).then((response) => {
    dispatch({
      type: walletGetApi.WALLET_PAYMODE_LIST,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const walletPaymodeIdAddress = (formData) => (dispatch) => {
  const url = `${base_url}/master/paymode-address`;
  const data = formData;

  axios.post(url, data).then((response) => {
    dispatch({
      type: walletGetApi.WALLET_PAYMODE_ID_ADDRESS,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const walletAddFund = (formData) => (dispatch) => {
  const url = `${base_url}/member/add-fund-request`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: walletGetApi.WALLET_ADD_FUND,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const walletVerifyTransfer = (formData) => (dispatch) => {
  const url = `${base_url}/member/verify-transfer-team-member`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: walletGetApi.WALLET_VARIFY_TRANSFER,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const walletFundTransfer = (formData) => (dispatch) => {
  const url = `${base_url}/member/fund-transfer`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: walletGetApi.WALLET_FUND_TRANSFER,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const walletAutoDeposit = () => (dispatch) => {
  const url = `${base_url}/member/get-user-deposit-address`;
  const data = {};
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: walletGetApi.WALLET_AUTO_DEPOSIT,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const walletGetMDR = (formData) => (dispatch) => {
  const url = `${base_url}/member/get-mdr-amount`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: walletGetApi.WALLET_GET_MDR,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const walletGetUSDT = (formData) => (dispatch) => {
  const url = `${base_url}/member/get-usdt-amount`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: walletGetApi.WALLET_GET_USDT,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};
