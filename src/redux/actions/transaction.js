import axios from "axios";
import { auth, base_url } from "../../config";
import { transactions } from "../constant";
import { toast } from 'react-toastify';

export const transactionsDailyReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-daily-income-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.DAILY_INCOMING_REPORTS,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const transactionsDirectIncomeReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-direct-income-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.DIRECT_INCOME_REPORTS,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const transactionsIncomeWalletReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-income-wallet-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.INCOME_WALLET_REPORTS,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const transactionsTopupWalletReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-topup-wallet-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.TOPUP_WALLET_REPORTS,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const transactionsTopupTransferFund = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-topup-transfer-fund`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.TOPUP_TRANSFER_FUND,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const transactionsAutoDepositReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-auto-deposit-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.AUTO_DEPOSIT_REPORT,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const transactionsManualfundTopupDeposit = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-manualfund-topup-deposit`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.MANUALFUND_TOPUP_DEPOSIT,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};


export const transactionsNTCLWalletReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-ntcl-wallet-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.NTCL_WALLET_REPORTS,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const transactionsLevelIncomeReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-level-income-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.LEVEL_INCOME_REPORTS,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });

  

 });
};

export const transactionsMaturityWalletReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-maturity-wallet-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.MATURITY_WALLET_REPORTS,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const transactionsMaturityWidthrawalHistorytReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-maturity-widthrawal-history-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.MATURITY_WIDTHRAWAL_HISTORY_REPORTS,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const transactionsUserReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-transaction_report-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.USER_TRANSACTION_REPORTS,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const transactionsIncomeAndWalletSummery = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-income-and-wallet-summary`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.INCOME_AND_WALLET_SUMMERY,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const transactionsFundRequestList = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-Fund-Request-List`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.FUND_REQUEST_LIST,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};

export const lebelDetailsReport = (formData) => (dispatch) => {
  const url = `${base_url}/member/user-level-details-report`;
  const data = formData;
  const headers = { Authorization: auth };

  axios.post(url, data, { headers }).then((response) => {
    dispatch({
      type: transactions.LEBEL_DETAILS_REPORT,
      payload: response,
    });
  }).catch((error) => {
  toast.error(error.message, {
    position: "bottom-right",
    theme: "colored",
  });
 });
};






