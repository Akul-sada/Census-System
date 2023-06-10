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

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Title,
  Tooltip,
  LineElement,
  PointElement
);

const BarGraph = ({barDataMale,barDataFemale,barDataOthers}) => {
    const agesMale = barDataMale.map((data)=>data.age); 
    const numberMale = barDataMale.map((data)=>data.number_male);
    const agesFemale = barDataFemale.map((data)=>data.age); 
    const numberFemale = barDataFemale.map((data)=>data.number_female);
    const agesOthers = barDataOthers.map((data)=>data.age); 
    const numberOthers = barDataOthers.map((data)=>data.number_others);
  console.log(agesMale);
  console.log(numberMale);
  console.log(agesFemale);
  console.log(numberFemale);
  console.log(agesOthers);
  console.log(numberOthers);

  let agesArr = [];
  for(let i=1;i<50;i++){
    agesArr.push(i);
  }
  const data = {
    labels:agesArr,
    datasets:[
      {
        label:'number of males',
        data:numberMale,
        backgroundColor:'aqua',
        borderColor:'black',
        border:1
      },
      {
        label:'number of females',
        data:numberFemale,
        backgroundColor:'yellow',
        borderColor:'black',
        border:1
      },
      {
        label:'number of others',
        data:numberOthers,
        backgroundColor:'red',
        borderColor:'black',
        border:1
      },
    ]
  }
  const options ={
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
  };

    return (
        <>
            <Bar
            data={data}
            options={options}
            />
        </>
  )
}

export default BarGraph;