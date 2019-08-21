import React from 'react';
import "./CardDictamenes.css";
export default function CardDictamenes({
    id,
    imgUrl,
    date,
    title,
    content,
   
  }) { 
      return (
      
       <div className="CardDic">
        
        <img 
        src={imgUrl}
         alt="..."/> 
         
           <div className="TitleDictamen">
           <h4> {title} </h4>
            <div className="overlineTitle" 
            style={{ 
            backgroundColor:"#2CA8FF",
             width:"65%",
            minWidth:"5rem",
            minHeight:"0.2rem",
            margin:"0",
            boxShadow: " 0px 4px 4px rgba(50, 121, 151, 0.44)",
           transform: "matrix(1, 0, 0, -1, 0, 0)"
           
           }}> </div>
           <div className="ContentDictamen">
               <p>
                   {content}
                   
               </p>
           </div>
                </div>
        
       </div>); 
   

  }