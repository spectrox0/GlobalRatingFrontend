import React, { useState, useEffect } from "react";
import { initGA } from "./helpers/initGA.js";
import { MDBRow, MDBContainer, MDBCol, MDBBtn } from "mdbreact";
import {
  QUERY_DICTAMEN,
  EMISION_BY_PROVIDENCIA
} from "./helpers/graphql/querys";
import client from "./helpers/graphqlClientFinanzas";
import { useQuery } from "@apollo/react-hooks";
import ShareFriend from "../components/Others/shareFriends.js";
import Header from "../components/Headers/headersViews/Header";
import ImgHeader from "../assets/img/headers/Header Leyes.png";
import { Link } from "react-router-dom";
export default function Dictamen({ location }) {
  const [dictamen, setDictamen] = useState();
  const [isLoading, setLoading] = useState(true);
  const [date, setDate] = useState("Cargando... por favor espere");
  const [content, setContent] = useState();
  const [scribd, setScribd] = useState();
  const id = new URLSearchParams(location.search).get("id");

  const { data, loading, error } = useQuery(QUERY_DICTAMEN, {
    variables: {
      postId: id
    },
    client
  });
  const emision = useQuery(EMISION_BY_PROVIDENCIA, {
    variables: {
      _id: id
    }
  });
  const getContent = async () => {
    /*
       const {data} =  await axios.get(`https://www.finanzasdigital.com/traepost.php?token=aHcT639@/$muzk56&idNoticia=${id}`);
        */
    let dataa;
    console.log(data);
    dataa = await data.postBy.content.replace(/(?:\r\n|\r|\n)/g, "<br>");
    const containScribd = dataa.includes("<iframe");
    let Scribd, Content;
    if (containScribd) {
      Scribd = dataa.substring(dataa.lastIndexOf("<iframe"));
      Content = dataa.substring(
        dataa.indexOf("<p"),
        dataa.lastIndexOf("<iframe")
      );
      setScribd(Scribd);
      setContent(Content);
    } else {
      setContent(dataa.substring(dataa.indexOf("<p"), dataa.indexOf("<br>")));
    }

    setDictamen(data.postBy);
    setLoading(false);
  };

  useEffect(() => {
    if (data) {
      getContent();
    }
  }, [data]);

  React.useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    if (dictamen) {
      var date = new Date(dictamen.date);
      var options = {
        timeZone: "UTC",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      setDate(date.toLocaleDateString("es-VE", options));
    }
    var date_ = new Date(date);
    const year = date_.getFullYear();
    const day = date_.getDate();
    var month = [];
    month[0] = "Ene.";
    month[1] = "Feb.";
    month[2] = "Mar.";
    month[3] = "Abr.";
    month[4] = "May.";
    month[5] = "Jun.";
    month[6] = "Jul.";
    month[7] = "Ago.";
    month[8] = "Sep.";
    month[9] = "Oct.";
    month[10] = "Nov.";
    month[11] = "Dic.";
    var n = month[date_.getMonth()];
    setDate({ day: day, month: n, year });
  }, [dictamen]);

  return (
    <>
      <Header urlImage={ImgHeader} />
      <section className="dictamen">
        <MDBContainer>
          {isLoading ? (
            <div className="container-load-posts">
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Cargando...</span>
              </div>
            </div>
          ) : (
            <>
              <MDBRow className="title">
                <h2>{dictamen.title}</h2>{" "}
              </MDBRow>
              <MDBRow>
                <MDBCol sm="6" className="col-content">
                  <div
                    className="backgroundLogo"
                    style={{
                      background: `url(${dictamen.featuredImage.sourceUrl}) center no-repeat`,
                      backgroundSize: "cover"
                    }}
                  />
                  <span>
                    {" "}
                    {date.month + " " + date.day + ", " + date.year}{" "}
                  </span>
                  <div
                    className="contentHtml"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </MDBCol>
                <MDBCol sm="6" className="col-scribd">
                  <div
                    className="contentHtml"
                    dangerouslySetInnerHTML={{ __html: scribd }}
                  />
                </MDBCol>
              </MDBRow>
            </>
          )}
          <MDBRow className="options">
            {emision.data && (
              <>
                <MDBBtn
                  className="btn-color-primary"
                  size="lg"
                  tag={Link}
                  to={{
                    pathname: "/perfilCliente/ve",
                    search: `?id=${emision.data.emisionByProvidencia.emisor._id}`
                  }}
                >
                  Emisor
                </MDBBtn>
                <div>
                  {emision.data.emisionByProvidencia.idDictamen.length > 0 && (
                    <MDBBtn
                      className="btn-color-primary"
                      size="lg"
                      tag={Link}
                      to={{
                        pathname: "/dictamen/ve",
                        search: `?id=${emision.data.emisionByProvidencia.idDictamen}`
                      }}
                    >
                      Dictamen
                    </MDBBtn>
                  )}
                  {emision.data.emisionByProvidencia.idProspecto.length > 0 && (
                    <MDBBtn
                      className="btn-color-primary"
                      size="lg"
                      tag={Link}
                      to={{
                        pathname: "/prospecto/ve",
                        search: `?id=${emision.data.emisionByProvidencia.idProspecto}`
                      }}
                    >
                      > Prospecto
                    </MDBBtn>
                  )}
                </div>
              </>
            )}
          </MDBRow>
        </MDBContainer>
        {dictamen && emision.data.emisionByDictamen && (
          <ShareFriend
            socialNetworks
            subject={`${dictamen.title}`}
            message={`Leer la ${dictamen.title} entrando al siguiente enlace:`}
            messageSocialNetworks={`Leer el ${dictamen.title} entrando al siguiente enlace:`}
          />
        )}
      </section>
    </>
  );
}
