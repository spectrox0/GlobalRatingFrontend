import React, { useState, useEffect , useContext } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import CountryContext from './../../context/region.js'
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";


export default function NavbarGlobal() {
  // Variables useState
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarLogo, setNavbarLogo] = useState("navbar-logoHidden");
  const [collapseOpen, setCollapseOpen] = useState(false);
<<<<<<< HEAD
  const [region, setRegion] = useState("VE");
=======
  const context = useContext(CountryContext); 
  
>>>>>>> 2d5b00b0bbcde9001db56c05b6c99c800052cbd3
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
  return (
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
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>

          <div className="navbar-translate">
            <NavbarBrand
              target="_blank"
              id="navbar-brand"
              className={navbarLogo}
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
            className="justify-content-end"
            isOpen={collapseOpen}
            style={{ background: "none" }}
            navbar
          >
            <Nav navbar>
              <NavItem>
<<<<<<< HEAD
                <NavLink to={{
                  pathname: `/nosotros/${region}`
                }
                } tag={Link}>
=======
                <NavLink to= {{
               pathname:`/nosotros/${context.country}` }
                }   tag={Link}>
>>>>>>> 2d5b00b0bbcde9001db56c05b6c99c800052cbd3
                  <i className="now-ui-icons business_chart-bar-32"></i>
                  <p> Nosotros </p>
                </NavLink>
              </NavItem>
              <NavItem>
<<<<<<< HEAD
                <NavLink to={{
                  pathname: `/productos/${region}`
                }
                } tag={Link}>
=======
                <NavLink to={ {
               pathname:`/productos/${context.country}` }
                }  tag={Link}>
>>>>>>> 2d5b00b0bbcde9001db56c05b6c99c800052cbd3
                  <i className="now-ui-icons business_globe"></i>
                  <p> Productos y Servicios </p>
                </NavLink>
              </NavItem>
              <NavItem>
<<<<<<< HEAD
                <NavLink to={{
                  pathname: `/calificacion/${region}`
                }
=======
                <NavLink to={ {
               pathname:`/calificacion/${context.country}` }
>>>>>>> 2d5b00b0bbcde9001db56c05b6c99c800052cbd3
                } tag={Link}>
                  <i className="now-ui-icons business_chart-bar-32"></i>
                  <p> Calificacion de Riesgos </p>
                </NavLink>
              </NavItem>
              <NavItem>
<<<<<<< HEAD
                <NavLink to={{
                  pathname: `/leyesNormativas/${region}`
                }
                } tag={Link}>
=======
                <NavLink to={ {
               pathname:`/leyesNormativas/${context.country}` }
                }  tag={Link}>
>>>>>>> 2d5b00b0bbcde9001db56c05b6c99c800052cbd3
                  <i className="now-ui-icons files_paper"></i>
                  <p> Leyes y Normativas </p>
                </NavLink>
              </NavItem>
              <NavItem>
<<<<<<< HEAD
                <NavLink to={{
                  pathname: `/mercado/${region}`
                }
                } tag={Link}>
=======
                <NavLink to={ {
               pathname:`/mercado/${context.country}` }
                }  tag={Link}>
>>>>>>> 2d5b00b0bbcde9001db56c05b6c99c800052cbd3
                  <i className="now-ui-icons business_money-coins"></i>
                  <p>Mercado de capitales</p>
                </NavLink>
              </NavItem>
              <NavItem>
<<<<<<< HEAD
                <NavLink to={{
                  pathname: `/contactanos/${region}`
                }
=======
                <NavLink to={ {
               pathname:`/contactanos/${context.country}` }
>>>>>>> 2d5b00b0bbcde9001db56c05b6c99c800052cbd3
                } tag={Link}>
                  <i className="now-ui-icons travel_info"></i>
                  <p>Contactanos</p>
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
.navbar-logoHidden {
  visibility: hidden; 
}
`
