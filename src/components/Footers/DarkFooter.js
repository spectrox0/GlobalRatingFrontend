/*eslint-disable*/
import React , {useContext} from "react";
import { Link} from "react-router-dom"; 
import CountryContext from "./../../context/region.js"
import {animateScroll as scroll} from  'react-scroll'; 
import {useMutation} from '@apollo/react-hooks';
import {MUTATION_SEND_FRIEND} from '../../views/helpers/graphql/mutation'
// reactstrap components


  import { MDBCol, MDBContainer, MDBRow, MDBFooter ,MDBNavLink} from "mdbreact";


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
  return  ( /*
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
            <MDBNavLink 
             onClick={ e=> {scroll.scrollToTop()}}
            tag= {Link} 
            to= {{
              pathname:`/nosotros/${country}`
            }} > Nosotros </MDBNavLink>
           </li>
           <li>  <MDBNavLink
            onClick={ e=> {scroll.scrollToTop()}}
            tag= {Link}
            to= {{
              pathname:`/clientes/${country}`
            }} > Clientes </MDBNavLink>
           </li>
           <li> <MDBNavLink
            onClick={ e=> {scroll.scrollToTop()}}
            tag= {Link}
           to= {{
              pathname:`/calificacion/${country}`
            }} > Calificacion de Riesgos </MDBNavLink>
           </li>
           <li>  <MDBNavLink 
            onClick={ e=> {scroll.scrollToTop()}}
           tag= {Link}
           to= {{
              pathname:`/leyesnormativas/${country}`
            }} > Leyes y Normativas </MDBNavLink>
           </li>
           <li>  <MDBNavLink 
            onClick={ e=> {scroll.scrollToTop()}}
           tag= {Link}
           to= {{
              pathname:`/estadisticas/${country}`
            }} > Estadísticas de Mercado </MDBNavLink>
           </li>
           <li>  <MDBNavLink 
            onClick={ e=> {scroll.scrollToTop()}}
           tag= {Link} 
           to= {{
              pathname:`/contactanos/${country}`
            }} > Contacto </MDBNavLink>
           </li>           
        
       </ul>
       </Col>
  </Row>
  <Row> <Col className="text-center"> 
       <ul className="nav-links" >
         <li> 
       <MDBNavLink 
           onClick={ e=> {scroll.scrollToTop()}}
           tag= {Link}to= {{
              pathname:`/terminos/${country}`
            }}> Términos y Condiciones </MDBNavLink>
         </li>
         <li> 
            <MDBNavLink tag= {Link} to= {{
              pathname:`/mapa/${country}`
            }}> Mapa del Site </MDBNavLink>
              </li>
          </ul>
       </Col></Row>

            <Copyright id="copyright">
        <p>
          GlobalRatings, C.A. RIF: J-123456789-0.
          Todos los derechos reservados © {new Date().getFullYear()}.</p>
        
        </Copyright>
        

      
      </Container>
    </footer> */ 

    <MDBFooter>
      <MDBContainer style={{padding:"2rem"}} fluid className="text-center">
        <MDBRow>
          <MDBCol md="3">
          <a
                href=""
                target="_blank"
              >
           
            <div className="finanzasDigital" />
              </a>
          
              <a
                href=""
                target="_blank"
              >
               
            <div className="globalScope" />
     
              </a>
          </MDBCol>
          <MDBCol md="3">
          <h5 className="title">Contactanos</h5>
          <p>
          Av. Ppal. de la Castellana, Centro Letonia, Piso 12, Oficina 126. Caracas - Venezuela </p>
          <p> 
Master +58 (212) 263.4393
</p>
<p>
info@globalratings.com
          </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Acerca de Nosotros</h5>
            <p>
            
            </p>
          </MDBCol>
          <MDBCol md="3">
          <ul className="nav-links">
           <li>
            <MDBNavLink 
             onClick={ e=> {scroll.scrollToTop()}}
            tag= {Link} 
            to= {{
              pathname:`/nosotros/${country}`
            }} > Nosotros </MDBNavLink>
           </li>
           <li>  <MDBNavLink
            onClick={ e=> {scroll.scrollToTop()}}
            tag= {Link}
            to= {{
              pathname:`/clientes/${country}`
            }} > Clientes </MDBNavLink>
           </li>
           <li> <MDBNavLink
            onClick={ e=> {scroll.scrollToTop()}}
            tag= {Link}
           to= {{
              pathname:`/calificacion/${country}`
            }} > Calificacion de Riesgos </MDBNavLink>
           </li>
           <li>  <MDBNavLink 
            onClick={ e=> {scroll.scrollToTop()}}
           tag= {Link}
           to= {{
              pathname:`/leyesnormativas/${country}`
            }} > Leyes y Normativas </MDBNavLink>
           </li>
           <li>  <MDBNavLink 
            onClick={ e=> {scroll.scrollToTop()}}
           tag= {Link}
           to= {{
              pathname:`/estadisticas/${country}`
            }} > Estadísticas de Mercado </MDBNavLink>
           </li>
           <li>  <MDBNavLink 
            onClick={ e=> {scroll.scrollToTop()}}
           tag= {Link} 
           to= {{
              pathname:`/contactanos/${country}`
            }} > Contacto </MDBNavLink>
           </li>           
           <li> 
       <MDBNavLink 
           onClick={ e=> {scroll.scrollToTop()}}
           tag= {Link}to= {{
              pathname:`/terminos/${country}`
            }}> Términos y Condiciones </MDBNavLink>
         </li>
         <li> 
            <MDBNavLink tag= {Link} to= {{
              pathname:`/mapa/${country}`
            }}> Mapa del Site </MDBNavLink>
              </li>
        
       </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
     
          GlobalRatings, C.A. RIF: J-123456789-0.
          Todos los derechos reservados © {new Date().getFullYear()}.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}



