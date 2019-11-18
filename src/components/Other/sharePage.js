
import React from 'react';
import {MUTATION_SEND_FRIEND} from './helpers/graphql/mutation';
import { useMutation } from '@apollo/react-hooks';
import {MDBContainer, MDBModal , MDBModalBody , MDBModalHeader, MDBIcon} from 'mdbreact';

export default function ShareFriend ({url })   {
   
    const {data} = useMutation(MUTATION_SEND_FRIEND)
    return (
        <MDBContainer className="rowCompartir"> 
        <MDBBtn><MDBIcon icon="envelope" size="3x" /></MDBBtn>
    </MDBContainer>
    )
}

