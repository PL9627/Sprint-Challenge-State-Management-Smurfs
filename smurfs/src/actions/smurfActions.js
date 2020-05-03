import axios from "axios";

export const SMURF_FETCH_START = "SMURF_FETCH_START";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_FAIL = "SMURF_FETCH_FAIL";

export const SMURF_POST_START = "SMURF_POST_START";
export const SMURF_POST_SUCCESS = "SMURF_POST_SUCCESS";
export const SMURF_POST_FAIL = "SMURF_POST_FAIL";

export const fetchSmurf = () => (dispatch) => {
  dispatch({ type: SMURF_FETCH_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res);

      dispatch({ type: SMURF_FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log("actions fetch err", err));
};

export const postSmurf = () => (dispatch) => {
    dispatch({type: SMURF_POST_START});
}