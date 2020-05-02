import React, { useContext, useState } from "react";
import { SmurfContext } from "../smurfContext/smurfContext";
import { SmurfCard } from "./SmurfCard";

const SmurfList = () => {
  const { smurfs } = useContext(SmurfContext);

  return (
    <div className="smurfList">
      <h1>Smurf Form</h1>

      <div>
        {smurfs.map((smurf) => {
          <SmurfCard key={smurf.id} smurf={smurf} />;
        })}
      </div>
    </div>
  );
};
