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