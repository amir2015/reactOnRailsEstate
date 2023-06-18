import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

// get("api/agents")=> Agents
// get("api/agents/:id")=> buyers of agent
// get("api/buyers/:id")=> properties of given buyer
const FindHomes = () => {
  const [agents, setAgents] = useState(null);
  const [buyers, setBuyers] = useState(null);
  const [properties, setProperties] = useState(null);
  useEffect(() => {
    getAgents();
  }, []);

  const getAgents = async () => {
    try {
      let res = await axios.get("/api/agents");
      setAgents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBuyers = async (e) => {
    let id = e.target.value;
    try {
      let res = await axios.get(`/api/agents/${id}`);
      setBuyers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProperties = async (e) => {
    let id = e.target.value;
    try {
      let res = await axios.get(`/api/buyers/${id}`);
      setProperties(res.data);
    } catch (err) {
      alert("err in getBuyers");
    }
  };

  const renderAgentSelect = () => {
    return (
      <>
        <Form.Select onChange={getBuyers} aria-label="Select Agent">
          <option value="" disabled selected hidden>
            Choose Agent ...
          </option>
          {agents.map((agent) => (
            <option value={agent.id}>
              {agent.first_name} {agent.last_name}
            </option>
          ))}
        </Form.Select>
      </>
    );
  };
  const renderBuyerSelect = () => {
    return (
      <Form.Select
        label="Select"
        onChange={getProperties}
        aria-label="Select Buyer"
      >
        <option value="" disabled selected hidden>
          Choose Buyer...
        </option>
        {buyers.map((buyer) => (
          <option value={buyer.id}>
            {buyer.first_name} {buyer.last_name}{" "}
          </option>
        ))}
      </Form.Select>
    );
  };
  const renderProperties = () => {
    if (!properties) {
      return (
        <p>
          no properties match desired cities and price range for selected buyer
        </p>
      );
    }
    if (properties.length === 0) {
      return (
        <p>
          no properties match desired cities and price range for selected buyer
        </p>
      );
    }
    return properties.map((p) => {
      return (
        <>
          <Card key={p.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>city: {p.city}</Card.Title>

              <Card.Text>
                <p>Unit No: {p.id}</p>
                <p>Price: {p.price}</p>
                <p>square footage: {p.sq_ft}</p>
              </Card.Text>
              <Card.Link href="#"> Link</Card.Link>
              <Card.Link href="#"> Link</Card.Link>
            </Card.Body>
          </Card>
          <div key={p.id} style={{ border: "1px solid", margin: "10px" }}></div>
        </>
      );
    });
  };

  return (
    <div className="d-flex flex-column align-items-center m-5">
      <h3>FindHomess</h3>
      {agents && renderAgentSelect()}
      {buyers && renderBuyerSelect()}
      <div className="d-flex  align-items-center m-5">{renderProperties()}</div>
    </div>
  );
};

export default FindHomes;
