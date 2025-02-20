import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./reducer/userReducer";

function Edit() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.userList.filter((user) => user.id === parseInt(id));
  console.log(user[0]);

  const [uname, setUname] = useState(user[0].name);
  const [uemailid, setUemailid] = useState(user[0].emailid);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id,
        name: uname,
        emailid: uemailid,
      })
    );
    navigate("/");
  };

  return (
    <div className="container w-50">
      <div> Edit User</div>
      <form onSubmit={handleEdit}>
        <div className="form-group">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
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
            value={uemailid}
            onChange={(e) => setUemailid(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-10">
          Edit user
        </button>
      </form>
    </div>
  );
}

export default Edit;
