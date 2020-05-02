import { GET_SMURF, OBTAIN_SMURF } from "../actions/smurfActions";

const initialState = [
  {
    name: "",
    age: 0,
    height: "0cm",
  },
];

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF:
      return {
        ...state,
        smurfs: action.payload,
      };
    case OBTAIN_SMURF:
      return {
        ...state,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};
