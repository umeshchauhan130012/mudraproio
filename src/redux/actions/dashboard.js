import axios from "axios";
import { auth, base_url } from "../../config";
import { dashboard } from "../constant";
import { toast } from 'react-toastify';

export const eventList = () => (dispatch) => {
  const url = `${base_url}/master/news-event-list`;

  axios.get(url).then((response) => {
    dispatch({
      type: dashboard.EVENTS_LIST,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const bypackages = (formData) => (dispatch) => {
  const url = `${base_url}/member/buy-package`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: dashboard.BYPACKAGES,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const dashboardDeatils = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-dashboard-details`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: dashboard.DASHBOARD_DETAILS,
      payload: response,
    });
  }).catch((error) => {
    dispatch({
      type: dashboard.DASHBOARD_DETAILS_FAILED,
      payload: '500',
    });
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const dashboardMyStakesReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-my-stakes-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: dashboard.MY_STAKES_REPORTS,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const dashboardBypackesHistoryReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-buying-history-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: dashboard.BYPACKAGES_HISTORY,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const dashboardTeamSummaryDetail = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-team-summary-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: dashboard.TEAM_SUMMARY_DETAILS,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const dashboardTeamLevelSummaryReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-team-level-summary-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: dashboard.TEAM_LEVEL_SUMMARY_REPORTS,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const dashboardTeamLevelWiseList = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-team-level-wise-list`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: dashboard.TEAM_LEVEL_WISE_LIST,
      payload: response,
    });
  }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};
