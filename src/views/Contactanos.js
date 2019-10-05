import React, { useState, useEffect} from "react";
import IndexHeader from "./../components/Headers/IndexHeader";
import Recaptcha from "react-recaptcha"; 
import styled from "styled-components";
import {useMutation} from '@apollo/react-hooks';
import {MUTATION_CONTACTANOS} from './helpers/graphql/mutation'
import {initGA} from './helpers/initGA.js';


import {
  MDBRow
  , MDBCol,
  MDBAlert,
  MDBInput,
  MDBFormInline,
  MDBInputGroup,
  MDBContainer,
  MDBBtn
} from 'mdbreact'

export default function Contactanos () {
   
  const [isVerified,setVerified] = useState(false); 

  const [message, setMessage] = useState(); 
  
  const  [nombre,setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [asunto, setAsunto] = useState("");
  const [email ,setEmail] = useState("");
  const [texto,setTexto] = useState("");
  
  const [sendEmail, {data, loading, error, called}] = useMutation(MUTATION_CONTACTANOS); 

  useEffect(()=> {
    initGA();
  },[]);

  /* useEffect(() => {
       document.body.classList.add("index-page");
       document.body.classList.add("sidebar-MDBCollapse");
       document.documentElement.classList.remove("nav-open");
       window.scrollTo(0, 0);
       document.body.scrollTop = 0;
       return function cleanup() {
         document.body.classList.remove("index-page");
         document.body.classList.remove("sidebar-MDBCollapse");
       };   });
 
*/
const RecaptchaLoad = ()=> {

}

const clear = ()=> {
  setNombre(""); 
  setApellido(""); 
  setAsunto(""); 
  setEmail(""); 
  setTexto(""); 
}

useEffect(()=> {
   console.log(data); 
   if(error) { 
    setMessage({message:"Error al enviar", isError:false}); 
     return; 
   }
  if(isVerified && !loading && data) {
    setMessage({message:"Se envio el correo exitosamente", isError:false}); 
    clear(); 
  }
},[data,loading, error,called])

const handlingOnsubmit = async (e) => {
  e.preventDefault(); 
  if(!isVerified)  {
     setMessage({message:"Verifique no ser un robot", isError:true}); 
    return; }
    
    console.log(nombre)
    if(nombre.trim().length===0 || 
       apellido.trim().length===0 ||
       asunto.trim().length===0 || 
        email.trim().length===0 || 
        texto.trim().length===0 )
        return;
      const nombreCompleto = (nombre + " " + apellido);
     await  sendEmail({
        variables: {
            message:
            {
                from: email,
                nombre: nombreCompleto,
                subject: asunto, 
                text: texto 
            }
        }
    }); 
      
    
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
          <MDBContainer >
            <MDBRow>
              <MDBCol>
              <MDBRow> 
              <h3>Nuestras Coordenadas </h3>
              </MDBRow>
              
              <MDBRow> 
                <div className="elementCoordenadas" >
                  <span>
                    Av. Ppal. de la Castellana, Centro Letonia, Piso 12, Oficina 126.
                    Caracas - Venezuela
                 </span>
                 
                </div>
                </MDBRow>
                <MDBRow> 
                <div className="elementCoordenadas" >
                  <span>
                    Master +58 (212) 263.4393
                 </span>
                </div>
                </MDBRow>
                <MDBRow> 
                <div className="elementCoordenadas" >
                  <span>
                    info@globalratings.com
                 </span>
                </div>
                </MDBRow>
              </MDBCol>
              <MDBCol> 
            {message && (
              <MDBAlert color={message.isError? "danger" : "info"}>
               {message.message}
          </MDBAlert>
            )}
                <MDBFormInline onSubmit={handlingOnsubmit}>
                  <MDBRow>
                    <MDBCol>
                      <label htmlFor="nombre" > Nombre</label>
                        <MDBInput
                         id="nombre" 
                         placeholder="Escribe tu nombre" 
                         type="text"
                         required
                         className="textMDBInput"
                         value={nombre}
                         onChange={ e=> setNombre(e.target.value)}
                         ></MDBInput>
                    </MDBCol>
                    <MDBCol>
                   
                      <label htmlFor="apellido" > Apellido </label>
                        <MDBInput 
                        id="apellido" 
                        placeholder="Escribe tu apellido" 
                        type="text"
                        required
                        className="textMDBInput"
                        value={apellido}
                        onChange= {e=> setApellido(e.target.value)}
                       
                        ></MDBInput>
                     </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                   
                    <label htmlFor="email" > Email </label>
                      <MDBInputGroup>
                        <MDBInput 
                        id="email"
                         placeholder="Escribe tu correo" 
                         type="email"
                         required
                         value={email}
                         onChange={e=> setEmail(e.target.value)}
                         className="textMDBInput"
                      
                        ></MDBInput>
                      </MDBInputGroup>
                     
                      </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                  
                      <label htmlFor="asunto" > Asunto </label>
                        <MDBInput 
                        id="asunto" 
                        placeholder="Escribe tu asunto"
                         type="text"
                         required
                         value={asunto}
                         onChange={e=> setAsunto(e.target.value)}
                         className="textMDBInput"
                       
                         ></MDBInput>
                       
                      </MDBCol>

                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                   
                        <label htmlFor="textArea" > Mensaje</label>
                        <MDBInput 
                        id="textArea" 
                        placeholder="Escribe tu mensaje" 
                        type="textarea"
                        required
                        value={texto}
                        onChange={e=> setTexto(e.target.value)}
                        className="textAreaMensaje"
                        MDBRows="3"
                        
                        ></MDBInput>
                      
                    </MDBCol>
                  </MDBRow>
                  <MDBRow> 
                  <Recaptcha
    sitekey="6LeFsrgUAAAAAJmjoOiqeDR2Kkv4jcJOWe4njhOt"
    render="explicit"
    onloadCallback={RecaptchaLoad}
    type="audio"
    verifyCallback={verifyCallback}
  />

                  </MDBRow>
                  <MDBBtn className="btn-round" size="lg" color="info" type="submit">
                   ENVIAR MENSAJE 
                 </MDBBtn>
                </MDBFormInline>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
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
    min-height:100vh; 
   
} 

h3{
  color:#4169E1;
  text-transMDBFormInline:uppercase; 
}

.elementCoordenadas{
  span {
    font-size:1.2rem; 
  }
  margin-bottom:1rem; 
} 
  .textAreaMensaje,.textMDBInput{
    &:focus {
     border-color:#1E90FF; 
    }
    
  }
  label {
    
  }
`


