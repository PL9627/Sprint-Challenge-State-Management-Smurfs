import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getSmurf } from "../actions/smurfActions";

const getForm = (props) => {
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res);

        props.getSmurf(res.data);
      })
      .catch((err) => console.log("getForm axios err", err));
  });

  return (
    <div className="getForm">
      <h1>Smurf Form</h1>

      {props.smurfs
        ? props.smurfs.map((smurf) => {
            return (
              <div key={smurf.id}>
                <p>{smurf.name}</p>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { getSmurf })(getForm);
