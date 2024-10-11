import axios from "axios";
import { auth, base_url } from "../../config";
import { profile } from "../constant";
import { toast } from 'react-toastify';

export const countryList = () => (dispatch) => {
  const url = `${base_url}/master/country-list`;

  axios.get(url).then((response) => {
    dispatch({
      type: profile.COUNTRY_LISTS,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const userProfileDetails = (formData) => (dispatch) => {
  const url = `${base_url}/member/get-user-profile-details`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: profile.USER_PROFILE_DETAILS,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const updateProfileDetails = (formData) => (dispatch) => {
  const url = `${base_url}/member/update-user-profile-details`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: profile.UPDATE_PROFILE_DETAILS,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const uploadDocument = (formData) => (dispatch) => {
  const url = `${base_url}/member/upload-document`;
  const data = formData;
  const headers = {
    Authorization: auth,
    "Content-Type": "multipart/form-data",
  };
  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: profile.UPLOAD_DOCUMENT,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};
