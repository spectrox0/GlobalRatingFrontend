import React from 'react'; 

export default function HeaderView({title, urlImage , profileImage , name}) {

    return (<div className="headerView2" 
    style=
    {{background:`url(${urlImage}) center no-repeat`,
    backgroundSize:"100% 100%"} }> 
    <h1> {title}</h1>
    <div className="containerProfile" >
        <img src={profileImage} alt={name}/>
        <span> {name}</span>
    </div>

    </div>); 
}