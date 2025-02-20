import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  });

  return (
    <div className="container w-50 pl-10 pt-10">
      <h1>Home Page</h1>
      <div>
        <Link to="/addUser" className="btn btn-success btn-sm ">
          Add New User
        </Link>
      </div>

      <h3> Users Data</h3>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <th scope="row">{row.id}</th>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>
                <Link
                  className="btn btn-sm btn-primary"
                  to={`/editUser/${row.id}`}
                >
                  Edit
                </Link>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
