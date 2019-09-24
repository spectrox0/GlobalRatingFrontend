import React from 'react'; 
import styled from 'styled-components'; 
import {initGA} from './helpers/initGA.js';
export default function Estadisticas() {
    React.useEffect(()=> {
        initGA();
      },[]);
    return (
        <ContainerEstadisticas>
      
        </ContainerEstadisticas>
    )
}
const ContainerEstadisticas = styled.div`

min-height:100vh; 

`