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
import Header from './../components/Headers/headersViews/header2'; 
import CardEmisiones from './../components/Cards/CardEmisiones.js'; 

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
 <div className="container-profile-client"> 

    {(data && !loading)?  ( 
        <>
          <Header
          title="Perfil de cliente" 
          urlImage={require("./../assets/img/carousel/Global-ratings4-2.jpg")} 
          profileImage = {data.emisorID.logo} 
          name = {data.emisorID.nombre}/>
           <div className="networksContainer"> 
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
</div>


     <MDBContainer> 
         <section className="description">
         <div className="line" /> <p> 
         Fusce nisi massa, auctor quis nibh et, pulvinar aliquet metus. Morbi euismod sed purus sit amet dictum. Vivamus sit amet vehicula mi, semper varius velit. Suspendisse eu dui ac ex bibendum sollicitudin. In ligula augue, convallis eget porttitor nec, interdum at felis. Phasellus est turpis, tincidunt sit amet porttitor et, accumsan sit amet nisl. Duis ultrices vehicula massa in fringilla. Mauris quis fermentum quam. Maecenas sed augue finibus, gravida risus ut, sodales eros. Maecenas ac velit dignissim, convallis enim eget, porta tellus. Proin sit amet elit eget nibh scelerisque semper ac at tellus.
         </p>  </section>
         <section className="emisiones"> 
         <h3> Emisiones </h3>
         <Emisiones emisiones={data.emisorID.emisiones} />
         </section>
         </MDBContainer>
     </>
    ) : <Header
    title="Perfil de cliente" 
    urlImage={require("./../assets/img/headers/header1.jpg")} /> }

{ /* 
        <MDBContainer> 
        <MDBRow className="MDBRowPresentation"> 
        <MDBCol className="MDBColImage" sm="auto"> <div className="profileImage"> 
        <img src={data.emisorID.logo} alt =".."/> 
        </div></MDBCol>
        <MDBCol className="MDBColName" sm="6"> 
        <MDBRow>  <h3>{data.emisorID.nombre} </h3> </MDBRow>
        <MDBRow>   <span> TWITTER: {data.emisorID.twitter} </span> </MDBRow>
        <MDBRow> <span> INSTAGRAM : {data.emisorID.instagram} </span> </MDBRow>
        <MDBRow> <span> URL WEB: {data.emisorID.urlWeb} </span> </MDBRow>
        </MDBCol>
      </MDBRow>
      
      <Emisiones emisiones={data.emisorID.emisiones} />
  
      </MDBContainer>
    */ }
 </div> )

}
