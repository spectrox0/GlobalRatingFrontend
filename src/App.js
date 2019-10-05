import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React,{useState , useEffect} from "react";

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
        data = data.country.toLowerCase();
        if(data.country ==="pa") { 
              localStorage.setItem("country",data); 
              setCountry(data);
           } else {
              setCountry("ve");
              localStorage.setItem("country","ve"); 
           }
         
    }).catch((error) => {
      setCountry("ve");
      localStorage.setItem("country","ve"); 
    });
  };

  useEffect(()=> {

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
          <DarkFooter/>
          </CountryContext.Provider>
          </ApolloProvider>
        </BrowserRouter>) 
}