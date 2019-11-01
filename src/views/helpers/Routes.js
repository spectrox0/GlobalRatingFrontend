import React, { useContext } from 'react'; 
import {Route, Switch, Redirect  } from 'react-router-dom';
//pages 
import Home from "views/Home.js";
import Dictamen from "views/Dictamen.js"; 
import Nosotros from "views/Nosotros.js";
import Calificacion from "views/Calificacion.js";
import Otorgada from "views/Otorgada.js";
import LeyesNormativas from "views/LeyesNormativas.js";
import Estadisticas from "views/Estadisticas.js";
import Terminos from "views/Terminos.js";
import Mapa from "views/Mapa.js";
import Contactanos from "views/Contactanos.js";
import Clientes from "views/Clientes.js"; 
import Loading from "views/Loading";
import PerfilCliente from "views/PerfilCliente.js"
import CountryContext from "../../context/region"
import {animateScroll as scroll} from  'react-scroll'; 
export default function Routes() {
   
  const {country} = useContext(CountryContext); 

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
 <Route path="/perfilCliente" render = {(props)=>  {scroll.scrollToTop({duration:500}); return <PerfilCliente {...props} />}  }/>
 <Route path="/nosotros/:countryName" render={ (props) =>   handlingRender(props,Nosotros) } />
 <Route path="/calificacion/:countryName" render={ (props) =>   handlingRender(props,Calificacion) } />
 <Route path="/otorgada/:countryName" render={ (props) =>   handlingRender(props,Otorgada) } />
 <Route path="/leyesnormativas/:countryName" render={ (props) =>   handlingRender(props,LeyesNormativas) }/>
 <Route path="/estadisticas/:countryName" render={ (props) =>   handlingRender(props,Estadisticas)  }/>
 <Route path="/terminos/:countryName" render={ (props) =>   handlingRender(props,Terminos) } />
 <Route path="/mapa/:countryName" render={ (props) =>  <Mapa {...props}/> }/>
 <Route path="/contactanos/:countryName" render={ (props) =>   handlingRender(props,Contactanos) } />
 <Route path="/clientes/:countryName" render = { (props)=>  handlingRender(props,Clientes)  } />
 
   {country && (  <>
   <Redirect exact from="/" to={ {
    pathname:`/index/${country}` }
   } /> 
   } /> 
   </> )}
   <Route path="*" render = { props=> <Loading {...props} /> }/>
   
  
     
     
 
 
 </Switch> ) ; } 

