import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import dateFormat from "dateformat";

const ShowAllUnits = () => {
  const [agentProperties, setAgentProperties] = useState([]);
  const getAgentProperties = async () => {
    try {
      let res = await axios.get("/api/properties/show");
      setAgentProperties(res.data);
    } catch (error) {
      console.log(error);
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
            <td>{aP.price} $</td>
            <td>{aP.beds}</td>
            <td>{aP.baths}</td>
            <td>{JSON.stringify(aP.sold)}</td>
            <td>{aP.sq_ft}</td>
            <td>{aP.sold_price}</td>
            <td>
              {dateFormat(aP.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            </td>
          </tr>
        </>
      );
    });
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center m-5">
        <h2>All Units</h2>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Unit No</th>
              <th>Agent No</th>
              <th>Price</th>
              <th>Beds</th>
              <th>Baths</th>
              <th>Sold!</th>
              <th>SQ_FT</th>
              <th>Sold Price</th>
              <th>Post Date</th>
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </Table>
      </div>
    </>
  );
};

export default ShowAllUnits;
