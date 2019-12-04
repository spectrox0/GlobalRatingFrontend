import React, { useState, useEffect } from "react";
import Header from '../components/Headers/headersViews/Header';
 import ImgHeader from '../assets/img/headers/Header Calificación.png'; 
import {initGA} from './helpers/initGA.js';
import {Link} from "react-router-dom"
import ShareFriend from './../components/Others/shareFriends'
import {
    MDBRow,
    MDBContainer,
    MDBCollapse,
    MDBTabPane,
    MDBTabContent,
    MDBNav , 
    MDBNavLink, 
    MDBNavItem,
    MDBIcon
} from 'mdbreact'

export default function Calificacion () {
    React.useEffect(()=> {
        initGA();
      },[]);
    const [collapseID, setCollapseID] = useState(""); 
    const [items ,setItems] =useState({default: "1",}); 

    const togglePills = (type, tab) => e => {
        e.preventDefault();
        if (items[type] !== tab) {
          let items_ = { ...items };
          items_[type] = tab;
          setItems(items_); 
        }
      };

    const toggleCollapse = (collapseiD) => {
    setCollapseID( collapseID !==collapseiD? collapseiD : ""); 
    }

    return (
        <> 
        <Header urlImage={ImgHeader} />
        <div className="calificacionContainer" >
       
     
                   
                    <MDBContainer >
                    <MDBRow className="title"> 
                    <h2> 
                        Calificación de riesgo
                    </h2>
                    </MDBRow>
                        <MDBRow>
                                <p >
                                Proporciona una opinión independiente sobre la posibilidad que tiene una empresa de pagar oportunamente, según las condiciones pactadas, la totalidad del capital e intereses generados de una obligación específica. En ningún caso implica una recomendación para comprar, vender o mantener un título valor, ni una garantía de su pago, y debe ser vista como otro de los insumos necesarios que cualquier inversionista debe tomar en consideración a la hora de tomar una decisión. 
                                </p>
                          
                          
                                <p>
                                Para el emisor, la calificación de riesgo le permite contar con una opinión independiente sobre la salud financiera de la empresa, con la cual podrá detectar dificultades y aplicar correctivos adecuados para solventarlas.
                                </p>
                       
                    
                                <p>
                                Pueden ser calificados entre otros: Papeles Comerciales, Obligaciones, Bonos, Titularizaciones, Proyectos, Acciones o Empresas (Holdings, Servicios, Comercios, Industrias, Bancos, Seguros, Casas de Bolsa, etcétera), además se pretende que la calificación sea comparable sin importar a qué sector económico pertenece la compañía.
                                </p>
                   
                       
                                <p>
                                El proceso de Calificación es interactivo. La intervención del Emisor es fundamental para la correcta interpretación de la información a ser procesada por la Calificadora. El análisis se basa en la trayectoria de la empresa, en la capacidad de adaptación ante cambios del entorno, las características del título emitido y principalmente en las perspectivas de la entidad durante la vigencia del plazo del instrumento que se esté calificando.
                            </p>
                           
                         
                                <p>
                                La evaluación se realiza sobre información pública de la compañía y del sector al que pertenece, así como información interna suministrada voluntariamente por el emisor bajo un convenio de confidencialidad con la calificadora, y se complementa con reuniones que se realizan con distintos departamentos de la organización. Posteriormente, se  alimentan nuestros modelos con toda la data recabada, obteniéndose una calificación metodológica que es discutida con el emisor. Por último, es sometida a consideración de la Junta Calificadora, quien emite un dictamen definitivo.
                                </p>


                                <p>
                                En caso de existir garantías calificadas o calificables, atadas a la emisión, la Categoría de Riesgo asignada puede ser la de la garantía, en función de su calidad y grado de liquidez.
                                </p>
                     
                           
                        </MDBRow>
                        <MDBRow className="title-calificacion"> 
                    <h2> 
                        Categorías de riesgo
                    </h2>
                    </MDBRow>
                           
                            <MDBNav className="nav-pills"> 
                            <MDBNavItem>
                            <MDBNavLink
                              
                              active={items["default"] === "1"} onClick={togglePills("default", "1")}
                          > Categoria A </MDBNavLink>
                          </MDBNavItem>
                          <MDBNavItem>
                            <MDBNavLink
                              
                              active={items["default"] === "2"} onClick={togglePills("default", "2")}
                          > Categoria B </MDBNavLink>
                          </MDBNavItem>
                              <MDBNavItem>
                            <MDBNavLink
                              
                              active={items["default"] === "3"} onClick={togglePills("default", "3")}
                          > Categoria C </MDBNavLink>
                          </MDBNavItem>
                              <MDBNavItem>
                            <MDBNavLink
                              
                              active={items["default"] === "4"} onClick={togglePills("default", "4")}
                          > Categoria D </MDBNavLink>
                          </MDBNavItem>

                             <MDBNavItem>
                            <MDBNavLink
                              
                              active={items["default"] === "5"} onClick={togglePills("default", "5")}
                          > Categoria E </MDBNavLink>
                          </MDBNavItem>
                          </MDBNav>
                        
                          <MDBRow> 
                         <MDBTabContent activeItem={items["default"]}> 
                         <MDBTabPane tabId="1"> 
                           <div className="letter" > A </div>
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

                                </MDBTabPane>
                                <MDBTabPane tabId="2">  
                                <div className="letter" > B </div>
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
                                 </MDBTabPane>
                                 <MDBTabPane tabId="3"> 
                                 <div className="letter" > C </div>
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
                                 </MDBTabPane>
                                 <MDBTabPane  tabId="4"> 
                                 <div className="letter" > D </div>
                                 <p>Corresponde a aquellos instrumentos que tienen una mínima capacidad de pago de capital e intereses con una elevada probabilidad de retardo en los pagos o pérdida de los mismos.
                                </p>
                                 </MDBTabPane>
                                 <MDBTabPane  tabId="5"> 
                                 <div className="letter" > E </div>
                                 <p>Corresponde a aquellos instrumentos cuyo emisor no posee información suficiente o representativa.
                                </p>
                                 </MDBTabPane>
                                </MDBTabContent>
                                </MDBRow>
                            
                              
                         
                          
                            
                           
                          
                           
                          
                      
                        <MDBRow className="fases" style={{cursor:"pointer"}} onClick={  () => toggleCollapse("fases")} >
                         
                             <h2 >Fases del Proceso de Calificación</h2> <MDBIcon icon={collapseID!=="fases"?"plus":"minus"} />
                          
                           </MDBRow>
                           <MDBRow>
                           <MDBCollapse id="fases" isOpen={collapseID}> 
                            <ol>
                                <li>
                                    Visita Introductoria: <span>Se planifica junto con el emisor y se aclaran dudas sobre el proceso. El emisor hace una presentación general de su empresa a los analistas de Global Ratings.
                                    </span>
                                    </li>
                                <li>
                                Lista de Recaudos: <span>Se solicita al emisor una lista inicial con la información mínima que debe suministrar para iniciar la evaluación.
                                </span>
                                    </li>
                                <li> Análisis de Recaudos: <span>Nuestro personal analiza la calidad de la información suministrada y comienza formalmente el proceso de calificación. Dado que la comunicación emisor-calificadora debe ser fluida, este paso no limita a que en un futuro se le pueda solicitar más información al emisor, en particular más detalle o algún desglose en las cifras.
                                </span>
                               
                                    </li>
                                <li>
                                Levantamiento de Información:<span>Según el tipo de empresa y de acuerdo a su estructura organizativa, se pueden realizar entrevistas en áreas tales como: Mercadeo, Finanzas, Tesorería, Planificación, Planta (en caso que sea una industria), Contraloría y Riesgo (en caso de una institución financiera), entre otras.
                                </span>
                                    </li>
                                <li>
                                Elaboración del dictamen de calificación:  <span>Con base en la información consignada por la empresa, se elabora el dictamen que describe los factores de importancia que inciden en la calificación: Perfil del Emisor, descripción general de la emisión, entorno económico, desempeño financiero, factores críticos de riesgo, proyecciones, susceptibilidad de la calificación y fundamentos de la calificación. Luego este es enviado sin calificación para su revisión y el emisor da su opinión al respecto y aprueba o desaprueba su contenido por si incluye información de carácter estratégico que no desee divulgar.
                                </span>
                                    </li>
                                    <li>
                                    Determinación de la Calificación Metodológica:  <span>Se evalúan las diferentes variables económicas - financieras  que influyen en la determinación de la calificación, se alimentan nuestros modelos con toda la data recabada, se realizan los análisis financieros y complementarios (sectoriales, propiedad, gerencia, etc.); se informa al emisor, y si está de acuerdo con su calificación, pero no desea hacerla pública, el proceso finaliza en esta etapa. (En caso de tratarse de una evaluación privada se concluye con la remisión del informe definitivo al emisor con las firmas del equipo técnico).
                                </span>
                                    </li>
                                    <li>
                                    Junta Calificadora:  <span>En caso que el emisor apruebe su calificación, se somete a consideración de nuestra Junta Calificadora, quien discute el caso y emite un Dictamen de Riesgo.
                                </span>
                                    </li>
                                    <li>
                                    Superintendencia Nacional de Valores:  <span>En caso que el objeto de la calificación sea para evaluar el riesgo de una oferta pública de títulos de deuda, el Dictamen de Calificación, así como el informe que lo sustenta, es enviado a la Superintendencia Nacional de Valores y al emisor.
                                </span>
                                    </li>
                                    <li>
                                    Revisión periódica de la emisión:  <span>Se analiza la evolución de los indicadores financieros de la empresa que sustentan la calificación previamente asignada, y dependiendo de los resultados obtenidos, puede ratificarse o modificarse la letra otorgada originalmente.
                                </span>
                                    </li>
                            </ol>
                            </MDBCollapse>
                        </MDBRow>
                        <MDBRow className="title-calificacion"> 
                  
                        <h2>Resumen de metodología de calificación</h2>
                             </MDBRow>
                         
                            <MDBRow className="rowLinks">
                                <ul>
                                    <li>
                                <a
                                    href="https://es.scribd.com/embeds/438101482/content?start_page=1&view_mode=scroll&access_key=key-kD7PpRmzihw34xLVuAe1&show_recommendations=true" data-auto-height="false" data-aspect-ratio="0.7729220222793488" scrolling="no" id="doc_8949" width="100%" height="600" frameborder="0"
                                    download="FileName">   <i className="fas fa-file-pdf"></i>  Empresas no Financieras (109.344 Kb) </a>
                                    </li>
                                    <li>
                                    <a href=""> <i className="fas fa-file-pdf"></i>  Instituciones Financieras (100.861 Kb) </a>
                                    </li>
                                    <li>
                                    <a href=""> <i className="fas fa-file-pdf"></i> Seguros (81.725 Kb) </a>
                                    </li>
                                    <li>
                                    <a href=""> <i className="fas fa-file-pdf"></i> Casas de Bolsa (101.483 Kb) </a>
                                    </li>
                                    <li>
                                    <a href=""> <i className="fas fa-file-pdf"></i> Holdings (77.709 Kb) </a>
                                    </li>
                                    <li>
                                    <a href=""> <i className="fas fa-file-pdf"></i> Titularizaciones (114.218 Kb)</a>
                                    </li>
                                </ul>
                          
                        </MDBRow>
                    </MDBContainer>
        <ShareFriend
            subject={`Información sobre el proceso de Calificación de Riesgo de emisiones de Títulos de Deuda`}
         message="Leer más información sobre el proceso de Calificación de Riesgo de emisiones de Títulos de Deuda entrando al siguiente link:"
        /> 
                </div>
                </>
    ); 


}


