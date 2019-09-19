import React, { useState, useEffect } from "react";
import IndexHeader from "./../components/Headers/IndexHeader";
import styled from "styled-components";
import {
    Row
    , Col
    , Container
} from 'reactstrap'

export default function () {

    const ProductosContent = styled.div`

    .resalta{
        color: #0099cc;
    }

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
        color:#191970;
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
        <ProductosContent>
            <div className="wrapper">
                <div>
                    <Container >
                        <Row>
                            <h3> Productos y Servicios </h3>
                            <ul>
                                <div>
                                    <li type="square">
                                            <b className="resalta">Servicio de calificación de riesgo de títulos valores:</b> Para cumplir con los requisitos exigidos por la Comisión Nacional de Valores, y así obtener la autorización necesaria para poder realizar oferta pública de:
                                        <ul>
                                            <li type="disc">
                                                Papeles Comerciales
                                    </li>
                                            <li type="disc">
                                                Obligaciones
                                    </li>
                                            <li type="disc">
                                                Bonos
                                    </li>
                                            <li type="disc">
                                                Titularizaciones,etc.
                                    </li>
                                        </ul>
                                    </li>
                                </div>
                                <div>
                                    <li type="square">
                                            <b className="resalta">Evaluación económico-financiera:</b> Para poder medir el desempeño de una empresa, orientado principalmente a:
                                        <ul>
                                            <li type="disc">
                                                Empresas Manufactureras y de Servicios
                                    </li>
                                            <li type="disc">
                                                Instituciones Financieras
                                    </li>
                                            <li type="disc">
                                                Casas de bolsa
                                    </li>
                                            <li type="disc">
                                                Empresas financieras
                                    </li>
                                            <li type="disc">
                                                Compañías de Seguros
                                    </li>
                                        </ul>
                                    </li>
                                </div>
                                <div>
                                    <li type="square">
                                            <b className="resalta">Certificación de Proveedores/Clientes:</b> Se otorga un rating a Proveedores/Clientes de acuerdo a una escala propia de la calificadora y luego de haber realizado el análisis de los aspectos más relevantes que sustentan la opinión sobre su situación económico–financiera.
                                    </li>
                                </div>
                                <div>
                                    <li type="square">
                                        <b className="resalta">Evaluaciones de proyectos</b>.
                                    </li>
                                </div>
                                <div>
                                    <li type="square">
                                        <b className="resalta">Estudios para medir el desenvolvimiento y las perspectivas de un sector económico</b>.
                                    </li>
                                </div>
                            </ul>
                        </Row>
                    </Container>
                </div>
            </div>
        </ProductosContent>
    );


}


