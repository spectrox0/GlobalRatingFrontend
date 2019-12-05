import React from 'react'; 
import {MDBCardTitle ,
    MDBCard, 
    MDBBtn, 
    MDBCardBody,
    MDBCardText ,
    MDBCardFooter,
    MDBCardImage, 
    MDBTooltip
       , MDBCollapse
    } from "mdbreact"; 
 import {Link} from 'react-router-dom';
export default function CardEmision ({monto, programa, tipoTitulo, D_R, idDictamen, idProvidencia , idProspecto, fechaAprovacion}) {
    var options = {timeZone: 'UTC' ,  year: "numeric", month: "long", day: "numeric"};
    return ( <MDBCard
          className="cardEmision" > 
    
     
     <MDBCardBody> 
     <MDBCardTitle>
          {D_R? "Dictamen ": "Revision "} 
          {tipoTitulo==="PAPELES_COMERCIALES"&& "Papeles Comerciales"}
          {tipoTitulo==="OBLIGACIONES_QUIROGRAFARIAS" && "Obligaciones Quirografarias"}
          {tipoTitulo==="TITULOS_DE_PARTICIPACION"&& "Titulos de Participación"}
          {tipoTitulo==="PAGARE_BURSATILES"&& "Pagares Bursatiles"}
          {tipoTitulo==="ACCIONES_PREFERIDAS"&& "Acciones Preferidas"}
          {" "+programa}
           </MDBCardTitle>
     <div className="btns">   
     { idDictamen.length>0 &&
        <MDBTooltip placement="top"> 
       <MDBBtn className="btn-estadistica "
        tag={Link} 
        to= {{
                pathname: '/dictamen',
                search: `?id=${idDictamen}`
        }}
       /> 
        <div> Dictamen </div>
        </MDBTooltip>}
      {idProspecto.length>0 && 
       <MDBTooltip placement="top"> 
       <MDBBtn className="btn-estadistica " 
           tag={Link} 
           to= {{
                   pathname: '/prospecto',
                   search: `?id=${idProspecto}`
           }}
       /> 
       <div> Prospecto </div>
        </MDBTooltip>
        } {
            idProvidencia.length>0 && 
            <MDBTooltip> 
            <MDBBtn className="btn-estadistica "
                tag={Link} 
                to= {{
                        pathname: '/providencia',
                        search: `?id=${idProvidencia}`
                }}
            /> 
            <div> Providencia </div>
             </MDBTooltip>
        }
      
         </div>
     </MDBCardBody>
     <MDBCardFooter>
         { new Date(fechaAprovacion).toLocaleDateString("es-VE", options)} 
         <br/>
        <span> Monto : {monto.toLocaleString()+" Bs"}  </span>
     </MDBCardFooter>
    </MDBCard>); 
}