import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getSmurf } from "../actions/smurfActions";

const GetForm = (props) => {
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        props.getSmurf(res.data);
      })
      .catch((err) => console.log("getForm axios err", err));
  });

  return (
    <>
      <h1>Smurf Form</h1>

      {props.smurfs
        ? props.smurfs.map((smurf) => {
            return (
              <div key={smurf.id}>
                <p>name: {smurf.name}</p>
                <p>age: {smurf.age}</p>
                <p>height: {smurf.height}</p>
              </div>
            );
          })
        : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { getSmurf })(GetForm);
