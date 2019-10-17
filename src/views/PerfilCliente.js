import React , {useEffect} from "react"; 
import { useQuery } from '@apollo/react-hooks';
import {QUERY_EMISORES_ID} from './helpers/graphql/querys'; 
import {initGA} from './helpers/initGA.js';
import {
    MDBRow , 
    MDBCol, 
    MDBContainer
}  from 'mdbreact'; 
export default function PerfilCliente({location})  {
    React.useEffect(()=> {
        initGA();
      },[]);
    const id = new URLSearchParams(location.search).get('id');
    const {data, loading, error} = useQuery(QUERY_EMISORES_ID, {variables: {
        _id:id
    }} ); 

   

   const Emisiones = ( {emisiones} )=> {
      const innerJSX = emisiones.map(emision => 
         <MDBRow className="MDBRowEmision" key= {emision.id}> 
             <MDBCol> 
             <span> 
         ID DICTAMEN : {emision.idDictamen}
        </span>
             </MDBCol>
             <MDBCol> 
             <span> 
        ID EMISION {emision.idProvidencia}
        </span>
             </MDBCol>
             <MDBCol> 
             <span> 
        ID PROSPECTO {emision.idProspecto}
        </span>
             </MDBCol>
             <MDBCol> 
             <span> 
        ID PROSPECTO {emision.fechaAprovacion}
        </span>
             </MDBCol>
         </MDBRow>
        
     )
      
      return innerJSX;
    
   }
 return (
 <div className="container-profile-client"> 
    {(data && !loading) && ( { /* 
        <MDBContainer> 
        <MDBRow className="MDBRowPresentation"> 
        <MDBCol className="MDBColImage" sm="auto"> <div className="profileImage"> 
        <img src={data.emisorID.logo} alt =".."/> 
        </div></MDBCol>
        <MDBCol className="MDBColName" sm="6"> 
        <MDBRow>  <h3>{data.emisorID.nombre} </h3> </MDBRow>
        <MDBRow>   <span> TWITTER: {data.emisorID.twitter} </span> </MDBRow>
        <MDBRow> <span> INSTAGRAM : {data.emisorID.instagram} </span> </MDBRow>
        <MDBRow> <span> URL WEB: {data.emisorID.urlWeb} </span> </MDBRow>
        </MDBCol>
      </MDBRow>
      
      <Emisiones emisiones={data.emisorID.emisiones} />
  
      </MDBContainer>
    */ }
     
    )}
 
 </div> )

}
