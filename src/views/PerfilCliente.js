import React , {useEffect} from "react"; 
import styled from 'styled-components'; 
import { useQuery } from '@apollo/react-hooks';
import {QUERY_EMISORES_ID} from './helpers/graphql/querys'; 
import {initGA} from './helpers/initGA.js';
import {
    Row , 
    Col, 
    Container
}  from 'reactstrap'; 
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
         <Row className="rowEmision" key= {emision.id}> 
             <Col> 
             <span> 
         ID DICTAMEN : {emision.idDictamen}
        </span>
             </Col>
             <Col> 
             <span> 
        ID EMISION {emision.idProvidencia}
        </span>
             </Col>
             <Col> 
             <span> 
        ID PROSPECTO {emision.idProspecto}
        </span>
             </Col>
             <Col> 
             <span> 
        ID PROSPECTO {emision.fechaAprovacion}
        </span>
             </Col>
         </Row>
        
     )
      }  ); 
      return innerJSX;
    
   }
 return (
 <ContainerPerfil> 
    {(data && !loading) && (
        <Container> 
        <Row className="rowPresentation"> 
        <Col className="colImage" sm="auto"> <div className="profileImage"> 
        <img src={data.emisorID.logo} alt =".."/> 
        </div></Col>
        <Col className="colName" sm="6"> 
        <Row>  <h3>{data.emisorID.nombre} </h3> </Row>
        <Row>   <span> TWITTER: {data.emisorID.twitter} </span> </Row>
        <Row> <span> INSTAGRAM : {data.emisorID.instagram} </span> </Row>
        <Row> <span> URL WEB: {data.emisorID.urlWeb} </span> </Row>
        </Col>
      </Row>
      
      <Emisiones emisiones={data.emisorID.emisiones} />
  
      </Container>
      
    )}
 
 </ContainerPerfil> )

}

const ContainerPerfil = styled.div`
  margin: 3rem; 
  min-height: 100vh; 
  display:flex; 
  flex-direction:column; 
  justify-content: center ;
.rowPresentation {
    background:#151F42; 
    border-radius:10px; 
}

.colName {
    margin:1rem; 
    h3 {
        font-size:2.5rem; 
        color:white; 
        font-weight:600; 
        text-transform: uppercase; 
        margin-top:3rem; 
    }
    span {
        font-size: .9rem; 
        color:white; 
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