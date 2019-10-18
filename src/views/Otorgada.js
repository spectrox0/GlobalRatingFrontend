import React, { useState, useEffect } from "react";
import Header from "../components/Headers/headersViews/header1.js"; 
import styled from "styled-components";
import {
    MDBRow
    , MDBContainer
} from 'mdbreact'

export default function () {

    const OtorgadaContent = styled.div`

    div{
        text-align: justify;
        text-justify: inter-word;
    }

    h3{
      color:#4169E1;
      text-transform:uppercase; 
      align-items:center; 
      justify-content:center; 
      margin: 2rem auto;
    }

    h4{
        display: inline-block;
        font-size: 21px;
        margin-right: 1rem;
        margin-bottom: 5px;
        color: #0099cc;
        font-weight: 300;
        width: 100%;
    }

    p{
        display: inline-block;
        width: 100%;
        margin-bottom:1rem; 
        justify-content:center; 
        font-size: 1rem;
    }

    li{
        
        width: 100%;
        margin-bottom:1rem; 
        font-size: 1rem;
    }


    .sangria{
        margin-left: 1 rem;
        text-indent: 1%;
    }


   
`
    return ( <div className="calificacionContainer"> 
    
        <Header
        title="Calificaciones Otorgadas" 
        urlImage={require("./../assets/img/headers/header1.jpg")}/> 
      
            <MDBContainer className="calificacionContainer">
                   
           
                        <MDBRow>
                           
                                <p >
                                    A lo largo de más de 12 años de experiencia en la calificación de riesgo, Global Ratings, C.A. ha calificado emisiones de un gran número de empresas pertenecientes a diferentes sectores de la economía nacional.
                                </p>
                      
                            <div>
                                <p >
                                    La confidencialidad en el proceso de calificación, no nos permite nombrar a todos nuestros clientes, por lo que a continuación detallamos solamente algunas que llegaron a hacer oferta pública de un título valor o nos autorizaron a hacer pública su calificación:
                                </p>
                            </div>
                        </MDBRow>
                        <MDBRow>
                            <ul>
                                <li>ABA Servicios Financieros, C.A.</li>
                                <li>All Factoring de Venezuela, C.A.</li>
                                <li>Aserca Airlines, S.A.</li>
                                <li>Asincro, C.A.</li>
                                <li>Astra Sociedad de Corretaje de Valores, S.A.</li>
                                <li>Bamerinvest, C.A.</li>
                                <li>Banco Caracas</li>
                                <li>Banco de la Gente Emprendedora (BANGENTE), C.A.</li>
                                <li>Banco de Venezuela, S.A. Banco Universal</li>
                                <li>Banco Fivenez</li>
                                <li>Banco Noroco</li>
                                <li>Banco Provincial, S.A. Banco Universal</li>
                                <li>Banesco Holding, C.A.</li>
                                <li>Banexpress Casa de Bolsa, C.A.</li>
                                <li>C.A.N.T.V.</li>
                                <li>C.A. Danaven</li>
                                <li>C.A. Telares de Palo Grande</li>
                                <li>Cargoport Logistics, C.A.</li>
                                <li>Casa de Bolsa del Caribe, C.A.</li>
                                <li>Cemex de Venezuela, C.A. (antes VENCEMOS)</li>
                                <li>Chase Valores</li>
                                <li>CITIBANK Banco Universal</li>
                                <li>CITIBANK Mercado de Capitales</li>
                                <li>Compañía Operativa de Alimentos COR, C.A.</li>
                                <li>Corp Banca</li>
                                <li>Cotécnica La Bonanza</li>
                                <li>Dayco Host, C.A.</li>
                                <li>Demo, S.A. (DEMOSA)</li>
                                <li>Desarrollo Forestales San Carlos II, S.A. (DEFORSA)</li>
                                <li>Diario El Universal, C.A.</li>
                                <li>Envases Venezolanos, S.A.</li>
                                <li>FAPCO, C.A.</li>
                                <li>Farmatodo</li>
                                <li>Fiesta Casino Guayana, C.A.</li>
                                <li>Ford de Venezuela</li>
                                <li>F.V.I. Fondo de Valores Inmobiliarios, S.A.C.A.</li>
                                <li>General Motors Acceptance Corporation de Venezuela, C.A. (GMAC)</li>
                                <li>Hotel Tamanaco, C.A.</li>
                                <li>H.L. Boulton &Co, S.A.</li>
                                <li>ING Valores</li>
                                <li>Industrias Metalgráficas, C.A.</li>
                                <li>Industrias Unicon, C.A</li>
                                <li>Industrias Venoco, C.A</li>
                                <li>Inelectra, S.A.C.A.</li>
                                <li>Inversiones Selva, C.A</li>
                                <li>Inversiones Tacoa, C.A.</li>
                                <li>Inverunión Casa de Bolsa</li>
                                <li>ItalBursátil Casa de Bolsa</li>
                                <li>Makro</li>
                                <li>Mantex. S.A.</li>
                                <li>Manufacturas de Papel (MANPA), S.A.C.A</li>
                                <li>Microfin, A.C. Ente de Ejecución</li>
                                <li>Mavesa, S.A.</li>
                                <li>Movistar (Telcel)</li>
                                <li>Papeles Venezolanos, C.A.</li>
                                <li>Promotora Casarapa, C.A.</li>
                                <li>Provencesa, S.A. (Grupo Polar)</li>
                                <li>Rattan Hypermarket, C.A.</li>
                                <li>Sanitas de Venezuela</li>
                                <li>SueloPetrol Exploration & Production</li>
                                <li>SuperEnvases Envalic, C.A.</li>
                                <li>SOFIP</li>
                                <li>Toyota Services de Venezuela, C.A</li>
                                <li>Transporte de Valores Bancarios TRANSBANCA, C.A.</li>
                                <li>U21 Servicios Financieros, C.A.</li>
                                <li>Unovalores Casa de Bolsa, C.A.</li>
                                <li>Valores Inmobiliarios de Venezuela, C.A.</li>
                            </ul>
                        </MDBRow>
                    </MDBContainer>
         
       
 
        </div>
    );


}