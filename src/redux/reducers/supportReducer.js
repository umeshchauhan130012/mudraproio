import { support } from "../constant";

const initialValue = { data: "" };

export const newTicketReducer = (state = initialValue, action) => {
  switch (action.type) {
    case support.NEW_TICKET:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const ticketCategoryListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case support.TICKET_CATEGORY_LIST:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const ticketListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case support.TICKET_LIST:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const ticketDetailsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case support.TICKET_DETAILS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const ticketChatDetailsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case support.CHAT_DETAILS:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const ticketReplyReducer = (state = initialValue, action) => {
  switch (action.type) {
    case support.TICKET_REPLY:
      //console.log(action.payload, action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

