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
 const [lineData,setLineData] =useState([]);
 const getLineChartData =async ()=>{
  const lineChart = await axios.get("http://localhost:8000/number-vaccinated");
  const lineChart2 = await axios.get("http://localhost:8000/number-not-vaccinated");
  const lineChartArr= lineChart.data.data;
  const lineChartAgeArray = lineChartArr.map(data=>data.age);
  const lineChartNumberArray = lineChartArr.map(data=>data.number_vaccinated);

  const lineChartArr2= lineChart2.data.data;
  const lineChartAgeArrayNotVaccinated = lineChartArr2.map(data=>data.age);
  const lineChartNumberArrayNotVaccinated =lineChartArr2.map(data=>data.number_vaccinated);
  console.log(lineChartAgeArray);
  console.log(lineChartNumberArray);
  console.log(lineChartAgeArrayNotVaccinated);
  console.log(lineChartNumberArrayNotVaccinated)
 }
 useEffect(()=>{
  getLineChartData();
 },[]);

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

      
      
    </>
  );
};

export default Trend;
