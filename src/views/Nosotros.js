import React, { useState, useEffect } from "react";
import IndexHeader from "./../components/Headers/IndexHeader";
import styled from "styled-components";
import {
    Row
    , Col,
    Container
} from 'reactstrap'

export default function () {

    const NosotrosContent = styled.div`
   .main {
       display: flex; 
       flex-direction: column; 
       align-items:center; 
       justify-content:center; 
       height:100vh; 
      
   }
`
    return (

        <NosotrosContent>
            <div className="wrapper">

                <div className="main" >
                    <Container >
                        <Row>
                            <h3> Sobre Nosotros </h3>

                            <div>
                                <span>
                                    Global Ratings, C.A., antes CLASIFICADORES ASOCIADOS S&S, C.A., es una empresa con capital 100% nacional y es la primera sociedad calificadora de riesgo,  autorizada por la Comisión Nacional de Valores de Venezuela, según Resolución Nº 057-94 de fecha 08 de Marzo de 1994.

                                    Estamos dentro de las principales empresas calificadoras del país y hemos participado en aproximadamente  el 80% de las ofertas públicas de emisiones de títulos de deuda.

                                    Nuestro equipo de trabajo está conformado por profesionales con amplia experiencia en análisis financiero y económico, con capacidad de discutir y dar su opinión en el estudio y aprobación de la calificación de títulos valores, siguiendo la normativa respectiva y de acuerdo al procedimiento de calificación debidamente autorizado por la Comisión Nacional de Valores.
                                </span>
                            </div>
                            <div>
                                <span>
                                    Estamos dentro de las principales empresas calificadoras del país y hemos participado en aproximadamente  el 80% de las ofertas públicas de emisiones de títulos de deuda.
                                </span>
                            </div>
                            <div>
                                <span>
                                    Nuestro equipo de trabajo está conformado por profesionales con amplia experiencia en análisis financiero y económico, con capacidad de discutir y dar su opinión en el estudio y aprobación de la calificación de títulos valores, siguiendo la normativa respectiva y de acuerdo al procedimiento de calificación debidamente autorizado por la Comisión Nacional de Valores.
                                </span>
                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <h3> Misión </h3>

                                <div>
                                    <span>
                                        Nuestra misión es dar nuestra opinión independiente sobre las posibilidades de repagar de forma oportuna una deuda u obligación en particular, a través de la recopilación, organización y análisis de toda la información disponible en el mercado y aquella obtenida del propio emisor.
                                    </span>
                                </div>
                            </Col>
                            <Col>
                                <h3> Visión </h3>

                                <div>
                                    <span>
                                        Nuestra visión es ser la calificadora de riesgo líder del mercado, con la mejor reputación y con la opinión más oportuna y acertada del mercado de capitales venezolano y latinoamericano.
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <h3> Principios y Valores</h3>
                            <div>
                                <ul>
                                    <li>Calidad e integridad del proceso de calificación: Nos esforzamos para que nuestras opiniones ayuden a reducir las asimetrías de información de los participantes en el mercado de capitales. Para ello, hemos implementado procedimientos y metodologías que aseguren que nuestras opiniones estén basadas en criterios justos y análisis cuidadosos de la información relevante disponible en el mercado y de la suministrada por la empresa calificada. Nuestra metodología es rigurosa, sistemática y es validada continuamente con base a nuestra experiencia histórica.
                                    </li>
                                    <li>
                                        Independencia: Nuestras calificaciones son independientes de presiones políticas y económicas y de conflictos de interés de sus propietarios, o de intereses financieros de sus empleados, evitándose compromisos o relaciones que expongan la independencia y objetividad en nuestros procesos de calificación.
                                    </li>
                                    <li>
                                        Transparencia y puntualidad en la calificación: Partimos de la idea de hacer accesible la información por parte de los interesados, tanto del procedimiento de calificación, como de los criterios de análisis básicos que se utilizan. Asimismo, nuestro proceso de calificación es puntual y oportuno de acuerdo a los requerimientos del emisor, de tal forma que no se convierta en un obstáculo para el proceso de autorización ante la Comisión Nacional de Valores.
                                    </li>
                                    <li>
                                        Información Confidencial: Mantenemos bajo confidencialidad la información no pública suministrada por el emisor, bajo los términos de un acuerdo que la proteja. En ese sentido, sólo es utilizada para el proceso de calificación.
                                    </li>
                                </ul>
                            </div>
                        </Row>
                        <Row>
                            <h3> Junta Calificadora </h3>
                            <div>
                                <ul>
                                    <li>
                                        Eduardo Grasso Vecchio
                                    </li>
                                    <li>
                                        María Antonieta Magaldi
                                    </li>
                                    <li>
                                        Beatriz Fernández R.s
                                    </li>
                                    <li>
                                        Elvis Zavatti
                                    </li>
                                    <li>
                                        Juan Andrés Rodríguez B.
                                    </li>
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </NosotrosContent >
    );


}


