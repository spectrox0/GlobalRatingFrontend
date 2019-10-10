import React from "react";
import {useState,useEffect} from "react"; 
import Noticias from "./../../components/Cards/CardNoticias.js"; 
import styled from "styled-components"; 
import { device } from './../helpers/devices'; 
// reactstrap components
import { MDBBtn , MDBCol, MDBRow, MDBContainer, MDBCardTitle , MDBCardGroup , MDBCard, MDBCardBody, MDBCardImage , MDBCardText , MDBCardFooter} from "mdbreact";
import axios from 'axios'; 
export default function DictamenesDeCaificacion() {
   const [noticias, setNoticias] = useState([]); 
   const [isLoading, setLoading] = useState(true); 
   useEffect(()=> {
    getJson(); 
    
  },[])
   const getJson= async () => {
    const {data} = await axios.get("https://www.finanzasdigital.com/traeposts.php?token=aHcT639@/$muzk56&pagina=0&numNoticias=5&categoriaIncluir=-7667,-41,-1574,-7014")
      setNoticias(data);
      setLoading(false); 
   }
   const NCard =()=> {
       const innerJSX = noticias.map( args => {
           return <Noticias {...args} /> 

       }); 
       return innerJSX; 
   }
 
    return( <div className="noticias"> 
         <div className="title-noticias"> 
             <h2> 
            TITULARES FINANZAS DIGITAL 
            </h2>
             <div className="underline"> </div>
         </div>
        
         <MDBContainer>
          <MDBCardGroup>
          <MDBRow> 
           <MDBCol  sm="12" md="6" lg="4"> 
          <Noticias/> </MDBCol>
 <MDBCol   sm="12" md="6" lg="4"> 
          <Noticias/> </MDBCol>
 <MDBCol   sm="12" md="6" lg="4"> 
          <Noticias/> </MDBCol>
   
 
  
 
 
 </MDBRow>
  </MDBCardGroup>
         </MDBContainer>
         
       
    </div>); 
}
