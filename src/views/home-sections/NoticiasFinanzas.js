import React from "react";
import {useState,useEffect} from "react"; 
import Noticias from "./components/CardNoticias.js"; 
import styled from "styled-components"; 
import { device } from './../helpers/devices'; 
// reactstrap components
import { Button } from "reactstrap";
import $ from "jquery";
export default function DictamenesDeCaificacion() {
   const [noticias, setNoticias] = useState([]); 
   const [isLoading, setLoading] = useState(true); 
   useEffect(()=> {
    getJson(); 
    
  },[])
   const getJson= () => {
    $.ajax({
      dataType: 'json',
      type: "GET",
      url : "https://www.finanzasdigital.com/traeposts.php?token=aHcT639@/$muzk56&pagina=0&numNoticias=5&categoriaIncluir=-7667,-41,-1574,-7014"
  })
  .then(
    function(data) {
      setNoticias(data);
      setLoading(false); 
  }
  ).catch( err => { 
    throw new Error("error"); 
  });
   }
   const NCard =()=> {
       const innerJSX = noticias.map( args => {
           return <Noticias {...args} /> 

       }); 
       return innerJSX; 
   }
   const NoticiasContainer= styled.div`
   margin:0; 
   padding:0; 
   width:100%; 
   .title-dictamenes{
     display: flex ; 
     flex-direction: column; 
     position: relative; 
     left:0 ; 
     justify-content: center; 
     align-items: center; 
     width: 45%; 
     min-width: 20rem; 
     height: 5rem ; 
     background-color: #151F42; 
     padding: 1.2rem ; 
     margin: 2rem 0 2rem 0; 
     border-top-right-radius: 500px; 
     border-bottom-right-radius: 500px; 

     h4 {
      margin:0; 
      color: #FFFFFF; 
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
      text-align:center; 
      }
     .underline {
      background-color:#2CA8FF; 
      width: 50%; 
      min-width:5rem; 
      min-height: 0.2rem;
      margin: 0; 
      box-shadow: 0px 4px 4px rgba(44, 168, 255, 0.44); 
     transform: matrix(1, 0, 0, -1, 0, 0); 
     }
    }
    .container-news {
         margin:0 0 2rem 0 ; 
         display:flex;
         flex-direction:column; 
         justify-content:center; 
         align-items:center;
         background: linear-gradient(180deg, #151F42 0%, #000000 100%); 
         .row {
          margin: 1rem 2rem 2rem 0 ; 
          display: flex; 
          width:100%; 
          justify-content: flex-end; 
        }
         .news { 
           display: ${isLoading? "flex;":"grid;"}
           width:95%; 
           margin: 0 auto;
           @media ${device.mobileS} {  
            grid-template-columns: 1fr 1fr;}
           @media ${device.mobileM} {  
            grid-template-columns: 1fr 1fr; }
           @media ${device.mobileL} {  
            grid-template-columns: 1fr 1fr ;}
           @media ${device.tablet} {  
            grid-template-columns: 1fr 1fr 1fr;
            }
         @media ${device.laptop} {  
         grid-template-columns: 1fr 1fr 1fr 1fr;
         }
       
         @media ${device.laptopL} {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
         }
          }
    }
     
`
    return( <NoticiasContainer> 
         <div className="title-dictamenes"> 
             <h4> 
            TITULARES FINANZAS DIGITAL 
            </h4>
             <div className="underline"> </div>
         </div>
        
         <div className="container-news">

           <div className="row"> 
            <Button className="btn-round" color="info"
             style={{width:"12rem", fontSize:"1.2rem"}}
             > Más Noticias </Button>
         </div>
          <div className="news" >
            {isLoading? <LoadContainer> <img src={require("../../assets/img/blockLoad.svg")} alt="..."/> </LoadContainer>: <NCard/>}

          </div>
               
         </div>
       
    </NoticiasContainer>); 
}

const LoadContainer = styled.div`
 display:flex; 
 width:100%; 
 margin-bottom:2rem; 
  justify-content:center; 
  align-items:center; 
  img {
    width:20rem; 
  }
`