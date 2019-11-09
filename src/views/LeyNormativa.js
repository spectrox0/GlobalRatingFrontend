import React , {useState , useEffect} from "react"; 
import IndexHeader from "./../components/Headers/IndexHeader";
import {initGA} from './helpers/initGA.js';
import {MDBRow, MDBContainer, MDBCol} from 'mdbreact'; 
import {QUERY_LEYNORMATIVA} from './helpers/graphql/querys'
import { useQuery} from '@apollo/react-hooks';

export default function LeyNormativa( {location} ) { 
    const [dictamen,setDictamen] = useState([]); 
    const [isLoading, setLoading] = useState(true);
    const [date, setDate] = useState("Cargando... por favor espere"); 
    const id = new URLSearchParams(location.search).get('id');

    const  {data ,loading , error}= useQuery(QUERY_LEYNORMATIVA,{variables: {
      _id: id
    }  } );

   
     
       

        React.useEffect(()=> {
            initGA();
          },[]);
   
   
        return (
          <>
          <IndexHeader />
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
         
     
         <span>  {" "+date} </span>
         <p>  {data.leyesNormativasID.descripcion} </p>
              <div className="contentHtml" dangerouslySetInnerHTML={{ __html: data.leyesNormativasID.htmlScribd }} />
      

   
        
         </MDBRow>
              </> }
       
        </MDBContainer>
    
        </section>
        </>
       ) ; 


}

