import React, { useState, useEffect } from "react";
import IndexHeader from "./../components/Headers/IndexHeader";
import Header from "../components/Headers/headersViews/header1.js"; 
import {initGA} from './helpers/initGA.js';
import styled from "styled-components";
import {Link} from "react-router-dom"
import {
    MDBRow
    , MDBContainer,
    MDBBtn
    ,MDBCollapse
} from 'mdbreact'

export default function () {
    React.useEffect(()=> {
        initGA();
      },[]);
    const [collapseID, setCollapseID] = useState(""); 

    const toggleCollapse = (collapseiD) => {
    setCollapseID( collapseID !==collapseiD? collapseiD : ""); 
    }

    return (
        <div className="calificacionContainer" >
            <Header
            title="Calificación de Riesgo" 
            urlImage={require("./../assets/img/headers/header1.jpg")}/>
            

                    <MDBContainer >
                        <MDBRow>
                                <p >
                                    La calificación de riesgo proporciona una opinión independiente sobre la posibilidad que tiene una empresa de cancelar oportunamente y según las condiciones pactadas, la totalidad del capital y los intereses generados de una obligación específica. En ningún caso implica una recomendación para comprar, vender o mantener un título valor, ni una garantía de su pago, más bien debe ser vista por el inversionista, como una información complementaria a la hora de tomar una decisión.
                                </p>
                          
                          
                                <p>
                                    Pueden ser calificados entre otros, Papeles Comerciales, Bonos, Titularizaciones, Proyectos, Acciones o Empresas (Holdings, Servicios, Comercios, Industrias, Bancos, Seguros, Casas de Bolsa, etc.) y se pretende que la calificación sea comparable sin importar a qué sector económico pertenece la compañía.
                                </p>
                       
                    
                                <p>
                                    El proceso de Calificación es interactivo. La intervención del Emisor es fundamental para la correcta interpretación de la información a ser procesada por la Calificadora. El análisis se basa en la trayectoria de la empresa, en la capacidad que ha tenido de adaptarse ante cambios del entorno, las características del título emitido y principalmente en las perspectivas de la entidad durante la vigencia del plazo del instrumento que se esté calificando.
                                </p>
                   
                       
                                <p>
                                    La evaluación se realiza sobre información pública de la compañía y del sector al que pertenece, así como información interna suministrada voluntariamente por el emisor bajo un convenio de confidencialidad con la calificadora, y se complementa con reuniones que se realizan con diversas gerencias de la organización. Posteriormente, se  alimentan nuestros modelos con toda la data recabada, obteniéndose una calificación metodológica que es discutida con el emisor. Por último, es sometida a consideración de nuestra Junta Calificadora, quien emite un dictamen definitivo.
                            </p>
                           
                         
                                <p>
                                    En caso de existir garantías calificadas o calificables, atadas a la emisión, la Categoría de Riesgo asignada puede ser la de la garantía, en función de su calidad y grado de liquidez.
                                </p>
                     
                           
                        </MDBRow>
                        <MDBRow 
                        style={{
                        display:"flex",
                        justifyContent:"center"
                        }} >
                      
                            </MDBRow>
                        <MDBRow className="subTitle" >
                            <h3>Categorías de Riesgo</h3>
                      
                            </MDBRow>
                            <MDBRow>
                            <MDBBtn
                              className="btn-round btn-color-primary "
                              onClick={  () => toggleCollapse("categoryA")}
                          > Categoria A </MDBBtn>
                          <MDBCollapse id="categoryA" isOpen={collapseID}>
                                <p>
                                    Corresponde a aquellos instrumentos con una muy buena capacidad de pago de capital e intereses en los términos y plazos pactados, la cual no debería verse afectada ante eventuales cambios en el emisor, en el sector o área a que éste pertenece, o en la economía, sólo en casos extremos, pudiera afectarse levemente el riesgo del instrumento calificado.
                                </p>
                                <ul>
                                    <li>
                                        <b>Sub-Categoría A1:</b>Se trata de instrumentos con escaso riesgo de inversión, ya que muestran una excelente capacidad de pago del capital y de los intereses, en las condiciones y los plazos pactados. A criterio del calificador, se considerará que no existe la posibilidad de que cambios predecibles en la sociedad emisora, en el sector económico a que ésta pertenece o en la marcha de la economía en general, incrementen el riesgo del instrumento bajo consideración.
                                    </li>
                                    <li>
                                        <b>Sub-Categoría A2:</b> Se trata de instrumentos con un mínimo riesgo de inversión, su capacidad de pago, tanto del capital como de los intereses, es muy buena. Según la opinión del calificador, de producirse cambios predecibles en la sociedad emisora, en el sector económico a que ésta pertenece o en la marcha de la economía en general, no se incrementaría significativamente su riesgo.
                                        </li>
                                    <li>
                                        <b>Sub-Categoría A3:</b> Se trata de instrumentos que presentan para el inversor un muy bajo riesgo. Cuentan con una adecuada capacidad de pago, del capital e intereses, en los términos y plazos pactados. A juicio del calificador, sólo en casos extremos, eventuales cambios en la sociedad emisora, en el sector económico a que ésta pertenece o en la marcha de la economía en general, podrían incrementar levemente el riesgo del instrumento bajo consideración.
                                        </li>
                                </ul> 
                                 </MDBCollapse>
                                </MDBRow> 
                            <MDBRow>
                            
                                <MDBBtn
                              className="btn-round btn-color-primary "
                              onClick={  () => toggleCollapse("categoryB")}
                          > Categoria B </MDBBtn>
                            <MDBCollapse id="categoryB" isOpen={collapseID}> 
                                <p>
                                    Corresponde a aquellos instrumentos con buena capacidad de pago de capital e intereses en los términos y plazos pactados, pero susceptibles de ser afectadas, en forma moderada ante eventuales cambios en el emisor, en el sector o área a que éste pertenece, o en la economía.
                                </p>
                                <ul>
                                    <li>
                                        <b>Sub-Categoría B1:</b> Se trata de instrumentos que presentan un bajo riesgo para la inversión. Tienen una buena capacidad de pago, del capital e intereses, en los términos y plazos pactados, pero, a juicio del calificador eventuales cambios en la sociedad emisora, en el sector económico a que éste pertenece o en la marcha de los negocios en general, podrían incrementar levemente el riesgo.
                                    </li>
                                    <li>
                                        <b>Sub-Categoría B2: </b> Se trata de instrumentos que, actualmente, presentan un relativo bajo riesgo para la inversión. Tiene una adecuada capacidad de pago del capital e intereses, en los términos y plazos pactados, pero, a juicio del calificador eventuales cambios en la sociedad emisora, en el sector económico a que ésta pertenece o en la marcha de los negocios en general, podrían incrementar el riesgo.
                                        </li>
                                    <li>
                                        <b>Sub-Categoría B3:</b>  Se trata de instrumentos que presentan algún riesgo para la inversión en ellos. Tienen capacidad de pago del capital e intereses en los términos pactados, pero a juicio del calificador son susceptibles de ser afectados ante eventuales cambios en la sociedad emisora, en el sector económico a que ésta pertenece o en la marcha de los negocios en general.
                                        </li>
                                </ul>
                                </MDBCollapse>
                            </MDBRow>
                            <MDBRow>
                            <MDBBtn
                              className="btn-round btn-color-primary "
                              onClick={  () => toggleCollapse("categoryC")}
                          > Categoria C </MDBBtn>
                           <MDBCollapse id="categoryC" isOpen={collapseID}> 
                                <p>
                                    Corresponde a aquellos instrumentos que no tienen buena capacidad de pago de capital e intereses puesto que son vulnerables ante cambios adversos en el emisor, en el sector o área a que éste pertenece o en la economía, lo que podría producir retardo en el pago o pérdida de intereses.
                                </p>
                                <ul>
                                    <li>
                                        <b>Sub-Categoría C1:</b> Se trata de instrumentos que presentan riesgo moderado para la inversión. Cuentan con una baja capacidad de pago del capital e intereses en los términos y plazos pactados, ya que ante eventuales cambios en la sociedad emisora, en el sector económico a que ésta pertenece o en la marcha de la economía en general, tendrían probabilidad de retardo en el pago o de pérdida de los intereses.
                                    </li>
                                    <li>
                                        <b>Sub-Categoría C2:</b> Se trata de instrumentos que presentan riesgo para la inversión. Cuentan con una baja capacidad de pago del capital e intereses en los términos y plazos pactados, ya que ante eventuales cambios en la sociedad emisora, en el sector económico a que ésta pertenece o en la marcha de la economía en general, tendrían alta probabilidad de retardo en el pago o de pérdida de los intereses.
                                        </li>
                                    <li>
                                        <b>Sub-Categoría C3: </b> Se trata de instrumentos con un alto riesgo de incumplimiento. Su probabilidad de pago, del capital e intereses, en los términos y plazo pactados, depende de una futura evolución más favorable de la sociedad emisora, del sector económico a que ésta pertenece y de la marcha de la economía en general.
                                        </li>
                                </ul>
                                </MDBCollapse>
                            </MDBRow>
                            <MDBRow>
                            <MDBBtn
                              className="btn-round btn-color-primary "
                              onClick={  () => toggleCollapse("categoryD")}
                          > Categoria D </MDBBtn>
                           <MDBCollapse id="categoryD" isOpen={collapseID}>
                                <p>Corresponde a aquellos instrumentos que tienen una mínima capacidad de pago de capital e intereses con una elevada probabilidad de retardo en los pagos o pérdida de los mismos.
                                </p>
                                </MDBCollapse>
                            </MDBRow>
                            <MDBRow>
                            <MDBBtn
                              className="btn-round btn-color-primary "
                              onClick={  () => toggleCollapse("categoryE")}
                          > Categoria E </MDBBtn>
                          <MDBCollapse id="categoryE" isOpen={collapseID}> 
                                <p>Corresponde a aquellos instrumentos que tienen una mínima capacidad de pago de capital e intereses con una elevada probabilidad de retardo en los pagos o pérdida de los mismos.
                                </p>
                                </MDBCollapse>
                            </MDBRow>
                      
                        <MDBRow className="subTitle" style={{cursor:"pointer"}} onClick={  () => toggleCollapse("fases")} >
                         
                             <h3 >Fases del Proceso de Calificación</h3>
                          
                           </MDBRow>
                           <MDBRow>
                           <MDBCollapse id="fases" isOpen={collapseID}> 
                            <ol>
                                <li>
                                    Visita Introductoria: <span>Se planifica junto con el emisor el proceso de Calificación. Se aclaran dudas sobre el proceso. El emisor hace una presentación general de su empresa a los analistas de SOFTline Ratings. Se le entrega al emisor una lista inicial con la información mínima que debe suministrar para iniciar el proceso de calificación.
                                    </span>
                                    </li>
                                <li>
                                <b>Recepción de Recaudos.</b> 
                                    </li>
                                <li>
                                Análisis de Recaudos: <span>Nuestro personal analiza la calidad de la información suministrada y comienza formalmente el proceso de calificación. Dado que la comunicación emisor-calificadora debe ser fluida, este paso no limita a que en un futuro se le pueda solicitar más información al emisor, en particular más detalle o algún desglose en las cifras.
                                </span>
                                    </li>
                                <li> Levantamiento de Información: <span>Según el tipo de empresa y de acuerdo a su estructura organizativa, se pueden realizar entrevistas en áreas tales como: Mercadeo, Finanzas, Tesorería, Planificación, Planta (en caso que sea una industria), Contraloría y Riesgo (en caso de una institución financiera), entre otras.
                                </span>
                               
                                    </li>
                                <li>
                                Vaciado de la información y aplicación de la Metodología: <span>Se alimentan nuestros modelos con toda la data recabada y realizamos los análisis financieros y complementarios (sectoriales, propiedad, gerencia, etc.).
                                </span>
                                    </li>
                                <li>
                                Determinación de la Calificación Metodológica: <span>Como resultado de la corrida de nuestros modelos se obtiene una pre-calificación, que es presentada al emisor, junto con un borrador de informe que la sustenta. En esta fase, el emisor tiene derecho a revisar el informe para determinar si posee información de carácter estratégico que no desee divulgar. Si la empresa está de acuerdo con su calificación, pero no desea hacerla pública, el proceso finaliza en esta etapa.
                                </span>
                                    </li>
                                    <li>
                                Junta Calificadora: <span>En caso que el emisor acepte su calificación, se somete a consideración de nuestra Junta Calificadora, quien discute el caso y emite un Dictamen de Riesgo.
                                </span>
                                    </li>
                                    <li>
                                Comisión Nacional de Valores: <span>En caso que el objeto de la calificación sea para evaluar el riesgo de una emisión pública de títulos de deuda, el Dictamen de Calificación así como el informe que lo sustenta es enviado a la Comisión Nacional de Valores y al emisor.
                                </span>
                                    </li>
                                    <li>
                                Seguimiento y Revisión de la Calificación: <span>La calificación otorgada es monitoreada continuamente, pero debe ser revisada en el plazo determinado en el dictamen de calificación inicial (generalmente a los seis meses), cuando el emisor, tenga conocimiento de cambios en la empresa o en el entorno que puedan influir en su nivel de riesgo o cuando la Comisión Nacional de Valores lo considere oportuno. En esta fase se le solicita al emisor que actualice la información suministrada originalmente a la calificadora (básicamente estados financieros), se aclaren dudas en caso de presentarse cambios significativos y se emite un dictamen de revisión que debe ser enviado a la Comisión Nacional de Valores y al emisor.
                                </span>
                                    </li>
                            </ol>
                            </MDBCollapse>
                        </MDBRow>
                        <MDBRow  className="subTitle">
                  
                        <h3>Resumen de Metodología de Calificación</h3>
                             </MDBRow>
                         
                            <MDBRow className="rowLinks">
                                <ul>
                                    <li>
                                    <a href="">Empresas no Financieras (109.344 Kb) </a>
                                    </li>
                                    <li>
                                    <a href="">Instituciones Financieras (100.861 Kb) </a>
                                    </li>
                                    <li>
                                    <a href="">Seguros (81.725 Kb) </a>
                                    </li>
                                    <li>
                                    <a href="">Casas de Bolsa (101.483 Kb) </a>
                                    </li>
                                    <li>
                                    <a href="">Holdings (77.709 Kb) </a>
                                    </li>
                                    <li>
                                    <a href="">Titularizaciones (114.218 Kb)</a>
                                    </li>
                                </ul>
                          
                        </MDBRow>
                    </MDBContainer>
                </div>
    );


}


