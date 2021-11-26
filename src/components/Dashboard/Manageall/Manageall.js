import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Manageall = () => {
  const [order, setOrder] = useState([]);
  const approved = { status: "approved" };

  useEffect(() => {
    fetch(`https://enigmatic-escarpment-96711.herokuapp.com/palceOrder`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [order]);
  //delete
  const handleDelete = (id) => {
    const proced = window.confirm("are you sure");
    if (proced) {
      fetch(
        `https://enigmatic-escarpment-96711.herokuapp.com/deleteOrder/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Delete Success");
            const remaingProduct = order.filter((od) => od._id !== id);
            setOrder(remaingProduct);
          }
        });
    }
  };
  const updateData = (id) => {
    axios
      .put(
        `https://enigmatic-escarpment-96711.herokuapp.com/update/${id}`,
        approved
      )
      //   .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          alert("Update Success");
        }
      });
    //********/
  };
  return (
    <div style={{ marginTop: "70px" }}>
      <div className="">
        <h2 className="text-success text-center">Admin Manage All Order</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Mobile Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {order?.map((pd, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{pd?.userName}</td>
                <td>{pd?.userEmail}</td>
                <td>{pd?.mobile}</td>
                <td>{pd?.mobileName}</td>
                <td>{pd?.userPrice}</td>
                <td>{pd?.status}</td>
                <button
                  onClick={() => handleDelete(pd._id)}
                  className="btn bg-danger p-2 my-1"
                >
                  Delete
                </button>
                <button
                  onClick={() => updateData(pd._id)}
                  className="btn mx-1 bg-warning p-2 my-1"
                >
                  Update
                </button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default Manageall;
