import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import searchGeneral from '../Redux/actions/buscadorAction'

const Search = ()=>{

    const dispatch= useDispatch();

    const [datos, setDatos] = useState({
        searchWord: '',
        date:'',
        options: 'namedescription'
    })

    const [tipodato , setTipodato] =  useState(false);
    const [mensajealert , setMensajealert] =  useState(false);


    //Función para validar que tipo de dato se va a buscar
    const handleSelectChange = (event) =>{

        if (event.target.value=='fecha') {

            setTipodato(true);
            setDatos({
                searchWord: '',
                date:'',
                [event.target.name] : event.target.value
            })
        }

        else { 

            setTipodato(false);
            setDatos({
                ...datos,
                [event.target.name] : event.target.value
            })
        }
    }

    //Actualizar la información que se va a buscar
    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })

    }

    //Función que llama al action para hacer la busqueda
    const handleSubmit = async (event) => {

        event.preventDefault();
        let info;

        if (datos.options=='fecha'){
            info= datos.date;
        }
        else {
            info= datos.searchWord;
        }

        if (info != ''){
            dispatch(searchGeneral(datos.searchWord, datos.options, datos.date))
            setMensajealert(false)
        }
        else {
            setMensajealert(true)
        }    
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-sm-center"> 
                
                    <div className="col-sm-5">
                        <select name="options"  onChange={handleSelectChange} as="select" className="form-select" aria-label="Default select example">
                            <option value="namedescription" selected>Nombre y descripción</option>
                            <option value="id">Id</option>
                            <option value="fecha">Fecha</option>
                        </select>
                    </div>

                    <div className="col-sm-5">
                        {!tipodato && 
                            <div className="input-group mb-3 ">
                                <input id="searchWord" name="searchWord" onChange={handleInputChange} type="text" className="form-control" placeholder="Palabra clave" aria-label="Palabra clave" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary search" type="submit" id="button-addon2" >Buscar <i className="fas fa-search"></i></button>
                            </div>  
                        }

                        {tipodato &&
                            <div className="input-group mb-3 ">
                                <input id="date" name="date" type="date"  onChange={handleInputChange} className="form-control" />
                                <button className="btn btn-outline-secondary search" type="submit" id="button-addon2" >Buscar <i className="fas fa-search"></i></button>
                            </div>
                        }
                    </div>   

                    {mensajealert && 
                        <div className="alert alert-danger col-sm-10" role="alert">
                            Debe ingresar un valor
                        </div>
                    } 

                </div>
            </form>
        </div>
    )
}

export default Search;