import { transactions } from "../constant";

const initialValue = { data: "" };

export const transactionsDailyReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.DAILY_INCOMING_REPORTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const directIncomeReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.DIRECT_INCOME_REPORTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const incomeWalletReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.INCOME_WALLET_REPORTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const topupWalletReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.TOPUP_WALLET_REPORTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const NTCLWalletReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.NTCL_WALLET_REPORTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const levelIncomeReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.LEVEL_INCOME_REPORTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const maturityWalletReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.MATURITY_WALLET_REPORTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const maturityWidthrawalHistorytReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.MATURITY_WIDTHRAWAL_HISTORY_REPORTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const topupTransferFundReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.TOPUP_TRANSFER_FUND:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const autoDepositReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.AUTO_DEPOSIT_REPORT:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const manualfundTopupDepositReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.MANUALFUND_TOPUP_DEPOSIT:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const incomeAndWalletSummeryReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.INCOME_AND_WALLET_SUMMERY:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const userReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.USER_TRANSACTION_REPORTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const fundRequestListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.FUND_REQUEST_LIST:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};


export const lebelDetailsReportReducer = (state = initialValue, action) => {
  switch (action.type) {
    case transactions.LEBEL_DETAILS_REPORT:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};


