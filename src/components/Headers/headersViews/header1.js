
import React from 'react'; 

export default function HeaderView({title, urlImage}) {

    return (<div className="headerView" style={{background:`url(${urlImage}) center no-repeat`,backgroundSize:"100% 100%"} }> 
    <h1> {title}</h1>
    </div>); 
}