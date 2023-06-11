import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  Title,
  Tooltip,
  LinearScale,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  LineElement,
  PointElement
);

const LineGraph = ({ lineData, lineData2 }) => {
  // const lineChartArr= lineChart.data.data;
  const lineChartAgeArrayVaccinated = lineData.map((data) => data.age);
  const lineChartNumberArrayVaccinated = lineData.map(
    (data) => data.number_vaccinated
  );

  const lineChartAgeArrayNotVaccinated = lineData2.map((data) => data.age);
  const lineChartNumberArrayNotVaccinated = lineData2.map(
    (data) => data.number_not_vaccinated
  );
 const data = {
  labels: Array.from({length:100},(_,i)=>i+1),
  datasets: [
    {
      label:'Vaccinated',
      data: lineChartAgeArrayVaccinated.map((age,index)=>({x:parseInt(age),y:parseInt(lineChartNumberArrayVaccinated[index])})),
      borderColor:'rgba(75,192,192,1)',
      backgroundColor:'rgba(75,192,0.2)',
      fill:false
    },
    {
      label:'Not Vaccinated',
      data: lineChartAgeArrayNotVaccinated.map((age,index)=>({x:parseInt(age),y:parseInt(lineChartNumberArrayNotVaccinated[index])})),
      borderColor:'rgba(255,99,132,1)',
      backgroundColor:'rgba(255,99,131,0.2)',
      fill:false
    }
  ]
 }
 const options ={
  scales:{
    x:{
      type:'linear',
      title:{
        display:true,
        text:'Age'
      }
    },
    y:{
      title:{
        display:true,
        text:'Number of People'
      }
    }
  }
 }


  return (
    <>
    <div className="flex justify-center">
      <div className=" chart-styles">
        <Line data={data} options={options}/>
      </div>
    </div>
    </>
  );
};

export default LineGraph;
