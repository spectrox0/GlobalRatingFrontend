import React from 'react'; 

export default function HeaderView({title, urlImage , profileImage , name}) {

    return (<div className="headerView2" 
    style=
    {{background:`linear-gradient(rgba(0,0,0,0.6),rgb(255,255,255)) ,url(${urlImage}) center no-repeat`,
    backgroundSize:"100% 100%"} }> 
    <h1> {title}</h1>
    <div className="containerProfile" >
        <img src={profileImage} alt={name}/>
        <span> {name}</span>
    </div>
   
    </div>); 
}