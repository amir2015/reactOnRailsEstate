import React, { useState } from "react";
import useAxios from "axios-hooks";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Cities = () => {
  const [filteredCities, setFilteredCities] = useState(null);
  const [{ data: properties, loading, error }] = useAxios("/api/properties");
  if (error) return <p>Error occured</p>;
  if (loading) return <p>loading</p>;
  const getUniqueCities = () => {};
  const handleSelect = (e) => {
    let selctedValue = e.target.value;
    setFilteredCities(properties.filter((p) => p.city === selctedValue));
  };
  const renderSelect = () => {
    let uniqueCities = properties.reduce((acumm, d) => {
      if (!acumm.includes(d.city)) {
        acumm.push(d.city);
      }
      return acumm;
    }, []);
    return (
      <div className="d-flex flex-column align-items-center m-5">
        <p>Cities</p>
        <Form.Select onChange={handleSelect} aria-label="Select City">
          <option value="" disabled selected hidden>
            Choose City...
          </option>
          {uniqueCities.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </Form.Select>
      </div>
    );
  };
  const getSelect = () => {
    getUniqueCities();
    return renderSelect();
  };
  const renderFilteredCityProperties = () => {
    if (!filteredCities) {
      return (
        <>
          <h6>No Properties To Show, Select another City</h6>
        </>
      );
    }
    return (
      <>
        <br />

        <Table>
          <thead>
            <tr>
              <th>Unit No</th>
              <th>Agent No</th>
              <th>Agent Name</th>
              <th>Agent Email</th>
              <th>City</th>
              <th>Address</th>
              <th>Zip</th>
              <th>Price</th>
              <th>Beds</th>
              <th>Baths</th>
              <th>SQ_FT</th>
              <th>Sold!</th>
              <th>Sold Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredCities.map((city) => (
              <tr>
                <td>{city.id}</td>
                <td>{city.agent_id}</td>
                <td>{city.first_name}</td>
                <td>{city.email}</td>
                <td>{city.city}</td>
                <td>{city.street}</td>
                <td>{city.zip}</td>
                <td>{city.price} $</td>
                <td>{city.beds}</td>
                <td>{city.baths}</td>
                <td>{city.sq_ft}</td>
                <td>{JSON.stringify(city.sold)}</td>
                <td>{city.sold_price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  };
  return (
    <>
      <h3>{getSelect()}</h3>
      <div className="d-flex flex-column align-items-center m-5">
        <p>{renderFilteredCityProperties()}</p>
      </div>
    </>
  );
};

export default Cities;
