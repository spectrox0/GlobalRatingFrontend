import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./CardDictamenes.css";

export default function CardDictamenes({
    id,
    date,
    imageUrl,
    postUrl,
    title
   
  }) { 
    const [isLoading, setLoading] = useState(true); 
     useEffect(()=> {
       if(imageUrl){
           setLoading(false); 
       }
   },[imageUrl]); 
      return (
      
       <Link className="CardDic" to={{
        pathname: '/dictamen',
        search: `?id=${id}`
       }}>
        
        <img 
        src={ isLoading? require("../../../assets/img/blockLoad.svg"): imageUrl}
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
           transform: "matrix(1, 0, 0, -1, 0, 0)",
            marginBottom:"0.6rem"
           
           }}> </div>
           <div className="ContentDictamen">
              <span> {date} </span>
           </div>
                </div>
        
       </Link>); 
   

  }