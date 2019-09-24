/*eslint-disable*/
import React , {useContext} from "react";
import { Link} from "react-router-dom"; 
import CountryContext from "./../../context/region.js"
import styled from "styled-components"; 
import {animateScroll as scroll} from  'react-scroll'; 
// reactstrap components
import { 
  Container,
   Row,
  Col,
  NavLink
  } from "reactstrap";



export default function DarkFooter() {
  const {country} = useContext(CountryContext); 
  return (
    <footer className="footer" data-background-color="black">
      <Container >
      <Row >
    
        <Col sm="6"> 
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
            </Row>
              </Col>
            
  
      <Col className="text-center">
        <ul className="nav-links">
           <li>
            <NavLink 
             onClick={ e=> {scroll.scrollToTop()}}
            tag= {Link} 
            to= {{
              pathname:`/nosotros/${country}`
            }} > Nosotros </NavLink>
           </li>
           <li>  <NavLink
            onClick={ e=> {scroll.scrollToTop()}}
            tag= {Link}
            to= {{
              pathname:`/clientes/${country}`
            }} > Clientes </NavLink>
           </li>
           <li> <NavLink
            onClick={ e=> {scroll.scrollToTop()}}
            tag= {Link}
           to= {{
              pathname:`/calificacion/${country}`
            }} > Calificacion de Riesgos </NavLink>
           </li>
           <li>  <NavLink 
            onClick={ e=> {scroll.scrollToTop()}}
           tag= {Link}
           to= {{
              pathname:`/leyesnormativas/${country}`
            }} > Leyes y Normativas </NavLink>
           </li>
           <li>  <NavLink 
            onClick={ e=> {scroll.scrollToTop()}}
           tag= {Link}
           to= {{
              pathname:`/estadisticas/${country}`
            }} > Estadísticas de Mercado </NavLink>
           </li>
           <li>  <NavLink 
            onClick={ e=> {scroll.scrollToTop()}}
           tag= {Link} 
           to= {{
              pathname:`/contactanos/${country}`
            }} > Contacto </NavLink>
           </li>           
        
       </ul>
       </Col>
  </Row>
  <Row> <Col className="text-center"> 
       <ul className="nav-links" >
         <li> 
       <NavLink 
           onClick={ e=> {scroll.scrollToTop()}}
           tag= {Link}to= {{
              pathname:`/terminos/${country}`
            }}> Términos y Condiciones </NavLink>
         </li>
         <li> 
            <NavLink tag= {Link} to= {{
              pathname:`/mapa/${country}`
            }}> Mapa del Site </NavLink>
              </li>
          </ul>
       </Col></Row>

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
