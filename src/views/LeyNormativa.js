import React , {useState , useEffect} from "react"; 
import {initGA} from './helpers/initGA.js';
import {MDBRow, MDBContainer, MDBCol} from 'mdbreact'; 
import {QUERY_LEYNORMATIVA} from './helpers/graphql/querys'
import { useQuery} from '@apollo/react-hooks';
import Header from '../components/Headers/headersViews/Header';
import ImgHeader from '../assets/img/headers/Header Leyes.png'; 
export default function LeyNormativa( {location} ) { 
  
    const [date, setDate] = useState("Cargando... por favor espere"); 
    const id = new URLSearchParams(location.search).get('id');

    const  {data ,loading , error}= useQuery(QUERY_LEYNORMATIVA,{variables: {
      _id: id
    }  } );

   
     
       

        React.useEffect(()=> {
            initGA();
          },[]);
   
        React.useEffect( ()=> {
             if(data) {
              var date = new Date(data.leyesNormativasID.fecha)
              var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
               setDate(date.toLocaleDateString("es-VE", options)); 
             }
        },[data])
        return (
          <>
      <Header urlImage={ImgHeader} />
         <section className="page-ley-normativa">
        <MDBContainer> 
          {!data?    <div className="container-load-posts"> 
              <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Cargando...</span>
              </div>
              </div> : <> 
              <MDBRow className="title">
           <h2 > 
            {data.leyesNormativasID.titulo}
            </h2> </MDBRow> 
       
         
         <MDBRow> 
         <p>  {" "+date} </p>
         </MDBRow>
       <MDBRow> 
         <p>  {data.leyesNormativasID.descripcion} </p>
         </MDBRow>
         <MDBRow> 

              <div className="contentHtml" dangerouslySetInnerHTML={{ __html: data.leyesNormativasID.htmlScribd }} />
          </MDBRow>

   
        
        
              </> }
       
        </MDBContainer>
    
        </section>
        </>
       ) ; 


}

