import {SEARCH_SUCCESS } from "../actions/buscadorAction"

const initialState= {
    info: [[],[],[],[]],
    notFound :false
}

const search = (state=initialState, action)=> {

    switch (action.type) {

        case SEARCH_SUCCESS:

            return {
                info: action.payload,
                notFound: true
            }

        default: 
            return state;
    }
}

export default search;