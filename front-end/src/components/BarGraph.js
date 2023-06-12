import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  Title,
  Tooltip,
  LinearScale,
  BarElement,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";

import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Title,
  Tooltip,
  LineElement,
  PointElement,
  zoomPlugin
);

const BarGraph = ({ barDataMale, barDataFemale, barDataOthers }) => {
  const agesMale = barDataMale.map((data) => data.age);
  const numberMale = barDataMale.map((data) => data.number_male);
  const agesFemale = barDataFemale.map((data) => data.age);
  const numberFemale = barDataFemale.map((data) => data.number_female);
  const agesOthers = barDataOthers.map((data) => data.age);
  const numberOthers = barDataOthers.map((data) => data.number_others);

  const data = {
    labels: Array.from({ length: 100 }, (_, i) => i+1),
    datasets: [
      
      {
        barThickness:6,
        label: "number of males",
        data: agesMale.map((age, index) => ({
          x: parseInt(age),
          y: parseInt(numberMale[index]),
        })),
        backgroundColor: "aqua",
        borderColor: "black",
        border: 3,
      },
      {
        barThickness:6,
        label: "number of females",
        data: agesFemale.map((age, index) => ({
          x: parseInt(age),
          y: parseInt(numberFemale[index]),
        })),
        backgroundColor: "#72A0C1",
        borderColor: "black",
        border: 3,
      },
      {
        barThickness:6,
        label: "number of others",
        data: agesOthers.map((age, index) => ({
          x: parseInt(age),
          y: parseInt(numberOthers[index]),
        })),
        backgroundColor: "rgba(255,99,131,0.8)",
        borderColor: "black",
        border: 3,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart Showing Number of people who took part in survey according to their ages",
      },
     zoom:{
      pan:{
        enabled:true,
        mode:"xy",
        speed:10,
      },

      zoom:{
        wheel:{
          enabled:true,
        },
        pinch:{
          enabled:true
        },
        mode:'xy',
        rangeMin:{
          x:0,
          y:0
        },
        rangeMax:{
          x:10,
          y:15
        }
      }
     }
    },
    responsive: true,
    scales: {
      x: {
        display: true,
        text: "Age",
        stacked: false,
      },
      y: {
        display: true,
        text: "Number",
        stacked: false,
      },
    }
  };




  return (
    <>
    <div className="flex justify-center">
      <div className="chart-styles">
        <Bar data={data} options={options} />
      </div>
    </div>
    </>
  );
};

export default BarGraph;
