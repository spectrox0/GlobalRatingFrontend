import React from 'react'; 
import {MDBContainer, MDBRow } from 'mdbreact'
import {initGA} from './helpers/initGA.js';
import Select from 'react-select'; 
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn , MDBIcon } from 'mdbreact';
import ShareFriend from '../components/Others/shareFriends'; 
import Header from '../components/Headers/headersViews/Header';
import ImgHeader from '../assets/img/headers/Header Estadísticas.jpg'; 
import {useQuery} from '@apollo/react-hooks'; 
import {EMISIONES_FOR_YEAR ,TOTAL_FOR_YEAR } from './helpers/graphql/querys'
export default function Estadisticas() {
    const year = (new Date()).getFullYear();
    const yearInitial = 1980; 
    const years = Array.from(new Array(year-yearInitial+1),( val, index) => { return {value: year-index, label:year-index } });
    const [yearFilter , setYearFilter] =React.useState(year); 

    const {data , loading , error ,refetch} = useQuery(EMISIONES_FOR_YEAR, {
      variables: {
        year: yearFilter
      }
    }); 
    const totalEmision = useQuery(TOTAL_FOR_YEAR, {
      variables: {
        year:yearFilter
      }
    })
    React.useEffect(()=> {
        initGA();
       
      },[]);

    const Emisiones = ({emisiones}) => {
    return emisiones.map ( emision => 
      <tr key={emision._id}>
      <td>{emision.emisor.nombre}</td>
    <td  className="row-text-center" > {emision.tipoTitulo==="PAPELES_COMERCIALES"&& "PC"}
    {emision.tipoTitulo==="OBLIGACIONES_QUIROGRAFARIAS" && "OQ"}
    {emision.tipoTitulo==="TITULOS_DE_PARTICIPACION"&& "TP"}
    {emision.tipoTitulo==="PAGARE_BURSATILES"&& "PB"}
    {emision.tipoTitulo==="ACCIONES_PREFERIDAS"&& "AP"}
    
    </td>
      <td className="row-text-right">{emision.monto.toLocaleString()}</td> 
      <td>{emision.fechaAprovacion.split("T")[0]} </td>
      <td className="row-text-center" >{emision.nroProvidencia} </td>
      <td className="row-btn"> <MDBBtn className="btn-estadistica" /> </td>
      <td className="row-btn"><MDBBtn className="btn-estadistica" /> </td>
      <td className="row-btn"><MDBBtn className="btn-estadistica" /> </td>
    
    </tr>
      )
    }
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
          <th># Providencia</th>
          <th>Dictamen</th>
          <th>Prospecto</th>
          <th>Providencia</th>
      
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {( data && !loading && !error) && 
          <Emisiones emisiones={data.emisionesForYear} />  
        } {
          loading && 
          <tr> 
            <td colSpan="8">
          <div className="container-load-posts"> 
          <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Cargando...</span>
          </div>
          </div> 
          </td>
          </tr>
        }
      
      </MDBTableBody>
    </MDBTable>
  </MDBRow>
  <MDBRow>
    <div className="total"> 
    <span>
      <b> Total del año </b>
      {totalEmision.data && totalEmision.data.totalForYear.toLocaleString()}
       {" "} Bs
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
        AP: Acciones Preferidas <br/>
      </p>
      </div>
      </MDBRow>
      <MDBRow>
      <div className="leyenda">
      <p> 
       (*) Miles de bolivares soberanos
      </p>
      </div>
      </MDBRow>
  
  </MDBContainer>
   <ShareFriend />
        </div>
        
        </>
    )
}
