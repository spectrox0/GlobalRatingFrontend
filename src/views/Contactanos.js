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
  Container
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
  const DictamenContent = styled.div`
   .main {
       display: flex; 
       flex-direction: column; 
       align-items:center; 
       justify-content:center; 
       height:100vh; 
      
   }
`
  return (

    <DictamenContent>
      <div className="wrapper">

        <div className="main" >
          <Container >
            <Row>
              <Col>
                <h3>Nuestras Coordenadas </h3>

                <div className="elementCoordenadas" >
                  <span>
                    Av. Ppal. de la Castellana, Centro Letonia, Piso 12, Oficina 126.
                    Caracas - Venezuela
                 </span>
                </div>
                <div className="elementCoordenadas" >
                  <span>
                    Master +58 (212) 263.4393
                 </span>
                </div>
                <div className="elementCoordenadas" >
                  <span>
                    info@globalratings.com
                 </span>
                </div>
              </Col>
              <Col>
                <Form>
                  <Row>
                    <Col>
                      <Label for="nombre" > Nombre</Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="now-ui-icons ui-1_email-85"></i> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input id="nombre" placeholder="Escribe tu nombre" type="text"></Input>
                      </InputGroup>
                    </Col>
                    <Col>
                      <Label for="apellido" > Apellido</Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="now-ui-icons ui-1_email-85"></i> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input id="apellido" placeholder="Escribe tu apellido" type="text"></Input>
                      </InputGroup></Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Escribe tu correo" type="text"></Input>
                      </InputGroup></Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Escribe tu correo" type="text"></Input>
                      </InputGroup></Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="textArea" > Mensaje</Label>
                        <Input id="textArea" placeholder="Escribe tu mensaje" type="textarea"></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </DictamenContent>
  );


}


