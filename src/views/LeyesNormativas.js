import React, { useState, useEffect } from "react";
import IndexHeader from "./../components/Headers/IndexHeader";
import styled from "styled-components";
import {
    Row
    , Col,
    Container
} from 'reactstrap'

export default function () {

    const LeyesNormativasContent = styled.div`

    div{
        text-align: justify;
        text-justify: inter-word;
    }

    h3{
      color:#4169E1;
      text-transform:uppercase; 
      align-items:center; 
      justify-content:center; 
      margin: 2rem auto;
    }

    h4{
        display: inline-block;
        color:#191970;
        font-size: 21px;
        margin-right: 1rem;
        margin-bottom: 5px;
        color: #0099cc;
        font-weight: 300;
        width: 100%;
    }

    p{
        display: inline-block;
        width: 100%;
        margin-bottom:1rem; 
        justify-content:center; 
    }

    li{
        display: inline-block;
        width: 100%;
        margin-left: 1 rem;
        
        margin-bottom:1rem; 
    }
   ul {
    list-style-type: circle;
   }
    .sangria{
        margin-left: 1 rem;
        text-indent: 1%;
    }


   
`
    return (

        <LeyesNormativasContent>
            <div className="wrapper">
                <div>
                    <Container >
                        <Row>
                            <h3> Leyes y Normativas </h3>
                        </Row>
                        <Row>
                            <h4>Fecha</h4>
                            <div>
                                <p>
                                    
                                </p>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </LeyesNormativasContent >
    );


}