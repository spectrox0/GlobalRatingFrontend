
import React from 'react'; 

export default function HeaderView({title, urlImage}) {

    return (<div className="headerView" style={{background:`linear-gradient(rgba(0,0,0,0.1),rgb(255,255,255)) ,url(${urlImage}) center no-repeat`,backgroundSize:"100% 100%"} }> 
    <h1> {title}</h1>
    </div>); 
}