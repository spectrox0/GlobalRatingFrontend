import React , {useEffect} from "react"; 
import { useQuery } from '@apollo/react-hooks';
import {QUERY_EMISORES_ID} from './helpers/graphql/querys'; 
import {initGA} from './helpers/initGA.js';
import {
    MDBRow , 
    MDBCol, 
    MDBContainer, 
    MDBTooltip,
    MDBBtn,
    MDBIcon
}  from 'mdbreact'; 
import Header from './../components/Headers/IndexHeader'; 
import CardEmisiones from './../components/Cards/CardEmisiones.js'; 
import ShareEmail from '../components/Others/shareFriends.js'; 
export default function PerfilCliente({location})  {
    React.useEffect(()=> {
        initGA();
      },[]);
    const id = new URLSearchParams(location.search).get('id');
    const {data, loading, error} = useQuery(QUERY_EMISORES_ID, {variables: {
        _id:id
    }} ); 

   

   const Emisiones = ( {emisiones} )=> {
      const innerJSX = emisiones.map(emision => 
         <MDBRow className="MDBRowEmision" key= {emision.id}> 
            
             <CardEmisiones fecha={emision.fechaAprovacion} />
         </MDBRow>
        
     )
      
      return innerJSX;
    
   }
 return (
     <> 
     <Header/>
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
               <MDBTooltip placement="top"> 
    <MDBBtn className="webSocial">  
    <MDBIcon fab icon="instagram" size="lg" />
        </MDBBtn>
        <div> 
           Instagram
        </div>
        </MDBTooltip>
        <MDBTooltip placement="top"> 
        <MDBBtn className="webSocial"> 
       
        <MDBIcon fab icon="twitter" size="lg" />
       </MDBBtn>
       <div> Twitter </div>
       </MDBTooltip>
       <MDBTooltip placement="top"> 
        <MDBBtn className="webSocial"> 
        <MDBIcon fab icon="facebook-f" size="lg" /> </ MDBBtn>
        <div> Facebook</div>
        </MDBTooltip>
        <MDBTooltip placement="top"> 
        <MDBBtn className="webSocial"> 
        <i className="fa fa-home fa-lg "></i> </MDBBtn>
        <div> Website </div>
        </MDBTooltip>
        </MDBRow>
               </MDBCol>
           </MDBRow>
           <MDBRow> 
           <section className="description">
       <p> 
         Fusce nisi massa, auctor quis nibh et, pulvinar aliquet metus. Morbi euismod sed purus sit amet dictum. Vivamus sit amet vehicula mi, semper varius velit. Suspendisse eu dui ac ex bibendum sollicitudin. In ligula augue, convallis eget porttitor nec, interdum at felis. Phasellus est turpis, tincidunt sit amet porttitor et, accumsan sit amet nisl. Duis ultrices vehicula massa in fringilla. Mauris quis fermentum quam. Maecenas sed augue finibus, gravida risus ut, sodales eros. Maecenas ac velit dignissim, convallis enim eget, porta tellus. Proin sit amet elit eget nibh scelerisque semper ac at tellus.
         </p>  </section>
           </MDBRow>
         
</MDBContainer>


     <MDBContainer className="emisionesContainer">  
         <section className="emisiones"> 
         <h3> Emisiones </h3>
         <Emisiones emisiones={data.emisorID.emisiones} />
         
         </section>
         </MDBContainer>
        <ShareEmail socialNetworks/>
      
       
         
     </>
    ) :    <div className="container-load-posts"> 
    <div className="spinner-grow text-primary" role="status">
    <span className="sr-only">Cargando...</span>
    </div>
    </div>}

 </div> 
 </>)

}
