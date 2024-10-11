import { setting } from "../constant";

const initialValue = { data: "" };

export const idProfDocListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case setting.ID_PROF_DOC_LISTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const addressProfDocListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case setting.ADDRESS_PROF_DOC_LISTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const updateKYCDetailsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case setting.UPDATE_KYC_DETAILS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const changePasswordReducer = (state = initialValue, action) => {
  switch (action.type) {
    case setting.CHANGE_PASSWORD:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};
