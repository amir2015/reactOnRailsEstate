// import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const CityCost = () => {
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    getCityCostData();
  }, []);
  const getCityCostData = async () => {
    try {
      let res = await axios.get("/api/city_cost");
      console.log(res.data);
      let convertedChartData = apiDataToChartData(res.data);
      setChartData(convertedChartData);
    } catch (err) {
      alert(err);
    }
  };
  const apiDataToChartData = (apiData) => {
    const chartData = apiData.map((cityPrice) => {
        let prices = cityPrice.prices.split(",");
          console.log(prices, " cityPrice");
      let sum = prices.reduce((accum, price) => {
        return accum + parseInt(price);
      }, 0);
      let average = Math.floor(sum / cityPrice.price_count);
      return { city: cityPrice.city, price: average };
    });
    return chartData;
  };

  if (!chartData) {
    return <p>no chart data</p>;
  }
  return (
    <>
      <div className="d-flex flex-column align-items-center m-5">
        {" "}
        <BarChart
          width={400}
          height={500}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="city"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="price" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </>
  );
};

export default CityCost;
