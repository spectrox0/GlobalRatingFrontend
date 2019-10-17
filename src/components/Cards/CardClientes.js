import React from 'react'; 
import {  Link } from 'react-router-dom';
import {MDBCardTitle , MDBCard, MDBCardBody, MDBCardText , MDBCardFooter, MDBCardImage, MDBCollapse} from "mdbreact";

export default function CardClientes ({id, nombre,image}) {
    return ( <MDBCard to={{
        pathname: '/perfilCliente',
        search: `?id=${id}`}}  
         tag={Link}
          className="cardClientes" > 
     <MDBCardImage  className="img-fluid"  src={image} waves/> 
     <MDBCardTitle> {nombre}</MDBCardTitle>

    </MDBCard>); 
}