import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { obtainSmurf } from "../actions/smurfActions";

const obtainForm = (props) => {
  const [name, setName] = useState({});
  return (
    <div>
      <div></div>
    </div>
  );
};

export default obtainForm;
