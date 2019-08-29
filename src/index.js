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
import { BrowserRouter} from "react-router-dom";
import Routes from "./views/helpers/Routes"; 
// styles 
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";

import DarkFooter from "components/Footers/DarkFooter.js";
import IndexNavbar from "components/Navbars/Navbar.js";

ReactDOM.render(
  <BrowserRouter>
    <IndexNavbar/>
    <Routes/>
    <DarkFooter style={{position:"absolute",bottom:"0"}} />
  </BrowserRouter>,
  document.getElementById("root")
);
