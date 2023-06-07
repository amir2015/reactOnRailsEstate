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
  // const dumarr = [1, 2, 3, 4, "arr", 6, 7, 7];
  const renderData = () => {
    return agentProperties.map((aP) => {
      console.log(aP);
      return (
        <>
          <tr>
            <td>{aP.id}</td>
            <td>{aP.agent_id}</td>
            <td>{aP.price} $</td>
            <td>{aP.beds}</td>
            <td>{aP.baths}</td>
            <td>{aP.sq_ft}</td>
            <td>{JSON.stringify(aP.sold)}</td>
            <td>{aP.sold_price}</td>
            <td>{aP.created_at}</td>
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
        <Table>
          <thead>
            <tr>
              <th>Unit No</th>
              <th>Agent No</th>
              <th>Price</th>
              <th>Beds</th>
              <th>Baths</th>
              <th>SQ_FT</th>
              <th>Sold!</th>
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

export default Available;
