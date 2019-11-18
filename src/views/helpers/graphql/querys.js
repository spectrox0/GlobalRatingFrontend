import gql from 'graphql-tag'



export const QUERY_EMISORES = gql`
{
    emisores{ 
    _id 
    nombre
    logo
    pais {
      nombre
      bandera
    }
  }

   }
`
export const QUERY_EMISIONES = gql`
        {
        emisiones {
            _id
            fechaAprovacion
            monto
            programa
            tipoTitulo
            emisor {
                nombre
            }
            pais {
                nombre
            }
        }
    }
`
export const QUERY_LEYESNORMATIVAS = gql`
  {
    leyesNormativasByDate {
   _id
   titulo
   descripcion
   htmlScribd
   fecha
   pais {
     nombre
   }
 }
}
`
export const QUERY_LEYNORMATIVA = gql`
query leyesNormativasID($_id: String!) {
  leyesNormativasID(_id:$_id) {
    _id
   titulo
   descripcion
   htmlScribd
   fecha
   pais {
     nombre
   }
 }
  
}
`
export const QUERY_EMISORES_ID = gql`
query emisorID($_id: String!) {
  emisorID(_id:$_id) {
      _id 
      nombre
      logo
      pais {
        nombre
        _id
      }
      twitter 
      instagram
      urlWeb
     

  }
}
`

export const QUERY_NOTICIAS = gql`
query posts($first: Int!) {
 
    posts(first:$first , where: {categoryId:8}) {
      nodes {
        postId
        title
        content
        date
        featuredImage {
          sourceUrl
        }
      }
    }
  
  
  
}


`

export const QUERY_DICTAMENES= gql`
query posts($first: Int!) {
    posts(first:$first , where: {categoryId:7667}) {
      nodes {
        postId
        title
        featuredImage {
          sourceUrl
        }
      }
    }
  
  
}
`

export const QUERY_DICTAMEN = gql`
query postBy($postId: Int!) {
  postBy(postId: $postId) {
        postId
        title
        content
        date
        featuredImage {
          sourceUrl
        }
      }
    
}
`
export const QUERY_CLIENTES_BY_ALPHABETIC = gql`
query emisorByOrdenAlfabetico($first: Int! ,$after: Int!) {
  emisorByOrdenAlfabetico(first: $first ,after: $after) {
    
      _id 
      nombre
      logo
    }


}
`


export const QUERY_CLIENTES_BY_TIME = gql`
query emisorByOrdenCronologico($first: Int! ,$after: Int!) {
  emisorByOrdenCronologico(first: $first ,after: $after) {
    
    _id 
    nombre
    logo
  
    }


}
`
export const EMISIONES_FOR_YEAR = gql`
 query emisionesForYear($year:Int!) {
  emisionesForYear(year:$year) {
    _id
    fechaAprovacion
    monto
    programa
    tipoTitulo
    nroProvidencia
    statusCliente
    idDictamen
    idProvidencia
    idProspecto
    emisor {
        nombre
    }
  }
 }
` 
export const TOTAL_FOR_YEAR= gql`
 query totalForYear($year:Int!) {
  totalForYear(year:$year) 
  
 }
`
export const GET_NEXT_LEY = gql`
query leyesNormativasNext($_id:String!) {
  leyesNormativasNext(_id:$_id) 
  
 }

`

export const GET_PREV_LEY = gql`
query leyesNormativasPrev($_id:String!) {
  leyesNormativasPrev(_id:$_id)
  
 }

`
export const EMISIONES_BY_EMISION= gql`
 query emisionesByEmisor($_id:String!) {
  emisionesByEmisor(_id: $_id){
      idDictamen
      idProspecto
      idProvidencia
      fechaAprovacion

  }

 }

`
export const NUMBER_OF_EMISORES = gql`
 {
  numberOfEmisores
 }
`