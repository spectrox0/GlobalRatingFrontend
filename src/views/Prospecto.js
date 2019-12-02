import React , {useState , useEffect} from "react"; 
import {initGA} from './helpers/initGA.js';
import {MDBRow, MDBContainer, MDBCol, MDBBtn} from 'mdbreact'; 
import {QUERY_DICTAMEN, EMISION_BY_PROSPECTO} from './helpers/graphql/querys'
import client from './helpers/graphqlClientFinanzas';
import { useQuery} from '@apollo/react-hooks';
import ShareFriend from '../components/Others/shareFriends.js'
import Header from '../components/Headers/headersViews/Header';
import ImgHeader from '../assets/img/headers/Header Leyes.png'; 
import {Link} from 'react-router-dom'; 
export default function Dictamen( {location} ) { 
    const [dictamen,setDictamen] = useState(); 
    const [isLoading, setLoading] = useState(true);
    const [date, setDate] = useState("Cargando... por favor espere"); 
    const [content, setContent] = useState();
    const [scribd, setScribd] = useState()
    const id = new URLSearchParams(location.search).get('id');

    const  {data ,loading , error}= useQuery(QUERY_DICTAMEN,{variables: {
      postId: id
    } ,client  } );
   const emision = useQuery(EMISION_BY_PROSPECTO, {
     variables: {
       _id : id
     }
   })
    const getContent= async () => { 
      /*
       const {data} =  await axios.get(`https://www.finanzasdigital.com/traepost.php?token=aHcT639@/$muzk56&idNoticia=${id}`);
        */
       let dataa ; 
       console.log(data)
        dataa =  await data.postBy.content.replace(/(?:\r\n|\r|\n)/g, '<br>');
      
        var Scribd = dataa.substring(
          dataa.lastIndexOf("<iframe")
      );
      var Content = dataa.substring(
        dataa.indexOf("<p") ,
        dataa.lastIndexOf("<iframe")
    );
        setScribd(Scribd); 
        setContent(Content);
         setDictamen(data.postBy); 
         setLoading(false); 
        }
     
        useEffect( () => {
          if(data) {getContent();}
        },[data]);

        React.useEffect(()=> {
            initGA();
          },[]);
   
             useEffect ( ()=> {
                 if(dictamen){
                var date = new Date(dictamen.date)
                var options = {timeZone: 'UTC' , year: "numeric", month: "long", day: "numeric"};
                 setDate(date.toLocaleDateString("es-VE", options)); 
                      }
                
             },[dictamen])
   
        return (
          <>
          <Header urlImage={ImgHeader} />
         <section className="dictamen">
        <MDBContainer> 
          {isLoading?    <div className="container-load-posts"> 
              <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Cargando...</span>
              </div>
              </div> : <> 
            <MDBRow>
         <MDBCol sm="6" className="col-content" > 
         <MDBRow className="title">
           <h2 > 
            {dictamen.title}
            </h2> </MDBRow> 
         <div className="backgroundLogo" style={{background:`url(${dictamen.featuredImage.sourceUrl}) center no-repeat`,backgroundSize:"cover"}} />
         <span>  {" "+date} </span>
              <div className="contentHtml" dangerouslySetInnerHTML={{ __html: content }} />
         </MDBCol>
         <MDBCol sm="6" className="col-scribd">

         <div className="contentHtml" dangerouslySetInnerHTML={{ __html: scribd }} />
         </MDBCol>
         </MDBRow>
              </> }
            <MDBRow className="options"> 
            {emision.data &&
            <>
             <MDBBtn className="btn-color-primary" size="lg" tag={Link}
             to= {{
              pathname: '/perfilCliente',
              search: `?id=${emision.data.emisionByProspecto.emisor._id}`
             }}
             > 
              Cliente
             </MDBBtn> 
             <div> 
               {emision.data.emisionByProspecto.idProvidencia.length>0 && 
                 <MDBBtn className="btn-color-primary" size="lg" tag={Link}
                 to={{
                    pathname: '/providencia',
                    search: `?id=${emision.data.emisionByProspecto.idProvidencia}` }}> 
                   Providencia
                 </MDBBtn>
               }
               {emision.data.emisionByProspecto.idDictamen.length>0 && 
                 <MDBBtn className="btn-color-primary" size="lg" tag={Link}
                 to={{
                    pathname: '/dictamen',
                    search: `?id=${emision.data.emisionByProspecto.idDictamen}` }}
                 > 
                   Dictamen
                 </MDBBtn>
               }
              
             </div>
             </>
             }

       
            </MDBRow>
        </MDBContainer>
        <ShareFriend socialNetworks/>
        </section>
        </>
       ) ; 


}
