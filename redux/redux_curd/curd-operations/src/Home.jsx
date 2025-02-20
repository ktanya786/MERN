import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./reducer/userReducer";

function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (userId) => {
    // delete user logic here
    console.log("in handle delete");
    dispatch(deleteUser({ id: userId }));
  };

  return (
    <div className="container">
      <h2> CURD with JSON server</h2>
      <Link className="btn btn-success my-3" to="/create">
        Create +
      </Link>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {users.userList.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td> {user.name}</td>
              <td>{user.emailid}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
