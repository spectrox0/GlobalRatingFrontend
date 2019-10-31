import React, { useState } from 'react'; 
import styled from 'styled-components'; 
import {Link} from 'react-router-dom'; 
import {initGA} from './helpers/initGA.js';
import {QUERY_EMISORES} from './helpers/graphql/querys'
import { useQuery} from '@apollo/react-hooks';
import  Header from './../components/Headers/IndexHeader'
import CardClientes from '../components/Cards/CardClientes.js';

import { 
    MDBContainer , 
    MDBCol, 
    MDBRow,
    MDBPagination,
     MDBPageItem, 
     MDBPageNav,
} from 'mdbreact'; 
export default function Clientes () {
    React.useEffect(()=> {
        initGA();
      },[]);
    const { data , loading , error , refetch} = useQuery(QUERY_EMISORES); 
   const [filter ,setFilter] = useState(false); 
    
    const Clientes = () => { 
       const innerJSX = data.emisores.map( emisor => 
        <MDBCol key={emisor._id} sm="3">  
        <CardClientes id={emisor._id} nombre={emisor.nombre} image={emisor.logo}  />
        </MDBCol>) 
        return innerJSX; 
    } 
    const Pagination = (number) => {
      return (
      <MDBCol>
     <MDBPagination className="mb-5">
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem active>
            <MDBPageNav>
              1
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>2</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>3</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
            <span aria-hidden="true">&raquo;</span>
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
    </MDBCol>) 

    }
    return (
        <div className="clientesContainer"> 
        <Header />
        <MDBContainer> 
        <MDBRow className="title">
           <h2 > 
            CLIENTES
            </h2>
            <div className="filter"> 
            <span>Ordenar por: </span>
            <label htmlFor='toggle-1'>
          Orden Albatetico
        </label>
            <div className='switch'>
         
            <input type="checkbox" value={filter} onClick={() => setFilter(!filter)} name="toggle" className="sw" id="toggle-1"  />
  <label htmlFor="toggle-1"> </label>
      </div>
      <label htmlFor='toggle-1'>
          Fecha
        </label>
      </div>
            </MDBRow>
        {loading &&  <div> <span> cargando </span> </div> }
          {data && 
     <>
      <MDBRow> 
       <Clientes/>   </MDBRow>
      <MDBRow className="row-pagination">
        <Pagination />
      </MDBRow>
      </>
      }

       </MDBContainer> 
 
  </div> 
    )
     


}

const ContainerClientes = styled.div`

`