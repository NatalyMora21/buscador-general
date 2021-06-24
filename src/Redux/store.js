import {applyMiddleware,  createStore } from "redux";
import search from "../Redux/reducers/buscadorReducer";
import { composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const store = createStore(search,composeWithDevTools(applyMiddleware(thunk)));

export default store;