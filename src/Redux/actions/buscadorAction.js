import readFile from '../../Data/readFile';
import fetch from 'node-fetch';
export const SEARCH_SUCCESS= 'SEARCH_SUCCESS';
export const SEARCH_ERROR= 'SEARCH_ERROR';

export const searchSucces=(info)=>{
    return {
        type:SEARCH_SUCCESS,
        payload:info
    }
}
export const searchNotfound=(error)=>{
    return{
        type:SEARCH_ERROR,
        payload: error
    }
}

//Acción principal
const searchGeneral= (value)=>{

    return async (dispatch)=>{

        const infoConciliaciones= await readFile("conciliaciones");
        const infoFuetnes= await readFile("fuetnes");
        const infoTableros= await readFile("tableros");
        const infoUsuarios= await readFile("usuarios");

        const searchConciliaciones = infoConciliaciones.filter(info => info.description.includes(value));
        const searchFuetnes = infoFuetnes.filter(info => info.description.includes(value));
        const searchTableros = infoTableros.filter(info => info.description.includes(value));
        const searchInfoUsuarios = infoUsuarios.filter(info => info.name.firstName.includes(value));

        /*console.log(searchConciliaciones);
        console.log(searchFuetnes);
        console.log(searchTableros);
        console.log(searchInfoUsuarios);*/

        dispatch(searchSucces([searchConciliaciones,searchFuetnes,searchTableros,searchInfoUsuarios]));


    }
}

export default searchGeneral;
