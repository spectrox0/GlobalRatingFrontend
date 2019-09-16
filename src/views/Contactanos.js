import React, { useState, useEffect } from "react";
import IndexHeader from "./../components/Headers/IndexHeader";
import Recaptcha from "react-recaptcha"; 
import styled from "styled-components";
import {
  Row
  , Col,
  Alert,
  Input,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  FormGroup,
  Container,
  Button
} from 'reactstrap'

export default function () {
   
  const [isVerified,setVerified] = useState(false); 
  const [message, setMessage] = useState(); 

  /* useEffect(() => {
       document.body.classList.add("index-page");
       document.body.classList.add("sidebar-collapse");
       document.documentElement.classList.remove("nav-open");
       window.scrollTo(0, 0);
       document.body.scrollTop = 0;
       return function cleanup() {
         document.body.classList.remove("index-page");
         document.body.classList.remove("sidebar-collapse");
       };   });
 
*/
const RecaptchaLoad = ()=> {

}
const handlingOnsubmit = (e) => {
  e.preventDefault(); 
  if(!isVerified)  {
     setMessage({message:"Verifique no ser un robot", isError:true}); 
    return; }
    setMessage({message:"Se envio el correo exitosamente", isError:false}); 
  } 

const verifyCallback =(response) => {
   if(response) {
     setVerified(true); 
   }
}
  return (

    <DictamenContent>
      <div className="wrapper">

        <div className="main" >
          <Container >
            <Row>
              <Col>
              <Row> 
              <h3>Nuestras Coordenadas </h3>
              </Row>
              
              <Row> 
                <div className="elementCoordenadas" >
                  <span>
                    Av. Ppal. de la Castellana, Centro Letonia, Piso 12, Oficina 126.
                    Caracas - Venezuela
                 </span>
                 
                </div>
                </Row>
                <Row> 
                <div className="elementCoordenadas" >
                  <span>
                    Master +58 (212) 263.4393
                 </span>
                </div>
                </Row>
                <Row> 
                <div className="elementCoordenadas" >
                  <span>
                    info@globalratings.com
                 </span>
                </div>
                </Row>
              </Col>
              <Col> 
            {message && (
              <Alert color={message.isError? "danger" : "info"}>
               {message.message}
          </Alert>
            )}
                <Form onSubmit={handlingOnsubmit}>
                  <Row>
                    <Col>
                    <FormGroup>
                      <Label htmlFor="nombre" > Nombre</Label>
                        <Input
                         id="nombre" 
                         placeholder="Escribe tu nombre" 
                         type="text"
                         required
                         className="textInput"
                         ></Input>
                        </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Label htmlFor="apellido" > Apellido </Label>
                        <Input 
                        id="apellido" 
                        placeholder="Escribe tu apellido" 
                        type="text"
                        required
                        className="textInput"
                        ></Input>
                        </FormGroup></Col>
                  </Row>
                  <Row>
                    <Col>
                    <FormGroup> 
                    <Label htmlFor="email" > Email </Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                        id="email"
                         placeholder="Escribe tu correo" 
                         type="email"
                         required
                         className="textInput"
                        ></Input>
                      </InputGroup>
                      </FormGroup>
                      </Col>
                  </Row>
                  <Row>
                    <Col>
                    <FormGroup>
                      <Label htmlFor="asunto" > Asunto </Label>
                        <Input 
                        id="asunto" 
                        placeholder="Escribe tu asunto"
                         type="text"
                         required
                         className="textInput"
                         ></Input>
                        </FormGroup>
                      </Col>

                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label htmlFor="textArea" > Mensaje</Label>
                        <Input 
                        id="textArea" 
                        placeholder="Escribe tu mensaje" 
                        type="textarea"
                        required
                        className="textAreaMensaje"
                        rows="3"
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row> 
                  <Recaptcha
    sitekey="6LeFsrgUAAAAAJmjoOiqeDR2Kkv4jcJOWe4njhOt"
    render="explicit"
    onloadCallback={RecaptchaLoad}
    verifyCallback={verifyCallback}
  />

                  </Row>
                  <Button className="btn-round" size="lg" color="info" type="submit">
                   ENVIAR MENSAJE 
                 </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </DictamenContent>
  );


}

const DictamenContent = styled.div`
.main {
    display: flex; 
    flex-direction: column; 
    align-items:center; 
    justify-content:center; 
    height:100vh; 
   
} 

h3{
  color:#4169E1;
  text-transform:uppercase; 
}
.elementCoordenadas{
  span {
    font-size:1.2rem; 
  }
  margin-bottom:1rem; 
} 
  .textAreaMensaje,.textInput{
    &:focus {
     border-color:#1E90FF; 
    }
    
  }
  label {
    color:#191970;
  }
`


