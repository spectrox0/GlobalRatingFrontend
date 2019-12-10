import React from "react";
import { useState, useEffect } from "react";
import Noticias from "./../../components/Cards/CardNoticias.js";
import styled from "styled-components";
import { device } from "./../helpers/devices";
// reactstrap components
import { MDBBtn, MDBCol, MDBRow, MDBContainer, MDBIcon } from "mdbreact";
import axios from "axios";
export default function NoticiasFinanzas({ noticias }) {
  const NNoticias = () =>
    noticias.posts.nodes.map(noticia => (
      <MDBCol key={noticia.postId} sm="6" md="4" lg="3">
        <Noticias {...noticia} />{" "}
      </MDBCol>
    ));

  return (
    <div className="noticias">
      <MDBContainer>
        <MDBRow className="title">
          <h1>Titulares Finanzas Digital</h1>
        </MDBRow>

        {!noticias ? (
          <div className="container-load-posts">
            <div className="spinner-border" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
        ) : (
          <MDBRow>
            <NNoticias />
          </MDBRow>
        )}
        <MDBRow className="row-button">
          <MDBBtn
            href="https://www.finanzasdigital.com/"
            target="_blank"
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
