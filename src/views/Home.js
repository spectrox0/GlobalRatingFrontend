import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexHeader from "components/Headers/IndexHeader.js";
// sections for this page
import Dictamenes from "views/home-sections/DictamenesDeCalificacion.js"
import Noticias from "views/home-sections/NoticiasFinanzas.js"

import {initGA} from './helpers/initGA.js';
import { useQuery} from '@apollo/react-hooks';
import {QUERY_NOTICIAS, QUERY_DICTAMENES} from './helpers/graphql/querys'
import axios from 'axios'; 
import client from './helpers/graphqlClientFinanzas';


export default function Index() {
  

  React.useEffect( ()=> {
    initGA();
  },[]);

const  noticias = useQuery(QUERY_NOTICIAS,{variables: {
    first:3 
} ,client  } );
const  dictamenes= useQuery(QUERY_DICTAMENES,{variables: {
  first:6
} ,client  } );

const getJson= async () => {
  const {data} = await axios.get("https://www.finanzasdigital.com/traeinfo.php?token=aHcT639@/$muzk56&pagina1=0&numNoticias1=3&categoriaIncluir1=-7667,-41,-1574,-7014&largo1=400&pagina2=0&numNoticias2=6&categoriaIncluir2=7667,-7014&largo2=0")

 }
  return (
    <div className="homeContainer">  
      
        <IndexHeader />
        <div className="main" >
      <Dictamenes dictamenes= {dictamenes.data} />
      <Noticias noticias= {noticias.data} />
        
        </div>
    
    </div>
  );
}


