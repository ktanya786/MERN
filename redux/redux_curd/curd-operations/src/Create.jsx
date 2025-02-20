import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./reducer/userReducer";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [emailid, setEmailid] = useState("");

  const users = useSelector((state) => state.users);
  var idLength = 0;
  if (users) {
    idLength = users.userList[users.userList.length - 1].id;
  } else {
    idLength = 0;
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        id: idLength + 1,
        name,
        emailid,
      })
    );
    navigate("/");
  };

  return (
    <div className="container w-50">
      <div> Add new User</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imputEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="email@example.com"
            onChange={(e) => setEmailid(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-10">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
