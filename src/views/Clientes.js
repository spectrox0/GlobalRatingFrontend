import React from 'react'; 
import styled from 'styled-components'; 
import {Link} from 'react-router-dom'; 
import {initGA} from './helpers/initGA.js';
import {QUERY_EMISORES} from './helpers/graphql/querys'
import { useQuery} from '@apollo/react-hooks';
import  Header from './../components/Headers/headersViews/header1.js'
import CardClientes from '../components/Cards/CardClientes.js';

import { 
    MDBContainer , 
    MDBCol, 
    MDBRow
} from 'mdbreact'; 
export default function Clientes () {
    React.useEffect(()=> {
        initGA();
      },[]);
    const { data , loading , error , refetch} = useQuery(QUERY_EMISORES); 

    
    const Clientes = () => { 
        console.log(data.emisores)
       const innerJSX = data.emisores.map( emisor => 
        <MDBCol key={emisor._id} sm="3">  
        <CardClientes id={emisor._id} nombre={emisor.nombre} image={emisor.logo}  />
        </MDBCol>) 
        return innerJSX; 
    } 
    return (
        <div className="clientesContainer"> 
        <Header
        title="Clientes" 
        urlImage={require("./../assets/img/headers/header1.jpg")} />
        {loading &&  <div> <span> cargando </span> </div> }
         {error &&  <div> <span> error </span> </div> }
          {data && 
  <MDBContainer> 
      <MDBRow> 
       <Clientes/>   </MDBRow> 
          </MDBContainer> }
   

  </div> 
    )
     


}

const ContainerClientes = styled.div`

`