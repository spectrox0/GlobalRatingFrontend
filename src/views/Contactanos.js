import React, { useState, useEffect} from "react";
import Recaptcha from "react-recaptcha"; 

import {useMutation} from '@apollo/react-hooks';
import {MUTATION_CONTACTANOS} from './helpers/graphql/mutation'
import {initGA} from './helpers/initGA.js';

import Header from '../components/Headers/headersViews/Header';
import ImgHeader from '../assets/img/headers/Header Contacto.png'; 


import {
  MDBRow
  , MDBCol,
  MDBAlert,
  MDBContainer,
  MDBBtn,
  MDBModal , 
  MDBModalHeader , 
 MDBModalBody ,
 MDBModalFooter
} from 'mdbreact'

export default function Contactanos () {
   
  const [isVerified,setVerified] = useState(false); 

  const [message, setMessage] = useState(); 
  
  const  [nombre,setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [asunto, setAsunto] = useState("");
  const [email ,setEmail] = useState("");
  const [texto,setTexto] = useState("");
  const [isOpen, setIsOpen] = useState(false); 
  const [sendEmail, {data, loading, error, called}] = useMutation(MUTATION_CONTACTANOS); 
  const toggle = () => {
    setIsOpen(!isOpen); 
  }

  useEffect(()=> {
    initGA();
  },[]);

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
   if(error) { 
    setMessage({message:"Error al enviar", isError:false}); 
     return; 
   }
  if(isVerified && !loading && data) {
    setMessage({message:"Se envio el correo exitosamente", isError:false}); 
    clear(); 
  }
},[data,loading, error,called])

const handlingOnsubmit = e => {
  e.preventDefault(); 
  toggle(); 
}
const handlingOnsubmit2 = async (e) => {
  e.preventDefault(); 
  if(!isVerified)  {
     setMessage({message:"Verifique no ser un robot", isError:true}); 
    return; }
    
    console.log(nombre)
    if(nombre.trim().length===0 || 
       apellido.trim().length===0 ||
       asunto.trim().length===0 || 
        email.trim().length===0 || 
        texto.trim().length===0 ) {
          setMessage({message:"Rellene todos los campos", isError:true}); 
          return;
        }
      
      const nombreCompleto = (nombre + " " + apellido);
      toggle(); 
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
   <> 
    <Header urlImage={ImgHeader} />
    <div className="page-contact">
   
          <MDBContainer >
            <MDBRow>
              <MDBCol sm="12" md="6">
                <div className="info"> 
              <MDBRow> 
              <h3> Ubicanos </h3>
              </MDBRow>
              
              <MDBRow> 
                <div className="elementCoordenadas" >
                  <span>
                    Avenida Principal de la Castellana <br/> 
                    Centro Letonia <br/> 
                    Piso 12, Oficina 126. <br/>
                    Caracas - Venezuela <br/>
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
               
                </div>
              </MDBCol>
              <MDBCol sm="12" md="6"> 
              <h3> Escribenos </h3>
            {message && (
              <MDBAlert color={message.isError? "danger" : "info"}>
               {message.message}
          </MDBAlert>
            )}
                <form onSubmit={handlingOnsubmit}>
               
                    <div className={nombre.length>0? "form-group not-empty":"form-group"} > 
                        <input
                         id="nombre" 
                         type="text"
                         required
                         autocomplete="off"
                         className="form-control"
                         value={nombre}
                         onChange={ e=> setNombre(e.target.value)}
                         /> 
                             <label for="nombre" class="animated-label">Nombre</label>
                         
                         </div>
              
                   
                    <div className={apellido.length>0? "form-group not-empty":"form-group"} > 
                        <input 
                        id="apellido" 
                        type="text"
                        required
                        autocomplete="off"
                        className="form-control"
                        value={apellido}
                        onChange= {e=> setApellido(e.target.value)}
                      /> 
                       <label for="apellido" class="animated-label">Apellido</label>
                       
                       </div>
           
                
                         
                    <div className={email.length>0? "form-group not-empty":"form-group"} > 
                        <input 
                        id="email"
                         type="email"
                         required
                         autocomplete="off"
                         value={email}
                         onChange={e=> setEmail(e.target.value)}
                         className="form-control"
                      
                        />
                         <label for="email" class="animated-label">Correo Electronico</label>
                     </div>
                     
                 
                 
                  
                    <div className={asunto.length>0? "form-group not-empty":"form-group"} > 
                        <input
                        id="asunto" 
                         type="text"
                         required
                         autocomplete="off"
                         value={asunto}
                         onChange={e=> setAsunto(e.target.value)}
                         className="form-control"
                        />
                          <label for="asunto" class="animated-label">Asunto</label>
                       </div>
                  
                  
                      <div className={texto.length>0? "form-group not-empty":"form-group"}> 
                        <textarea
                        id="textArea" 
                        type="textarea"
                        required
                        value={texto}
                        autocomplete="off"
                        onChange={e=> setTexto(e.target.value)}
                        className="form-control"
                        />
                         <label for="textArea" class="animated-label">Mensaje</label>
                      </div>
                      
                 
                  <MDBRow> 


                  </MDBRow>
                  <MDBRow style={{display:"flex",justifyContent:"flex-end"}}> 
                  <MDBBtn type="submit" className="btn-color-primary" size="lg" color="info">
                   Enviar
                 </MDBBtn>
                  </MDBRow>
                  </form>
                  
                  <form onSubmit={handlingOnsubmit2}> 
          <MDBModal isOpen={isOpen}  toggle={toggle} > 
          <MDBModalHeader toggle={toggle}> </MDBModalHeader>
          <MDBModalBody> 
          <Recaptcha
    sitekey="6LeFsrgUAAAAAJmjoOiqeDR2Kkv4jcJOWe4njhOt"
    render="explicit"
    onloadCallback={RecaptchaLoad}
    verifyCallback={verifyCallback}
  />
         
           </MDBModalBody>
          <MDBModalFooter>
          <MDBBtn className="btn-color-primary" size="lg" color="info" type="submit">
                   Enviar
                 </MDBBtn>
        </MDBModalFooter>
          </MDBModal>
          </form>
                
                 
               
              </MDBCol>
            </MDBRow>
          </MDBContainer>
       
    </div>
    </>
  );


}

