import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import ResultSearch from './Components/Result';

import {Provider} from 'react-redux';
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="container px-4 py-5 my-5 text-center">
        <h1>Buscador</h1> 
        <p>
          Realiza la busqueda en los módulos de Conciliación, Fuentes, Tableros y Usuarios
        </p>
        <Search />
        <ResultSearch />
      </div> 
    </Provider>

  );
}

export default App;
