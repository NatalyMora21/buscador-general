import React from 'react';
import { useSelector } from 'react-redux';


const ResultSearch = ()=>{

    const buscador = useSelector((state)=>
        state
        
    )

    console.log(buscador)
    return (
        <div>
            <input placeholder="Ingrese una palabra clave"></input>
            <button>Buscar</button>
        </div>
    )

}

export default ResultSearch;