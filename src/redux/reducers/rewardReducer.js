import { reward } from "../constant";

const initialValue = { data: "" };

export const rewardDetailReducer = (state = initialValue, action) => {
  switch (action.type) {
    case reward.REWARDS_STATUS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};
  

export const rewardTrackingReportDetailReducer = (state = initialValue, action) => {
  switch (action.type) {
    case reward.REWARDS_TRACKING_REPORT:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};