import React, {useState, useEffect} from "react";
// reactstrap components
import { MDBBtn , MDBCol, MDBRow, MDBContainer, MDBCardGroup ,MDBIcon} from "mdbreact";
import CardDictamen from './../../components/Cards/CardDictamenes'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components"; 
import axios from 'axios'
export default function DictamenesDeCaificacion({dictamenes}) {
   
   const Dictamenes = () => dictamenes.posts.nodes.map(
     dictamen => 
     <MDBCol key={dictamen.postId} sm="6" md="4" lg="4">
    <CardDictamen {...dictamen} />
   </MDBCol>)
  
    return( 
      <div className="dictamenes"> 
      
         <MDBContainer>
         <MDBRow className="dictamenes-title"  >
           <h2 > 
            Dictámenes de Calificación
            </h2>
            </MDBRow>

          
          {
              !dictamenes?  
              <div className="container-load-posts"> 
              <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Cargando...</span>
              </div>
              </div> :
              <MDBCardGroup>
                <MDBRow> 
            <Dictamenes/>
        
             </MDBRow>
               </MDBCardGroup>
            }
       
    < MDBRow className="row-button"> 
             <MDBBtn href="https://www.finanzasdigital.com/category/rf/calificacion" className="btn-invisible"
             > <MDBIcon icon="plus-circle" />
             </MDBBtn>
         </MDBRow>
         </MDBContainer>
         
  
         
       
        
        </div>
  ); 
}

