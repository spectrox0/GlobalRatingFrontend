import React , {useEffect} from "react"; 
import styled from 'styled-components'; 
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
      const innerJSX = emisiones.map(emision => {
      
     return (
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
      }  ); 
      return innerJSX;
    
   }
 return (
 <MDBContainerPerfil> 
    {(data && !loading) && (
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
      
    )}
 
 </MDBContainerPerfil> )

}

const MDBContainerPerfil = styled.div`
  margin: 3rem; 
  min-height: 100vh; 
  display:flex; 
  flex-direction:MDBColumn; 
  justify-content: center ;
.MDBRowPresentation {
    background:#151F42; 
    border-radius:10px; 
}

.MDBColName {
    margin:1rem; 
    h3 {
        font-size:2.5rem; 
        MDBColor:white; 
        font-weight:600; 
        text-transform: uppercase; 
        margin-top:3rem; 
    }
    span {
        font-size: .9rem; 
        MDBColor:white; 
        text-transform: uppercase;
    }
}
.profileImage { 
    width:20rem; 
    max-width:70% ;

    img {
        width:100%; 
        box-shadow: 3px 3px 3px rgba(0,0,0,0.5); 
        transform: translate(20%, 30%); 
        object-fit:cover; 
    }
    

}

`