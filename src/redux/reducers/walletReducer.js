import { walletGetApi } from "../constant";

const initialValue = { data: "" };

export const paymodeListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case walletGetApi.WALLET_PAYMODE_LIST:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const paymodeIdAddressReducer = (state = initialValue, action) => {
  switch (action.type) {
    case walletGetApi.WALLET_PAYMODE_ID_ADDRESS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const addFundReducer = (state = initialValue, action) => {
  switch (action.type) {
    case walletGetApi.WALLET_ADD_FUND:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const varifyTransferReducer = (state = initialValue, action) => {
  switch (action.type) {
    case walletGetApi.WALLET_VARIFY_TRANSFER:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const fundTransferReducer = (state = initialValue, action) => {
  switch (action.type) {
    case walletGetApi.WALLET_FUND_TRANSFER:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const autoDepositReducer = (state = initialValue, action) => {
  switch (action.type) {
    case walletGetApi.WALLET_AUTO_DEPOSIT:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const getMDRReducer = (state = initialValue, action) => {
  switch (action.type) {
    case walletGetApi.WALLET_GET_MDR:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const getUSDTReducer = (state = initialValue, action) => {
  switch (action.type) {
    case walletGetApi.WALLET_GET_USDT:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};
