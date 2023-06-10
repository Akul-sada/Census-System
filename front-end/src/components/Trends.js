import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LineGraph from "./LineGraph";
import DataTable from "./DataTable";
import BarGraph from "./BarGraph";

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

  const getLineChartData =async ()=>{
    const lineChart = await axios.get("http://localhost:8000/number-vaccinated");
    const lineChart2 = await axios.get("http://localhost:8000/number-not-vaccinated");
  
    setLineData(lineChart.data.data);
    setLineData2(lineChart2.data.data);


  }
  useEffect(()=>{
    getLineChartData();
  },[]);
  

  // Bar Chart
  const [barDataMale,setBarDataMale] = useState([]);
  const [barDataFemale,setBarDataFemale] = useState([]);
  const [barDataOthers,setBarDataOthers] = useState([]);
const getBarChartData = async ()=>{
  const barChartMale = await axios.get("http://localhost:8000/number-gender-male");
  const barChartFemale = await axios.get("http://localhost:8000/number-gender-female");
  const barChartOthers = await axios.get("http://localhost:8000/number-gender-others");
  setBarDataMale(barChartMale.data.data);
  setBarDataFemale(barChartFemale.data.data);
  setBarDataOthers(barChartOthers.data.data);
}
useEffect(()=>{
  getBarChartData();

});


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
