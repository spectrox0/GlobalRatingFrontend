import React, { useContext } from 'react'; 
import {Route, Switch, Redirect  } from 'react-router-dom';
//pages 
import Home from "views/Home.js";
import Dictamen from "views/Dictamen.js"; 
import Nosotros from "views/Nosotros.js";
import Calificacion from "views/Calificacion.js";
import LeyesNormativas from "views/LeyesNormativas.js";
import Estadisticas from "views/Estadisticas.js";
import Terminos from "views/Terminos.js";
import Contactanos from "views/Contactanos.js";
import Clientes from "views/Clientes.js"; 
import Loading from "views/Loading";
import LeyNormativa from "views/LeyNormativa.js";
import PerfilCliente from "views/PerfilCliente.js"
import Providencia from "views/Providencia.js";
import Prospecto from "views/Prospecto.js"
import {animateScroll as scroll} from  'react-scroll'; 
export default function Routes({country}) {
   


  const handlingRender = ( props, Component) => {
    scroll.scrollToTop({duration:500})
   if(props.match.params.countryName!=="pa" &&
      props.match.params.countryName!=="ve"
    ) return <Redirect to="ve" />
   return (<Component {...props}/>)
  }
 return(

 <Switch>
  
 <Route path="/index/:countryName" render={(props)=> handlingRender(props,Home) }/>
 <Route path="/dictamen" render={ (props) => {scroll.scrollToTop({duration:500}); return <Dictamen {...props} /> } } />
 <Route path="/providencia" render={ (props) => {scroll.scrollToTop({duration:500}); return <Providencia {...props} /> } } />
 <Route path="/prospecto" render={ (props) => {scroll.scrollToTop({duration:500}); return <Prospecto {...props} /> } } />
 <Route path="/perfilCliente" render = {(props)=>  {scroll.scrollToTop({duration:500}); return <PerfilCliente {...props} />}  }/>
 <Route path="/nosotros/:countryName" render={ (props) =>   handlingRender(props,Nosotros) } />
 <Route path="/calificacion/:countryName" render={ (props) =>   handlingRender(props,Calificacion) } />
 <Route path="/leyesnormativas/:countryName" render={ (props) =>   handlingRender(props,LeyesNormativas) }/>
 <Route path="/estadisticas/:countryName" render={ (props) =>   handlingRender(props,Estadisticas)  }/>
 <Route path="/terminos/:countryName" render={ (props) =>   handlingRender(props,Terminos) } />
 <Route path="/contactanos/:countryName" render={ (props) =>   handlingRender(props,Contactanos) } />
 <Route path="/clientes/:countryName" render = { (props)=>  handlingRender(props,Clientes)  } />
  <Route path="/:countryName/leynormativa"  render = { props => handlingRender(props,LeyNormativa)} />
   {country && (  <>
   <Redirect exact from="/" to={ {
    pathname:`/index/${country}` }
   } /> 
   } /> 
   </> )}
   <Route path="*" render = { props=> <Loading {...props} /> }/>
   
  
     
     
 
 
 </Switch> ) ; } 

