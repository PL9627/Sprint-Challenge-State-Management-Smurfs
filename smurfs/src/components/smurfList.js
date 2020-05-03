import React from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions/smurfActions";

const SmurfList = ({ fetchSmurf, smurfs, isFetching, err }) => {
  if (err !== "") {
    return (
      <div>
        <h1>{err}</h1>

        <button onClick={fetchSmurf}>Create A Smurf</button>
      </div>
    );
  };

  if (isFetching) {
    return <h1>Creating a New Smurf...</h1>
  } else {
    return (
      <div>
        <h1>Smurf Village Residents</h1>


      </div>
    )
  }
};

/* import React, { useContext } from "react";

import SmurfCard from "./SmurfCard";

const SmurfList = () => {
  const { smurf } = useContext(SmurfContext);

  return (
    <div className="smurfList">
      <h1>Smurf Form</h1>

      <div>
        {smurf.map((smurfs) => (
          <SmurfCard key={smurfs.id} smurfs={smurfs} />
        ))}
      </div>
    </div>
  );
};*/

export default SmurfList;