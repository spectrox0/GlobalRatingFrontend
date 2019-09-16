import React, {useState} from 'react'; 
import {Route, Switch, Redirect  } from 'react-router-dom';
//pages 
import Home from "views/Home.js";
import Dictamen from "views/Dictamen.js"; 
import Noticia from "views/Noticia.js"
import Productos from "views/Productos.js"
import Calificacion from "views/Calificacion.js"
import LeyesNormativas from "views/LeyesNormativas.js"
import Mercado from "views/Mercado.js"
import Contactanos from "views/Contactanos.js"

export default function () {

 return(

 <Switch>
 <Route path="/index" render={ (props) =>  <Home {...props}/> }/>
 <Route path="/dictamen" render={ (props) =>  <Dictamen {...props}/> }/>
 <Route path="/noticia" render={ (props) =>  <Noticia {...props}/> }/>
 <Route path="/productos" render={ (props) =>  <Productos {...props}/> }/>
 <Route path="/calificacion" render={ (props) =>  <Calificacion {...props}/> }/>
 <Route path="/leyesnormativas" render={ (props) =>  <LeyesNormativas {...props}/> }/>
 <Route path="/mercado" render={ (props) =>  <Mercado {...props}/> }/>
 <Route path="/contactanos" render={ (props) =>  <Contactanos {...props}/> }/>
 
 <Redirect from="/" to="/index" />>
 </Switch> ) ; } 

