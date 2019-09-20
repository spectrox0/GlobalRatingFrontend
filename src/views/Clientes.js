import React from 'react'; 
import styled from 'styled-components'; 
import {Link} from 'react-router-dom'; 
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
    CardDeck,
     CardBody 
} from 'reactstrap'; 
export default function Clientes () {
 
    const { data , loading , error , refetch} = useQuery(QUERY_EMISORES); 

    const Clientes = () => { 
       const innerJSX = data.emisores.map( emisor => 
        <Col key={emisor._id} sm="3">  
        <Card className="cardClientes text-center"> 
        <CardImg top className="cardImg" src={emisor.logo} alt="Card image cap" />
        <CardBody className="cardBody">
          <CardTitle className="cardTitle">{emisor.nombre}</CardTitle>
          <Button 
          color="info"
           size="lg"
            tag={Link}
             to={{
                pathname: '/perfilCliente',
                search: `?id=${emisor._id}`
             }}
            > Ver perfil
             </Button>
        </CardBody>
        </Card>
        </Col>) 
        return innerJSX; 
    } 
    return (!data && loading)?
     <div> <span> cargando </span> </div>
      : 
    <ContainerClientes> 

    <Container fluid="true"> 
        <CardDeck> <Clientes/>    </CardDeck>
    </Container>
     

    </ContainerClientes>


}

const ContainerClientes = styled.div`


    display: flex; 
    flex-direction: column; 
    align-items:center; 
    justify-content:center; 
    min-height:100vh; 
.cardClientes {
    border-radius:10px; 
    background: linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.4) ); 
    box-shadow: inset 2px 2px 3px rgba(0,0,0,0.3) ;
    opacity: 0.9; 
    transition: all .5s ease-in-out; 
    &:hover {
        opacity:1;
         transform: scale(1.02); 
    }
    .cardImg {
        padding: 1rem 1rem 0 1rem; 
        object-fit: fill; 
        width:20rem; 
    }
    .cardBody{ 
        color:white; 
    }
    .cardTitle {
        font-size:1.6rem; 
        background:linear-gradient(180deg, #151F42 0%, #000000 250%);
        border-radius:10px;
        box-shadows: 2px 3px 2px rgba(0,0,0,0.5); 
        font-weight:600; 
        text-transform:uppercase; 
    }
    .cardText {
        text-transform:capitalize; 
    }
}

`