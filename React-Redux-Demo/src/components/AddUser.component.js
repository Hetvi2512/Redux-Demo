import React, { useState } from "react";
import { connect } from "react-redux";
import { addUsers } from "../redux";

function AddUser(props) {
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState([]);
  let handleSubmit = e => {
    e.preventDefault();
    setUser({ userId: userId, title: title, body: body });
    props.addUsers(user);
  };
  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter UserId"
          onChange={e => {
            setUserId(e.target.value);
          }}
        />
        <br />

        <input
          type="text"
          placeholder="Enter Title"
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <br />

        <input
          type="text"
          placeholder="Enter body"
          onChange={e => {
            setBody(e.target.value);
          }}
        />
        <br />
        <button>Submit</button>
      </form>

      
    </div>
  );
  
}

const mapDispatchToProps = dispatch => {
  return {
    addUsers: user => dispatch(addUsers(user))
  };
};

export default connect(null,mapDispatchToProps)(AddUser);
