import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import searchGeneral from '../Redux/actions/buscadorAction'



const Search = ()=>{
    const dispatch= useDispatch();
    const [word, setWord]=useState('')

    return (
        <div>
            <input placeholder="Ingrese una palabra clave"  onChange={(event)=>{
                setWord(event.target.value);
            }}
            ></input>
            <button onClick={()=>{
                dispatch(searchGeneral(word))

            }}>Enviar</button>
        </div>
    )

}

export default Search;