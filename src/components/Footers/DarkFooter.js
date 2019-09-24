/*eslint-disable*/
import React , {useContext} from "react";
import { Link} from "react-router-dom"; 
import CountryContext from "./../../context/region.js"
import styled from "styled-components"; 
import {animateScroll as scroll} from  'react-scroll'; 
import {useMutation} from '@apollo/react-hooks';
import {MUTATION_SEND_FRIEND} from '../../views/helpers/graphql/mutation'
// reactstrap components

import { 
  Container,
   Row,
  Col,
  NavLink,
  Button,
   Modal,
   Input,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   Label,
   Form,
   
  } from "reactstrap";



export default function DarkFooter() {
  const {country} = useContext(CountryContext); 
  const [modalLive, setModalLive] = React.useState(false);
  const [email ,setEmail] = React.useState("");
  const [sendFriend, {data, loading, error, called}] = useMutation(MUTATION_SEND_FRIEND); 
   React.useEffect(()=>{
 if(called & !loading && data.sendFriend) {
   
  setModalLive(false); 
 }
   }, [called, data, loading])
  const handlingForm = e => {   
    e.preventDefault(); 
    if(email.trim().length===0) return ; 
    sendFriend({
      variables: {
        to: email,
        url: window.location.href
      }
    }); 

  }
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
            <Col sm="2"> 
            <Button
        color="info"
        type="button"
        onClick={() => setModalLive(true)}
      >
       Compartir Pagina
      </Button>
      <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
        <Form onSubmit= {handlingForm}> 
        <div className="modal-header" >
          <h5 className="modal-title" id="exampleModalLiveLabel">
            Compartir Pagina
          </h5>
          <button
            aria-label="Close"
            className="close info"
            style={{color:"blue"}}
            type="button"
            onClick={() => setModalLive(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
       
                    <Label htmlFor="email" > Email </Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                        id="email"
                         placeholder="Escribe el correo de un amigo" 
                         type="email"
                         required
                         value={email}
                         onChange={e=> setEmail(e.target.value)}
                         className="textInput"
                      
                        ></Input>
                      </InputGroup>
                     
        </div>
        <div className="modal-footer">
        
          <Button
            color="info"
            type="button"
            className="btn-round"
             size="lg"
            type="submit"
           
          >
            Enviar
          </Button>
        </div>
        </Form>
      </Modal>
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
