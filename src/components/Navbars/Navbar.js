import React, { useState, useEffect , useContext } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import country from './../../context/region.js'
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact"


export default function NavbarGlobal() {
  // Variables useState
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarLogo, setNavbarLogo] = useState("navbar-logoHidden");
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
        setNavbarLogo("");
      } else if (
        document.documentElement.scrollTop < 281 ||
        document.body.scrollTop < 281
      ) {
        setNavbarColor("navbar-transparent");
        setNavbarLogo("navbar-logoHidden");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return ( /*
    <NavbarContainer>
        
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <Container>

          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              className={navbarLogo}
              tag= {Link}
              to = {{pathname:`/index/${context.country}`}}
            >
              <img className="GlobalRatingLogo"
                src={require("assets/img/globalrating_white.svg")}
                style={{ width: "6rem" }}
                alt=""
              />
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Global Ratings
            </UncontrolledTooltip>

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end collapseNavbar"
            isOpen={collapseOpen}
            navbar
          >
            <Nav className="navBar" navbar>
              <NavItem>
                <NavLink to= {{
               pathname:`/nosotros/${context.country}` }
                }   tag={Link}>
                  <i className="now-ui-icons business_chart-bar-32"></i>
                  <p> Nosotros </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={ {
               pathname:`/clientes/${context.country}` }
                }  tag={Link}>
                  <i className="now-ui-icons business_globe"></i>
                  <p> Clientes </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={ {
               pathname:`/calificacion/${context.country}` }
                } tag={Link}>
                  <i className="now-ui-icons business_chart-bar-32"></i>
                  <p> Calificaciones de Riesgos </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={ {
               pathname:`/leyesNormativas/${context.country}` }
                }  tag={Link}>
                  <i className="now-ui-icons files_paper"></i>
                  <p> Leyes y Normativas </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={ {
               pathname:`/estadisticas/${context.country}` }
                }  tag={Link}>
                  <i className="now-ui-icons business_money-coins"></i>
                  <p>Estadisticas de Mercado</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={ {
               pathname:`/contactanos/${context.country}` }
                } tag={Link}>
                  <i className="now-ui-icons travel_info"></i>
                  <p>Contactanos</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav >
        <DropdownToggle
         aria-haspopup={true}
         caret
         color="default"
         data-toggle="dropdown"
         id="navbarDropdownMenuLink"
         nav
         onClick={e => e.preventDefault()}
        >
          <i className="now-ui-icons location_world"></i>
                 {"  "}  Region
        </DropdownToggle>
        <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
          <DropdownItem onClick={ e => {
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
                  /> {" "}  -Venezuela
          </DropdownItem>
          <DropdownItem
          onClick={e => {
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
                  /> {" "}   -Panama
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </NavbarContainer>*/
    
      <MDBNavbar className={navbarColor} expand="lg">
        <div className="navbar-translate"> 
      <MDBNavbarBrand
             id="navbar-brand"
              className={navbarLogo}
              tag= {Link}
              to = {{pathname:`/index/${context.country}`}}
            >
              <img className="GlobalRatingLogo"
                src={require("assets/img/pic_logoGR.svg")}
                style={{ width: "6rem" }}
                alt=""
              />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={ () => setCollapseOpen(!collapseOpen)} />
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
                } tag={Link}>Calificacion</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/clientes/${context.country}` }
                }  tag={Link} >Clientes</MDBNavLink>
            </MDBNavItem>
                 <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/estadisticas/${context.country}` }
                }  tag={Link} >Estatidisticas</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Dropdown</span>
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
