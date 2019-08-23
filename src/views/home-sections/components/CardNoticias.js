import React, {useState,useEffect} from 'react';
import "./CardNoticias.css";
export default function CardDictamenes({
    id,
    imageUrl,
    date,
    title
   
  }) { 
    const [isLoading, setLoading] = useState(true); 
    useEffect(()=> {
      if(imageUrl){
          setLoading(false); 
      }
  }); 
      return (
      <>
       <div className="CardNoticias">
        
        <img 
        src={isLoading? require("../../../assets/img/blockLoad.svg"): imageUrl}
         alt="..."/> 
           
           <div className="TitleDictamen">
           <h4> {title} </h4>
           <span> {date} </span>
           <div className="LinkLeer">
           
             <a href="#"> Leer más</a>
           </div>
                </div>
        
       </div>
      </>); 
   

  }