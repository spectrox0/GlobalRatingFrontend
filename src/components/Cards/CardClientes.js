import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCardTitle,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardFooter,
  MDBCardImage,
  MDBCollapse
} from "mdbreact";

export default function CardClientes({ _id, nombre, fichaCliente }) {
  return (
    <MDBCard
      to={{
        pathname: "/perfilCliente",
        search: `?id=${_id}`
      }}
      tag={Link}
      className="cardClientes"
    >
      <MDBCardImage
        className="img-fluid"
        src={fichaCliente}
        alt={nombre}
        waves
      />
    </MDBCard>
  );
}
