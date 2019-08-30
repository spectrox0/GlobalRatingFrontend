/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles 
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
// pages 
import Home from "views/Home.js";
import Auth from "views/AuthPage.js"; 
import Dictamen from "views/Dictamen.js"; 
import Noticia from "views/Noticia.js"
import DarkFooter from "components/Footers/DarkFooter.js";
import IndexNavbar from "components/Navbars/Navbar.js";

ReactDOM.render(
  <BrowserRouter>
    <IndexNavbar/>
    <Switch>
      <Route path="/index" render={ (props) =>  <Home {...props}/> }/>
      <Route path="/auth" component={Auth}/>
      <Route path="/dictamen" render={ (props) =>  <Dictamen {...props}/> }/>
      <Route path="/noticia" render={ (props) =>  <Noticia {...props}/> }/>
      <Redirect from="/" to="/index" />>
       
    </Switch>
    <DarkFooter style={{position:"absolute",bottom:"0"}} />
  </BrowserRouter>,
  document.getElementById("root")
);
