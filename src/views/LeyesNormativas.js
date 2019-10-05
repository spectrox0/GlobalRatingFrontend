import React from 'react';
import styled from 'styled-components';
import { QUERY_LEYESNORMATIVAS } from './helpers/graphql/querys'
import { useQuery } from '@apollo/react-hooks';
import {initGA} from './helpers/initGA.js';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdbreact';

export default function LeyesNormativas() {
    React.useEffect(()=> {
        initGA();
      },[]);
    const { data, loading, error, refetch } = useQuery(QUERY_LEYESNORMATIVAS);

    const LeyesNormativas = () => {
        const innerJSX = data.leyesNormativas.map(leyesNormativas =>
            <MDBRow key={leyesNormativas._id}>
             <h4>{leyesNormativas.titulo}</h4>
                            <div>
                                <p>{leyesNormativas.descripcion}</p>
                            </div>
            </MDBRow>)
        return innerJSX;
    }
    return (!data && loading) ?
        <div> <span> cargando </span> </div>
        :
        <LeyesNormativasContent>
            <div className="wrapper">
                <div>
                    <MDBContainer>
                        <MDBRow>
                    <h3> Leyes Normativas </h3>
                        <LeyesNormativas />
                        </MDBRow>
                       
                    </MDBContainer>
                </div>
            </div>
        </LeyesNormativasContent>


}

const LeyesNormativasContent = styled.div`
min-height:100vh; 
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
    font-size: 1rem;
}

li{
    
    width: 100%;
    margin-bottom:1rem; 
    font-size: 1rem;
}


.sangria{
    margin-left: 1 rem;
    text-indent: 1%;
}



`
