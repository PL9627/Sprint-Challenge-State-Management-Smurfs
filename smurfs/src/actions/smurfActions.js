const OBTAIN_SMURF = "OBTAIN_SMURF";
const GET_SMURF = "GET_SMURF";

export const obtainSmurf = (res) => {
  return {
    type: OBTAIN_SMURF,
    payload: res,
  };
};

export const getSmurf = (props) => {
  return {
    type: GET_SMURF,
    payload: props,
  };
};
