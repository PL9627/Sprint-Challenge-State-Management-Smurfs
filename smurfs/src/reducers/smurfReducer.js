import {
  SMURF_FETCH_START,
  SMURF_FETCH_SUCCESS,
  SMURF_FETCH_FAIL,
  SMURF_POST_START,
  SMURF_POST_SUCCESS,
  SMURF_POST_FAIL,
} from "../actions/smurfActions";

const initialState = {
  smurfs: [
    {
      name: "",
      age: null,
      height: "",
      id: null,
    },
  ],
  isFetching: false,
  err: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case SMURF_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
      };
    case SMURF_FETCH_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case SMURF_POST_START:
      return {
        ...state,
      };
    case SMURF_POST_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
      };
    case SMURF_POST_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
};
