import React from 'react'; 
import {  Link } from 'react-router-dom';
import {MDBCardTitle , MDBCard, MDBCardBody, MDBCardText , MDBCardFooter, MDBCardImage, MDBCollapse} from "mdbreact";

export default function CardClientes ({id, nombre,image}) {
    return ( <MDBCard to={{
        pathname: '/perfilCliente',
        search: `?id=${id}`}}  
         tag={Link}
          className="cardClientes" > 
          <div className="decorate1" />
          <div className="decorate2" />
    <div className="card-image"> 
    <img src={image} alt="..." />
    </div>
     <MDBCardBody> 
     <MDBCardTitle> {nombre}</MDBCardTitle>
    </MDBCardBody>
    </MDBCard>); 
}