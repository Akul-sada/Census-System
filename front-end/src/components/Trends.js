import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import DataTable from "./DataTable";
import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   Title,
//   LineElement,
//   CategoryScale,
//   PointElement,
//   Tooltip,
//   Legend,
//   LinearScale

// } from "chart.js";
import { Link } from "react-router-dom";

const Trend = () => {
  // Table
  const [data, setData] = useState([]);

  const getAllData = async () => {
    const { data } = await axios.get("http://localhost:8000/records");
    setData(data.data);
  };
  useEffect(() => {
    getAllData();
  }, []);

  // Line Chart
  const [lineData, setLineData] = useState([]);
  const [lineData2, setLineData2] = useState([]);

  
  const getLineChartData = async () => {
    const lineChart = await axios.get(
      "http://localhost:8000/number-vaccinated"
    );
    const lineChart2 = await axios.get(
      "http://localhost:8000/number-not-vaccinated"
    );
    const lineChartArr = lineChart.data.data;
    const lineChartAgeArray = lineChartArr.map((data) => data.age);
    const lineChartNumberArray = lineChartArr.map(
      (data) => data.number_vaccinated
    );

    const lineChartArr2 = lineChart2.data.data;
    const lineChartAgeArrayNotVaccinated = lineChartArr2.map(
      (data) => data.age
    );
    const lineChartNumberArrayNotVaccinated = lineChartArr2.map(
      (data) => data.number_vaccinated
    );
    console.log(lineChartAgeArray);
    console.log(lineChartNumberArray);
    console.log(lineChartAgeArrayNotVaccinated);
    console.log(lineChartNumberArrayNotVaccinated);
    setLineData(lineChartArr);
    setLineData2(lineChartArr2);
  };
  useEffect(() => {
    getLineChartData();
  }, []);

  //  Line graph implementation

  const vaccinatedData = {
    labels: lineChartAgeArray,
    datasets: [
      {
        label: "Vaccinated",
        data: lineChartNumberArray,
        borderColor: "green",
        fill: false,
      },
    ],
  };

  const nonVaccinatedData = {
    labels: lineChartAgeArrayNotVaccinated,
    datasets: [
      {
        label: "Not Vaccinated",
        data: lineChartNumberArrayNotVaccinated,
        borderColor: "red",
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Age",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of People",
        },
      },
    },
  };

  // Bar Chart

  return (
    <>
      <div className="flex justify-center mt-5">
        <Link
          to="/form"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to the Form
        </Link>
      </div>
      <DataTable data={data} />

      <div>
        <Line data={vaccinatedData} options={options} />
        <Line data={nonVaccinatedData} options={options} />
      </div>
    </>
  );
};

export default Trend;
