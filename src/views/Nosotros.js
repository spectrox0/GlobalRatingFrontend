import React, { useState, useEffect } from "react";
import {initGA} from './helpers/initGA.js';
import {
    MDBRow
    , MDBCol
    , MDBContainer
} from 'mdbreact'
import Header from '../components/Headers/headersViews/Header';
import ImgHeader from '../assets/img/headers/Header Nosotros.jpg'; 
export default function () {
    React.useEffect(()=> {
        initGA();
      },[]);
   
    return (
        <>
             
        
             <Header urlImage={ImgHeader} />
        <div className="page-nosotros">

       
                    <MDBContainer >
                    <MDBRow className="title">
           <h2 > 
            Sobre Nosotros 
            </h2> </MDBRow>
                        <MDBRow>
                            <MDBCol sm="5"> 
                                <div className="img-logo">
                                <img src={require("../assets/img/pic_logoGR.svg")} alt="Global Ratings" />
                                </div>
                            </MDBCol>
                        <MDBCol sm="7"> 

                      

                                <p>
                                    <b>  Global Ratings, C.A.</b> , antes CLASIFICADORES ASOCIADOS S&S, C.A., es una empresa con capital 100% nacional y es la primera sociedad calificadora de riesgo,  autorizada por la Comisión Nacional de Valores de Venezuela, según Resolución Nº 057-94 de fecha 08 de Marzo de 1994.

                                    Estamos dentro de las principales empresas calificadoras del país y hemos participado en aproximadamente  el 80% de las ofertas públicas de emisiones de títulos de deuda.

                                    Nuestro equipo de trabajo está conformado por profesionales con amplia experiencia en análisis financiero y económico, con capacidad de discutir y dar su opinión en el estudio y aprobación de la calificación de títulos valores, siguiendo la normativa respectiva y de acuerdo al procedimiento de calificación debidamente autorizado por la Comisión Nacional de Valores.
                                </p>
                         
                    
                                <p>
                                    Estamos dentro de las principales empresas calificadoras del país y hemos participado en aproximadamente  el 80% de las ofertas públicas de emisiones de títulos de deuda.
                                </p>
                          
                  
                                <p>
                                    Nuestro equipo de trabajo está conformado por profesionales con amplia experiencia en análisis financiero y económico, con capacidad de discutir y dar su opinión en el estudio y aprobación de la calificación de títulos valores, siguiendo la normativa respectiva y de acuerdo al procedimiento de calificación debidamente autorizado por la Comisión Nacional de Valores.
                                </p>
                                </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="3"> 
                                <MDBRow> 
                            <h3> Misión </h3>
                          
                          <p>
                              Nuestra misión es dar nuestra opinión independiente sobre las posibilidades de repagar de forma oportuna una deuda u obligación en particular, a través de la recopilación, organización y análisis de toda la información disponible en el mercado y aquella obtenida del propio emisor.
                              </p>
                              </MDBRow>
                              <MDBRow>  
                            <h3> Visión </h3>
                            
                            <p>
                                Nuestra visión es ser la calificadora de riesgo líder del mercado, con la mejor reputación y con la opinión más oportuna y acertada del mercado de capitales venezolano y latinoamericano.
                                </p>
                    
                            </MDBRow>
                            </MDBCol>
                      
                             <MDBCol sm="9" className="col-nosotros"> 
 
                             <MDBRow>
                            <h3> Valores </h3>
                            <ul>
                                <li>
                                   <p> 
                                    <b>Calidad e integridad del proceso de calificación:</b> Nos esforzamos para que nuestras opiniones ayuden a reducir las asimetrías de información de los participantes en el mercado de capitales. Para ello, hemos implementado procedimientos y metodologías que aseguren que nuestras opiniones estén basadas en criterios justos y análisis cuidadosos de la información relevante disponible en el mercado y de la suministrada por la empresa calificada. Nuestra metodología es rigurosa, sistemática y es validada continuamente con base a nuestra experiencia histórica.
                                    </p>
                                    </li>
                                <li>
                                    <p> 
                                    <b>Independencia:</b> Nuestras calificaciones son independientes de presiones políticas y económicas y de conflictos de interés de sus propietarios, o de intereses financieros de sus empleados, evitándose compromisos o relaciones que expongan la independencia y objetividad en nuestros procesos de calificación.
                                    </p>
                                    </li>
                                <li>
                                    <p> 
                                    <b>Transparencia y puntualidad en la calificación:</b> Partimos de la idea de hacer accesible la información por parte de los interesados, tanto del procedimiento de calificación, como de los criterios de análisis básicos que se utilizan. Asimismo, nuestro proceso de calificación es puntual y oportuno de acuerdo a los requerimientos del emisor, de tal forma que no se convierta en un obstáculo para el proceso de autorización ante la Comisión Nacional de Valores.
                                    </p>
                                    </li>

                                <li>
                                    <p> 
                                    <b>Información Confidencial:</b> Mantenemos bajo confidencialidad la información no pública suministrada por el emisor, bajo los términos de un acuerdo que la proteja. En ese sentido, sólo es utilizada para el proceso de calificación.
                                    </p>
                                    </li>
                            </ul>

                        </MDBRow>
                             </MDBCol>
                        </MDBRow>
                     
                      
                    </MDBContainer>
            </div>
            </> 
  
    );


}


