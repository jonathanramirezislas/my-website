import { types } from "../types/types";

const initialState = {
  color: "purple-700",
};

export const colorReducer = (state = initialState, action) => {
  const { type, payload: color } = action;
  
  switch (type) {
    case types.colorUpdated:
      return {
        ...state,
        color
      };

    default:
      return state;
  }

};
