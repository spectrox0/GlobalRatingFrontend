/*eslint-disable*/
import React from "react";
import {NavLink} from "react-router-dom"; 
import styled from "styled-components"; 
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip , FormGroup,
  Input, Form , InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
      <Row> 
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
            <Col className="text-center">
  <ul className="nav-links">
           <li>
            <NavLink to="/about"> Nosotros </NavLink>
           </li>
           <li>  <NavLink to="/productsAndServices"> Productos y Servicios </NavLink>
           </li>
           <li> <NavLink to="/rateRisk"> Calificacion de Riesgos </NavLink>
           </li>
           <li>  <NavLink to="/laws"> Leyes y Normativas </NavLink>
           </li>
           <li>  <NavLink to="/capitalMarket"> Mercado de Capitales</NavLink>
           </li>
           <li>  <NavLink to="/contact"> Contacto </NavLink>
           </li>
       </ul>
  </Col>
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
export default DarkFooter;
