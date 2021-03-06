import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import ShareFriend from "../components/Others/shareFriends.js";
import {
  QUERY_EMISORES_ID,
  EMISIONES_BY_EMISOR,
  NUMBER_OF_EMISIONES_BY_EMISOR
} from "./helpers/graphql/querys";
import { initGA } from "./helpers/initGA.js";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBTooltip,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import Header from "../components/Headers/headersViews/Header";
import ImgHeader from "../assets/img/headers/Header Clientes.png";
import CardEmisiones from "./../components/Cards/CardEmisiones.js";
import ShareEmail from "../components/Others/shareFriends.js";
import Pagination from "../components/Others/Pagination.js";

export default function PerfilCliente({ location }) {
  React.useEffect(() => {
    initGA();
  }, []);
  const id = new URLSearchParams(location.search).get("id");
  const { data, loading, error } = useQuery(QUERY_EMISORES_ID, {
    variables: {
      _id: id
    }
  });
  const emisionesPerPage = 3;
  const [currentPage, setCurrentPage] = React.useState(1);
  const Query_emisiones = useQuery(EMISIONES_BY_EMISOR, {
    variables: {
      _id: id,
      first: emisionesPerPage,
      after: currentPage * emisionesPerPage - emisionesPerPage
    }
  });
  const nroEmisiones = useQuery(NUMBER_OF_EMISIONES_BY_EMISOR, {
    variables: {
      _id: id
    }
  });

  const Paginate = number => {
    setCurrentPage(number);
  };

  const Emisiones = ({ emisiones }) => {
    const innerJSX = emisiones.map(emision => (
      <MDBRow className="MDBRowEmision" key={emision.id}>
        <CardEmisiones {...emision} />
      </MDBRow>
    ));

    return innerJSX;
  };
  return (
    <>
      <Header urlImage={ImgHeader} />
      <div className="container-profile-client">
        {data && !loading ? (
          <>
            <MDBContainer className="ProfileContainer">
              <MDBRow>
                <MDBCol className="col-img" sm="3">
                  <img
                    className="profileLogo"
                    alt={data.emisorID.nombre}
                    src={data.emisorID.logo}
                  />
                </MDBCol>
                <MDBCol className="col-name" sm="9">
                  <MDBRow>
                    <span className="nameClient"> {data.emisorID.nombre}</span>
                  </MDBRow>
                  <MDBRow>
                    {data.emisorID.instagram.length > 0 && (
                      <MDBTooltip placement="top">
                        <MDBBtn
                          target="_blank"
                          href={`https://www.instagram.com/${data.emisorID.instagram.replace(
                            "@",
                            ""
                          )}/`}
                          className="webSocial"
                        >
                          <MDBIcon fab icon="instagram" size="sm" />
                        </MDBBtn>
                        <div>Instagram</div>
                      </MDBTooltip>
                    )}
                    {data.emisorID.twitter.length > 0 && (
                      <MDBTooltip placement="top">
                        <MDBBtn
                          target="_blank"
                          href={`https://twitter.com/${data.emisorID.instagram.replace(
                            "@",
                            ""
                          )}/`}
                          className="webSocial"
                        >
                          <MDBIcon fab icon="twitter" size="sm" />
                        </MDBBtn>
                        <div> Twitter </div>
                      </MDBTooltip>
                    )}
                    {data.emisorID.facebook.length > 0 && (
                      <MDBTooltip placement="top">
                        <MDBBtn
                          target="_blank"
                          href={`https://facebook.com/${data.emisorID.facebook.replace(
                            "@",
                            ""
                          )}/`}
                          className="webSocial"
                        >
                          <MDBIcon fab icon="facebook-f" size="sm" />{" "}
                        </MDBBtn>
                        <div> Facebook</div>
                      </MDBTooltip>
                    )}
                    {data.emisorID.urlWeb.length > 0 && (
                      <MDBTooltip placement="top">
                        <MDBBtn
                          target="_blank"
                          href={data.emisorID.urlWeb}
                          className="webSocial"
                        >
                          <i className="fa fa-home fa-sm "></i>{" "}
                        </MDBBtn>
                        <div> Website </div>
                      </MDBTooltip>
                    )}
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <section className="description">
                  <p>{data.emisorID.descripcion}</p>{" "}
                </section>
              </MDBRow>
            </MDBContainer>

            <MDBContainer className="emisionesContainer">
              <section id="emisor" className="emisiones">
                {Query_emisiones.data &&
                  Query_emisiones.data.calificacionesByEmisor.length > 0 && (
                    <>
                      <h3> Emisiones </h3>
                      <Emisiones
                        emisiones={Query_emisiones.data.calificacionesByEmisor}
                      />{" "}
                    </>
                  )}
                <MDBRow className="row-pagination">
                  {nroEmisiones.data && (
                    <Pagination
                      paginate={Paginate}
                      currentPage={currentPage}
                      elementsPerPage={emisionesPerPage}
                      totalElements={
                        nroEmisiones.data.nroCalificacionesByEmisor
                      }
                      id="emisor"
                    />
                  )}
                </MDBRow>
              </section>
              <MDBRow className="row-btn">
                <MDBBtn
                  className="btn-color-primary"
                  size="sm"
                  tag={Link}
                  to={{
                    pathname: "/clientes/ve"
                  }}
                >
                  Emisores
                </MDBBtn>
              </MDBRow>
            </MDBContainer>

            {data && (
              <ShareFriend
                subject={`Emisiones de Títulos de ${data.emisorID.nombre} calificadas por Global Ratings, SCR`}
                message={`Consulte más información sobre las emisiones de Títulos de Deuda de ${data.emisorID.nombre} calificadas por Global Ratings Sociedad Calificadora de Riesgo, entrando al siguiente enlace:`}
              />
            )}
          </>
        ) : (
          <div className="container-load-posts">
            <div className="spinner-border" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
