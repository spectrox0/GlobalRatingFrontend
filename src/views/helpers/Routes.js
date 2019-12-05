import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//pages
import Home from "views/Home.js";
import Dictamen from "views/Dictamen.js";
import Nosotros from "views/Nosotros.js";
import Calificacion from "views/Calificacion.js";
import LeyesNormativas from "views/LeyesNormativas.js";
import Estadisticas from "views/Estadisticas.js";
import Contactanos from "views/Contactanos.js";
import Clientes from "views/Clientes.js";
import LeyNormativa from "views/LeyNormativa.js";
import PerfilCliente from "views/PerfilCliente.js";
import Providencia from "views/Providencia.js";
import Prospecto from "views/Prospecto.js";
import { animateScroll as scroll } from "react-scroll";
export default function Routes({ country }) {
  const handlingRender = (props, Component, country) => {
    scroll.scrollToTop({ duration: 500 });
    if (
      props.match.params.countryName !== "pa" &&
      props.match.params.countryName !== "ve"
    )
      return <Redirect to="ve" />;
    return <Component country={country} {...props} />;
  };
  return (
    <Switch>
      <Route
        path="/index/:countryName"
        render={props => handlingRender(props, Home, country)}
      />
      <Route
        path="/dictamen/:countryName"
        render={props => handlingRender(props, Dictamen, country)}
      />
      <Route
        path="/providencia/:countryName"
        render={props => handlingRender(props, Providencia, country)}
      />
      <Route
        path="/prospecto/:countryName"
        render={props => handlingRender(props, Prospecto, country)}
      />
      <Route
        path="/perfilCliente/:countryName"
        render={props => handlingRender(props, PerfilCliente, country)}
      />
      <Route
        path="/nosotros/:countryName"
        render={props => handlingRender(props, Nosotros, country)}
      />
      <Route
        path="/calificacion/:countryName"
        render={props => handlingRender(props, Calificacion, country)}
      />
      <Route
        path="/leyesnormativas/:countryName"
        render={props => handlingRender(props, LeyesNormativas, country)}
      />
      <Route
        path="/estadisticas/:countryName"
        render={props => handlingRender(props, Estadisticas, country)}
      />

      <Route
        path="/contactanos/:countryName"
        render={props => handlingRender(props, Contactanos, country)}
      />
      <Route
        path="/clientes/:countryName"
        render={props => handlingRender(props, Clientes, country)}
      />
      <Route
        path="/leynormativa/:countryName"
        render={props => handlingRender(props, LeyNormativa, country)}
      />

      {country && (
        <>
          <Redirect
            exact
            from="/"
            to={{
              pathname: `/index/${country}`
            }}
          />
          } />
        </>
      )}
    </Switch>
  );
}
