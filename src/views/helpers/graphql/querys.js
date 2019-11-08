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
 leyesNormativas {
   _id
   titulo
   descripcion
   htmlScribd
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
      emisiones {
        idDictamen
        idProspecto
        idProvidencia
        fechaAprovacion
      }

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
