import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/users", inputData).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  };
  return (
    <div className="container w-50 pl-10 pt-10">
      <h1> Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="pt-5 pb-5 row">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
        </div>
        <div className="pb-5 row">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
            Email
          </label>

          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
