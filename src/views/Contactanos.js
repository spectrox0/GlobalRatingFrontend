import React , {useState , useEffect} from "react"; 
import IndexHeader from "./../components/Headers/IndexHeader";
import styled from "styled-components"; 
import $ from 'jquery'; 
 



export default function Dictamen(  ) { 
   


       /* useEffect(() => {
            document.body.classList.add("index-page");
            document.body.classList.add("sidebar-collapse");
            document.documentElement.classList.remove("nav-open");
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            return function cleanup() {
              document.body.classList.remove("index-page");
              document.body.classList.remove("sidebar-collapse");
            };   });
    
    */
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
        display: flex; 
        padding:1rem;
        text-align:center; 
    position: relative; 
    border-radius:10px; 
       left:10%; 
        top: -2.5rem;  
        width: 70% ; 
        z-index:2; 
        background: #151F42;
box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h2 {
        font-size: 1.5rem; 
        color: white ;

    }
    .imgContainer{
        width:100%; 
        display: flex; 
        padding:0; 
        margin:0; 
        margin-bottom:2rem; 
        justify-content:center; 
    }
   .blockTree { 
   background: #2CA8FF;
   display:flex ;
   justify-content:center; 
   align-items:center; 
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px; 
   margin:0;  
   width: 80%; 
   padding:0; 
     img {
        margin:0; 
        width : ${ isLoading? "20rem" : "100%" }; 
        object-fit:cover; 
        border-radius: 10px; 
        ${ isLoading?""  : "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); transform: translate(1rem,1rem);" }
       
     }
    }
    .contentDictamen {
        display: flex; 
        flex-direction: column; 
        justify-content:center ;
        align-items:center; 
        margin:2rem; 
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
        return (
           
         <DictamenContent>
        <div className="wrapper">
       
        <div className="main" >
           <span> carga </span>
        </div>

        </div> 
        </DictamenContent>
       ) ; 


}

