import React, { useState, useEffect } from "react";
import IndexHeader from "./../components/Headers/IndexHeader";
import styled from "styled-components";
import {
    Row
    , Col
    , Container
} from 'reactstrap'

export default function () {


    const MercadoContent = styled.div`
    min-height:100vh; 
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
    return (

        <MercadoContent>
            <div className="wrapper">

                <div>
                    <Container >
                        <Row>
                            <h3> Mercado de Capitales </h3>
                        </Row>
                        <Row>
                            <div>
                                <ul>
                                    <li type="disc">
                                        Programa de Renta Fija aprobado por la SNV en el año 2011
                                    </li>
                                    <li type="disc">
                                        Programa de Renta Fija aprobado por la SNV en el año 2010
                                    </li>
                                    <li type="disc">
                                        Programa de Renta Fija aprobado por la SNV en el año 2009
                                    </li>
                                    <li type="disc">
                                        Programa de Renta Fija aprobado por la SNV en el año 2008
                                    </li>
                                    <li type="disc">
                                        Programa de Renta Fija aprobado por la SNV en el año 2007
                                    </li>
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </MercadoContent >
    );


}