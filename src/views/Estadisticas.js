import React from 'react'; 
import {MDBContainer, MDBRow } from 'mdbreact'
import {initGA} from './helpers/initGA.js';
import Select from 'react-select'; 
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn , MDBIcon } from 'mdbreact';
import ShareFriend from '../components/Others/shareFriends'; 
import Header from '../components/Headers/headersViews/Header';
import ImgHeader from '../assets/img/headers/Header Estadísticas.jpg'; 
import {useQuery} from '@apollo/react-hooks'; 
import {EMISIONES_FOR_YEAR ,TOTAL_FOR_YEAR, RANGE_YEAR } from './helpers/graphql/querys'
import {Link} from 'react-router-dom'; 
import { set } from 'react-ga';
export default function Estadisticas() {
    const rangeYear = useQuery(RANGE_YEAR); 
    const [yearFilter , setYearFilter] =React.useState();
    const [papelComercial , setPapelComercial] = React.useState(false);
    const [obligacionQuirografaria, setObligacionQuirografaria] = React.useState(false);
    const [titulosDeParticipacion , setTitulosDeParticipacion] = React.useState(false);
    const [pagareBursatiles , setPagaresBursatiles] = React.useState(false);
    const [accionesPreferidas , setAccionesPreferidas] = React.useState(false);

    var options = {timeZone: 'UTC' , month: "short", day: "numeric"};
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
     
      React.useEffect(()=> {
       if(rangeYear.data ) {
         setYearFilter(rangeYear.data.rangeYearEmision.firstYear)
       }
      },[rangeYear.data,rangeYear.loading])
  
     const RangeYears = (data) => {
       return Array.from(new Array(data.firstYear+1-data.lastYear),( val, index) => { return {value: data.firstYear-index, label:data.firstYear-index } });
     }

  const handlindFilter = (e) => {
    setYearFilter(e.value); 
    setPapelComercial(false); 
    setObligacionQuirografaria(false);
    setTitulosDeParticipacion(false); 
    setPagaresBursatiles(false); 
    setAccionesPreferidas(false); 
  }
    const Emisiones = ({emisiones}) => {
    return emisiones.map ( emision => {
        if(emision.tipoTitulo==="PAPELES_COMERCIALES" && !papelComercial) setPapelComercial(true)
        else if(emision.tipoTitulo==="OBLIGACIONES_QUIROGRAFARIAS" && !obligacionQuirografaria) setObligacionQuirografaria(true)
        else if(emision.tipoTitulo==="TITULOS_DE_PARTICIPACION" && !titulosDeParticipacion) setTitulosDeParticipacion(true)
        else if(emision.tipoTitulo==="PAGARE_BURSATILES" && !pagareBursatiles) setPagaresBursatiles(true)
        else if(emision.tipoTitulo==="ACCIONES_PREFERIDAS" && !accionesPreferidas) setAccionesPreferidas(true)
      return  <tr key={emision._id}>{emision.statusCliente?  <td>
          <Link to= {{
               pathname: '/perfilCliente',
               search: `?id=${emision.emisor._id}`
          }}> 
        {emision.emisor.nombre} </Link></td> : 
  <td>{emision.emisor.nombre}</td>
        }<td  className="row-text-center">
    {emision.tipoTitulo==="PAPELES_COMERCIALES" && "PC"}
    {emision.tipoTitulo==="OBLIGACIONES_QUIROGRAFARIAS" && "OQ"}
    {emision.tipoTitulo==="TITULOS_DE_PARTICIPACION"&& "TP"}
    {emision.tipoTitulo==="PAGARE_BURSATILES"&& "PB"}
    {emision.tipoTitulo==="ACCIONES_PREFERIDAS"&& "AP"}
    </td><td className="row-text-right">{emision.monto.toLocaleString()}</td> 
      <td className="row-text-center" >{new Date (emision.fechaAprovacion).toLocaleDateString("es-VE", options).replace(".","")}</td>
      <td className="row-text-center" >{emision.nroProvidencia}</td>
      {emision.statusCliente?<><td className="row-btn">{emision.idDictamen.length>0 && 
      <MDBBtn className="btn-estadistica"
      to={{
        pathname: '/dictamen',
        search: `?id=${emision.idDictamen}`}} 
         tag={Link}
       /> }</td>
       <td className="row-btn">{ emision.idProvidencia.length>0 && 
          <MDBBtn className="btn-estadistica" 
          to={{
            pathname: '/providencia',
            search: `?id=${emision.idProvidencia}`}} 
             tag={Link}/>
        }</td>
        <td className="row-btn">{ emision.idProspecto.length>0 && 
          <MDBBtn className="btn-estadistica" 
          to={{
            pathname: '/prospecto',
            search: `?id=${emision.idProspecto}`}} 
            tag={Link}/>
        }</td></>:<><td></td><td></td><td></td></>}</tr>
    }
     
      )
    }
    return (
        <>
       <Header urlImage={ImgHeader} />
        <div className="estadisticas-pag">
            <MDBContainer >
            <MDBRow className="title">
           <h2 > 
           Estadísticas
            </h2> </MDBRow>
        <MDBRow className="row-select">
          {rangeYear.data &&
              <Select className="select"  
              classNamePrefix='Select'
                defaultValue={{ label: rangeYear.data.rangeYearEmision.firstYear, value: rangeYear.data.rangeYearEmision.firstYear }} 
                options= { RangeYears(rangeYear.data.rangeYearEmision)} 
                onChange= {handlindFilter}
                />
          }
        </MDBRow>
     <MDBRow className="row-table"> 
     <MDBTable responsive>
      <MDBTableHead>
        <tr><th>Emisor</th>
          <th className="row-text-center" >Emisión</th>
          <th className="row-text-right">Monto (<MDBIcon icon="asterisk" size="sm" />) </th>
          <th className="row-text-center" >Fecha</th>
          <th className="row-text-center" ># Providencia</th>
          <th className="row-text-center" >Dictamen</th>
          <th className="row-text-center" >Providencia</th>
          <th className="row-text-center">Prospecto</th></tr>
      </MDBTableHead>
      <MDBTableBody>
        
        {( data && !loading && !error) && 
          <Emisiones emisiones={data.emisionesForYear} />  
        } {
          loading && 
          <tr><td colSpan="8">
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
       
      </span> 
      </div>
      </MDBRow>
      <MDBRow> 
      <div className="leyenda">
      <p> 
        {papelComercial && <> PC: Papeles Comerciales  <br/> </> }  
        {obligacionQuirografaria && <>  OQ: Obligaciones Quirografarias <br/> </>}
        {titulosDeParticipacion && <>  TP: Titulos de Participacion <br/> </> }
        {pagareBursatiles && <>  PB: Pagares Bursatiles <br/> </> }
        {accionesPreferidas && <>  AP: Acciones Preferidas <br/> </> }
       
      </p>
      </div>
      </MDBRow>
      <MDBRow>
      <div className="leyenda">
      <p> 
      (<MDBIcon icon="asterisk" size="sm" />) Miles de bolivares soberanos
      </p>
      </div>
      </MDBRow>
  
  </MDBContainer>
  {<ShareFriend socialNetworks 
        messageSocialNetworks={`Leer más información acerca de las Estadísticas de las Emisiones entrando al siguiente link:`}
         message={`Leer más información acerca de las Estadísticas de las Emisiones entrando al siguiente link:`}
         /> }
        </div>
        
        </>
    )
}
