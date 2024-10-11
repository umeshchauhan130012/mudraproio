import { dashboard } from "../constant";

const initialValue = { data: "" };

export const eventListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case dashboard.EVENTS_LIST:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const bypackagesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case dashboard.BYPACKAGES:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const dashboardDeatilsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case dashboard.DASHBOARD_DETAILS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };
    case dashboard.DASHBOARD_DETAILS_FAILED:
      //console.log(action.payload, action.type);
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export const myStakesReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case dashboard.MY_STAKES_REPORTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const bypackesHistoryReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case dashboard.BYPACKAGES_HISTORY:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const teamSummaryDetailReducer = (state = initialValue, action) => {
  switch (action.type) {
    case dashboard.TEAM_SUMMARY_DETAILS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const teamLevelSummaryReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case dashboard.TEAM_LEVEL_SUMMARY_REPORTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const teamLevelWiseListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case dashboard.TEAM_LEVEL_WISE_LIST:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};
