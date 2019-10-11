
import React from 'react'; 

export default function HeaderView({title, urlImage}) {

    return (<div className="headerBlue"> 
    <img src={urlImage} alt=".." />
    <h1> {title}</h1>
    </div>); 
}