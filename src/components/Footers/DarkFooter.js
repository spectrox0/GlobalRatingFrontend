/*eslint-disable*/
import React , {useContext} from "react";
import {NavLink, Link} from "react-router-dom"; 
import CountryContext from "./../../context/region.js"
import styled from "styled-components"; 
// reactstrap components
import { 
  Container,
   Row,
  Col,
  Input, 
  Form , 
  InputGroup,
   InputGroupAddon, 
   InputGroupText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
  } from "reactstrap";



export default function DarkFooter() {
  const context = useContext(CountryContext); 
  return (
    <footer className="footer" data-background-color="black">
      <Container >
      <Row >
              <a
                href=""
                target="_blank"
              >
            <FinanzasDigitalLogo></FinanzasDigitalLogo>
              </a>
          
              <a
                href=""
                target="_blank"
              >
              <GlobalScopeLogo></GlobalScopeLogo>
     
              </a>
            
            
             <Col lg="3" sm="6">
             <h3 style= {{marginBottom:"0.7rem"}}> Suscribete </h3>
             <Form className="form-inline ml-auto" data-background-color="">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_email-85"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Escribe tu correo" type="text"></Input>
              </InputGroup>
            </Form>
             </Col> 
            
  <Col>     <UncontrolledDropdown>
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="secondary"
          data-toggle="dropdown"
          id="dropdownMenuButton"
          type="button"
        >
          <i className="now-ui-icons location_world"></i>
                 {"  "}  Region
        </DropdownToggle>
        <DropdownMenu aria-labelledby="dropdownMenuButton">
          <DropdownItem onClick={ e => {
             context.changeCountry("VE"); 
             localStorage.setItem("country","VE")
            }}
          tag = {Link} 
          to= {{ 
            pathname:"/index/VE"}}
          > 
          <img
              src={require("assets/img/flags/VE.png")}
              alt="Venezuela"
              style={{height:"1rem"}}
                  /> {" "}  -Venezuela
          </DropdownItem>
          <DropdownItem
          onClick={e => {
            context.changeCountry("PA"); 
           localStorage.setItem("country", "PA")
          } } tag = {Link} 
          to= {{ 
            pathname:"/index/PA"}}
          > 
          <img
              src={require("assets/img/flags/PA.png")}
              alt="Venezuela"
              style={{height:"1rem"}}
                  /> {" "}   -Panama
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown></Col>
      </Row>
       <Row> <Col className="text-center">
  <ul className="nav-links">
           <li>
            <NavLink to="/nosotros/VE"> Nosotros </NavLink>
           </li>
           <li>  <NavLink to="/clientes/VE"> Clientes </NavLink>
           </li>
           <li> <NavLink to="/calificacion/VE"> Calificacion de Riesgos </NavLink>
           </li>
           <li>  <NavLink to="/leyesnormativas/VE"> Leyes y Normativas </NavLink>
           </li>
           <li>  <NavLink to="/estadisticas/VE"> Estadísticas de Mercado </NavLink>
           </li>
           <li>  <NavLink to="/contactanos/VE"> Contacto </NavLink>
           </li>           
           <li>
             |
           </li>
           <li>  <NavLink to="/terminos/VE"> Términos y Condiciones </NavLink>
           </li>
           <li>  <NavLink to="/mapa/VE"> Mapa del Site </NavLink>
           </li>
       </ul>
  </Col></Row>
       <Row> 
        
       </Row>
            <Copyright id="copyright">
        <p>
          GlobalRatings, C.A. RIF: J-123456789-0.
          Todos los derechos reservados © {new Date().getFullYear()}.</p>
        
        </Copyright>
        

      
      </Container>
    </footer>
  );
}

const FinanzasDigitalLogo = styled.div`
display:inline-block; 
background: url("${require("assets/img/pic_footerlogoFD_gris.png")}") no-repeat center; 
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
width:11rem;
height:5rem; 
transition: all 0.3s ease-out; 
&:hover{
  background-image: url("${require("assets/img/pic_footerlogoFD_color.png")}"); 
}
`
const GlobalScopeLogo = styled.div`
display:inline-block; 
background: url("${require("assets/img/pic_footerlogoGS_gris.png")}") no-repeat center; 
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
width:20rem;
height:5rem; 
transition: all 0.3s ease-out; 
&:hover{
  background-image: url("${require("assets/img/pic_footerlogoGS_color.png")}"); 
}
`
const Copyright = styled.div`
display:flex; 
flex-direction:column; 
justify-content:center; 
align-items:center; 
p {
  font-size:0.8rem; 
  text-align:center;
}
`
