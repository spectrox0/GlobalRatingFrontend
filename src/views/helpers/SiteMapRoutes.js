import React from "react";
import { Route } from "react-router";

export default (
  <Route>
    <Route path="/index/:countryName" />
    <Route path="/dictamen/:countryName/:id" />
    <Route path="/providencia/:countryName/:id" />
    <Route path="/prospecto/:countryName/:id" />
    <Route path="/perfilCliente/:countryName/:id" />
    <Route path="/nosotros/:countryName" />
    <Route path="/calificacion/:countryName" />
    <Route path="/leyesnormativas/:countryName" />
    <Route path="/estadisticas/:countryName" />

    <Route path="/contactanos/:countryName" />
    <Route path="/clientes/:countryName" />
    <Route path="/leynormativa/:countryName/:id" />
  </Route>
);
