
import React, { useState } from 'react' ; 
import {
 MDBContainer,
     MDBIcon, 
     MDBBtn, 
     MDBModal , 
     MDBModalHeader , 
    MDBModalBody ,
    MDBModalFooter 
     } from 'mdbreact' ;

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'


export default function ShareFriend({socialNetworks}) {
    const url = window.location.href; 
    const title = "Visita Global Ratings"
    return <> 
      <MDBContainer className="rowCompartir"> 
     
      <EmailShareButton 
       subject="Visita Global Ratings!! "
       body=" Alguien ha compartido el siguiente link contigo "
       url={window.location.href}
       openWindow
       > 
       <MDBBtn >
            <MDBIcon icon="envelope" size="3x" />
          </MDBBtn> 
     </EmailShareButton>
      {socialNetworks && 
      <>
      <FacebookShareButton 
      url={window.location.href}
      quote={title}
      >
    <MDBBtn >
            <MDBIcon icon="facebook-f" size="3x" />
          </MDBBtn> 
      </FacebookShareButton> 
      <TwitterShareButton
      url={window.location.href}> 
        <MDBBtn >
            <MDBIcon icon="twitter" size="3x" />
          </MDBBtn> 
      </TwitterShareButton>
      <WhatsappShareButton 
      url={window.location.href}
      title={title}>
 <MDBBtn >
            <MDBIcon icon="whatsapp" size="3x" />
          </MDBBtn> 
      </WhatsappShareButton>
   </>
      }
         </MDBContainer>



    </> 
}