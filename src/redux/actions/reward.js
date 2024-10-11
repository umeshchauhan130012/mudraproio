import axios from "axios";
import { auth, base_url } from "../../config";
import { reward } from "../constant";
import { toast } from 'react-toastify';

export const rewardsStatusDetails = () => (dispatch) => {
    const url = `${base_url}/member/get-Rewards-Status-details`;
    const headers = { Authorization: auth };

    axios.get(url, { headers }).then((response) => {
        dispatch({
        type: reward.REWARDS_STATUS,
        payload: response,
        });
    }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

export const rewardsTrackingReportDetails = () => (dispatch) => {
    const url = `${base_url}/member/get-Reward-Tracking-Report-details`;
    const headers = { Authorization: auth };

    axios.get(url, { headers }).then((response) => {
        dispatch({
        type: reward.REWARDS_TRACKING_REPORT,
        payload: response,
        });
    }).catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
      theme: "colored",
    });
   });
};

