import React, { useState, useEffect , useContext } from "react";
import { Link ,Redirect } from "react-router-dom";
import styled from 'styled-components';

import Toggler from './../Navbars/Toggler.js'
import Select from 'react-select'; 
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarToggler
  } from "mdbreact"

  


export default function NavbarGlobal({countrys ,country ,changeCountry}) {
  // Variables useState
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarLogo, setNavbarLogo] = useState(require("assets/img/globalrating_white.svg"));
  const [collapseOpen, setCollapseOpen] = useState(false);

  





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

  const countrysSelect = (countrys) => {
    return countrys.map(country => 
      {return {
        value: {
          value: country.abreviatura,
          nombre: country.nombre,
          img: countrys.bandera
        },
         label: <> <img src={country.bandera} alt=""/> {country.nombre} </> }})
  }
  return  ( 
    
      <MDBNavbar className={navbarColor} expand="lg">
     
      <MDBNavbarBrand
             id="navbar-brand"
            >
              <MDBNavLink 
               tag= {Link}
               to = {{pathname:`/index/${country.value}`}}
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
               pathname:`/nosotros/${country.value}` }
                }  tag={Link}
                 onClick={
                     () => setCollapseOpen(false)
                 }
                 >Nosotros</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/clientes/${country.value}` }
                } 
                 tag={Link}
                 onClick={
                  () => setCollapseOpen(false)
              }
                 >Emisores</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/calificacion/${country.value}` }
                } 
                tag={Link}
                onClick={
                  () => setCollapseOpen(false)
              }
                >Calificación</MDBNavLink>
            </MDBNavItem>
         
                 <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/estadisticas/${country.value}` }
                } 
                 tag={Link}
                 onClick={
                  () => setCollapseOpen(false)
              }
                  >Estadísticas</MDBNavLink>
            </MDBNavItem>
        
            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/leyesnormativas/${country.value}` }
                } 
                tag={Link}
                onClick={
                  () => setCollapseOpen(false)
              } 
              
                >Leyes y Normativas</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to={ {
               pathname:`/contactanos/${country.value}` }
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
              {(countrys && countrys.length>1 && country) &&
               <Select className="selectCountry"  
               classNamePrefix='Select'
                 defaultValue={{label: <> <img src={country.img} alt=""/> {country.nombre} </> , 
                 value:{nombre:country.nombre,
                   value:country.value,
                   img:country.img
                  } }}
                 options={countrysSelect(countrys)} 
                 onChange= { e=> {
                
                     changeCountry(e.value.value, e.value.img, e.value.nombre); 
                     setCollapseOpen(false)
                     window.location.href=`/index/${e.value.value}`;
                    
                     
                     
                 }}
                 />  }
           
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
     
      </MDBNavbar>

  );
}