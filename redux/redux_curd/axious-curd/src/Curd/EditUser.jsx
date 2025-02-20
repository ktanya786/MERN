import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  console.log(id);
  const [inputData, setInputData] = useState({
    id: id,
    name: "",
    email: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputData);
    // axios
    //   .post("http://localhost:3000/users/" + id)
    //   .then((response) => {
    //     alert("User updated successfully!");
    //     navigate("/");
    //   })
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container w-50 pl-10 pt-10">
      <h1> Edit/Update User</h1>
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
              value={inputData.name}
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
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
