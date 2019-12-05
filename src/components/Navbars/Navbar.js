import React, { useState, useEffect , useContext } from "react";
import { Link ,Redirect } from "react-router-dom";
import styled from 'styled-components';
import country from './../../context/region.js'
import Toggler from './../Navbars/Toggler.js'
import Select from 'react-select'; 
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarToggler
  } from "mdbreact"

  


export default function NavbarGlobal({countryss, countryActuals }) {
  // Variables useState
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarLogo, setNavbarLogo] = useState(require("assets/img/globalrating_white.svg"));
  const [collapseOpen, setCollapseOpen] = useState(false);
  const  context = useContext(country); 
  const countrys = [{ 
    value:"ve", 
  label: <>  <img src={require("assets/img/flags/VE.png")} alt="Venezuela" style={{height:"1rem"}}  /> {"  Venezuela"} </>
  }, 
  {
    value:"pa", 
    label: <> <img src={require("assets/img/flags/PA.png")} alt="Panama" style={{height:"1rem"}}  /> {" "}  Panama </>
  }
  ]
  const [countryActual,setCountryActual] = useState(); 
 




  // Use effect se carga al iniciar el componente , efectuado cada vez que se renderice el componente 
  

  useEffect(() => {
    const updateNavbarColor = () => {
      if(!collapseOpen) { 
      if (
        document.documentElement.scrollTop > 100 ||
        document.body.scrollTop > 100
      ) {
        setNavbarColor("");
         setNavbarLogo(require("assets/img/pic_logoGR.svg"));
      } else if (
        document.documentElement.scrollTop < 101||
        document.body.scrollTop < 101
      ) {
        setNavbarColor("navbar-transparent");
        setNavbarLogo(require("assets/img/globalrating_white.svg"));
       
      }
    };}
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, [collapseOpen]);
  return  ( 
    
      <MDBNavbar className={navbarColor} expand="lg">
     
      <MDBNavbarBrand
             id="navbar-brand"
            >
              <MDBNavLink 
               tag= {Link}
               to = {{pathname:`/index/${context.country}`}}
               > <img className="GlobalRatingLogo"
                src={navbarLogo}
                alt=""
              />  </MDBNavLink>
             
        </MDBNavbarBrand>
     
         <Toggler onClick = { () => {
           if(!collapseOpen) { 
            setNavbarColor("");
            setNavbarLogo(require("assets/img/pic_logoGR.svg"));
           } 
        
           setCollapseOpen(!collapseOpen); 
         }} ></Toggler>
        

        <MDBCollapse id="navbarCollapse3" isOpen={collapseOpen} navbar>
          
          <MDBNavbarNav left>
          <MDBNavItem active> 
              <MDBNavLink to= {{
               pathname:`/nosotros/${context.country}` }
                }  tag={Link}
                 onClick={
                     () => setCollapseOpen(false)
                 }
                 >Nosotros</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/clientes/${context.country}` }
                } 
                 tag={Link}
                 onClick={
                  () => setCollapseOpen(false)
              }
                 >Clientes</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/calificacion/${context.country}` }
                } 
                tag={Link}
                onClick={
                  () => setCollapseOpen(false)
              }
                >Calificación</MDBNavLink>
            </MDBNavItem>
         
                 <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/estadisticas/${context.country}` }
                } 
                 tag={Link}
                 onClick={
                  () => setCollapseOpen(false)
              }
                  >Estadísticas</MDBNavLink>
            </MDBNavItem>
        
            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/leyesnormativas/${context.country}` }
                } 
                tag={Link}
                onClick={
                  () => setCollapseOpen(false)
              }
                >Leyes y Normativas</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/contactanos/${context.country}` }
                } 
                 tag={Link} 
                 onClick={
                  () => setCollapseOpen(false)
              }
                 >contáctanos</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right> 
         
              
            <MDBNavItem>
              {context.country &&
               <Select className="selectCountry"  
               classNamePrefix='Select'
                 defaultValue={context.country }
                 options={countrys} 
                 onChange= { e=> {
                     setCountryActual({label:e.label, value:e.value})
                     context.changeCountry(e.value); 
                     localStorage.setItem("country", e.value); 
                     setCollapseOpen(false)
                     window.location.href=`/index/${e.value}`;
                     
                     
                 }}
                 />  }
           
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
     
      </MDBNavbar>

  );
}
