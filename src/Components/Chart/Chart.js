import React from "react";
import { fetchDataDaily } from "../../API";
import { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

function Chart({data:{confirmed,recovered,deaths},country}) {
  const [daily, setDaily] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      const data = await fetchDataDaily();
console.log(data)
      setDaily(data);
    };
   

    fetchapi();
    
  },[]);
console.log(daily)
console.log(confirmed,recovered,deaths)
  const LineChart = daily.length? (
    <Line
      data={{
        labels: daily.map(({ date }) => date),
        datasets: [
          {
            data: daily.map(({ confirmed }) => confirmed),
            label: "infected",
            border: "#3333ff",
backgroundColor: "rgba(0,0,255,0.5)",
            fill: true,
          },
          {
            data: daily.map(({ deaths }) => deaths),
            label: "deaths",
            backgroundColor: "rgba(255,0,0,0.5)",
            borderColor: "red",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
const barChart=(
(confirmed)?(<Bar
data={{
labels:['Infected','Recovered','Deaths'],
datasets:[{label:"people",backgroundColor:[' rgba(0, 0, 255, 0.5)','rgba(0, 255,0, 0.5)',' rgba(255, 0,0, 0.5)'],
data:[confirmed.value,recovered.value,deaths.value]}],

}}
options={{

legend:{display:false},
title:{display:true,text:`current state in ${country}`}

}}




/>):null


)
  return <div className={styles.container}>
{country?barChart:LineChart}
</div>;
}

export default Chart;
