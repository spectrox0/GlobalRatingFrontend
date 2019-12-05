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
import {useQuery} from '@apollo/react-hooks'; 
import {QUERY_PAISES} from './views/helpers/graphql/querys'; 
export default function App () { 

    const [country, setCountry] = useState(null); 
  const changeCountry =(region)=> {
    setCountry(region);
  } 
  const {data , loading , error} = useQuery(QUERY_PAISES); 

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
     setCountry(localStorage.getItem("country")); 
     if(country) {
         setCountry(country)
         return; 
     }
    getGeoInfo(); 

  },[]); 

 
    return ( 
    <BrowserRouter>
          <CountryContext.Provider 
          value={{ country:country , changeCountry: changeCountry}} >
            {data && <IndexNavbar countrys={data.paises} curentCountry={{country }} />}
          
          <Routes />
          <DarkFooter/>
          </CountryContext.Provider>
       
        </BrowserRouter>) 
}