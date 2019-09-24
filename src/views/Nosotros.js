import React, { useState, useEffect } from "react";
import IndexHeader from "./../components/Headers/IndexHeader";
import {initGA} from './helpers/initGA.js';
import styled from "styled-components";
import {
    Row
    , Col
    , Container
} from 'reactstrap'

export default function () {
    React.useEffect(()=> {
        initGA();
      },[]);
    const NosotrosContent = styled.div`

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

        <NosotrosContent>
            <div className="wrapper">

                <div>
                    <Container >
                        <Row>
                            <h3> Sobre Nosotros </h3>

                            <div>
                                <p className="sangria">
                                    Global Ratings, C.A., antes CLASIFICADORES ASOCIADOS S&S, C.A., es una empresa con capital 100% nacional y es la primera sociedad calificadora de riesgo,  autorizada por la Comisión Nacional de Valores de Venezuela, según Resolución Nº 057-94 de fecha 08 de Marzo de 1994.

                                    Estamos dentro de las principales empresas calificadoras del país y hemos participado en aproximadamente  el 80% de las ofertas públicas de emisiones de títulos de deuda.

                                    Nuestro equipo de trabajo está conformado por profesionales con amplia experiencia en análisis financiero y económico, con capacidad de discutir y dar su opinión en el estudio y aprobación de la calificación de títulos valores, siguiendo la normativa respectiva y de acuerdo al procedimiento de calificación debidamente autorizado por la Comisión Nacional de Valores.
                                </p>
                            </div>
                            <div>
                                <p className="sangria">
                                    Estamos dentro de las principales empresas calificadoras del país y hemos participado en aproximadamente  el 80% de las ofertas públicas de emisiones de títulos de deuda.
                                </p>
                            </div>
                            <div>
                                <p className="sangria">
                                    Nuestro equipo de trabajo está conformado por profesionales con amplia experiencia en análisis financiero y económico, con capacidad de discutir y dar su opinión en el estudio y aprobación de la calificación de títulos valores, siguiendo la normativa respectiva y de acuerdo al procedimiento de calificación debidamente autorizado por la Comisión Nacional de Valores.
                                </p>
                            </div>
                        </Row>
                        <Row>

                            <h4> Misión </h4>
                            <div>
                                <p className="sangria">
                                    Nuestra misión es dar nuestra opinión independiente sobre las posibilidades de repagar de forma oportuna una deuda u obligación en particular, a través de la recopilación, organización y análisis de toda la información disponible en el mercado y aquella obtenida del propio emisor.
                                    </p>
                            </div>
                        </Row>
                        <Row>
                            <h4> Visión </h4>
                            <div>
                                <p className="sangria">
                                    Nuestra visión es ser la calificadora de riesgo líder del mercado, con la mejor reputación y con la opinión más oportuna y acertada del mercado de capitales venezolano y latinoamericano.
                                    </p>
                            </div>
                        </Row>
                        <Row>
                            <h4> Principios</h4>
                            <ul>
                                <li type="disc">

                                    <b>Calidad e integridad del proceso de calificación:</b> Nos esforzamos para que nuestras opiniones ayuden a reducir las asimetrías de información de los participantes en el mercado de capitales. Para ello, hemos implementado procedimientos y metodologías que aseguren que nuestras opiniones estén basadas en criterios justos y análisis cuidadosos de la información relevante disponible en el mercado y de la suministrada por la empresa calificada. Nuestra metodología es rigurosa, sistemática y es validada continuamente con base a nuestra experiencia histórica.
                                    </li>
                                <li type="disc">
                                    <b>Independencia:</b> Nuestras calificaciones son independientes de presiones políticas y económicas y de conflictos de interés de sus propietarios, o de intereses financieros de sus empleados, evitándose compromisos o relaciones que expongan la independencia y objetividad en nuestros procesos de calificación.
                                    </li>
                                <li type="disc">
                                    <b>Transparencia y puntualidad en la calificación:</b> Partimos de la idea de hacer accesible la información por parte de los interesados, tanto del procedimiento de calificación, como de los criterios de análisis básicos que se utilizan. Asimismo, nuestro proceso de calificación es puntual y oportuno de acuerdo a los requerimientos del emisor, de tal forma que no se convierta en un obstáculo para el proceso de autorización ante la Comisión Nacional de Valores.
                                    </li>
                                <li type="disc">
                                    <b>Información Confidencial:</b> Mantenemos bajo confidencialidad la información no pública suministrada por el emisor, bajo los términos de un acuerdo que la proteja. En ese sentido, sólo es utilizada para el proceso de calificación.
                                    </li>
                            </ul>

                        </Row>
                        <Row>
                            <h4> Junta Calificadora </h4>
                            <ul>
                                <li type="disc">
                                    Eduardo Grasso Vecchio
                                    </li>
                                <li type="disc">
                                    María Antonieta Magaldi
                                    </li>
                                <li type="disc">
                                    Beatriz Fernández R.s
                                    </li>
                                <li type="disc">
                                    Elvis Zavatti
                                    </li>
                                <li type="disc">
                                    Juan Andrés Rodríguez B.
                                    </li>
                            </ul>
                        </Row>
                    </Container>
                </div>
            </div>
        </NosotrosContent >
    );


}


