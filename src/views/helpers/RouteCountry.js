
import React from "react"; 
import {Route ,  Redirect } from 'react-router-dom';


const Routes = ({ match, params, component: Component , ...rest}) => {
    console.log(match)
    console.log(params);
  return(
    <Route {...rest} render={ props=> {
    
    }}/>

  )
}

export default Routes; 