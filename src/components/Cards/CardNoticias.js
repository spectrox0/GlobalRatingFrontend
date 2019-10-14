import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import {MDBCardTitle , MDBBtn , MDBCard, MDBCardBody, MDBCardText , MDBCardFooter , MDBCardImage, MDBCardHeader} from "mdbreact";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default function CardNoticias({
    id,
    imageUrl,
    date,
    title
   
  }) { 
    const [isLoading, setLoading] = useState(true); 
    const [datee,setDate] = useState(""); 
    useEffect(()=> {
      if(imageUrl){
          setLoading(false); 
          var date_ = new Date(date);
          const day = date_.getDate();
          var month = []
         month[0] = "Ene.";
month[1] = "Feb.";
month[2] = "Mar.";
month[3] = "Abr.";
month[4] = "May.";
month[5] = "Jun.";
month[6] = "Jul.";
month[7] = "Ago.";
month[8] = "Sep.";
month[9] = "Oct.";
month[10] = "Nov.";
month[11] = "Dec.";
 var n = month[date_.getMonth()];
      setDate({day:day , month: n}); 
    
          //var options = { year: "numeric", month: "long", day: "numeric"};
      }
  }, [imageUrl, date]); 
      return isLoading? null: (
       
           
           <MDBCard to={{
      pathname: '/noticia',
      search: `?id=${id}`}} 
        className="card-noticia" 
         tag={Link}>
           <div className="date">
              <span className="month">  {datee.month} </span> 
              <br/>
              <span className="day">  {datee.day} </span> 
              </div>
           <MDBCardImage className="img-fluid" src={imageUrl} waves />
        


        <MDBCardBody>
          <MDBCardTitle><strong>{title}</strong></MDBCardTitle>
          <MDBCardText>
            
          
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!.</p>
          
          </MDBCardText>
          </MDBCardBody>
       
       
        
         </MDBCard>
        
     ); 
   

  }
  