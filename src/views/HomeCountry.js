import React , {useState,useEffect } from 'react'; 
import axios from 'axios'
export default function HomeCountry() {

const [countryName, setCountryName] = useState(null); 
const [countryCode, setCountryCode] = useState(null); 
const [countryCity, setCountryCity] = useState(null); 

const getGeoInfo = () => {
  axios.get('https://ipapi.co/json/').then((response) => {
      let data = response.data;
      setCountryName(data.country_name); 
      setCountryCode(data.country_calling_code); 
      setCountryCity(data.city); 
  }).catch((error) => {
      console.log(error);
  });
};

useEffect(()=> {
  getGeoInfo(); 
})
 return(
     <div> 
         <p> {countryName} </p> 
         <p> {countryCode}</p>
        <p> {countryCity}</p>
     </div> 
 )
}