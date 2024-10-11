import { combineReducers } from "redux";
import {
  userLogin,
  userReferralId,
  userSignUp,
  userResendEmail,
  userEmailVerification,
  userForgotPasswordSendOtp,
  userForgotPasswordVerifyOtp,
  userChangePassword,
  userWalletDetails,
  Enable2FAEnablGenerateQrReducer,
  Enable2FAVarifyOTPReducer,
  user2FADisableReducer,
  user2FAValidateReducer,
} from "./authReducer";
import {
  bypackagesReducer,
  bypackesHistoryReportReducer,
  dashboardDeatilsReducer,
  eventListReducer,
  myStakesReportReducer,
  teamLevelSummaryReportReducer,
  teamLevelWiseListReducer,
  teamSummaryDetailReducer,
} from "./dashboardReducer";
import {
  countryListReducer,
  updateProfileDetailsReducer,
  userProfileDetailsReducer,
  uploadDocumentReducer,
} from "./profileReducer";
import {
  addressProfDocListReducer,
  changePasswordReducer,
  idProfDocListReducer,
  updateKYCDetailsReducer,
} from "./settingReducer";
import { 
  newTicketReducer,
  ticketCategoryListReducer,
  ticketChatDetailsReducer,
  ticketDetailsReducer,
  ticketListReducer,
  ticketReplyReducer,
} from "./supportReducer";
import {
  directIncomeReportReducer,
  incomeWalletReportReducer,
  levelIncomeReportReducer,
  NTCLWalletReportReducer,
  topupWalletReportReducer,
  transactionsDailyReportReducer,
  maturityWalletReportReducer,
  incomeAndWalletSummeryReducer,
  topupTransferFundReducer,
  autoDepositReportReducer,
  manualfundTopupDepositReducer,
  userReportReducer,
  fundRequestListReducer,
  maturityWidthrawalHistorytReportReducer,
  lebelDetailsReportReducer,
} from "./transactionReducer";
import {
  addFundReducer,
  autoDepositReducer,
  fundTransferReducer,
  getMDRReducer,
  getUSDTReducer,
  paymodeIdAddressReducer,
  paymodeListReducer,
  varifyTransferReducer,
} from "./walletReducer";
import {
  calculateAmountReducer,
  processAmountReducer,
  varifyOtpReducer,
  widthdrawalOtpSendReducer,
  maturityAmountReducer,
  getMdrUsdtRetopAmountReducer,
} from "./withdrawalReducer";
import { 
  rewardDetailReducer,
  rewardTrackingReportDetailReducer,
} from "./rewardReducer";

const RootReducer = combineReducers({
  login: userLogin,
  referralId: userReferralId,
  signUp: userSignUp,
  resendEmail: userResendEmail,
  emailVerification: userEmailVerification,
  forgotPasswordSendOtp: userForgotPasswordSendOtp,
  forgotPasswordVerifyOtp: userForgotPasswordVerifyOtp,
  changePassword: userChangePassword,
  walletDetails: userWalletDetails,
  Enable2FAEnablGenerateQr: Enable2FAEnablGenerateQrReducer,
  Enable2FAVarifyOTP: Enable2FAVarifyOTPReducer,
  user2FADisable: user2FADisableReducer,
  user2FAValidate: user2FAValidateReducer,

  paymodeList: paymodeListReducer,
  paymodeIdAddress: paymodeIdAddressReducer,
  addFund: addFundReducer,
  varifyTransfer: varifyTransferReducer,
  fundTransfer: fundTransferReducer,
  autoDeposit: autoDepositReducer,
  getMdr: getMDRReducer,
  getUsdt: getUSDTReducer,

  widthdrawalOtpSend: widthdrawalOtpSendReducer,
  varifyOtp: varifyOtpReducer,
  calculateAmount: calculateAmountReducer,
  processAmount: processAmountReducer,
  maturityAmount: maturityAmountReducer,
  getMdrUsdtRetopAmount: getMdrUsdtRetopAmountReducer,

  eventList: eventListReducer,
  bypackages: bypackagesReducer,
  dashboardDetails: dashboardDeatilsReducer,
  myStakesReport: myStakesReportReducer,
  bypackesHistoryReport: bypackesHistoryReportReducer,
  teamSummaryDetail: teamSummaryDetailReducer,
  teamLevelSummaryReport: teamLevelSummaryReportReducer,
  teamLevelWiseList: teamLevelWiseListReducer,

  transactionsDailyReport: transactionsDailyReportReducer,
  directIncomeReport: directIncomeReportReducer,
  incomeWalletReport: incomeWalletReportReducer,
  topupWalletReport: topupWalletReportReducer,
  NTCLWalletReport: NTCLWalletReportReducer,
  levelIncomeReport: levelIncomeReportReducer,
  maturityWalletReport: maturityWalletReportReducer,
  maturityWidthrawalHistorytReport: maturityWidthrawalHistorytReportReducer,
  incomeAndWalletSummery: incomeAndWalletSummeryReducer,
  topupTransferFund: topupTransferFundReducer,
  autoDepositReport: autoDepositReportReducer,
  manualfundTopupDeposit: manualfundTopupDepositReducer,
  userReport: userReportReducer,
  fundRequestList: fundRequestListReducer,
  lebelDetailsReport: lebelDetailsReportReducer,

  countryList: countryListReducer,
  userProfileDetails: userProfileDetailsReducer,
  updateProfileDetails: updateProfileDetailsReducer,
  uploadDocument: uploadDocumentReducer,

  idProfDocList: idProfDocListReducer,
  addressProfDocList: addressProfDocListReducer,
  updateKYCDetails: updateKYCDetailsReducer,
  settingChangePassword: changePasswordReducer,

  newTicket: newTicketReducer,
  ticketCategoryList : ticketCategoryListReducer,
  ticketList : ticketListReducer,
  ticketDetails : ticketDetailsReducer,
  ChatDetails : ticketChatDetailsReducer,
  ticketReply : ticketReplyReducer,

  rewardDetail: rewardDetailReducer,
  trackingReportDetail: rewardTrackingReportDetailReducer,
});

export default RootReducer;
