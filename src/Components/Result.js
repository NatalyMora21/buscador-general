import React , {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

const ResultSearch = ()=>{

    const buscador = useSelector((state)=>
        state
    )

    const validateLongitud= (infosearch)=> {

        if (infosearch.length>0){
            return true
        }
        else{
            return false
        }

    }

    const showsearch = (infosearch)=>{

        if (infosearch.length>0){
            return (
                infosearch.map(inforesult=>(
                    < div className="list-group-item item-list">
                        <div class="d-flex w-100 ">
                            <h5 class="mb-1">{inforesult.conciliationName}</h5>
                            
                        </div>
                        <p class="mb-1 ">{inforesult.description.substr(1,100)}</p>
                    </div>
                ))
            )
            

        }

        else {
            return <p>No hay información relacionada</p>
        }

    }

    console.log(buscador);

    return(

        

        <div>

    {buscador.notFound && 

            <div id="selector">
                <a className="btn btn-primary option-info" data-bs-toggle="collapse" href="#module1" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    Conciliaciones 
                    <span class="badge bg-secondary rounded-pill cant">{buscador.info[0].length}</span>
                </a>
                <a className="btn btn-primary option-info" data-bs-toggle="collapse" href="#module2" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    Fuentes <span class="badge bg-secondary rounded-pill cant">{buscador.info[1].length}</span>
                </a>
                <a className="btn btn-primary option-info" data-bs-toggle="collapse" href="#module3" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    Tableros <span class="badge bg-secondary rounded-pill cant">{buscador.info[2].length}</span>
                </a>
                <a className="btn btn-primary option-info" data-bs-toggle="collapse" href="#module4" role="button" aria-expanded="false" aria-controls="collapseExample" >
                    Usuarios <span class="badge bg-secondary rounded-pill cant">{buscador.info[3].length}</span>
                </a>

                <div className="collapse" id="module1" data-bs-parent="#selector">
                    <div className="card card-body">
                        {showsearch(buscador.info[0])}
                    </div>
                </div>
                <div className="collapse" id="module2" data-bs-parent="#selector">
                    <div className="card card-body">
                        {showsearch(buscador.info[1])}
                    </div>
                </div>
                <div className="collapse" id="module3" data-bs-parent="#selector">
                    <div className="card card-body">

                        <div class="list-group">
                            {showsearch(buscador.info[2])}
                        </div>
                        
                    </div>
                </div>
                <div className="collapse" id="module4" data-bs-parent="#selector">
                    <div className="card card-body">
                        {showsearch(buscador.info[3])}
                    </div>
                </div>
                
            </div>
        
    }
    </div>
        
        


        


    )
}

export default ResultSearch;