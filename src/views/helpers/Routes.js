import React, {useState} from 'react'; 
import {Route, Switch, Redirect  } from 'react-router-dom';
//pages 
import Home from "views/Home.js";
import Dictamen from "views/Dictamen.js"; 
import Noticia from "views/Noticia.js"
export default function () {

 return(
     <>

 <Switch>
 <Route path="/index" render={ (props) =>  <Home {...props}/> }/>
 <Route path="/dictamen" render={ (props) =>  <Dictamen {...props}/> }/>
 <Route path="/noticia" render={ (props) =>  <Noticia {...props}/> }/>
 <Redirect from="/" to="/index" />>
 </Switch> </> ) ; } 