import React from "react";

const AddSmurf = (props) => {
  return (
    <div>
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </div>
  );
};

export default AddSmurf;
