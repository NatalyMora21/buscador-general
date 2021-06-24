import { SEARCH_ERROR, SEARCH_SUCCESS } from "../actions/buscadorAction"


const initialState= {
    info: [],
    notFound :""
}

const search = (state=initialState, action)=> {

    switch (action.type) {

        case SEARCH_SUCCESS:

            return {
                info: action.payload,
                notFound: ""
            }

        case SEARCH_ERROR:

            return {
                info: [],
                notFound: "No hay información relacionada con la busqueda"
            }

        default: 
            return state;

    }
}

export default search;