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
  const ageArray = [];
  for (let i = 0; i < 50; i++) {
    ageArray.push(i);
  }


  return (
    <>
      <div>
        <Line
          
          data={{
            labels: lineChartAgeArrayVaccinated,
            datasets: [
              {
                id: 1,
                label: "People Vaccinated",
                data: lineChartNumberArrayVaccinated,
                borderColor:'red'
              },
            ],
          }}
          options={{
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
          }}
        />
        <Line
          style={{ width: "700px" }}
          data={{
            labels: lineChartAgeArrayNotVaccinated,
            datasets: [
              {
                id: 2,
                label: "People Not vaccinated",
                data: lineChartNumberArrayNotVaccinated,
                borderColor:'yellow'
              },
            ],
          }}
          options={{
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
          }}
        />
      </div>
    </>
  );
};

export default LineGraph;
