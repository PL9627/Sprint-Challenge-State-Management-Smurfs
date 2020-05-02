import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { obtainSmurf } from "../actions/smurfActions";

const ObtainForm = (props) => {
  const [name, setName] = useState({});

  const [age, setAge] = useState({});

  const [height, setHeight] = useState({});

  const ageChangeHandler = (event) => {
    setAge({ age: event.target.value });
  };

  const nameChangeHandler = (event) => {
    setName({ name: event.target.value });
  };

  const heightChangeHandler = (event) => {
    setHeight({ height: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3333/smurfs", { ...name, ...age, ...height })
      .then((res) => {
        props.obtainSmurf(res.data);
      })
      .catch((err) => {
        console.log("handleSubmit err in obtainForm", err);
      });
  };

  return (
    <div className="obtainForm">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          onChange={nameChangeHandler}
          placeholder="Type smurf name here..."
        />
        <input
          name="age"
          type="number"
          onChange={ageChangeHandler}
          placeholder="Type smurf age here..."
        />
        <input
          name="height"
          type="text"
          onChange={heightChangeHandler}
          placeholder="Type smurf height here..."
        />
        <button type="submit">Create New Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { obtainSmurf })(ObtainForm);
