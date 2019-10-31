import React , {useState , useEffect} from "react"; 
import IndexHeader from "./../components/Headers/IndexHeader";
import axios from 'axios'
import {initGA} from './helpers/initGA.js';
import {MDBRow, MDBContainer, MDBCol} from 'mdbreact'; 


export default function Dictamen( {location} ) { 
    const [dictamen,setDictamen] = useState([]); 
    const [isLoading, setLoading] = useState(true);
    const [date, setDate] = useState("Cargando... por favor espere"); 
    const [content, setContent] = useState();
    const [scribd, setScribd] = useState("")
    const id = new URLSearchParams(location.search).get('id');

    const getJson = async (id) => {
       const {data} =  await axios.get(`https://www.finanzasdigital.com/traepost.php?token=aHcT639@/$muzk56&idNoticia=${id}`);
        let dataa ; 
        dataa =  await data.content.replace(/(?:\r\n|\r|\n)/g, '<br>');
      
        var Scribd = dataa.substring(
          dataa.lastIndexOf("<iframe")
      );
      var Content = dataa.substring(
        dataa.indexOf("<p") ,
        dataa.lastIndexOf("<iframe")
    );
        setScribd(Scribd); 
        setContent(Content);
         setDictamen(data); 
         setLoading(false); 
        }
     
        useEffect( () => {
       getJson(id); 
        },[id]);

        React.useEffect(()=> {
            initGA();
          },[]);
   
             useEffect ( ()=> {
                 if(dictamen.date){
                var date = new Date(dictamen.date)
                var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
                 setDate(date.toLocaleDateString("es-VE", options)); 
                      }
                
             },[dictamen.date])
   
        return (
          <>
          <IndexHeader />
         <section className="dictamen">
           {/* 
        <div className="wrapper">
      
        <div className="main" >
            <div className="title">
         <div className="blockOne"> 
         </div>
          <div className ="blockTwo">
              <h2 className="h2-responsive"> {dictamen.title}</h2>
          </div>
          </div>
         <div className={"imgContainer"}>
             <div className="blockTree"> 
              <img 
              src={ dictamen.imageUrl} 
              alt="..."
               ></img>
             </div>
         </div>
          <div className ="contentDictamen">
              <span>  {" "+date} </span>
              <div className="contentHtml" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>

        </div> 
        */}
        <MDBContainer> 
          {isLoading?    <div className="container-load-posts"> 
              <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Cargando...</span>
              </div>
              </div> : <> 
              <MDBRow className="title">
           <h2 > 
            {dictamen.title}
            </h2> </MDBRow> 
            <MDBRow>
         <MDBCol sm="6" className="col-content" > 
         <div className="backgroundLogo" style={{background:`url(${dictamen.imageUrl}) center no-repeat`,backgroundSize:"cover"}} />
         <span>  {" "+date} </span>
              <div className="contentHtml" dangerouslySetInnerHTML={{ __html: content }} />
         </MDBCol>
         <MDBCol sm="6" className="col-scribd">

         <div className="contentHtml" dangerouslySetInnerHTML={{ __html: scribd }} />
         </MDBCol>
         </MDBRow>
              </> }
       
        </MDBContainer>
    
        </section>
        </>
       ) ; 


}

