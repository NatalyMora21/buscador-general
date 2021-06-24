import logo from './logo.svg';
import './App.css';
import Buscador from './Components/Buscador';
import ResultSearch from './Components/Resultados';

import {Provider} from 'react-redux';
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Buscador />
        <ResultSearch />
      </div> 
    </Provider>

  );
}

export default App;
