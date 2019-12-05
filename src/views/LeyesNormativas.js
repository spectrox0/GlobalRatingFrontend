import React from "react";
import { QUERY_LEYESNORMATIVAS } from "./helpers/graphql/querys";
import { useQuery } from "@apollo/react-hooks";
import { initGA } from "./helpers/initGA.js";
import ShareFriend from "../components/Others/shareFriends.js";

import Header from "../components/Headers/headersViews/Header";
import ImgHeader from "../assets/img/headers/Header Leyes.png";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow } from "mdbreact";

export default function LeyesNormativas() {
  React.useEffect(() => {
    initGA();
  }, []);
  const { data, loading, error, refetch } = useQuery(QUERY_LEYESNORMATIVAS);

  const LeyesNormativas = () => {
    const innerJSX = data.leyesNormativasByDate.map(
      ({ _id, titulo, fecha }) => {
        var date = new Date(fecha);
        var options = {
          timeZone: "UTC",
          year: "numeric",
          month: "short",
          day: "numeric"
        };
        var dateF = date.toLocaleDateString("es-VE", options);

        return (
          <li key={_id}>
            <Link
              to={{
                pathname: "/ve/leynormativa",
                search: `?id=${_id}`
              }}
            >
              {titulo}
            </Link>
            <p style={{ paddingLeft: "3rem" }}> {dateF} </p>
          </li>
        );
      }
    );

    return innerJSX;
  };
  return (
    <>
      <Header urlImage={ImgHeader} />
      <div className="page-leyes-normativas">
        <MDBContainer>
          <MDBRow className="title">
            <h1>Leyes y Normativas</h1>{" "}
          </MDBRow>

          {data && !loading ? (
            <ul>
              {" "}
              <LeyesNormativas />{" "}
            </ul>
          ) : (
            <div className="container-load-posts">
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Cargando...</span>
              </div>
            </div>
          )}
        </MDBContainer>

        <ShareFriend
          subject={`Información sobre las Leyes y Normativas`}
          message="Leer más información sobre las Leyes y Normativas entrando al siguiente enlace:"
        />
      </div>
    </>
  );
}
