import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import {MDBCardTitle , MDBBtn , MDBCard, MDBCardBody, MDBCardText , MDBCardFooter , MDBCardImage, MDBCardHeader} from "mdbreact";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default function CardDictamenes({
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
          var date_ = new Date(date)
          var options = { year: "numeric", month: "long", day: "numeric"};
          setDate(date_.toLocaleDateString("es-VE", options));
      }
  }, [imageUrl, date]); 
      return (
       
           
           <MDBCard to={{
      pathname: '/noticia',
      search: `?id=${id}`}} 
        className="card-noticia" 
         tag={Link}>
           <div className="date">
              <span className="day"> 19 th</span> 
              <br/>
              <span className="month"> JULY </span> 
              </div>
           <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        


        <MDBCardBody>
          <MDBCardTitle><strong>This is the card title</strong></MDBCardTitle>
          <MDBCardText>
            
          
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!.</p>
          
          </MDBCardText>
          <MDBBtn className="btn-color-primary" href="#">MDBBtn</MDBBtn>
          </MDBCardBody>
       
       
        
         </MDBCard>
        
     ); 
   

  }
  