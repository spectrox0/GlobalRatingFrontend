/*eslint-disable*/
import React from "react";
import {NavLink} from "react-router-dom"; 
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip , FormGroup,
  Input, Form , InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
      <Row> 
              <a
                href="https://www.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                 <img className="finanzasDigitalLogo"
      src={require("assets/img/pic_footerlogoFD_color.png")}
      alt=""
     />
              </a>
          
              <a
                href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
        <img className="globalScopeLogo"
      src={require("assets/img/pic_footerlogoGS_color.png")}
      alt=""
     />
              </a>
      
            
          
            <Col className="text-center" lg="3" md="6">
            <h3 style= {{margin:0}}>Siguenos en... </h3>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href="https://www.twitter.com/creativetim?ref=creativetim"
                id="tooltip86114138"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip86114138">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/creativetim?ref=creativetim"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like us
              </UncontrolledTooltip>
              
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href="https://github.com/creativetimofficial/now-ui-kit-react?ref=creativetim"
                id="tooltip331904895"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip331904895">
              Follow us
              </UncontrolledTooltip>
            </Col>
             <Col lg="3" sm="4">
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
          
            <div className="copyright" id="copyright">
        <p>
          GlobalRatings, C.A. RIF: J-123456789-0.
          Todos los derechos reservados © {new Date().getFullYear()}.</p>
        
        </div>
        

      
      </Container>
    </footer>
  );
}

export default DarkFooter;
