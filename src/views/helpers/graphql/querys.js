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

    leyesNormativas{
      _id
      
    }



   }
`