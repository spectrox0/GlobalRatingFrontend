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
       <CardNoticias>
          <div className="contentCard">
        <div className="imgContainer"> 
        <img 
        src={isLoading? require("../../../assets/img/blockLoad2.svg"): imageUrl}
         alt="..."/> 
           </div>
           <div className="TitleDictamen">
           <h4> {title} </h4>
           <span className="date"> {datee}  </span>
           </div>
           </div>
           <div className="LinkLeer">
           
           <Link to={{
        pathname: '/noticia',
        search: `?id=${id}`
       }} > Leer más </Link>
           </div>

           
        
       </CardNoticias>); 
   

  }
  const CardNoticias = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items:center; 
    height:auto; 
    background: rgba(44, 168, 255, 0.8);
   box-shadow: 0px 0px 4px rgba(44, 168, 255, 0.64);
   border-radius: 10px; 
   padding-left: 1rem; 
   padding-right:1rem; 
   padding-bottom:.8rem; 
   padding-top: .8rem; 
   width: 15rem; 
   height: 20rem;
   opacity: 0.8; 
   transition: all 0.3s ease-out; 
   .contentCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;  
    .imgContainer{
      width:100%; 
      height:6.6rem; 
       display: flex;
      justify-content: center;
    } }
   @media ${device.mobileS} {  
    width:8.8rem; 
    margin: 0.6rem;  
   h4 {
     font-size: 0.8rem; 
   } 
   .date {
    font-size: 0.7rem; 
  } 
  
  .LinkLeer a{
    font-size: .7rem; 
  }
  
  }
   @media ${device.mobileM} {  
     width:10rem; 
     margin: 0.8rem;  
     h4 {
      font-size: 0.7rem; 
    } 
    .date {
     font-size: 0.6rem; 
   } 
 .LinkLeer a{
    font-size: .6rem; 
  } }
   @media ${device.mobileL} {  
    width:11.5rem; 
     margin: 0.8rem;  
     h4 {
      font-size: 0.8rem; 
    } 
    .date {
     font-size: 0.7rem; 
   } 
  
  .LinkLeer a{
    font-size: .7rem; 
  }
    }
   @media ${device.tablet} {  
    width:13.5rem; 
    margin: 0.9rem;  
    h4 {
      font-size: 1rem; 
    } 
    .date {
     font-size: 0.9rem; 
   } 
 
  .LinkLeer a{
    font-size: .9rem; 
  }
    }
 @media ${device.laptop} {  
  width:13rem;
  margin: 1rem;  
  h4 {
    font-size: 1rem; 
  } 
  .date {
   font-size: 0.9rem; 
 } 
 
 .LinkLeer a{
  font-size: 0.9rem; 
}
 }

 @media ${device.laptopL} {
  width:14rem; 
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
  imgContainer{
    margin:.5rem; 
 }
    img {
    margin: 0; 
    border-radius: 10px; 
    transition: all 0.3s ease-out; 
    object-fit:fill; 
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
  width:100%; 
  display:flex; 
  justify-content:flex-end; 
 }
 .LinkLeer{
  display: flex; 
  width:100%; 
  justify-content: flex-end; 
  color: #151F42;
}  
.LinkLeer a{
  display: flex; 
  justify-content: flex-end; 
  color: #151F42;
}
  `