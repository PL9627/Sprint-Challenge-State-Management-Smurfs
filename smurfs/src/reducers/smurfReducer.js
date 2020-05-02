import { GET_SMURF, OBTAIN_SMURF } from "../actions/smurfActions";

const initialState = [
  {
    name: "",
    age: 0,
    height: "0cm",
  },
];

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
      case OBTAIN_SMURF:
          return {
            ...state, smurfs: action.payload
          };
    default:
      return state;
  }
};

export default smurfReducer;
