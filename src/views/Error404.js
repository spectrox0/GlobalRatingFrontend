import React from "react"; 
import styled from "styled-components"
export default function Error404 () {
  
    return(<Container404> 
        <p> ERROR 404 PAGINA NO ENCONTRADA </p>
    </Container404>)


}
const Container404= styled.div`
 display:flex; 
 min-height:100vh; 
 flex-direction:column; 
 align-items:center; 
 justify-content:center; 
   p {
       color: black; 
       font-weigth: 600; 
       font-size: 1.5rem; 
   }
`