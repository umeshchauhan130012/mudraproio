import { widthdrawal } from "../constant";

const initialValue = { data: "" };

export const widthdrawalOtpSendReducer = (state = initialValue, action) => {
  switch (action.type) {
    case widthdrawal.WIDTHDRAWAL_OTP_SEND:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const varifyOtpReducer = (state = initialValue, action) => {
  switch (action.type) {
    case widthdrawal.WIDTHDRAWAL_VARIFY_OTP:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const calculateAmountReducer = (state = initialValue, action) => {
  switch (action.type) {
    case widthdrawal.WIDTHDRAWAL_CALCULATE_AMOUNT:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const processAmountReducer = (state = initialValue, action) => {
  switch (action.type) {
    case widthdrawal.WIDTHDRAWAL_PROCESS_AMOUNT:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const maturityAmountReducer = (state = initialValue, action) => {
  switch (action.type) {
    case widthdrawal.WIDTHDRAWAL_MATURITY_AMOUNT:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const getMdrUsdtRetopAmountReducer = (state = initialValue, action) => {
  switch (action.type) {
    case widthdrawal.MDR_USDT_RETOP_AMOUNT:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};



