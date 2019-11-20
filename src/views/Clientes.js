import React, { useState } from 'react'; 
import {initGA} from './helpers/initGA.js';
import {QUERY_EMISORES, QUERY_CLIENTES_BY_ALPHABETIC , QUERY_CLIENTES_BY_TIME, NUMBER_OF_EMISORES} from './helpers/graphql/querys'
import { useQuery} from '@apollo/react-hooks';
import CardClientes from '../components/Cards/CardClientes.js';
import ShareFriend from '../components/Others/shareFriends.js';
import Pagination from '../components/Others/Pagination.js'

import Header from '../components/Headers/headersViews/Header';
import ImgHeader from '../assets/img/headers/Header Clientes.png'; 
import { 
    MDBContainer , 
    MDBCol, 
    MDBRow,
    MDBPagination,
     MDBPageItem, 
     MDBPageNav,
} from 'mdbreact'; 
export default function Clientes () {

  const clientesPerPage = 12; 
  const [currentPage, setCurrentPage]= useState(1);  

    React.useEffect(()=> {
        initGA();
      },[]);
     
    const Paginate = (number) => {
      console.log(number+"entrio")
      setCurrentPage(number); 
    }
    const NroEmisores = useQuery(NUMBER_OF_EMISORES); 
    const [query, setQuery] =useState(QUERY_CLIENTES_BY_ALPHABETIC); 

    const { data , loading , error , refetch} = useQuery(query, {variables: {
      first: currentPage*clientesPerPage, 
      after: currentPage*clientesPerPage-clientesPerPage
    }}); 
   const [filter ,setFilter] = useState(false); 
   
   
   const handlingSwitch = () => {
      if(!filter) {
        setQuery(QUERY_CLIENTES_BY_TIME)
      } 
      else setQuery(QUERY_CLIENTES_BY_ALPHABETIC)
      setCurrentPage(1); 
     
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

    return (
      <>
     <Header urlImage={ImgHeader} />
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
          {
            NroEmisores.data && 
            <Pagination
            paginate ={Paginate} 
            currentPage={currentPage} 
            elementsPerPage= {clientesPerPage}
            totalElements= {NroEmisores.data.numberOfEmisores}
             />
          }
     
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

