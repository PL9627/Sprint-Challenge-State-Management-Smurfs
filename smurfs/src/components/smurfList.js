import React from "react";
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

        {smurfs.map((smurf) => {
          <SmurfCard
            key={smurf.id}
            smurf={smurf}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />;
        })}
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

export default connect(mapStateToProps, {fetchSmurf})(SmurfList);
