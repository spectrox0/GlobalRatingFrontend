import React,{useState, useEffect} from 'react';
import {  Link } from 'react-router-dom';
import {MDBCardTitle , MDBCard, MDBCardBody, MDBCardText , MDBCardFooter} from "mdbreact";
export default function CardDictamenes({
    id,
    date,
    imageUrl,
    postUrl,
    title
   
  }) { 
    const [isLoading, setLoading] = useState(true); 
    const [datee ,setDate] = useState(""); 
     useEffect(()=> {
       if(imageUrl){
          var date_ = new Date(date)
          var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
          setDate(date_.toLocaleDateString("es-VE", options));
          setLoading(false); 
         
       }  
     
   },[imageUrl,date]); 

      return isLoading? (
       <div>
         <img 
      src={require("../../assets/img/blockLoad.svg")}
       alt="..."/> 
        <span> Loading...</span>
        </div>
      
       ) : (
      
     
       <MDBCard to={{
        pathname: '/dictamen',
        search: `?id=${id}`}} 
        className="card-dictamen" 
         style= 
         {{background:`url(${imageUrl}) no-repeat center`,
         backgroundSize:"contain",
        }}
         tag={Link}>
        


        <MDBCardBody>
          </MDBCardBody>
        <MDBCardFooter>
            <MDBCardTitle><strong>{title}</strong></MDBCardTitle>
        </MDBCardFooter>
         </MDBCard>
        
    ); 
   

  }
