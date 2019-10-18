import React from "react";
import {useState,useEffect} from "react"; 
import Noticias from "./../../components/Cards/CardNoticias.js"; 
import styled from "styled-components"; 
import { device } from './../helpers/devices'; 
// reactstrap components
import { MDBBtn , MDBCol, MDBRow, MDBContainer, MDBCardTitle , MDBCardGroup , MDBCard, MDBCardBody, MDBCardImage , MDBCardText , MDBCardFooter} from "mdbreact";
import axios from 'axios'; 
export default function NoticiasFinanzas({noticias}) {

 
   
   const NNoticias =()=> noticias.map(
     noticia => 
    <MDBCol key={noticia.id} sm="12" md="6" lg="4"> 
    <Noticias {...noticia} /> </MDBCol>

    )
 
    return( <div className="noticias"> 
         <div className="title-noticias"> 
             <h2> 
            TITULARES FINANZAS DIGITAL 
            </h2>
             <div className="underline"> </div>
         </div>
         
     
         <MDBContainer>
         
            {
              !noticias?  
              <div className="container-load-posts"> 
              <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Cargando...</span>
              </div>
              </div> :
               <MDBRow> 
              <NNoticias/>
                </MDBRow>
            }
             < MDBRow className="row-button"> 
             <MDBBtn className="btn-round btn-color-primary"
             > Ver más 
             </MDBBtn>
         </MDBRow>
           </MDBContainer>

           
       
         
       
    </div>); 
}
