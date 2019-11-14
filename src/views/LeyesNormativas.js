import React from 'react';
import { QUERY_LEYESNORMATIVAS } from './helpers/graphql/querys'
import { useQuery } from '@apollo/react-hooks';
import {initGA} from './helpers/initGA.js';
import ShareFriend from '../components/Others/shareFriends.js'

import Header from '../components/Headers/headersViews/Header';
import ImgHeader from '../assets/img/headers/Header Leyes.png'; 
import {Link} from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn, 
    MDBIcon
} from 'mdbreact';

export default function LeyesNormativas() {
    React.useEffect(()=> {
        initGA();
      },[]);
    const { data, loading, error, refetch } = useQuery(QUERY_LEYESNORMATIVAS);

    const LeyesNormativas = () => {
        const innerJSX = data.leyesNormativas.map(({_id, titulo ,fecha }) => {
         
           var date = new Date(fecha)
            var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
             var dateF= date.toLocaleDateString("es-VE", options); 
            
           return(  <li key={_id}>
            <Link to={{
    pathname: '/ve/leynormativa',
    search: `?id=${_id}`}} > 
         <i className="fas fa-file-pdf fa-lg" ></i> {titulo} 
         </Link>
         <p style={{paddingLeft:"2.5rem"}}> {dateF} </p>
                     
           </li> )
        } )
        
        return innerJSX;
    }
    return <>
   <Header urlImage={ImgHeader} />
     <div className="page-leyes-normativas">
            
              
                    <MDBContainer>
                    <MDBRow className="title">
           <h2 > 
            Leyes y Normativas
 
            </h2> </MDBRow>
            
                    {(!data && loading) ? <div className="container-load-posts"> 
              <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Cargando...</span>
              </div>
              </div>   : <ul>  <LeyesNormativas /> </ul>
              }
                     
                      
                    </MDBContainer>
                 
           <ShareFriend/>
             
            </div>
    </>


}

