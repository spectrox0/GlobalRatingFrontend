import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexHeader from "components/Headers/IndexHeader.js";
// sections for this page
import Dictamenes from "views/home-sections/DictamenesDeCalificacion.js";
import Noticias from "views/home-sections/NoticiasFinanzas.js";

import { initGA } from "./helpers/initGA.js";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_NOTICIAS, QUERY_DICTAMENES } from "./helpers/graphql/querys";
import client from "./helpers/graphqlClientFinanzas";

export default function Index() {
  React.useEffect(() => {
    initGA();
  }, []);

  const noticias = useQuery(QUERY_NOTICIAS, {
    variables: {
      first: 4
    },
    client
  });
  const dictamenes = useQuery(QUERY_DICTAMENES, {
    variables: {
      first: 6
    },
    client
  });

  return (
    <div className="homeContainer">
      <IndexHeader />
      <div className="main">
        <Dictamenes dictamenes={dictamenes.data} />
        <Noticias noticias={noticias.data} />
      </div>
    </div>
  );
}
