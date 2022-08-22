import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HC_exporting from 'highcharts/modules/exporting';
import styled from "styled-components";
import axios from "axios";

import { DateRange,DefinedRange } from "react-date-range";
import { subDays } from 'date-fns';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Button from "@mui/material/Button";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { createTheme , ThemeProvider } from "@mui/material";
import { indigo } from "@mui/material/colors";

HC_exporting(Highcharts);

const Stock = () => {
  
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
      startDate: subDays(new Date(), 6),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [startTime , setStartTime] = useState(Math.floor(subDays(new Date() , 730).getTime()/1000.0));
  const [endTime , setEndTime] = useState(Math.floor(subDays(new Date() , 1).getTime() / 1000.0));
  // 
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
    (status === "none") ? setStatus("block") : setStatus("none");
    console.log(status);
  };

  let limitedDates, limitedPrices;
  const [data, setData] = useState();
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  const [stockSymbolForTitle, setStockSymbolForTitle] = useState("AAPL");
  const [resolution, setResolution] = useState("D");
 
  const TOKEN  = process.env.REACT_APP_FINNHUB_API_KEY;
  const BASE_URL = process.env.REACT_APP_FINNHUB_STOCK_CANDLE_URL;

  useEffect(() => {
    axios.get(`${BASE_URL}?symbol=${stockSymbol}&resolution=${resolution}&from=${startTime}&to=${endTime}&token=${TOKEN}`).then((response) => {
      console.log("response.data : ", response.data);
      console.log("response : ", response);
      setData(response.data);
    }).catch((err) => {
      console.log("Error : " , err);
    })
   } , [startTime, endTime]);

  const plotTheChart = () => { 
    axios.get(`${ BASE_URL }?symbol=${ stockSymbol }&resolution=${ resolution }&from=${ startTime }&to=${ endTime }&token=${ TOKEN }`).then((response) => {
      console.log("response.data : ", response.data);
      setData(response.data);
    }).catch((err) => {
      console.log("Error : ", err);
    });
    setStockSymbolForTitle(stockSymbol);
  };
  
  let openingPricesAndTimestamps = [];
  let closingPricesAndTimestamps = [];
  let xValues;
  let yValues;
  let xEmptyValues;
  if (data !== undefined)
  {
     xValues = data.t.map((value , index)=>{
      return format(new Date(value*1000), 'MM/dd/yyyy');
     });
     xEmptyValues = data.t.map((value , index)=>{
      return '';
    });
     yValues = data.o.map((value , index)=>{
        return value;
    });
    

    for (let i = 0; i < data.o.length; i++)
    {
      openingPricesAndTimestamps.push( [format(new Date(data.t[i]*1000), 'MM/dd/yyyy') , data.o[i]]);
    }

    for (let i = 0; i < data.c.length; i++)
    {
      closingPricesAndTimestamps.push( [format(new Date(data.t[i]*1000), 'MM/dd/yyyy') , data.c[i]]);
    }

  }

  const handleStockSymbol = (e) => {
    e.preventDefault();
    setStockSymbol(e.target.value);
  };
  
  const options = {
    
    chart:{
        height:58 + '%',
      width: 900,
        backgroundColor:"black"
    },
    title: {
      text: stockSymbolForTitle,
      enabled:true
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
    exporting: {
      enabled: false
  },
    legend:{
        enabled:true
    },
    rangeSelector: {
        allButtonsEnabled: true,
        enabled:true,
        inputEnabled:false,
      verticalAlign: 'top',
      buttons: [
        {
        text: '1w',
        events: {
            click: function () {
            console.log("setting to the last week.");
            setStartTime(Math.floor(subDays(new Date(), 7).getTime()/1000.0));
            setEndTime(Math.floor(subDays(new Date(), 1).getTime()/1000.0));
          }
        }
    }, {
        // type: 'month',
        // count: 1,
        text: '1m',
        events: {
            click: function () {
            console.log("setting to the last month.");
            setStartTime(Math.floor(subDays(new Date(), 31).getTime()/1000.0));
            setEndTime(Math.floor(subDays(new Date(), 1).getTime()/1000.0));            }
        }
    }, {
        type: 'month',
        count: 3,
        text: '3m',
        events: {
            click: function () {
            console.log("setting to the 3 months.");
            setStartTime(Math.floor(subDays(new Date(), 93).getTime()/1000.0));
            setEndTime(Math.floor(subDays(new Date(), 1).getTime()/1000.0));            }
        }
    }, {
        type: 'month',
        count: 6,
        text: '6m',
        events: {
            click: function () {
            console.log("setting to the 6 months.");
            setStartTime(Math.floor(subDays(new Date(), 186).getTime()/1000.0));
            setEndTime(Math.floor(subDays(new Date(), 1).getTime()/1000.0));            }
        }
    }, {
        type: 'year',
        count: 1,
        text: '1y',
        events: {
            click: function () {
            console.log("setting to the last year.");
            setStartTime(Math.floor(subDays(new Date(), 365).getTime()/1000.0));
            setEndTime(Math.floor(subDays(new Date(), 1).getTime()/1000.0));            }
        }
    }, {
        type: 'all',
        text: 'All',
        events: {
            click: function () {
            console.log("setting to the complete data.");
            setStartTime(Math.floor(subDays(new Date(), 730).getTime()/1000.0));
            setEndTime(Math.floor(subDays(new Date(), 1).getTime()/1000.0));
            }
        }
    }]
    },
      accessibility:{
  enabled:false
      },
      xAxis: {
        categories: xEmptyValues,
        crosshair: true,
        title: {
        enabled:false
        },
        labels:{
          enabled:true,
        },
        scrollbar: {
            enabled: false,
            showFull: false
        }
      },
      yAxis: [{
        min: 0,
        series: {
          data:yValues
        }
        ,
        title: {
        enabled:false

        },
        labels:{
        enabled:false
        },
        gridLineWidth:0,
        
    }],
    tootltip: {
      // headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      // pointFormat: '<tr><td style="padding:0">{series.name}: </td>' +
      //   '<td style="padding:0"><b>{point.y} </b></td></tr>',
      // footerFormat: '</table>',
      pointFormat:'${point.y}:',
      shared: false,
      useHTML: true
    },
    tooltip: {
      shared:true
    },
      series: [{
        showInNavigator: true,
        name: 'Opening price',
        data: openingPricesAndTimestamps,
        tooltip: {
          valueDecimals: 100
        },
        // type: 'areaspline',
      },
      {
        showInNavigator: true,
        name: 'Closing price',
        data: closingPricesAndTimestamps,
        tooltip: {
          valueDecimals: 2
        },
        // type: 'areaspline',

      }]
      ,
        credits:{
        enabled:false
        },
    
  };

  const changeResolution = (e) => {
    e.preventDefault();
    const newResolution = e.target.value;
    setResolution(newResolution);
  }

  return (
    <StockTrackerContainer>
        <div>
      <LineChartContainer>
          <HighchartsReact highcharts={Highcharts} options={options} />
      </LineChartContainer>
      </div>
      <div>
      <ConfigButtonsContainer>

          <StockSymbolInputFieldContainer>
            <p>Stock Symbol</p>
            <input
              type="text"
              placeholder="Stock symbol ..."
              onChange={handleStockSymbol}
            ></input>
         </StockSymbolInputFieldContainer>
      
          <ResolutionContainer>
            <p>Resolution</p>
            <select name="Currency" id="currency" onChange={changeResolution} style={{backgroundColor:"white"}}>
            <option value="none" selected disabled hidden>RESOLUTION</option>
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="D" selected>D</option>
            <option value="W">W</option>
            <option value="M">M</option>
            </select>
        </ResolutionContainer>

        <SubmitButtonContainer>

            <p>Plot</p>
            <button type="submit" onClick={plotTheChart}>
              PLOT
            </button>
        </SubmitButtonContainer>
        
        
        </ConfigButtonsContainer>
        </div>
    </StockTrackerContainer>
  );
};

export default Stock;

const StockTrackerContainer = styled.div`
position:absolute;
display:flex;
flex-direction:row;
align-items: start;
justify-content:flex-start;
gap:10px;
width:100%;
margin-top:5px;
`;


const ConfigButtonsContainer = styled.div`
display:flex;

flex-flow:column nowrap;
justify-content:flex-end;
align-items:center;
position:absolute;
border:#42494D solid 1px;
background-color:var(--shallow-black);
border-radius:5px;
padding:5px 105px 10px 105px;
`;

const OptionsContainer = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:center;
align-items:center;
position:absolute;
gap:30px;
margin-top:120px;
`;

const StockSymbolInputFieldContainer = styled.div`
>p{
  color:white;
  opacity:0.6;
}
>input[type=text]{
  width:145px;
  border:black 1px solid;
  height:25px;
  background-color:rgb(96, 94, 94);
  color:white;
  opacity:0.7;
}
>input[type=text]:focus{
  border:none;
  outline: none;
  opacity:1;
}
`;

const SubmitButtonContainer = styled.div`
>p{
  color:white;
  opacity:0.6;
}
  >Button{
    /* background-color:#172c69;
    width:247px;
    border:none;
    cursor:pointer;
    height:30px;
    text-align: center;
    color:white;
    border-radius:0; */
    background-color:black;
  width:150px;
  cursor:pointer;
  height:25px;
  text-align: center;
  color:white;
  border: white 1px solid;
  border-radius: 0;
  opacity:0.6;
  }
  >Button:hover{
    opacity:1;
  }
  `;

const ResolutionContainer = styled.div`
>p{
  color:white;
  opacity:0.6;}
  >select{
    width:145px;
  border:black 1px solid;
  height:25px;
  background-color:rgb(96, 94, 94);
  color:black;
  opacity:0.7;
  }
`;

const DateRangeComponent = styled.div`
  /* width:500px;
  position: absolute; */
  /* visibility: visible; */
  > Button {
    position: relative;
    border-radius:0px;
    color:white;
  }
  > h3 {
  }
  >p{
  color:#172c69;
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

const LineChartContainer = styled.div`
  /* flex:1;
  flex-direction:row;
  justify-content: center;
  align-items: center; */
  /* border: 1px solid #42494D;
  border-radius: 5px;
  background-color: #42494D; */
  /* height:500px; */
  /* height:1000px; */
`;