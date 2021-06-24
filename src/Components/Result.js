import React , {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

const ResultSearch = ()=>{

    const buscador = useSelector((state)=>
        state.info
    )

    const validateLongitud= (infosearch)=> {

        if (infosearch.length>0){
            return true
        }
        else{
            return false
        }

    }

    console.log(buscador);

    return(

 
        <div>
            
            {validateLongitud (buscador[0]) && 
                buscador[0].map(inforesult=>(<div>{inforesult.description}</div>))
            }
            <p>----</p>
            {validateLongitud (buscador[1]) && 
                buscador[1].map(inforesult=>(<div>{inforesult.description}</div>))
            }
            <p>----</p>
            {validateLongitud (buscador[2]) && 
                buscador[2].map(inforesult=>(<div>{inforesult.description}</div>))
            }
            <p>----</p>

            {validateLongitud (buscador[3]) && 
                buscador[3].map(inforesult=>(<div>{inforesult.description}</div>))
            }
            
        </div>
        


        


    )
}

export default ResultSearch;