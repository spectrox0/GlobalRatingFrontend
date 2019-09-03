import React , {useState , useEffect} from "react"; 
import IndexHeader from "./../components/Headers/IndexHeader";
import styled from "styled-components"; 
import $ from 'jquery'; 
 



export default function Noticias( {location} ) { 
    const [Noticia,setNoticia] = useState([]); 
    const [isLoading, setLoading] = useState(true);
    const [date, setDate] = useState("Cargando... por favor espere"); 
    const id = new URLSearchParams(location.search).get('id');
    const [hasPostThumbnail,setHasPostThumbnail] = useState(true); 

    const getJson = (id) => {
        $.ajax({
            dataType: 'text',
            type: "GET",
            url : `https://www.finanzasdigital.com/traepost.php?token=aHcT639@/$muzk56&pagina=0&idNoticia=${id}`
        })
        .then(
          function(data) {
            let dataa =  (data).replace(/(?:\\[rn])+/g, "<br/>");
            // dataa =  (dataa).replace("</p>" , "");
            //dataa =  (dataa).replace('<p style="text-align: justify;">' , "");

         let datajson= JSON.parse(dataa); 
         setNoticia(datajson); 
         setHasPostThumbnail(datajson.hasPostThumbnail);
       
         setLoading(false); 
        }
        ).catch( err => { 
            console.log(err); 
          throw new Error("error"); 
         
        });
     }
        useEffect( () => {
       getJson(id); 
        },[id]);
        useEffect(() => {
            document.body.classList.add("index-page");
            document.body.classList.add("sidebar-collapse");
            document.documentElement.classList.remove("nav-open");
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            return function cleanup() {
              document.body.classList.remove("index-page");
              document.body.classList.remove("sidebar-collapse");
            };   });
    
             useEffect ( ()=> {
                 if(Noticia.date){
                var date = new Date(Noticia.date)
                var options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour:"numeric", minute:"numeric"};
                 setDate(date.toLocaleDateString("es-VE", options)); 
                      }
             },[Noticia.date])
   const NoticiaContent = styled.div`
   .main {
       display: flex; 
       flex-direction: column; 
       align-items:center; 
      
   }

   .title {
       height: auto; 
       width:100%; 
   }
    .blockOne {
     display: block-inline; 
     position: relative; 
     left:0; 
     top: 1rem; 
     height:2rem; 
     width: 100% ; 
     z-index:1; 
     background: #151F42;
     box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);

    }
    .blockTwo {
        display: flex; 
        
        text-align:center; 
        justify-content:center;
        align-items:center;
    position: relative; 
    clip-path: polygon(0 0, 95% 0, 99% 100%, 4% 100%);
    padding:1.3rem;  
       left:10%; 
        top: -2.5rem;  
        padding:1rem;
        width: 70% ; 
        z-index:2; 
        background: rgb(44, 168, 255);
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h2 {
        font-size: 1.5rem; 
        color: white ;
        margin:0; 
    }
    .imgContainer{
        display: flex; 
        padding:0; 
        margin:0; 
        margin-bottom:2rem; 
        justify-content:center; 
    }
   .blockTree { 
    background: #151F42;
   display:flex ;
   
   justify-content:center; 
   align-items:center; 
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px; 
   margin:0;  
   width: 80%; 
   padding:0; 
   ${isLoading && "background:none; box-shadow:none; "}
     img {
        margin:0; 
        width:100%;
        ${isLoading && "width:20rem; "}
        max-height: 60vh; 
        object-fit:fill; 
        border-radius: 10px; 
        ${ isLoading?""  : "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); transform: translate(1rem,1rem);" }
       
     }
    }
    .contentNoticia {
        display: flex; 
        flex-direction: column; 
        justify-content:center ;
        align-items:center; 
        padding:2rem; 
       img { vertical-align: middle; }
        span{
            width: 100%; 
            display: flex; 
            align-items: flex-start; 
            font-size:1rem; 
            color: black; 
        }
    }
    .contentHtml{
        font-size:1.2rem; 
        img {
            border-radius:10px; 
            float: left;
            margin:1rem;
        }
        br {
            display: block;
            margin: .4rem 0;
         }
    }
`
        return (
           
         <NoticiaContent>
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
              src={ isLoading? require("../assets/img/blockLoad.svg") : Noticia.imageUrl} 
              alt="..."
               ></img>
             </div>
         </div>}
          <div className ="contentNoticia">
              <span>  {" "+date} </span>
              <div className="contentHtml" dangerouslySetInnerHTML={{ __html: Noticia.content }} />
          </div>
        </div>

        </div> 
        </NoticiaContent>
       ) ; 


}

