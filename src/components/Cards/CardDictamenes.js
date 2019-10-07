import React,{useState, useEffect} from 'react';
import {  Link } from 'react-router-dom';
import {MDBCardTitle , MDBCard, MDBCardBody, MDBCardText , MDBCardFooter} from "mdbreact";
import styled from 'styled-components'; 
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
           setLoading(false); 
          var date_ = new Date(date)
          var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
          setDate(date_.toLocaleDateString("es-VE", options));
       }
   },[imageUrl,date]); 
      return !isLoading? (
         <ContainerLoad> 
         <img 
      src={require("../../assets/img/blockLoad.svg")}
       alt="..."/> 
        <span> Loading...</span>
        </ContainerLoad>
      
       ) : (
      
     
       <MDBCard to={{
        pathname: '/dictamen',
        search: `?id=${id}`}} 
        className="card-dictamen" 
         style= {{backgroundImage:"url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)"}}
         tag={Link}>
        


        <MDBCardBody>
          <MDBCardText>
            
          
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!.</p>
          
          </MDBCardText>
          </MDBCardBody>
        <MDBCardFooter>
            <MDBCardTitle><strong>This is the card title</strong></MDBCardTitle>
        </MDBCardFooter>
         </MDBCard>
        
    ); 
   

  }

  const ContainerLoad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #151F42 0%, #000000 250%); 
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.603); 
  margin:1rem;
 padding: 1rem; 
 border-radius:6px; 
  width: 95%;
 margin-left:15%; 
  span {color:#FFFFFF}
  `