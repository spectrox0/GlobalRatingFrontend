import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import {MDBCardTitle ,
       MDBBtn , 
       MDBCard,
        MDBCardBody,
          MDBCardImage, 
          MDBCardHeader, 
        MDBModal , 
      MDBModalHeader , 
     MDBModalBody ,
     MDBModalFooter} from "mdbreact";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default function CardNoticias({
    id,
    imageUrl,
    date,
    title,
    content
   
  }) { 
    const [isLoading, setLoading] = useState(true); 
    const [isOpen, setIsOpen] = useState(false); 
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

  const toggle = () => {
    setIsOpen(!isOpen); 
  }
      return isLoading? null: (
        <> 
           <MDBCard 
        className="card-noticia"
        onClick={toggle}
         >
           <div className="date">
              <span className="month">  {datee.month} </span> 
              <br/>
              <span className="day">  {datee.day} </span> 
              </div>
           <MDBCardImage className="img-fluid" src={imageUrl} waves />
        


        <MDBCardBody>
          <MDBCardTitle><strong>{title}</strong></MDBCardTitle>
           { /* <MDBCardText>
            
          {content}
          
          </MDBCardText>*/} 
          </MDBCardBody>
       
         </MDBCard>
          
          <MDBModal isOpen={isOpen}  toggle={toggle} size="lg" > 
          <MDBModalHeader toggle={toggle}> </MDBModalHeader>
          <MDBModalBody> 
            <div className="title"> 
           <h3> {title} </h3>
          </div>
          <div className="date"> 

          
          </div>
          <div className="content"> 
          {content}
          </div>
           </MDBModalBody>
          <MDBModalFooter>
              <MDBBtn className="btn-round btn-primary" onClick={toggle}>Ver en Finanzas Digital</MDBBtn>
          <MDBBtn className="btn-round btn-primary" onClick={toggle}>Cerrar</MDBBtn>
        </MDBModalFooter>
          </MDBModal>
        </>
     ); 
   

  }
  