import gql from 'graphql-tag'


export const MUTATION_CONTACTANOS= gql`
        mutation 
            contactanos($message: Message!) {
              contactanos(message: $message) 
              
            }
          
        `
export const MUTATION_SEND_FRIEND = gql`
  mutation 
      sendFriend($to : String! , $url: String!) {
          sendFriend(to: $to , url : $url)
      }

`