import { profile } from "../constant";

const initialValue = { data: "" };

export const countryListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case profile.COUNTRY_LISTS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const userProfileDetailsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case profile.USER_PROFILE_DETAILS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const updateProfileDetailsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case profile.UPDATE_PROFILE_DETAILS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const uploadDocumentReducer = (state = initialValue, action) => {
  switch (action.type) {
    case profile.UPLOAD_DOCUMENT:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};
