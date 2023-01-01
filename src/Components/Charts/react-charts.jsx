import React, { useState } from "react";
import { Bar, Scatter } from "react-chartjs-2";
import { alcohol } from "./data";
import { Chart as Chartjs } from "chart.js/auto";


export function ReactCharts() {
  //state variables for scatter chart starts from here
   let ar=[]
  //   get the required data for x-axis and y-axis for scatter plot 
   for(let i=0;i<alcohol.length;i++){
     
      let obj={
         'x':alcohol[i]["Color intensity"],
         'y':alcohol[i].Hue
      }
      ar.push(obj)
   }
   console.log(ar);

   const [scatterchartdata, setScatterChartdata] = useState({
    labels: alcohol.map((data) => data.Alcohol),
    datasets: [
      {
        label: "Color_Intensity Vs Hue",
        data: ar,
        backgroundColor:["#F0F8FF","#FAFAD2", "#AFEEEE", "#FFDAB9","#F5F5F5","#D8BFD8"],
        borderColor: "black",
        borderWidth: 0.7,
      },
    ],
  });
  // end here

  // state varibales for bar chart start here
  const [alcdata, setAlcdata] = useState({
    labels: alcohol.map((data) => data.Alcohol),
    datasets: [
      {
        label: "Malic Acid Content In Alcohol",
        data: alcohol.map((data) => data["Malic Acid"]),
        backgroundColor: ["#F0F8FF","#FAFAD2", "#AFEEEE", "#FFDAB9","#F5F5F5","#D8BFD8"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
// ends here
  
  return (
    <div>
      <h1 style={{color:'green'}}>Charts in React using react-charts-js</h1>
      <h2 style={{color:'blue'}}>Bar Chart</h2>
      <div>
        {/* Bar Chart */}
        <Bar
          data={alcdata}
          options={{
            maintainAspectRatio: true,
            responsive: true,
            legend: {
              labels: {
                fontSize: 15,
                
              },
            },
          }}
        ></Bar>
       
      <hr></hr>
      {/* Scatter Plot */}
      <h2 style={{color:'blue'}}>Scatter Plot</h2>
      <Scatter
        data={scatterchartdata}
        height={300}
        width={600}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
      </div>
    </div>
  );
}
