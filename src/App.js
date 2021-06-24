import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import ResultSearch from './Components/Result';

import {Provider} from 'react-redux';
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Search />
        <ResultSearch />
      </div> 
    </Provider>

  );
}

export default App;
