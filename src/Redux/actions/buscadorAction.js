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

    return (dispatch)=>{

        dispatch(searchSucces(value));
        dispatch(searchNotfound('Info no encontrada'));


    }

}

export default searchGeneral;
