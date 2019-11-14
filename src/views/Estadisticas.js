import React from 'react'; 
import {MDBContainer, MDBRow } from 'mdbreact'
import {initGA} from './helpers/initGA.js';
import Select from 'react-select'; 
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn , MDBIcon } from 'mdbreact';
import ShareFriend from '../components/Others/shareFriends'; 
import Header from '../components/Headers/headersViews/Header';
import ImgHeader from '../assets/img/headers/Header Estadísticas.jpg'; 
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
       <Header urlImage={ImgHeader} />
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
     <MDBTable responsive>
      <MDBTableHead>
        <tr>
          <th>Emisor</th>
          <th>Emision</th>
          <th>Monto(*)</th>
          <th>Fecha</th>
          <th># de Providencia</th>
          <th>Dictamen</th>
          <th>Prospecto</th>
          <th>Providencia</th>
      
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        
        </tr>
        <tr>
          <td>2</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        
        </tr>
        <tr>
          <td>3</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
         
        </tr>
      </MDBTableBody>
    </MDBTable>
  </MDBRow>
  <MDBRow>
    <div className="total"> 
    <span>
      <b> Total de año: </b>
       2121312
      </span> 
      </div>
      </MDBRow>
      <MDBRow> 
      <div className="leyenda">
      <p> 
        PC: Papeles Comerciales <br/>
        OQ: Obligaciones Quirografarias <br/>
        TP: Titulos de Participacion <br/>
        PB: Pagares Bursatiles <br/>
      </p>
      </div>
      
      </MDBRow>
  
  </MDBContainer>
   <ShareFriend />
        </div>
        
        </>
    )
}
