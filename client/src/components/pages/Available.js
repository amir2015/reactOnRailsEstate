import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Available = () => {
  const [agentProperties, setAgentProperties] = useState([]);
  const getAgentProperties = async () => {
    try {
      let res = await axios.get("/api/properties");
      setAgentProperties(res.data);
    } catch (error) {
      alert("An error occurred", error);
    }
  };
  useEffect(() => {
    getAgentProperties();
  }, []);
  const renderData = () => {
    return agentProperties.map((aP) => {
      return (
        <>
          <tr>
            <td>{aP.id}</td>
            <td>{aP.agent_id}</td>
            <td>{aP.first_name}</td>
            <td>{aP.email}</td>
            <td>{aP.price} $</td>
            <td>{aP.city}</td>
            <td>{aP.beds}</td>
            <td>{aP.baths}</td>
            <td>{aP.sq_ft}</td>
          </tr>
        </>
      );
    });
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center m-5">
        <h2>Available Units</h2>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Unit No</th>
              <th>Agent No</th>
              <th>Agent Name</th>
              <th>Agent Email</th>
              <th>Price</th>
              <th>City</th>
              <th>Beds</th>
              <th>Baths</th>
              <th>SQ_FT</th>
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </Table>
      </div>
    </>
  );
};

export default Available;
