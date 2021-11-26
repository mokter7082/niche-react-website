import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Myadmin = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-escarpment-96711.herokuapp.com/allAdmin")
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);
  const handleDelete = (id) => {
    const proced = window.confirm("are you sure");
    if (proced) {
      fetch(
        `https://enigmatic-escarpment-96711.herokuapp.com/deleteAdmin/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Delete Success");
            const remaingProduct = admins.filter((od) => od._id !== id);
            setAdmins(remaingProduct);
          }
        });
    }
  };
  return (
    <div>
      <h2 className="text-center text-success">Our Admins</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        {admins?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd?.email}</td>
              <td>{pd?.role}</td>
              <button
                onClick={() => handleDelete(pd._id)}
                className="btn bg-danger p-2 my-1"
              >
                Delete
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default Myadmin;
