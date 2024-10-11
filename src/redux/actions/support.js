import axios from "axios";
import { auth, base_url } from "../../config";
import { support } from "../constant";
import { toast } from 'react-toastify';

export const supportNewTicket = (formData) => (dispatch) => {
  const url = `${base_url}/member/generate-new-ticket`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: support.NEW_TICKET,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const supportTicketCategoryList = () => (dispatch) => {
  const url = `${base_url}/master/support-ticket-category-list`;

  axios.get(url).then((response) => {
    dispatch({
      type: support.TICKET_CATEGORY_LIST,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const supportTicketList = (formData) => (dispatch) => {
  const url = `${base_url}/member/get-user-support-tickets-list`;
  const data = {formData};
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: support.TICKET_LIST,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const supportTicketDetails = (formData) => (dispatch) => {
  const url = `${base_url}/member/get-ticket-details`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: support.TICKET_DETAILS,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const supportChatDetails = (formData) => (dispatch) => {
  const url = `${base_url}/member/get-ticket-chat-details`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: support.CHAT_DETAILS,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const supportTicketReply = (formData) => (dispatch) => {
  const url = `${base_url}/member/save-ticket-reply`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: support.TICKET_REPLY,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};




