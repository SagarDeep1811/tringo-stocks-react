import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { format } from 'date-fns';

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HC_exporting from 'highcharts/modules/exporting';
import styled from "styled-components";


import { DateRange,DefinedRange } from "react-date-range";
import { subDays } from 'date-fns';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Button from "@mui/material/Button";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { createTheme , ThemeProvider } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { StockContext } from "../context/StockContext";

Highcharts.theme = {
    colors: ['#058DC7', 'rgb(255, 204, 153)', '#00ff99', '#6AF9C4',  '#64E572',
             '#FF9655', '#FFF263', '#DDDF00'],
    chart: {
        backgroundColor:" #42494D"
    },
    title: {
        style: {
            color: 'green',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: 'rgb(217, 217, 217)',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'rgb(217, 217, 217)'
        },
        itemHoverStyle:{
            color: 'gray'
        }
    },
  };
  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);

  HC_exporting(Highcharts);

function LineGraph() {

    const { stockForNewsFeed, setStockForNewsFeed } = useContext(StockContext);

    const theme = createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: indigo[900],
          },
        },
      });
    
      
    // DaterangePicker
    
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
      
    const differenceOfTimeStamps = new Date().getTime() - 6 * 24 * 60 * 60 * 1000;
    const newDate = new Date(differenceOfTimeStamps);
      const [state, setState] = useState([
        {
          startDate: subDays(new Date(), 364),
          endDate: new Date(),
          key: "selection",
        },
      ]);
    
      const [startTime , setStartTime] = useState(Math.floor(state[0].startDate.getTime()/1000.0));
      const [endTime , setEndTime] = useState(Math.floor(state[0].endDate.getTime() / 1000.0));
      
      const [outputDates, setOutputDates] = useState([newDate, new Date()]);
      useEffect(() => {
        outputDates[0] = state[0].startDate;
        outputDates[1] = state[0].endDate;
        console.log("outputDates[0] : " ,outputDates[0]);
        console.log("outputDates[1] : " ,outputDates[1]);
        setOutputDates([state[0].startDate, state[0].endDate]);
      }, [state]);
      
      const [status, setStatus] = useState("none");
      const changeStatus = (e) => {
        e.preventDefault();
        // if (status === "none") setStatus("block");
        // else setStatus("none");
        (status === "none") ? setStatus("block") : setStatus("none");
        console.log(status);
      };
      
      useEffect(()=>{
        setStartTime(Math.floor(state[0].startDate.getTime()/1000.0));
      setEndTime(Math.floor(state[0].endDate.getTime()/1000.0));
      console.log("startTime : ", startTime);
      console.log("end Time : ", endTime);
    }, [state]);
    
    const [dynamicData, setDynamicData] = useState();
    const [stockSymbol, setStockSymbol] = useState("AAPL");
    const [resolution, setResolution] = useState("D");
   
  const TOKEN = process.env.REACT_APP_FINNHUB_API_KEY;
  const BASE_URL = process.env.REACT_APP_FINNHUB_STOCK_CANDLE_URL;
  
  console.log(BASE_URL);
    useEffect(() => {
        axios.get(`${BASE_URL}?symbol=${stockForNewsFeed}&resolution=${resolution}&from=${startTime}&to=${endTime}&token=${TOKEN}`).then((response) => {
          console.log("response.data : ", response.data);
          console.log("response : ", response);
          setDynamicData(response.data);
        }).catch((err) => {
          console.log("Error : " , err);
        })
       } , [stockForNewsFeed]);

    let openingPricesAndTimestamps = [];
    let closingPricesAndTimestamps = [];
       let xVals;
       let yVals;
       let xEmptyVals;
       if (dynamicData !== undefined)
       {
          xVals = dynamicData.t.map((value , index)=>{
           return format(new Date(value*1000), 'MM/dd/yyyy');
          });
          xEmptyVals = dynamicData.t.map((value , index)=>{
           return '';
         });
          yVals = dynamicData.o.map((value , index)=>{
             return value;
         });
         
     
         for (let i = 0; i < dynamicData.o.length; i++)
         {
           openingPricesAndTimestamps.push( [format(new Date(dynamicData.t[i]*1000), 'MM/dd/yyyy') , dynamicData.o[i]]);
         }
     
         for (let i = 0; i < dynamicData.c.length; i++)
         {
           closingPricesAndTimestamps.push( [format(new Date(dynamicData.t[i]*1000), 'MM/dd/yyyy') , dynamicData.c[i]]);
         }
       }
     
    const options = {
        chart:{
            height:50 + '%',
            width: 800,
            // backgroundColor:""
        },
        plotOptions: {
            series: {
                showInNavigator: true
            }
        },
        navigator: {
            enabled:true,
            type: 'areaspline',
            fillOpacity: 0.05,
            dataGrouping: {
                smoothed: true
            },
            lineWidth: 1,
            marker: {
                enabled: true
            }
        },
        
        legend:{
            enabled:true
        },
        rangeSelector: {
            allButtonsEnabled: true,
            verticalAlign: 'top',
            enabled:false,
            inputEnabled:false,
            // buttons: [{
            //     type: 'day',
            //     count: 1,
            //     text: 'day'
            // }, {
            //     type: 'week',
            //     count: 1,
            //     text: 'week'
            // }, {
            //     type: 'month',
            //     count: 1,
            //     text: 'month'
            // }, {
            //     type: 'month',
            //     count: 3,
            //     text: 'quarter'
            // }, {
            //     type: 'year',
            //     count: 1,
            //     text: 'year'
            // }, {
            //     type: 'all',
            //     text: 'all'
            // }, {
            //     type: 'ytd',
            //     text: 'YTD'
            // }],
            // buttonTheme: {
            //     width: 60
            // },
            // selected: 2
        },
          accessibility:{
      enabled:false
          },
          title: {
              text: '',
              enabled:false
          },
        xAxis: {
            // minRange: 1,
            categories: xEmptyVals,
            crosshair: true,
            title: {
            enabled:false
            },
            labels:{
              enabled:true,
            },
            scrollbar: {
                enabled: true,
                showFull: false
            }
          },
          yAxis: [{
            min: 0,
            title: {
            enabled:false

            },
            labels:{
            enabled:false
            },
            gridLineWidth:0,
            
        }],  
    tooltip: {
        shared:true
      },
          series: [{
            showInNavigator: true,
            name: 'Opening Price',
            data: openingPricesAndTimestamps,
            tooltip: {
              valueDecimals: 2
            }
          },
          {
            showInNavigator: true,
            name: 'Closing price',
            data: closingPricesAndTimestamps,
            tooltip: {
              valueDecimals: 2
            }
          }]
          ,
            credits:{
            enabled:false
            },
        
      };

    

  
  return (
      <LineGraphContainer>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </LineGraphContainer>
  );
}

export default LineGraph;

const LineGraphContainer = styled.div`
`;

const DateRangeComponent = styled.div`
  width:500px;
  /* margin-top:-100px; */
  position: absolute;
  visibility: visible;
  > Button {
    position: relative;
    border-radius:0px;
    color:white;
  }
  > h3 {
  }
  >p{
  color:white;
}
`;

const Picker = styled.div`
  display: ${(props) => props.status};
  width:670px;
`;

const ChildPicker =styled.div`
float:left;
width: 50%;
`;
