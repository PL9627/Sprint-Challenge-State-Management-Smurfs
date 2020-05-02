export const OBTAIN_SMURF = "OBTAIN_SMURF";
export const GET_SMURF = "GET_SMURF";

export const obtainSmurf = (props) => {
  return {
    type: OBTAIN_SMURF,
    payload: props,
  };
};

export const getSmurf = (res) => {
  return {
    type: GET_SMURF,
    payload: res,
  };
};
