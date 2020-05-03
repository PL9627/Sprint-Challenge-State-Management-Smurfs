import React from "react";

const SmurfCard = (props) => {
  return (
    <div className="smurfCard">
      <p>{props.smurfs.name}</p>
      <p>{props.smurfs.age}</p>
      <p>{props.smurfs.height}</p>
    </div>
  );
};

export default SmurfCard;