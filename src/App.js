import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React,{useState , useEffect} from "react";

// pages

import DarkFooter from "components/Footers/DarkFooter.js";
import IndexNavbar from "components/Navbars/Navbar.js";
import Routes from './views/helpers/Routes';

import axios from 'axios'
import {useQuery} from '@apollo/react-hooks'; 
import {QUERY_PAISES} from './views/helpers/graphql/querys'; 
export default function App () { 

    const [country, setCountry] = useState(null); 

  const changeCountry =(value,img,nombre)=> {
   
  localStorage.setItem("country",value); 
  setCountry({ value:value, img:img, nombre:nombre} ); 
 
  } 
  const {data , loading , error} = useQuery(QUERY_PAISES); 
  
  const getGeoInfo =  async  () => {
  try {
    let res =  await axios.get('https://ipapi.co/json/'); 
   res = res.data.country.toLowerCase();

    const newRes =  await data.paisesActivos.find(element => element.abreviatura===res);
    if(newRes){
     localStorage.setItem("country",newRes.abreviatura); 
     return setCountry({ value: newRes.abreviatura, nombre:newRes.nombre, img:newRes.bandera }); 
    
    } else {
  
     localStorage.setItem("country","ve"); 
     return setCountry({ value: "ve", nombre:"venezuela"} )
 
    } } catch(err) {
      localStorage.setItem("country","ve"); 
      return setCountry({ value: "ve", nombre:"venezuela"});
  }
  
  };
 React.useEffect( ()=> {
   if( (data && !loading ) || error ) {
     if(error) {
      localStorage.setItem("country","ve"); 
      return setCountry({ value: "ve", nombre:"venezuela"} )
     }
      else
     if(data.paisesActivos.length>1)
     getCountry(); 
     else { 
       localStorage.setItem("country","ve"); 
       return setCountry({ value: "ve", nombre:"venezuela"} )
       }
   }
 }, [data,loading,error])

  const getCountry= async () => {
    var res = await localStorage.getItem("country");
    if(res) {
      
      const newRes =  data.paisesActivos.find(element => element.abreviatura===res); 
      if(newRes) {
      localStorage.setItem("country",newRes.abreviatura); 
      return setCountry({ value: newRes.abreviatura, nombre:newRes.nombre, img:newRes.bandera }); 
      }else {
        localStorage.setItem("country","ve"); 
       return setCountry({ value: "ve", nombre:"venezuela"} )
      } }
      else  {
        getGeoInfo(); 
       
       }
       

  }
 
    return ( 
    <BrowserRouter>
         
            {( ((data && !loading ) || error) && country ) &&
            <IndexNavbar
            countrys={data?data.paisesActivos:null} 
            country={country}
            changeCountry={changeCountry}
             />}
          
          <Routes />
          <DarkFooter/>
      
       
        </BrowserRouter>) 
}