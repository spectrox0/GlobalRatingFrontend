import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components'; 
export default function CardDictamenes({
    id,
    date,
    imageUrl,
    postUrl,
    title
   
  }) { 
    const [isLoading, setLoading] = useState(true); 
    const [datee ,setDate] = useState(""); 
     useEffect(()=> {
       if(imageUrl){
           setLoading(false); 
          var date_ = new Date(date)
          var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
          setDate(date_.toLocaleDateString("es-ES", options));
       }
   },[imageUrl,date]); 
      return isLoading? (
         <ContainerLoad> 
         <img 
      src={require("../../../assets/img/blockLoad.svg")}
       alt="..."/> 
        <span> Loading...</span>
        </ContainerLoad>
      
       ) : (
      
       <CardDic to={{
        pathname: '/dictamen',
        search: `?id=${id}`
       }}>
        
        <img 
        src={imageUrl}
         alt="..."/> 
         
           <div className="TitleDictamen">
           <h4> {title} </h4>
            <div className="overlineTitle" 
            style={{ 
            backgroundColor:"#2CA8FF",
             width:"65%",
            minWidth:"5rem",
            minHeight:"0.2rem",
            margin:"0",
            boxShadow: " 0px 4px 4px rgba(50, 121, 151, 0.44)",
           transform: "matrix(1, 0, 0, -1, 0, 0)",
            marginBottom:"0.6rem"
           
           }}> </div>
           <div className="ContentDictamen">
              <span> {datee} </span>
           </div>
                </div>
        
       </CardDic>); 
   

  }
  const CardDic = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #151F42 0%, #000000 250%); 
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.603); 
  margin:1rem;
 padding: 1rem; 
 border-radius:6px; 
  width: 95%;
 opacity: 0.9; 
 cursor: pointer;
 margin-left:15%; 
 -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
   
   &:hover{
    -webkit-transform: scale(1.05);
    text-decoration: none; 
    -moz-transform:  scale(1.05);
    -o-transform:  scale(1.05);
    -ms-transform:  scale(1.05);
    transform: scale(1.05); 
  opacity: 1;
   }

   img {
    margin: 0; 
    object-fit:fill; 
    border-radius: 10px; 
    width: 10rem; 
    height:6rem; 
    margin-bottom: 1rem; 
   
 }import "./CardDictamenes.css";
 .TitleDictamen{
  display: flex; 
  flex-direction: column;
  align-items: center; 
  color:white; 
  font-size: 0.6rem;
}
.ContentDictamen{
  font-family: 'Ovo', serif;
  width:100%; 
  display:flex;  
  justify-content: flex-end; 
  font-size: 0.7rem;
}
.TitleDictamen h4{
  text-align: center;
  font-family: 'Ovo', serif;
  margin:0; 
  font-size: 0.8rem; 
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

  `

  const ContainerLoad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #151F42 0%, #000000 250%); 
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.603); 
  margin:1rem;
 padding: 1rem; 
 border-radius:6px; 
  width: 95%;
 margin-left:15%; 
  span {color:#FFFFFF}
  `