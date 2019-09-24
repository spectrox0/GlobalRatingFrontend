import React, { useState, useEffect } from "react";
import IndexHeader from "./../components/Headers/IndexHeader";
import styled from "styled-components";
import {initGA} from './helpers/initGA.js';
import {
    Row
    , Col
    , Container
} from 'reactstrap'

export default function () {
    React.useEffect(()=> {
        initGA();
      },[]);
    const TerminosContent = styled.div`

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

        <TerminosContent>
            <div className="wrapper">

                <div>
                    <Container >
                        <Row>
                            <h3> Términos y Condiciones </h3>
                        </Row>
                        <Row>
                            <div>
                                <ol>
                                    <li>

                                    Estos términos y condiciones generales regulan el acceso y uso de los contenidos y servicios ofrecidos por Global Ratings, C.A. Sociedad Calificadora de Riesgo en el sitio Web de Internet localizado en http://www.Globalratings.com (el "Sitio") y sus modificaciones, por parte de los usuarios de dicho Sitio. El acceso y uso del Sitio por parte del Usuario implica su aceptación expresa sin reservas de los Términos y Condiciones vigentes al momento en que el Usuario accede al Sitio.

                                    </li>
                                    <li>

                                    Es expresamente convenido que los términos y condiciones incluidos en el presente acuerdo son aplicables única y exclusivamente a la información de el Sitio y no a los que los usuarios accedan a través de un hipervínculo o a otras publicaciones, suplementos y/o revistas que puedan incluir la versión de el Sitio.

                                    </li>
                                    <li>

                                    Este Sitio y los servicios e información contenidas en él son de exclusivo uso personal y no comercial del Usuario, y por tanto el Usuario se abstendrá de: (a) anunciar u ofrecer para la venta productos o servicios con fines comerciales; (b) llevar a cabo o remitir encuestas, concursos, o (c) descargar cualquier archivo enviado por otro Usuario que usted sabe, o razonablemente debería saber, que  no puede ser distribuido legalmente de esta forma. El uso del Sitio y las decisiones que tome el Usuario como consecuencia de ese uso y de la información contenida en el Sitio son a exclusivo riesgo del Usuario. 

                                    </li>
                                    <li>

                                    La calificación de riesgo proporciona una opinión independiente sobre la posibilidad que tiene una empresa de cancelar oportunamente y según las condiciones pactadas, la totalidad del capital y los intereses generados de una obligación específica. En ningún caso implica una recomendación para comprar, vender o mantener un título valor, ni una garantía de su pago, más bien debe ser vista por el inversionista, como una información complementaria a la hora de tomar una decisión, por lo tanto Global Ratings, C.A. Sociedad Calificadora de Riesgo, no se hace responsable de las decisiones tomadas por los usuarios de el Sitio.

                                    </li>
                                    <li>

                                    Global Ratings, C.A. Sociedad Calificadora de Riesgo, realiza esfuerzos razonables para incluir información precisa y actualizada en el Sitio. Sin embargo, el Usuario expresamente reconoce y acepta que Global Ratings, C.A. Sociedad Calificadora de Riesgo, no garantiza la exactitud, veracidad o suficiencia de la información contenida en el Sitio. Los Usuarios reconocen y aceptan que el contenido del Sitio es meramente informativo y de carácter referencial y que la información contenida en este Sitio no tiene carácter vinculante para Global Ratings, C.A. Sociedad Calificadora de Riesgo. En caso de discrepancias entre la información que el Usuario consulta a través de este Sitio y la información que maneja Global Ratings, C.A. Sociedad Calificadora de Riesgo en sus archivos físicos, prevalecerá la información contenida en los archivos físicos de Global Ratings, C.A. Sociedad Calificadora de Riesgo. El Usuario no tendrá ningún reclamo de ninguna clase en contra de Global Ratings, C.A. Sociedad Calificadora de Riesgo en caso de que existan diferencias entre la información contenida en el Sitio y la información contenida en los archivos físicos de Global Ratings, C.A. Sociedad Calificadora de Riesgo. 

                                    </li>
                                    <li>

                                    El Usuario no podrá utilizar el Sitio con fines ilegales o con fines distintos a los autorizados por los Términos y Condiciones. En especial, el Usuario se abstendrá de: (a) publicar, enviar o distribuir cualquier información o material inapropiado, profano, difamatorio, abusivo, obsceno, explícitamente sexual o ilegal; (b) cargar archivos que contengan software o cualquier otro material protegido por leyes o tratados sobre propiedad intelectual sin autorización de su titular; (c) cargar archivos que contengan virus, archivos defectuosos o cualquier otro software similar que pueda perjudicar el funcionamiento del Sitio o de equipos de terceros; (d) usar cualquier dispositivo, software, u otro medio tendiente a interferir en las actividades y operatoria del Sitio.

                                    </li>
                                    <li>

                                    Sin perjuicio de lo anterior, i) el Usuario se obliga a no usar ningún dispositivo, software, u otro medio tendiente a interferir en las actividades y operatoria de Global Ratings, C.A. Sociedad Calificadora de Riesgo y ii) el Usuario se abstendrá de realizar cualquier acto o conducta en el Sitio o a través del mismo, que atente contra la protección integral y el buen funcionamiento de los sistemas informáticos de Global Ratings, C.A. Sociedad Calificadora de Riesgo de otros Usuarios o de terceras personas, y en particular se abstendrá de realizar cualquier acto que constituya un delito o falta bajo cualesquiera leyes aplicables.

                                    </li>
                                    <li>

                                    El Usuario reconoce y acepta que el sistema utilizado para la operación del Sitio es un sistema sensible que depende de distintos recursos y que el mismo puede sufrir caídas, cortes y/o interrupciones ajenas a la voluntad de Global Ratings, C.A. Sociedad Calificadora de Riesgo. El Usuario asume los daños y perjuicios que dicha operación pudiera generar para el Usuario, y en consecuencia Global Ratings, C.A. Sociedad Calificadora de Riesgo, no será responsable por los daños, perjuicios o pérdidas en el equipo del Usuario causados por fallas en el sistema, en el servidor o en Internet. Global Ratings, C.A. Sociedad Calificadora de Riesgo, tampoco será responsable por cualquier virus que pudiera infectar el equipo del Usuario como consecuencia del acceso o uso del Sitio o a raíz de cualquier transferencia de datos, archivos, imágenes, textos, o audio contenidos en el mismo. El Usuario no podrá imputarle a Global Ratings, C.A. Sociedad Calificadora de Riesgo, responsabilidad alguna ni exigir pago por lucro cesante, daño emergente o por otro concepto, en virtud de perjuicios derivados o relacionados con dificultades o fallas técnicas en los sistemas o en Internet.

                                    </li>
                                    <li>

                                    En razón de que el Usuario conoce, acepta y toma a su cargo los riesgos derivados de la utilización de Internet como medio de comunicación electrónico, en ningún caso Global Ratings, C.A. Sociedad Calificadora de Riesgo será responsable por daños de ningún tipo que se deriven o estén relacionados con la utilización del Sitio, con la imposibilidad o la demora para poder utilizar el Sitio, con la prestación de servicios o con cualesquiera información, software, productos, gráficos o fotografías relacionados obtenidos a través del Sitio.

                                    </li>
                                    <li>

                                    El Usuario se compromete a indemnizar a Global Ratings, C.A. Sociedad Calificadora de Riesgo por todos y cualesquiera daños y perjuicios, o costos, que Global Ratings, C.A. Sociedad Calificadora de Riesgo, pueda sufrir o incurrir como consecuencia directa o indirecta del incumplimiento de estos Términos y Condiciones por parte del Usuario.

                                    </li>
                                    <li>

                                    Global Ratings, C.A. Sociedad Calificadora de Riesgo se reserva el derecho a negar discrecionalmente el acceso de cualquier Usuario al Sitio o a alguna parte del mismo, en cualquier momento y sin necesidad de preaviso.

                                    </li>
                                    <li>

                                    Global Ratings, C.A. Sociedad Calificadora de Riesgo, no controla ni aprueba el contenido de los mensajes o informaciones que los Usuarios o terceros envíen o publiquen a través del Sitio y, por lo tanto, Global Ratings, C.A. Sociedad Calificadora de Riesgo, se exonera de cualquier responsabilidad que pueda derivarse de los mismos.

                                    </li>
                                    <li>

                                    El Sitio puede contener enlaces con sitios Web operados por terceros ajenos a Global Ratings, C.A. Sociedad Calificadora de Riesgo (incluyendo empresas afiliadas, vinculadas o relacionadas con ésta). Global Ratings, C.A. Sociedad Calificadora de Riesgo no es responsable por los contenidos de tales sitios Web ni por la exactitud de la información contenida en los mismos. La inclusión de dichos enlaces con sitios Web de terceros no implica la existencia de ningún tipo de asociación entre Global Ratings, C.A. Sociedad Calificadora de Riesgo y las personas que los operan, por lo que EL USUARIO acepta y reconoce que Global Ratings, C.A. Sociedad Calificadora de Riesgo, no controla, ni supervisa, ni asume responsabilidad acerca de la veracidad y exactitud de la descripción efectuada por aquellos que promocionan u ofrecen sus servicios o productos, ni acerca del cumplimiento de los requisitos legales para ofrecer y vender los productos o servicios ni sobre la capacidad y legitimidad para promocionar, ofrecer y/o vender sus bienes y servicios. 

                                    </li>
                                    <li>

                                    Los contenidos de las pantallas del Sitio así como la información, bases de datos y archivos que permiten al Usuario navegar a través del Sitio son propiedad de Global Ratings, C.A. Sociedad Calificadora de Riesgo, o de terceros y están protegidos por las leyes nacionales y tratados internacionales sobre propiedad intelectual, derecho de autor, marcas, patentes, modelos y diseños industriales. El Usuario no está autorizado y debe abstenerse de modificar, copiar, distribuir, transmitir, reproducir, publicar, licenciar (total o parcialmente) ni crear trabajos derivados a partir de la información, contenidos o servicios que pueda obtener del Sitio, así como de falsificar o suprimir avisos o notificaciones de derechos de autor, comunicaciones legales o de otro tipo, designaciones de propiedad o etiquetas indicativas del origen o la fuente del software o de cualquier otro material contenido en un archivo cargado. El usuario al hacer uso de la información suministrada por Global Ratings, C.A. Sociedad Calificadora de Riesgo deberá citar la fuente tomada, ya que el uso indebido y la reproducción total o parcial, distribución y modificación de dicha información, programas, contenidos, bases de datos y/o archivos quedan prohibidos, están penados por la ley con sanciones civiles y penales, y serán objeto de todas las acciones judiciales pertinentes.

                                    </li>
                                    <li>

                                    Todo software contenido en el Sitio o disponible a través del mismo está protegido por leyes nacionales y tratados internacionales de propiedad intelectual. Cualquier reproducción o redistribución del software está expresamente prohibida por la ley, y será objeto de sanciones civiles y penales.

                                    </li>
                                    <li>

                                    Global Ratings, C.A. Sociedad Calificadora de Riesgo, se reserva el derecho de modificar los Términos y Condiciones, así como la estructura y contenido de las páginas del Sitio, en cualquier momento y sin necesidad de preaviso. El Usuario acepta que una versión impresa de estos Términos y Condiciones y de cualquier mensaje de datos o comunicación dada de forma electrónica será admisible como medio probatorio en los procedimientos judiciales o administrativos concernientes al Sitio, y que tales elementos tendrán el valor probatorio que les otorgan las leyes aplicables.

                                    </li>
                                    <li>

                                    La invalidez, ilegalidad o nulidad, total o parcial, de cualquiera de estos Términos y Condiciones no afectará la validez, legalidad o vigencia de ninguna otra cláusula.

                                    </li>
                                    <li>

                                    Estos Términos y Condiciones y el uso del Sitio se regirán e interpretaran de acuerdo con las leyes de la República Bolivariana de Venezuela, con exclusión de las normas de conflicto.

                                    </li>
                                    <li>

                                    Toda controversia o diferencia entre las partes, no excluida por la ley de resolución mediante arbitraje, que verse sobre la existencia, extensión, interpretación y cumplimiento de las obligaciones derivadas de estos Términos y Condiciones o del uso del Sitio, será resuelta definitivamente mediante arbitraje en la Ciudad de Caracas, Venezuela, de acuerdo con las disposiciones del Reglamento General del Centro de Arbitraje de la Cámara de Comercio de Caracas. El Tribunal Arbitral estará compuesto por tres (3) árbitros, quienes tendrán el carácter de árbitros de derecho, aplicarán las leyes de la República de Venezuela y tendrán siempre en cuenta las estipulaciones de este convenio, y las normas, usos y costumbres mercantiles. El laudo será inapelable y salvo en lo que se refiere al recurso de nulidad previsto en el artículo 43 de la Ley de Arbitraje Comercial, contra él no se admitirá recurso adicional alguno. El arbitraje se llevará a cabo en el Centro de Arbitraje del Centro de Arbitraje de la Cámara de Comercio de Caracas y el idioma que se utilizará en las actuaciones arbitrales será el castellano.

                                    </li>
                                    <li>
                                    
                                    El Usuario expresa comprender y estar de acuerdo en que la utilización de el Sitio, es a su solo riesgo, Global Ratings, C.A. Sociedad Calificadora de Riesgo, no garantiza que la información es la adecuada a sus necesidades. El servicio podrá ser suspendido o interrumpido, puede contener errores y Global Ratings, C.A. Sociedad Calificadora de Riesgo, no será responsable contractual o extra contractualmente por ningún daño o perjuicio, directo o indirecto, incluyendo sin ningún tipo de limitación, daños producidos por la pérdida o deterioro de la información o por el uso de la información. Global Ratings, C.A.

                                    </li>
                                </ol>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </TerminosContent>
    );


}