import { GET_SMURF, OBTAIN_SMURF } from "../actions/smurfActions";

const initialState = [
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 1
  },
];

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTAIN_SMURF:
      return {
        ...state,
        smurfs: action.payload,
      };
    case GET_SMURF:
      return {
        ...state,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};

export default smurfReducer;
