
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

import {EmailShareButton} from 'react-share'


export default function ShareFriend() {
  
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
         </MDBContainer>



    </> 
}