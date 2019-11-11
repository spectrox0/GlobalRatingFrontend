
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
            <MDBIcon icon="envelope" size="2x" />
          </MDBBtn> 
     </EmailShareButton>
      {socialNetworks && 
      <>
      <FacebookShareButton 
      url={window.location.href}
      quote={title}
      >
    <MDBBtn >
            <MDBIcon fab icon="facebook-f" size="2x" />
          </MDBBtn> 
      </FacebookShareButton> 
      <TwitterShareButton
       title={title}
      url={window.location.href}> 
        <MDBBtn >
            <MDBIcon fab icon="twitter" size="2x" />
          </MDBBtn> 
      </TwitterShareButton>
      <WhatsappShareButton 
      url={window.location.href}
      separator=":: "
      title={title}>
 <MDBBtn >
            <MDBIcon fab icon="whatsapp" size="2x" />
          </MDBBtn> 
      </WhatsappShareButton>
   </>
      }
         </MDBContainer>



    </> 
}