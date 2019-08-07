import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 349 ||
        document.body.scrollTop > 349
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 350 ||
        document.body.scrollTop < 350
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
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
            >
               <img className="GlobalRatingLogo" 
              src={require("assets/img/globalrating_white.svg")}
              style={{ width:"6rem"}}
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
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                <i className="now-ui-icons business_badge"></i>
                  <p>Nosotros </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                <i className="now-ui-icons business_globe"></i>
                  <p> Productos y Servicios </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                <i className="now-ui-icons business_chart-bar-32"></i>
                  <p> Calificacion de Riesgos </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                <i className="now-ui-icons files_paper"></i>
                 <p> Leyes y Normativas </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                <i className="now-ui-icons business_money-coins"></i>
                  <p>Mercado de capitales</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                <i className="now-ui-icons travel_info"></i>
                  <p>Contactanos</p>
                </NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
