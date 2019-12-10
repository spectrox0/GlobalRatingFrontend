import React from "react";
// reactstrap components
import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBCardGroup,
  MDBIcon
} from "mdbreact";
import CardDictamen from "./../../components/Cards/CardDictamenes";

import { Link } from "react-router-dom";

export default function DictamenesDeCaificacion({ dictamenes, country }) {
  const Dictamenes = () =>
    dictamenes.posts.nodes.map(dictamen => (
      <MDBCol key={dictamen.postId} sm="6" md="4" lg="4">
        <CardDictamen {...dictamen} />
      </MDBCol>
    ));
  return (
    <div className="dictamenes">
      <MDBContainer>
        <MDBRow className="title">
          <h1>Dictámenes de Calificación</h1>
        </MDBRow>

        {!dictamenes ? (
          <div className="container-load-posts">
            <div className="spinner-border" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
        ) : (
          <MDBCardGroup>
            <MDBRow>
              <Dictamenes />
            </MDBRow>
          </MDBCardGroup>
        )}

        <MDBRow className="row-button">
          <MDBBtn
            tag={Link}
            to={{
              pathname: `/clientes/${country}`
            }}
            className="btn-invisible"
          >
            {" "}
            <MDBIcon icon="plus-circle" />
          </MDBBtn>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
