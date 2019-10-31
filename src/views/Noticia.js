import React , {useState , useEffect} from "react"; 
import IndexHeader from "./../components/Headers/IndexHeader";
import styled from "styled-components"; 
import axios from 'axios'; 
import {initGA} from './helpers/initGA.js';



export default function Noticias( {location} ) { 
    const [Noticia,setNoticia] = useState([]); 
    const [isLoading, setLoading] = useState(true);
    const [date, setDate] = useState("Cargando... por favor espere"); 
    const id = new URLSearchParams(location.search).get('id');
    const [hasPostThumbnail,setHasPostThumbnail] = useState(true); 
    const [content, setContent] = useState("");

       const getJson = async (id) => {
        const {data} = await axios.get(`https://www.finanzasdigital.com/traepost.php?token=aHcT639@/$muzk56&pagina=0&idNoticia=${id}`);
        let dataa ; 
        dataa =  await data.content.replace(/(?:\r\n|\r|\n)/g, '<br>');
         setNoticia(data); 
         setContent(dataa)
        setHasPostThumbnail(data.hasPostThumbnail);
       
         setLoading(false); 
        }
      
        useEffect( () => {
       getJson(id); 
        },[id]);
     
             useEffect ( ()=> {
                 if(Noticia.date){
                var date = new Date(Noticia.date)
                var options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour:"numeric", minute:"numeric"};
                 setDate(date.toLocaleDateString("es-VE", options)); 
                      }
             },[Noticia.date]) ;

             useEffect(()=> {
                initGA();
              },[]);

        return (
           
         <section className="noticia">
        <div className="wrapper">
        <IndexHeader />
        <div className="main" >
            <div className="title">
         <div className="blockOne"> 
         </div>
          <div className ="blockTwo">
              <h2> {Noticia.title}</h2>
          </div>
          </div>
          {hasPostThumbnail && 
         <div className={"imgContainer"}>
             <div className="blockTree"> 
              <img 
              src={Noticia.imageUrl} 
              alt="..."
               ></img>
             </div>
         </div>}
          <div className ="contentNoticia">
              <span>  {" "+date} </span>
              <div className="contentHtml" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>

        </div> 
        </section>
       ) ; 


}

