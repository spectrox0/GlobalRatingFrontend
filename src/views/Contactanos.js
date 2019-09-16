import React, { useState, useEffect } from "react";
import IndexHeader from "./../components/Headers/IndexHeader";
import styled from "styled-components";
import {
  Row
  , Col,
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
                <Form>
                  <Row>
                    <Col>
                    <FormGroup>
                      <Label htmlFor="nombre" > Nombre</Label>
                        <Input
                         id="nombre" 
                         placeholder="Escribe tu nombre" 
                         type="text"
                         className="textInput"
                         ></Input>
                        </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                      <Label htmlFor="apellido" > Nombre</Label>
                        <Input 
                        id="apellido" 
                        placeholder="Escribe tu apellido" 
                        type="text"
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
                         type="text"
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
                        className="textAreaMensaje"
                        rows="3"
                        ></Input>
                      </FormGroup>
                    </Col>
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


