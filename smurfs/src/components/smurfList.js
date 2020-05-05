import React, { useContext } from "react";

import { SmurfContext } from "../context/smurfContext";

const SmurfList = () => {
  const { newSmurfs } = useContext(SmurfContext);

  return (
    <div className="smurfList">
      {newSmurfs.map((smurfs) => (
        <div key={smurfs.id}>
          <p>{smurfs.name}</p>
          <p>{smurfs.age}</p>
          <p>{smurfs.height}</p>
        </div>
      ))}
    </div>
  );
};

export default SmurfList;

/* import React from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions/smurfActions";
import SmurfCard from "./smurfCard";

const SmurfList = ({ fetchSmurf, smurfs, isFetching, err }) => {
  if (err !== "") {
    return (
      <div>
        <h1>{err}</h1>

        <button onClick={fetchSmurf}>Create A Smurf</button>
      </div>
    );
  }

  if (isFetching) {
    return <h1>Creating a New Smurf...</h1>;
  } else {
    return (
      <div>
        <h1>Smurf Village Residents</h1>

        <button></button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    err: state.err,
  };
}; */

/* export default connect(mapStateToProps, {fetchSmurf})(SmurfList); */