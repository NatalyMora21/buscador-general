import React , {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

const ResultSearch = ()=>{

    const buscador = useSelector((state)=>
        state
    )

    //Función que muestra la información filtrada según el modulo
    const showsearch = (infosearch, modulo)=>{

        if (infosearch.length>0){
            return (
                infosearch.map(inforesult=>(
                    <div className="list-group-item item-list">
                        
                        <div class="d-flex w-100 ">
                            {modulo=='conciliaciones'?<h5 class="mb-1"> {inforesult.conciliationName}</h5>: <h5 class="mb-1">{inforesult.name} {inforesult.dashboardName}</h5> }
                        </div>
                        <p class="mb-1 ">{inforesult.description.substr(1,100)}</p>
                        <small>{inforesult.timestamp.createdAt}</small>
                    </div>
                ))
            )
        }
        else {
            return < div className="list-group-item item-list">
                        <p>No hay información relacionada</p>
                    </div>
        }
    }

    //Función que muestra la información filtrada según el modulo, se crea para el modulo usuario y 
    //manifest que no tienen el campo descripción
    const showsearchdif = (infosearch , modulo)=>{

        if (infosearch.length>0){
            return (
                infosearch.map(inforesult=>(
                    < div className="list-group-item item-list">
                        <div class="d-flex w-100 ">
                            {modulo=='user' ? <div><h5 class="mb-1">{inforesult.name.firstName} {inforesult.name.lastName} </h5> <small>{inforesult.createdAt}</small> </div>
                            :<h5 class="mb-1">{inforesult.name} </h5> }
                        </div>
                    </div>
                ))
            )
        }
        else {
            return < div className="list-group-item item-list">
                        <p>No hay información relacionada</p>
                    </div>
        }
    }

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
                        <h4>Conciliaciones</h4>
                        {showsearch(buscador.info[0], "conciliaciones")}
                    </div>
                </div>
                <div className="collapse" id="module2" data-bs-parent="#selector">
                    <div className="card card-body">
                    <h4>Fuentes</h4>
                        {showsearch(buscador.info[1], "fuentes")}
                    </div>
                </div>
                <div className="collapse" id="module3" data-bs-parent="#selector">
                    <div className="card card-body">
                        <h4>Tableros</h4>
                        {showsearch(buscador.info[2], "tablero")}
                    </div>
                </div>
       
                <div className="collapse" id="module4" data-bs-parent="#selector">
                    <div className="card card-body">
                        <h4>Usuarios</h4>
                        {showsearchdif(buscador.info[3], "user")}
                    </div>
                </div>

            </div>
        }
        </div>
    )
}

export default ResultSearch;