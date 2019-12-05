import React, { useState, useEffect } from "react";
import { initGA } from "./helpers/initGA.js";
import { MDBRow, MDBContainer, MDBCol, MDBBtn } from "mdbreact";
import {
  QUERY_LEYNORMATIVA,
  GET_NEXT_LEY,
  GET_PREV_LEY
} from "./helpers/graphql/querys";
import { useQuery } from "@apollo/react-hooks";
import Header from "../components/Headers/headersViews/Header";
import ImgHeader from "../assets/img/headers/Header Leyes.png";
import { Link } from "react-router-dom";
import ShareFriend from "../components/Others/shareFriends.js";
export default function LeyNormativa({ location }) {
  const [date, setDate] = useState("Cargando... por favor espere");
  const id = new URLSearchParams(location.search).get("id");

  const { data, loading, error } = useQuery(QUERY_LEYNORMATIVA, {
    variables: {
      _id: id
    }
  });

  const Next = useQuery(GET_NEXT_LEY, {
    variables: {
      _id: id
    }
  });
  const Prev = useQuery(GET_PREV_LEY, {
    variables: {
      _id: id
    }
  });

  React.useEffect(() => {
    initGA();
  }, []);

  React.useEffect(() => {
    if (data) {
      var date = new Date(data.leyesNormativasID.fecha);
      var options = {
        timeZone: "UTC",
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      setDate(date.toLocaleDateString("es-VE", options));
    }
  }, [data]);
  return (
    <>
      <Header urlImage={ImgHeader} />
      <section className="page-ley-normativa">
        <MDBContainer>
          {!data ? (
            <div className="container-load-posts">
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Cargando...</span>
              </div>
            </div>
          ) : (
            <>
              <MDBRow className="title">
                <h2>{data.leyesNormativasID.titulo}</h2>{" "}
              </MDBRow>

              <MDBRow>
                <p> {" " + date} </p>
              </MDBRow>
              <MDBRow>
                <p> {data.leyesNormativasID.descripcion} </p>
              </MDBRow>
              <MDBRow>
                <iframe
                  id={data.leyesNormativasID._id}
                  className="scribd"
                  title={data.leyesNormativasID.titulo}
                  src={data.leyesNormativasID.htmlScribd}
                ></iframe>
              </MDBRow>
            </>
          )}
          <MDBRow className="btns-control">
            <MDBBtn
              className="btn-color-primary"
              tag={Link}
              to={{
                pathname: `/leyesnormativas/ve`
              }}
            >
              Leyes y Normativas
            </MDBBtn>
            <div className="btns-prev-next">
              {Prev.data && Prev.data.leyesNormativasPrev && (
                <MDBBtn
                  className="btn-color-primary"
                  tag={Link}
                  to={{
                    pathname: "/ve/leynormativa",
                    search: `?id=${Prev.data.leyesNormativasPrev}`
                  }}
                >
                  {" "}
                  Anterior{" "}
                </MDBBtn>
              )}
              {Next.data && Next.data.leyesNormativasNext && (
                <MDBBtn
                  className="btn-color-primary"
                  tag={Link}
                  to={{
                    pathname: "/ve/leynormativa",
                    search: `?id=${Next.data.leyesNormativasNext}`
                  }}
                >
                  {" "}
                  Siguiente{" "}
                </MDBBtn>
              )}
            </div>
          </MDBRow>
        </MDBContainer>
        {data && (
          <ShareFriend
            socialNetworks
            subject={`Consulte ${data.leyesNormativasID.titulo}`}
            message={`Leer más información sobre  ${data.leyesNormativasID.titulo} entrando al siguiente enlace:`}
            messageSocialNetworks={`Leer más información sobre  ${data.leyesNormativasID.titulo} entrando al siguiente enlace:`}
          />
        )}
      </section>
    </>
  );
}
