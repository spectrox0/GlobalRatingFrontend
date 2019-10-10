import React, { useState, useEffect , useContext } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import country from './../../context/region.js'
import Toggler from './../Navbars/Toggler.js'

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact"

  


export default function NavbarGlobal() {
  // Variables useState
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarLogo, setNavbarLogo] = useState(require("assets/img/globalrating_white.svg"));
  const [collapseOpen, setCollapseOpen] = useState(false);
  const  context = useContext(country); 
  
  // Use effect se carga al iniciar el componente , efectuado cada vez que se renderice el componente 
  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 280 ||
        document.body.scrollTop > 280
      ) {
        setNavbarColor("");
         setNavbarLogo(require("assets/img/pic_logoGR.svg"));
      } else if (
        document.documentElement.scrollTop < 281 ||
        document.body.scrollTop < 281
      ) {
        setNavbarColor("navbar-transparent");
        setNavbarLogo(require("assets/img/globalrating_white.svg"));
       
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return  ( 
    
      <MDBNavbar className={navbarColor} expand="lg">
        {collapseOpen && (<div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        /> )}
        <div className="navbar-translate"> 
      <MDBNavbarBrand
             id="navbar-brand"
            >
              <MDBNavLink 
               tag= {Link}
               to = {{pathname:`/index/${context.country}`}}
               > <img className="GlobalRatingLogo"
                src={navbarLogo}
                alt=""
              />  </MDBNavLink>
             
        </MDBNavbarBrand>
     
         <Toggler onClick = { () => {
           document.documentElement.classList.toggle("nav-open");
           setCollapseOpen(!collapseOpen); 
         }} ></Toggler>
   

        <MDBCollapse id="navbarCollapse3" isOpen={collapseOpen} navbar>
          
          <MDBNavbarNav right>
          <MDBNavItem active> 
              <MDBNavLink to= {{
               pathname:`/nosotros/${context.country}` }
                }   tag={Link} >Nosotros</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/clientes/${context.country}` }
                }  tag={Link}>Clientes</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/calificacion/${context.country}` }
                } tag={Link}>Calificación</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/clientes/${context.country}` }
                }  tag={Link} >Clientes</MDBNavLink>
            </MDBNavItem>
                 <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/estadisticas/${context.country}` }
                }  tag={Link} >Estadísticas</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/contactanos/${context.country}` }
                }  tag={Link} >contactanos</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              
              
              
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Región</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem onClick={ e => {
             context.changeCountry("ve"); 
             localStorage.setItem("country","ve")
            }}
          tag = {Link} 
          to= {{ 
            pathname:"/index/ve"}}
          > 
          <img
              src={require("assets/img/flags/VE.png")}
              alt="Venezuela"
              style={{height:"1rem"}}
                  /> {" "}  -Venezuela </MDBDropdownItem>
                  <MDBDropdownItem  onClick={e => {
            context.changeCountry("pa"); 
           localStorage.setItem("country", "pa")
          } } tag = {Link} 
          to= {{ 
            pathname:"/index/pa"}}
          > 
          <img
              src={require("assets/img/flags/PA.png")}
              alt="Venezuela"
              style={{height:"1rem"}}
                  /> {" "}   -Panama </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          
          </MDBNavbarNav>
        </MDBCollapse>
        </div>
      </MDBNavbar>

  );
}

const NavbarContainer = styled.div`
.navbar-logoHidden {
  visibility: hidden; 
}
.collapseNavbar {
} 
`
