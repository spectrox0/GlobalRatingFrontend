import React from 'react'; 
import styled from 'styled-components'; 
import {Link} from 'react-router-dom'; 
import {initGA} from './helpers/initGA.js';
import {QUERY_EMISORES} from './helpers/graphql/querys'
import { useQuery} from '@apollo/react-hooks';

import { 
    MDBContainer , 
    MDBCol
} from 'mdbreact'; 
export default function Clientes () {
    React.useEffect(()=> {
        initGA();
      },[]);
    const { data , loading , error , refetch} = useQuery(QUERY_EMISORES); 

    
    const Clientes = () => { 
       const innerJSX = data.emisores.map( emisor => 
        <MDBCol key={emisor._id} sm="3">  
        
        </MDBCol>) 
        return innerJSX; 
    } 
    return (
        <>
        {loading &&  <div> <span> cargando </span> </div> }
         {error &&  <div> <span> error </span> </div> }
          {data && <div className="clientesContainer"> 
  
  <MDBContainer> 
       <Clientes/>    
  </MDBContainer>
   

  </div> }
      
         </>
    )
     


}

const ContainerClientes = styled.div`

`