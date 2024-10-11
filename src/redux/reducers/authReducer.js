import { user } from "../constant";

const initialValue = { data: "" };

export const userLogin = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_LOGIN:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const userReferralId = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_REFERRAL_ID:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const userSignUp = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_SIGNUP:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const userResendEmail = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_RESEND_EMAIL:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const userEmailVerification = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_EMAIL_VARIFICATION:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const userForgotPasswordSendOtp = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_FORGOT_PASSWORD_SEND_OTP:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const userForgotPasswordVerifyOtp = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_FORGOT_PASSWORD_VERIFY_OTP:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const userChangePassword = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_CHANGE_PASSWORD:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const userWalletDetails = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_WALLET_DETAILS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

// 2FA varification
export const Enable2FAEnablGenerateQrReducer = (
  state = initialValue,
  action
) => {
  switch (action.type) {
    case user.USER_ENABLE2FAGENERATEQR:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const Enable2FAVarifyOTPReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_ENABLE2FA:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const user2FADisableReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_DISABLE2FA:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const user2FAValidateReducer = (state = initialValue, action) => {
  switch (action.type) {
    case user.USER_VALIDATE2FA:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

