import React , {useState , useEffect} from "react"; 
import IndexHeader from "./../components/Headers/IndexHeader";
import styled from "styled-components"; 
 

export default function () { 
   


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
`
        return (
           
         <DictamenContent>
        <div className="wrapper">
       
        <div className="main" >
         <div className="ContainerContact" >
         <div className="ContainerCoordenadas">
             <h3>Nuestras Coordenadas </h3> 
             </div>
             <div className="elementCoordenadas" >
                 <span> 
                 Av. Ppal. de la Castellana, Centro Letonia, Piso 12, Oficina 126.
                 Caracas - Venezuela
                 </span>
             </div>
             <div className="elementCoordenadas" >
                 <span> 
                 Master +58 (212) 263.4393
                 </span>
             </div>
             <div className="elementCoordenadas" >
                 <span> 
                 info@globalratings.com
                 </span>
             </div>
         <form> 

         </form>
        </div>
        </div>
        </div> 
        </DictamenContent>
       ) ; 


}

const Row = styled.div`
 display:flex; 
 flex-wrap:wrap; 
 justify-content:center; 
 align-items:center;

`
const Col = styled.div`
 display:flex; 
 flex-direction:column; 
`