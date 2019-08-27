import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import {device} from './../../helpers/devices'; 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default function CardDictamenes({
    id,
    imageUrl,
    date,
    title
   
  }) { 
    const [isLoading, setLoading] = useState(true); 
    const [datee,setDate] = useState(""); 
    useEffect(()=> {
      if(imageUrl){
          setLoading(false); 
          var date_ = new Date(date)
          var options = { year: "numeric", month: "long", day: "numeric"};
          setDate(date_.toLocaleDateString("es-ES", options));
      }
  }, [imageUrl, date]); 
      return (
       <CardNoticias to={{
        pathname: '/noticia',
        search: `?id=${id}`
       }}>
        <div className="imgContainer"> 
        <img 
        src={isLoading? require("../../../assets/img/blockLoad2.svg"): imageUrl}
         alt="..."/> 
           </div>
           <div className="TitleDictamen">
           <h4> {title} </h4>
           <span className="date"> {datee}  </span>
           <div className="LinkLeer">
           
             <a href="#"> Leer más</a>
           </div>
                </div>
        
       </CardNoticias>); 
   

  }
  const CardNoticias = styled(Link)`
  display: flex;
    flex-direction: column;
    justify-content: center; ; 
    align-items: center; 
    background: rgba(44, 168, 255, 0.8);
   box-shadow: 0px 0px 4px rgba(44, 168, 255, 0.64);
   border-radius: 10px; 
   padding: 1rem; 
   width: 15rem; 
   height: 20rem;
   opacity: 0.8; 
   cursor: pointer;
   transition: all 0.3s ease-out; 
   @media ${device.mobileS} {  
    width:8.8rem; 
    height:14rem; 
    margin: 0.6rem;  
   h4 {
     font-size: 0.8rem; 
   } 
   .date {
    font-size: 0.7rem; 
  } 
  .imgContainer {
    width:7rem; 
    height:7rem; 
 
  }
  .LinkLeer a{
    font-size: .7rem; 
  }
  
  }
   @media ${device.mobileM} {  
     width:10rem; 
     height:15rem;  
     margin: 0.8rem;  
     h4 {
      font-size: 0.7rem; 
    } 
    .date {
     font-size: 0.6rem; 
   } 
   .imgContainer {
    width:8rem; 
    height:8rem; 
 
  }.LinkLeer a{
    font-size: .6rem; 
  } }
   @media ${device.mobileL} {  
    width:11.5rem; 
     height:16rem;  
     margin: 0.8rem;  
     h4 {
      font-size: 0.8rem; 
    } 
    .date {
     font-size: 0.7rem; 
   } 
   .imgContainer {
    width:9rem; 
    height:9rem; 
  }
  .LinkLeer a{
    font-size: .7rem; 
  }
    }
   @media ${device.tablet} {  
    width:13.5rem; 
    height:17rem;  
    margin: 0.9rem;  
    h4 {
      font-size: 1rem; 
    } 
    .date {
     font-size: 0.9rem; 
   } 
   .imgContainer {
    width:10rem; 
    height:10rem; 
  }
  .LinkLeer a{
    font-size: .9rem; 
  }
    }
 @media ${device.laptop} {  
  width:13rem; 
  height:20rem;  
  margin: 1rem;  
  h4 {
    font-size: 1rem; 
  } 
  .date {
   font-size: 0.9rem; 
 } 
 .imgContainer {
   width:11rem; 
   height:11rem; 

 }
 .LinkLeer a{
  font-size: 0.9rem; 
}
 }

 @media ${device.laptopL} {
  width:14rem; 
  height:20rem;  
  margin:1rem;
  h4 {
    font-size: 1.1rem; 
  } 
  .date {
   font-size: 1rem; 
 } 
 .imgContainer {
  width:12rem; 
  height:12rem; 
}
.LinkLeer a{
  font-size: 1rem; 
}
 }
     
   &:hover  {
    text-decoration: none; 
    transform: translate(-.5rem,-.5rem) scale(1.03);
    opacity: 1;
  } 
    img {
    margin: 0; 
    width:100%; 
    height:100%; 
    border-radius: 10px; 
    transition: all 0.3s ease-out; 
    object-fit:cover; 
 } 
  &:hover img {
  transform: scale(1.05);
  
}
h4{
  color:#FFFFFF;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
} 
span {
  color:rgb(221, 220, 220);
  font-size: 0.8rem; 
 }
 .LinkLeer{
  display: flex; 
  justify-content: flex-end; 
  color: #151F42;
}  
.LinkLeer a{
  display: flex; 
  justify-content: flex-end; 
  color: #151F42;
}
  `