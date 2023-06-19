import React, { useState } from "react";
import useAxios from "axios-hooks";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Cities = () => {
  const [{ data: properties, loading, error }] = useAxios("/api/properties");
  const [filteredCities, setFilteredCities] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCity, setSelectedCity] = useState(1);
  if (error) return <p>Error occured</p>;
  if (loading) return <p>loading</p>;
  const getUniqueCities = () => {};
  const handleSelect = async (e) => {
    setSelectedCity(e.target.value);
    // setFilteredCities(properties.filter((p) => p.city === selctedCity));
    // setFilteredCities(res.data);
    //Applying request through backend
    let res = await axios.get(`/api/properties/${e.target.value}`);
    setFilteredCities(res.data.properties);
    setTotalPages(res.data.total_pages);
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

        <Table striped>
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
  const pageClicked = async (page) => {
    let res = await axios.get(`/api/properties/${selectedCity}?page=${page}`);
    setFilteredCities(res.data.properties);
    setCurrentPage(page);
    console.log(page, "page");
  };
  const getStyle = (page) => {
    let pagingStyle = {
      margin: "5px",
      cursor: "pointer",
      color: "black",
      textDecoration: "underline",
    };
    if (currentPage === page) {
      return { ...pagingStyle, color: "red" };
    }
  };
  const renderPagination = () => {
    if (!totalPages) {
      return null;
    } else {
      let spans = [];
      spans.push(<span style={{ margin: "5px" }}>{"prev"}</span>);
      for (let i = 1; i <= totalPages; i++) {
        spans.push(
          <span
            style={getStyle(i)}
            onClick={() => {
              pageClicked(i);
            }}
          >
            &nbsp;
            {i}
          </span>
        );
      }
      spans.push(<span style={{ margin: "5px" }}>{"next"}</span>);

      return spans;
    }
  };
  return (
    <>
      <h3>{getSelect()}</h3>
      <div className="d-flex flex-column align-items-center m-5">
        <p>{renderFilteredCityProperties()}</p>
        <span style={{ margin: "5px" }}>{renderPagination()}</span>
      </div>
    </>
  );
};

export default Cities;
