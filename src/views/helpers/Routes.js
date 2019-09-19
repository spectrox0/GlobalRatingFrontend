import React, {useState, useEffect} from 'react'; 
import {Route, Switch, Redirect  } from 'react-router-dom';
//pages 
import Home from "views/Home.js";
import Dictamen from "views/Dictamen.js"; 
import Noticia from "views/Noticia.js";
import Nosotros from "views/Nosotros.js";
import Productos from "views/Productos.js";
import Calificacion from "views/Calificacion.js";
import LeyesNormativas from "views/LeyesNormativas.js";
import Mercado from "views/Mercado.js";
import Contactanos from "views/Contactanos.js";
import Clientes from "views/Clientes.js"; 
import Error404 from "views/Error404.js";
import axios from 'axios'

export default function () {
    const [country, setCountry] = useState(null); 
   
    const getGeoInfo = () => {
      axios.get('https://ipapi.co/json/').then((response) => {
          let data = response.data;
          if(data.country ==="VE"  ||
             data.country ==="PA") { 
                localStorage.setItem("country",data.country); 
                setCountry(data.country);
             } else {
                setCountry("VE");
                localStorage.setItem("country","VE"); 
             }
           
      }).catch((error) => {
          console.log(error);
      });
    };
    
    useEffect(()=> {
        const country = localStorage.getItem("country");
       if(country) {
           setCountry(country)
           return; 
       }
      getGeoInfo(); 

    },[]); 
 
 return(

 <Switch>
  
 <Route path="/index/:countryName" render={ (props) =>  <Home {...props}/> }/>
 <Route path="/dictamen/:countryName" render={ (props) =>  <Dictamen {...props}/> }/>
 <Route path="/noticia/:countryName" render={ (props) =>  <Noticia {...props}/> }/>
 <Route path="/nosotros/:countryName" render={ (props) =>  <Nosotros {...props}/> }/>
 <Route path="/productos/:countryName" render={ (props) =>  <Productos {...props}/> }/>
 <Route path="/calificacion/:countryName" render={ (props) =>  <Calificacion {...props}/> }/>
 <Route path="/leyesnormativas/:countryName" render={ (props) =>  <LeyesNormativas {...props}/> }/>
 <Route path="/mercad/:countryName" render={ (props) =>  <Mercado {...props}/> }/>
 <Route path="/contactanos/:countryName" render={ (props) =>  <Contactanos {...props}/> }/>
 <Route path="/clientes/:countryName" render = { (props)=> <Clientes {...props} /> } />
 <Route path="*" render = { props=> <Error404 {...props} />} />

   {country &&   
   <Redirect exact from="/" to={ {
    pathname:`/index/${country}` }
     }  /> }
     
 
 
 </Switch> ) ; } 

