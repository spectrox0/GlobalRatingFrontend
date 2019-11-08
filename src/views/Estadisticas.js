import React from 'react'; 
import Header from '../components/Headers/IndexHeader';
import {MDBContainer, MDBRow } from 'mdbreact'
import {initGA} from './helpers/initGA.js';
import Select from 'react-select'; 
export default function Estadisticas() {
    const year = (new Date()).getFullYear();
    const yearInitial = 1980; 
    const years = Array.from(new Array(year-yearInitial+1),( val, index) => { return {value: year-index, label:year-index } });
    const [yearFilter , setYearFilter] =React.useState(year); 
    React.useEffect(()=> {
        initGA();
       
      },[]);
    return (
        <>
        <Header/>
        <div className="estadisticas-pag">
            <MDBContainer >
            <MDBRow className="title">
           <h2 > 
           Estadisticas
            </h2> </MDBRow>
        <MDBRow className="row-select"> 
      <Select className="select"  
    classNamePrefix='Select'
      defaultValue={{ label: year, value: year }} 
      options={years} 
      onChange= { e=> {
          setYearFilter(e.value)
      }}
      />
        </MDBRow>
     <MDBRow className="row-table"> 
        <div class="table">
    
    <div class="row header">
      <div class="cell">
        Name
      </div>
      <div class="cell">
        Age
      </div>
      <div class="cell">
        Occupation
      </div>
      <div class="cell">
        Location
      </div>
    </div>
    
    <div class="row">
      <div class="cell" data-title="Name">
        Luke Peters
      </div>
      <div class="cell" data-title="Age">
        25
      </div>
      <div class="cell" data-title="Occupation">
        Freelance Web Developer
      </div>
      <div class="cell" data-title="Location">
        Brookline, MA
      </div>
    </div>
    
    <div class="row">
      <div class="cell" data-title="Name">
        Joseph Smith
      </div>
      <div class="cell" data-title="Age">
        27
      </div>
      <div class="cell" data-title="Occupation">
        Project Manager
      </div>
      <div class="cell" data-title="Location">
        Somerville, MA
      </div>
    </div>
    
    <div class="row">
      <div class="cell" data-title="Name">
        Maxwell Johnson
      </div>
      <div class="cell" data-title="Age">
        26
      </div>
      <div class="cell" data-title="Occupation">
        UX Architect & Designer
      </div>
      <div class="cell" data-title="Location">
        Arlington, MA
      </div>
    </div>
    
    <div class="row">
      <div class="cell" data-title="Name">
        Harry Harrison
      </div>
      <div class="cell" data-title="Age">
        25
      </div>
      <div class="cell" data-title="Occupation">
        Front-End Developer
      </div>
      <div class="cell" data-title="Location">
        Boston, MA
      </div>
    </div>
    
  </div>
  </MDBRow>
  </MDBContainer>
        </div>
        
        </>
    )
}
