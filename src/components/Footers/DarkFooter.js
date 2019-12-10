/*eslint-disable*/
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// reactstrap components

import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavLink } from "mdbreact";

export default function DarkFooter() {
  return (
    <MDBFooter>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol className="col-footer" md="3">
            <h4> Global Ratings </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start"
              }}
            >
              <p style={{ textAlign: "justify" }}>
                Sociedad Calificadora de Riesgo autorizada por la
                Superintendencia Nacional de Valores (SUNAVAL) desde el año 1994
                para emitir una opinión independiente sobre la capacidad de pago
                de un emisor de títulos de deuda.
              </p>
            </div>
          </MDBCol>
          <MDBCol className="col-footer" md="3">
            <h4> Dirección y Contacto </h4>

            <p>
              Avenida Principal de La Castellana, Centro Letonia, Piso 12,
              Oficina 126.
              <br /> Caracas - Venezuela <br />
              Master +58 (212) 263.4393
              <br />
            </p>
          </MDBCol>
          <MDBCol className="col-footer" md="3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15692.186785261487!2d-66.8511697!3d10.4969852!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x955dd7b53b79b743!2sGlobal%20Ratings%20Sociedad%20Calificadora%20de%20Riesgo%2C%20C.A.!5e0!3m2!1ses-419!2sve!4v1575923807660!5m2!1ses-419!2sve"
              frameborder="0"
              style={{
                width: "100%",
                height: "8rem",
                border: 0,
                borderRadius: "10px"
              }}
              allowfullscreen=""
            ></iframe>
          </MDBCol>
          <MDBCol md="3">
            <a href="https://www.finanzasdigital.com/" target="_blank">
              <div className="finanzasDigital" />
            </a>

            <a href="http://www.glscope.com/" target="_blank">
              <div className="globalScope" />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
          Global Ratings, C.A. RIF: J-30166873-1. Todos los derechos reservados
          © {new Date().getFullYear()}.
          <nav>
            <Link
              to={{
                pathname: `/terminos/`
              }}
            >
              <span> Términos y Condiciones </span>
            </Link>
            <span> | </span>
            <Link
              to={{
                pathname: `/terminos/`
              }}
            >
              <span> Politica y privacidad </span>
            </Link>
          </nav>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
