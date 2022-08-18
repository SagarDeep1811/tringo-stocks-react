import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import IconButton from '@mui/material/IconButton';

function News() {
  let reactSwipeEl;
    const [businessNews, setBusinessNews] = useState([]);
    const [topNews, setTopNews] = useState([]);
    const [data, setData] = useState();
    const [indicesArray, setIndicesArray] = useState([0,1]);
    const [startingIndex, setStartingIndex] = useState(0);
    const TOKEN  = process.env.REACT_APP_FINNHUB_API_KEY;
    const BASE_URL = process.env.REACT_APP_FINNHUB_NEWS_URL;

    useEffect(() => {
      axios.get(`${ BASE_URL }?category=general&token=${ TOKEN }`).then((response) => {
        console.log("response : ", response);
        console.log("typeof response : ", typeof (response));
        setData(response.data);
        console.log("response.data : ", response.data);
        console.log("typeof response.data : ", typeof(response.data));
        
      }).catch((err) => {
        console.log("Error : " , err);
      })
    }, []);
    
  console.log("data : ", data);
  console.log("typeof data : ", typeof (data));
  console.log("data[0] : ", data[0]);
  // const numberOfNewsPalettes = [...Object.keys(data)].length;
  // const propertyOfEachNewsPalettes = [...Object.values(data)];
  // console.log("numberOfNewsPalettes : " , numberOfNewsPalettes);
  // console.log("propertyOfEachNewsPalettes : " , propertyOfEachNewsPalettes);

  const next = (e) => {
    e.preventDefault();
    // if (indicesArray[0] < numberOfNewsPalettes-2)
    // {
    //   setIndicesArray((indicesArray) => [...indicesArray].map((index) => index = index + 1)) 
    // }
    // if (indicesArray[0] === numberOfNewsPalettes-2)
    // {
    //   setIndicesArray([0,1]) 
    // }
    // console.log("indicesArray : ", indicesArray);
    
    // if (startingIndex < numberOfNewsPalettes-2)
    // {
    //   setStartingIndex((prevIndex) => prevIndex = prevIndex+1) 
    // }
    // if (startingIndex === numberOfNewsPalettes-2)
    // {
    //   setStartingIndex((prevIndex) => prevIndex = 0) 
    // }
    // console.log("startingIndex : ", startingIndex);
  }

  const previous = (e) => {
    e.preventDefault();
    // if (indicesArray[1] > 1)
    // {
    //   setIndicesArray((indicesArray) => [...indicesArray].map((index) => index = index - 1)) 
    // }
    // console.log("indicesArray : ", indicesArray);


    // if (startingIndex > 0)
    // {
    //   setStartingIndex((previousIndex) => (previousIndex = previousIndex-1)) 
    // }
    // console.log("startingIndex : ", startingIndex);
  }

  // const dataArray = [Object.entries(data).map(data[index] => {
  //   return data[index][1];
  // })]
  // console.log("typeof dataArray : ", typeof (dataArray[0]));
  // console.log("dataArray : ", dataArray[0]);
  // for (const [key, value] of Object.entries(data)) {
  //   console.log(`${key}: ${value}`);
  // }
  console.log("----------------------------------------------------");
    // console.log("businessNews : ", businessNews);
    // console.log("topNews : ", topNews);

  // data.map((data[index], index) => {
    // console.log(index, ":", data[index]["category"]);
    // if(data[index]["category"] == "top news")
    // {
    //   setTopNews([...topNews, data[index]]); 
    // }
    // if (data[index]["category"] == "business")
    // {
    //   setTopNews([...businessNews, data[index]]); 
    // }
  // })
  
  return (
    <div style={{ position:"fixed",display: "flex", flexFlow: "row nowrap" , justifyContent:"space between", alignItems:"center", gap:"10px" ,marginTop:"100px" , marginLeft:"90px"}}>
      <IconButton onClick={previous}
        style={{ border:"2px white solid" , borderRadius:"100px", height: "50px", color: "white" , backgroundColor:"rgb(57, 52, 52)"}}
        ><ChevronLeftOutlinedIcon /></IconButton>
    <NewsContainer>
      <TimestampAndCategory>
          {/* <h3 style={{color:"white"}}>{startingIndex}</h3>
          <h3 style={{ color: "white" }}>{startingIndex + 1}</h3> */}
          {/* <div style={{height:"auto"}}>
              <h3>{data[startingIndex].headline}</h3>
            
                <p style={{ color: "darkBlue",backgroundColor:"white", textAlign: "justify" , fontSize:"15px"}}>{data[startingIndex].summary}</p>

                <img width="220px" height="100px" style={{display:"block" , marginLeft:"auto" , marginRight:"auto"}} src={data[startingIndex].image}/>
            
                <a href={data[startingIndex].url} ><p style={{ color: "white", textAlign: "center" }}>Read the full article</p></a>
                <p style={{ color:"white" , textAlign: "center" ,backgroundColor:"rgb(88, 81, 81)"}}>Source : {data[startingIndex].source}</p>
                <p style={{color:"black" , backgroundColor:"rgb(143, 134, 229)", textAlign:"center"}}>{data[startingIndex].category}</p>
            </div> */}
          {
            // indicesArray.map((index) => {
            //   return (
            //     <h3 style={{color:"white"}}>{index}</h3>
            //   )
            // })
        // data.map((data[index], index) => {
          // return (
          //   <div style={{height:"auto"}}>
          //     <h3>{propertyOfEachNewsPalettes[index]["headline"]}</h3>
            
          //       <p style={{ color: "darkBlue",backgroundColor:"white", textAlign: "justify" , fontSize:"15px"}}>{propertyOfEachNewsPalettes[index]["summary"]}</p>

          //       <img width="220px" height="100px" style={{display:"block" , marginLeft:"auto" , marginRight:"auto"}} src={propertyOfEachNewsPalettes[index]["image"]}/>
            
          //       <a href={propertyOfEachNewsPalettes[index]["url"]} ><p style={{ color: "white", textAlign: "center" }}>Read the full article</p></a>
          //       <p style={{ color:"white" , textAlign: "center" ,backgroundColor:"rgb(88, 81, 81)"}}>Source : {propertyOfEachNewsPalettes[index]["source"]}</p>
          //       <p style={{color:"black" , backgroundColor:"rgb(143, 134, 229)", textAlign:"center"}}>{propertyOfEachNewsPalettes[index]["category"]}</p>
          //   </div>
          //     )
              
            }
        
      {/* ) */}
        {/* } */}
      </TimestampAndCategory>
      </NewsContainer>
      <IconButton onClick={next}
        style={{ border:"2px white solid" , borderRadius:"100px", height: "50px", color: "white" , backgroundColor:"rgb(57, 52, 52)" }}
      ><ChevronRightOutlinedIcon /></IconButton>
      </div>
  )
}

export default News;

const TimestampAndCategory = styled.div`
display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap:20px;
>div{
  width:450px;
  /* height:500px; */
  /* display:block; */
  border:solid white 1px;
  padding:5px;
  border-radius:5px;
  background-color:rgb(57, 52, 52);
  box-sizing: border-box;
}
>div >h3{
  background-color:var(--cool-yellow-shade);
  color:white;
  text-align:justify;
  align-items: flex-start;
  font-size:17px;
}
`;

const NewsContainer = styled.div`
/* margin-top:120px; */
/* margin-left:45px; */
/* position:fixed; */
height: 500px;
width: 1000px;
overflow: hidden;
overflow-y: auto;
/* margin-left:auto;
margin-right:auto; */
/* display:flex;
flex-flow:row nowrap; */
/* align-items:center; */
/* justify-content: space-around; */
`;