import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React,{useState , useEffect} from "react";
// styles 
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
// pages

import DarkFooter from "components/Footers/DarkFooter.js";
import IndexNavbar from "components/Navbars/Navbar.js";
import Routes from './views/helpers/Routes';
import client from './views/helpers/graphqlEndpoint'
import CountryContext from './context/region.js'
import { ApolloProvider } from '@apollo/react-hooks'; 
import axios from 'axios'

export default function App () {
    const [country, setCountry] = useState(null); 

  const changeCountry =(region)=> {
    setCountry(region);
  } 

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

    return ( 
    <BrowserRouter>
        <ApolloProvider client={client}>
          <CountryContext.Provider 
          value={{ country:country , changeCountry: changeCountry}} > 
          <IndexNavbar />
          <Routes />
          <DarkFooter style={{ position: "absolute", bottom: "0" }} />
          </CountryContext.Provider>
          </ApolloProvider>
        </BrowserRouter>) 
}