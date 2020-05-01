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

  return <div></div>;
};

export default getForm;
