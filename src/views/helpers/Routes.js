import React, {useState} from 'react'; 
import {Route, Switch, Redirect  } from 'react-router-dom';
//pages 
import Home from "views/Home.js";
import Auth from "views/AuthPage.js"; 
import Dictamen from "views/Dictamen.js"; 
import Noticia from "views/Noticia.js"
import AuthContext from "../../context/context-auth.js"; 
export default function () {
    
    const [token, setToken] = useState(null); 
    const [userId, setUserId] = useState(null); 
    const login = (token , userId, tokenExpiration ) => {
        setToken(token); 
        setUserId(userId); 
    }
    const logout = () => {
      setToken(null); 
      setUserId(null); 
    }
 return(
     <>
     <AuthContext.Provider 
     value = {{token:token, userId:userId, login: login, logout: logout}}>
 <Switch>
 <Route path="/index" render={ (props) =>  <Home {...props}/> }/>
 <Route path="/auth" render={ (props) =>  <Auth {...props}/> }/>
 <Route path="/dictamen" render={ (props) =>  <Dictamen {...props}/> }/>
 <Route path="/noticia" render={ (props) =>  <Noticia {...props}/> }/>
 <Redirect from="/" to="/index" />>
 </Switch> 
 </AuthContext.Provider></> ) ; }