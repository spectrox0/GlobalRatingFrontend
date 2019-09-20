import React, { useContext } from 'react'; 
import {Route, Switch, Redirect  } from 'react-router-dom';
//pages 
import Home from "views/Home.js";
import Dictamen from "views/Dictamen.js"; 
import Noticia from "views/Noticia.js";
import Nosotros from "views/Nosotros.js";
import Calificacion from "views/Calificacion.js";
import Otorgada from "views/Otorgada.js";
import LeyesNormativas from "views/LeyesNormativas.js";
import Terminos from "views/Terminos.js";
import Contactanos from "views/Contactanos.js";
import Clientes from "views/Clientes.js"; 
import Error404 from "views/Error404.js";
import PerfilCliente from "views/PerfilCliente.js"
import CountryContext from "../../context/region"
export default function () {
   
  const {country} = useContext(CountryContext); 
 return(

 <Switch>
  
 <Route path="/index/:countryName" render={ (props) =>  <Home {...props}/> }/>
 <Route path="/dictamen" render={ (props) =>  <Dictamen {...props}/> }/>
 <Route path="/noticia" render={ (props) =>  <Noticia {...props}/> }/>
 <Route path="/perfilCliente" render = {(props)=> <PerfilCliente {...props} />} />
 <Route path="/nosotros/:countryName" render={ (props) =>  <Nosotros {...props}/> }/>
 <Route path="/calificacion/:countryName" render={ (props) =>  <Calificacion {...props}/> }/>
 <Route path="/otorgada/:countryName" render={ (props) =>  <Otorgada {...props}/> }/>
 <Route path="/leyesnormativas/:countryName" render={ (props) =>  <LeyesNormativas {...props}/> }/>
 <Route path="/terminos/:countryName" render={ (props) =>  <Terminos {...props}/> }/>
 <Route path="/contactanos/:countryName" render={ (props) =>  <Contactanos {...props}/> }/>
 <Route path="/clientes/:countryName" render = { (props)=> <Clientes {...props} /> } />
   {country && (  <>
   <Redirect exact from="/" to={ {
    pathname:`/index/${country}` }
   }  /> 
    <Route path="*" render = { props=> <Error404 {...props} />} /> 
   </> )}
     
     
 
 
 </Switch> ) ; } 

