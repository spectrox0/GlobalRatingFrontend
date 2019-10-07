import React, {useState, useEffect} from "react";
// reactstrap components
import { MDBBtn , MDBCol, MDBRow, MDBContainer, MDBCardTitle , MDBCardGroup , MDBCard, MDBCardBody, MDBCardText , MDBCardFooter} from "mdbreact";
import CardDictamen from './../../components/Cards/CardDictamenes'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components"; 
import axios from 'axios'
export default function DictamenesDeCaificacion() {
   
  const [dictamenes, setDictamenes] = useState([]); 
   useEffect(()=> {
    getJson(); 
    
  },[])
   const getJson= async () => {
   const {data}= await axios.get("https://www.finanzasdigital.com/traeposts.php?token=aHcT639@/$muzk56&pagina=0&numNoticias=6&categoriaIncluir=7667,-7014");
    setDictamenes(data)
  
 
   }
  
    return( 
      <div className="dictamenes"> 
         <div className="dictamenes-title"
         >
             <h2 > 
            DICTAMENES DE CALIFICACION 
            </h2>

         </div>
         <MDBContainer>
          <MDBCardGroup>
          <MDBRow> 
           <MDBCol  sm="12" md="6" lg="4"> 
          <CardDictamen/> </MDBCol>
 <MDBCol   sm="12" md="6" lg="4"> 
          <CardDictamen/> </MDBCol>
 <MDBCol   sm="12" md="6" lg="4"> 
          <CardDictamen/> </MDBCol>
          <MDBCol  sm="12" md="6" lg="4"> 
          <CardDictamen/> </MDBCol>
 <MDBCol   sm="12" md="6" lg="4"> 
          <CardDictamen/> </MDBCol>
 <MDBCol   sm="12" md="6" lg="4"> 
          <CardDictamen/> </MDBCol>
 
  
 
 
 </MDBRow>
  </MDBCardGroup>
         </MDBContainer>
         
  

         < MDBRow style={{display:"flex", justifyContent:"end" , margin:"2rem"}}> 
             <MDBBtn className="btn-round btn-color-primary"
             style={{width:"10rem", fontSize:"1.2rem"}}
             > Ver más </MDBBtn>
         </MDBRow>
        
        </div>
  ); 
}

