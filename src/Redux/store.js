import { createStore } from 'redux';

import search from '../Redux/reducers/buscadorReducer'

import { composeWithDevTools} from "redux-devtools-extension"



const store = createStore(search,composeWithDevTools());

export default store;