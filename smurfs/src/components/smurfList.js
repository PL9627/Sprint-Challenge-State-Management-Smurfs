import React, { useContext } from "react";
import { SmurfContext } from "../smurfContext/smurfContext";
import SmurfCard from "./SmurfCard";

const SmurfList = () => {
  const { smurf } = useContext(SmurfContext);

  return (
    <div className="smurfList">
      <h1>Smurf Form</h1>

      <div>
        {smurf.map((smurf) => (
          <SmurfCard key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
};

export default SmurfList;
