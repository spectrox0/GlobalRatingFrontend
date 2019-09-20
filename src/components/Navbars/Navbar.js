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
  const  {country} = useContext(CountryContext); 
  
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
                <NavLink to= {{
               pathname:`/nosotros/${country}` }
                }   tag={Link}>
                  <i className="now-ui-icons business_chart-bar-32"></i>
                  <p> Nosotros </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={ {
               pathname:`/clientes/${country}` }
                }  tag={Link}>
                  <i className="now-ui-icons business_globe"></i>
                  <p> Clientes </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={ {
               pathname:`/calificacion/${country}` }
                } tag={Link}>
                  <i className="now-ui-icons business_chart-bar-32"></i>
                  <p> Calificaciones de Riesgos </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={ {
               pathname:`/leyesNormativas/${country}` }
                }  tag={Link}>
                  <i className="now-ui-icons files_paper"></i>
                  <p> Leyes y Normativas </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={ {
               pathname:`/mercado/${country}` }
                }  tag={Link}>
                  <i className="now-ui-icons business_money-coins"></i>
                  <p>Estadisticas de Mercado</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={ {
               pathname:`/contactanos/${country}` }
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
