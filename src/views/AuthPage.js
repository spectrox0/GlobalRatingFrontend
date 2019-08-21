import React,{useRef,useState} from 'react'; 
import styled from 'styled-components'; 

export default function AuthPage(){
  const inputR = useRef(null); 
  const inputP = useRef(null); 
  const [isLogin,setIsLogin] = useState(false); 

   const submitHandler = event => {
    event.preventDefault()
     const email =  inputR.current.value; 
     const password =  inputP.current.value; 
     if(email.trim().length===0 || password.trim().length===0) {
         return; 
     }
     console.log(email, password);
     const requestBody = {
         query:`
         mutation { 
             createUser(userInput: {email:"${email}", password:"${password}"}) {
                 _id
                 email
             }
          }`
     }
     fetch('http://localhost:3000/graphql', {
         method:'POST',
         body: JSON.stringify(requestBody),
         headers: {
            'Content-Type': 'application/json'
         }
     }).then( res => {
         if (res.status!==200 && res.status!=201) {
             throw new Error('Failed'); 
         }
         return res.json();
     }).then(resData=> {
         console.log(resData); 
     }).catch( err => {
          console.log(err); 
     }); 
  }

  function SwitchHandler () {
      setIsLogin( prevState => {
          return !prevState; 
      }); 
  }
 return (
   <Contenedor>
       <form onSubmit={submitHandler}>
<div className="form-control">
    <label htmlFor="email"> Email </label>
    <input type="email" placeholder="Write email" id="email"  ref={inputR} />
</div>
<div className="form-control">
    <label htmlFor="password"> password </label>
    <input type="password" placeholder="write you password" id="password" ref={inputP} />
</div>
<div className="form-control">
    <button type="button" onClick={SwitchHandler} > Switch to {isLogin ? "Sign In" : "Login"} </button>
    <button type="submit"> Submit</button>
 </div>
 </form>
 </Contenedor>
  ); 
 
}

const Contenedor = styled.div`
  height:100vh; 
  display:flex; 
  flex-direction:column; 
  text-align:center; 
  justify-content:center; 
`