import React, { useState } from 'react'; 
import styled from 'styled-components'; 
import {Link} from 'react-router-dom'; 
import {initGA} from './helpers/initGA.js';
import {QUERY_EMISORES, QUERY_CLIENTES_BY_ALPHABETIC , QUERY_CLIENTES_BY_TIME} from './helpers/graphql/querys'
import { useQuery} from '@apollo/react-hooks';
import  Header from './../components/Headers/IndexHeader'
import CardClientes from '../components/Cards/CardClientes.js';
import ShareFriend from '../components/Others/shareFriends.js';

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
    const [first , setFirst] = useState(16); 
    const [after, setAfter] = useState(0); 
    const [query, setQuery] =useState(QUERY_CLIENTES_BY_ALPHABETIC); 

    const { data , loading , error , refetch} = useQuery(query, {variables: {
      first: first, 
      after: after
    }}); 
   const [filter ,setFilter] = useState(false); 
     
   const handlingSwitch = () => {
      if(!filter) {
        setQuery(QUERY_CLIENTES_BY_TIME)
      } 
      else setQuery(QUERY_CLIENTES_BY_ALPHABETIC)
      setFirst(16); 
      setAfter(0); 
      refetch(); 
       setFilter(!filter); 
   }
    const Clientes = ({clientes}) => { 
       const innerJSX = clientes.map( emisor => 
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
      <>
      <Header />
        <div className="clientesContainer"> 
       
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
         
            <input type="checkbox"
             value={filter} 
            onClick={handlingSwitch} 
            name="toggle" 
            className="sw"
             id="toggle-1"  />
  <label htmlFor="toggle-1"> </label>
      </div>
      <label htmlFor='toggle-1'>
          Fecha
        </label>
      </div>
            </MDBRow>
        { (data && !loading)?  
        <>
        <MDBRow> 
        <Clientes clientes={
          query===QUERY_CLIENTES_BY_TIME? 
          data.emisorByOrdenCronologico: 
          data.emisorByOrdenAlfabetico

        }/>
        </MDBRow>
        <MDBRow className="row-pagination">
             <Pagination />
            </MDBRow> 
          
           </>  
              : 
               <div className="container-load-posts"> 
              <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Cargando...</span>
              </div>
              </div> 
          } 
       

       </MDBContainer> 
    <ShareFriend/>
  </div> 
  </>
    )
     


}

