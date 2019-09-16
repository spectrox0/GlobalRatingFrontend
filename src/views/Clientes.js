import React from 'react'; 
import styled from 'styled-components'; 
import {QUERY_EMISORES} from './helpers/graphql/querys'
import { useQuery} from '@apollo/react-hooks';

import { 
    Container , 
    Row , 
    Col , 
    Card, 
    Button, 
    CardImg, 
    CardTitle, 
    CardText, 
    CardColumns,
    CardSubtitle,
    CardGroup,
     CardBody 
} from 'reactstrap'; 
export default function Clientes () {
 
    const { data , loading , error , refetch} = useQuery(QUERY_EMISORES); 

    const Clientes = () => { 
       const innerJSX = data.emisores.map( emisor => 
        <Card style={{ width: "20rem" }} key={emisor._id}> 
        <CardImg top width="100%" src={emisor.logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>{emisor.nombre}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
        </Card>) 
        return innerJSX; 
    } 
    return (!data && loading)?
     <div> <span> cargando </span> </div>
      : 
    <ContainerClientes> 
    <div className="main"> 
    <Container> 
        <CardGroup> <Clientes/> <Clientes/>  <Clientes/>  <Clientes/>   </CardGroup>
    </Container>
     
    </div>
    </ContainerClientes>


}

const ContainerClientes = styled.div`

.main {
    display: flex; 
    flex-direction: column; 
    align-items:center; 
    justify-content:center; 
    min-height:100vh; 
   
} 

`