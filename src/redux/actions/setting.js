import axios from "axios";
import { auth, base_url } from "../../config";
import { setting } from "../constant";
import { toast } from 'react-toastify';

export const settingIdProfDocList = () => (dispatch) => {
  const url = `${base_url}/master/id-proof-doc-list`;

  axios.get(url).then((response) => {
    dispatch({
      type: setting.ID_PROF_DOC_LISTS,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const settingAddressProfDocList = () => (dispatch) => {
  const url = `${base_url}/master/address-proof-doc-list`;

  axios.get(url).then((response) => {
    dispatch({
      type: setting.ADDRESS_PROF_DOC_LISTS,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const settingUpdateKYCDetails = (formData) => (dispatch) => {
  const url = `${base_url}/member/update-user-kyc-details`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: setting.UPDATE_KYC_DETAILS,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const settingChangePassword = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-change-password`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: setting.CHANGE_PASSWORD,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};
