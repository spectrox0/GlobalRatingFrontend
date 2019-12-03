import React , {useEffect} from "react"; 
import { useQuery } from '@apollo/react-hooks';
import {Link} from 'react-router-dom';
import {QUERY_EMISORES_ID, EMISIONES_BY_EMISOR, NUMBER_OF_EMISIONES_BY_EMISOR} from './helpers/graphql/querys'; 
import {initGA} from './helpers/initGA.js';
import {
    MDBRow , 
    MDBCol, 
    MDBContainer, 
    MDBTooltip,
    MDBBtn,
    MDBIcon
}  from 'mdbreact'; 
import Header from '../components/Headers/headersViews/Header';
import ImgHeader from '../assets/img/headers/Header Clientes.png'; 
import CardEmisiones from './../components/Cards/CardEmisiones.js'; 
import ShareEmail from '../components/Others/shareFriends.js'; 
import Pagination from '../components/Others/Pagination.js'

export default function PerfilCliente({location})  {
    React.useEffect(()=> {
        initGA();
      },[]);
    const id = new URLSearchParams(location.search).get('id');
    const {data, loading, error} = useQuery(QUERY_EMISORES_ID, {variables: {
        _id:id
    }} ); 
    const emisionesPerPage =3; 
     const [currentPage, setCurrentPage]= React.useState(1);  
    const Query_emisiones = useQuery(EMISIONES_BY_EMISOR, {
        variables: {
            _id:id,
            first:  emisionesPerPage , 
            after:currentPage*emisionesPerPage-emisionesPerPage
        }
    })
    const nroEmisiones = useQuery( NUMBER_OF_EMISIONES_BY_EMISOR, {
        variables: {
            _id:id
        }
    })

    const Paginate = (number) => {
        setCurrentPage(number); 
      }

   const Emisiones = ( {emisiones} )=> {
      const innerJSX = emisiones.map(emision => 
         <MDBRow className="MDBRowEmision" 
         key= {emision.id}> 
             <CardEmisiones {...emision} />
         </MDBRow>
        
     )
      
      return innerJSX;
    
   }
 return (
     <> 
    <Header urlImage={ImgHeader} />
 <div className="container-profile-client"> 
    {(data && !loading)?  ( 
        <>
         
        
           <MDBContainer className="ProfileContainer"> 
           <MDBRow> 
               <MDBCol className="col-img" sm="3"> 
                 <img className="profileLogo" alt={data.emisorID.nombre} src={data.emisorID.logo} />
               </MDBCol>
               <MDBCol className="col-name" sm="9"> 
                   <MDBRow> 
                       <span className="nameClient"> {data.emisorID.nombre }</span>
                   </MDBRow>
                   <MDBRow> 
                       {data.emisorID.instagram.length>0 && 
                       <MDBTooltip placement="top"> 
                       <MDBBtn target="_blank" href={`https://www.instagram.com/${data.emisorID.instagram.replace("@","")}/`}className="webSocial">  
                       <MDBIcon fab icon="instagram" size="lg" />
                           </MDBBtn>
                           <div> 
                              Instagram
                           </div>
                           </MDBTooltip>
                       }
               {data.emisorID.twitter.length>0 && 
               <MDBTooltip placement="top"> 
               <MDBBtn target="_blank" href={`https://twitter.com/${data.emisorID.instagram.replace("@","")}/`} className="webSocial"> 
              
               <MDBIcon fab icon="twitter" size="lg" />
              </MDBBtn>
              <div> Twitter </div>
              </MDBTooltip>
               }
         {data.emisorID.facebook.length>0 && 
       <MDBTooltip placement="top"> 
        <MDBBtn target="_blank"href={`https://facebook.com/${data.emisorID.facebook.replace("@","")}/`} className="webSocial"> 
        <MDBIcon fab icon="facebook-f" size="lg" /> </ MDBBtn>
        <div> Facebook</div>
         </MDBTooltip> }
         {data.emisorID.urlWeb.length>0 && 
        <MDBTooltip placement="top"> 
        <MDBBtn target="_blank" href={data.emisorID.urlWeb}  className="webSocial"> 
        <i className="fa fa-home fa-lg "></i> </MDBBtn>
        <div> Website </div>
         </MDBTooltip> }
        </MDBRow>
               </MDBCol>
           </MDBRow>
           <MDBRow> 
           <section className="description">
       <p> 
        {data.emisorID.descripcion}
         </p>  </section>
           </MDBRow>
         
</MDBContainer>


     <MDBContainer className="emisionesContainer">  
         <section className="emisiones"> 
         <h3> Emisiones </h3>
         {Query_emisiones.data && 
         <Emisiones emisiones={Query_emisiones.data.calificacionesByEmisor} /> 
         } 
          <MDBRow className="row-pagination">
    {nroEmisiones.data && 
      <Pagination
      paginate ={Paginate} 
      currentPage={currentPage} 
      elementsPerPage= {emisionesPerPage}
      totalElements= {nroEmisiones.data.nroCalificacionesByEmisor}
      
       />}
        </MDBRow>
        
        <MDBBtn className="btn-color-primary margin" size="lg" tag={Link}
                 to={{
                  pathname: '/clientes/${country}',}}
                 > 
                   Regresar a Clientes
                 </MDBBtn>
         </section>
         </MDBContainer>
        <ShareEmail/>
      
       
         
     </>
    ) :    <div className="container-load-posts"> 
    <div className="spinner-grow text-primary" role="status">
    <span className="sr-only">Cargando...</span>
    </div>
    </div>}

 </div> 
 </>)

}
