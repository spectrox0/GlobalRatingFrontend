import React , {useState , useEffect} from "react"; 
import IndexHeader from "./../components/Headers/IndexHeader"; 
import styled from "styled-components"; 
import { Container
} from 'reactstrap'; 
import $ from 'jquery'; 
 



export default function Dictamen( {id} ) { 
    const [dictamen,setDictamen] = useState([]); 
    const getJson = (id) => {
        $.ajax({
            dataType: 'json',
            type: "GET",
            url : `https://www.finanzasdigital.com/traepost.php?token=aHcT639@/$muzk56&pagina=0&idNoticia=${id}`
        })
        .then(
          function(data) {
         setDictamen(data); 
         console.log(data); 
        }
        ).catch( err => { 
            console.log("error"); 
            console.log(err); 
          throw new Error("error"); 
         
        });
     }
        useEffect( () => {
       getJson(167811); 
      
        },[]);

        return (
         <DictamenContent>
        <div className="wrapper">
        <IndexHeader />
        <div className="main" >
            <div className="title">
         <div className="blockOne"> 
         </div>
          <div className ="blockTwo">
              <h2> {dictamen.title}</h2>
          </div>
          </div>
         <div className="imgContainer">
             <div className="blockTree"> 
              <img src={dictamen.imageUrl} alt="..." ></img>
             </div>
         </div>
          <div className ="contentDictamen">
              <span> {dictamen.date} </span>
              <div dangerouslySetInnerHTML={{ __html: dictamen.content }} />
          </div>
        </div>

        </div> 
        </DictamenContent>) ; 


}

const DictamenContent = styled.div`
  
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
     background: rgba(44, 168, 255, 0.7);
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .blockTwo {
        display: block-inline; 
        padding:1rem;
    position: relative; 
     left:10%; 
     top: -2.5rem;  
        height:auto; 
        width: 70% ; 
        z-index:2; 
        background: #151F42;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h2 {
        font-size: 1rem; 
        color: white ;

    }
    .imgContainer {
        width:100%; 
        display: flex; 
        padding:0; 
        margin:0; 
        margin-bottom:2rem; 
        justify-content:center; 
    }
   .blockTree { 
   background: #2CA8FF;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px; 
   margin:0;  
   width: 80%; 
   padding:0; 
     img {
        width:100%; 
        margin:0; 
        object-fit:cover; 
        border-radius: 10px; 
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transform: translate(1rem,1rem); 
     }
    }
    .contentDictamen {
        display: flex; 
        flex-direction: column; 
        justify-content:center ;
        align-items:center; 
        span{
            width: 100%; 
            display: flex; 
            align-items: flex-start; 
            font-size:1rem; 
            color: black; 
        }
        p {
            font-size:1.3rem; 
        }
    }
`