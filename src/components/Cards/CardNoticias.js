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
    postId,
    featuredImage,
    date,
    title,
    content
   
  }) { 
    const [isLoading, setLoading] = useState(true); 
    const [isOpen, setIsOpen] = useState(false); 
    const [datee,setDate] = useState(""); 
    const [content_, setContent] = useState("");
    const [dateFull, setDateFull] = useState("");
    useEffect(()=> {
      if(featuredImage){
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
      var date__= new Date(date)
      var options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour:"numeric"};
       setDateFull(date__.toLocaleDateString("es-VE", options)); 
       setContent(content.replace(/(?:\r\n|\r|\n)/g, '<br>'));
          //var options = { year: "numeric", month: "long", day: "numeric"};
      }
  }, [featuredImage, date]); 

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
           <MDBCardImage className="img-fluid" src={featuredImage.sourceUrl} waves />
        


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
          <span> {dateFull}</span>
          
          </div>
          <div className="content"> 
          <div className="contentHtml" dangerouslySetInnerHTML={{ __html: content_ }} />
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
  