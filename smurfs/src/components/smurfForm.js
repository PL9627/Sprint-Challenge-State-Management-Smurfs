import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/smurfActions";

const SmurfForm = (props) => {
  const [smurfForm, setSmurfForm] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChanges = (event) => {
    setSmurfForm({ ...smurfForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.postSmurf(smurfForm);
    setSmurfForm({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <div className="smurfForm">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          onChange={handleChanges}
          value={smurfForm.name}
          placeholder="Type Smurf Name Here..."
        />
        <input
          name="age"
          type="text"
          onChange={handleChanges}
          value={smurfForm.age}
          placeholder="Type Smurf Age Here..."
        />
        <input
          name="height"
          type="text"
          onChange={handleChanges}
          value={smurfForm.height}
          placeholder="Type Smurf Height Here..."
        />
        <button type="submit">Post Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurf: state.smurfs,
    err: state.err,
  };
};

/* import React, { useState } from "react";

const SmurfForm = (props) => {
  const [smurfForm, setsmurfForm] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChanges = (event) => {
    setsmurfForm({
      ...smurfForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addSmurf(smurfForm);

    setsmurfForm({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <div className="smurfForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChanges}
          value={smurfForm.name}
          placeholder="Type smurf name here..."
        />
        <input
          type="text"
          name="age"
          onChange={handlesChanges}
          value={smurfForm.age}
          placeholder="Type smurf age here..."
        />
        <input
          type="text"
          name="height"
          onChange={handleChanges}
          value={smurfForm.height}
          placeholder="Type smurf height here..."
        />
        <button type="submit">Create New Smurf</button>
      </form>
    </div>
  );
};*/

export default connect(mapStateToProps, {postSmurf})(SmurfForm);
