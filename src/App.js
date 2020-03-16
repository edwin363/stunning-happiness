import React from 'react';
import './App.css';
import poke from './img/imgPoke3.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import CantidadPokemon from './components/CantidadPokemon';
// import CompraPokemon from './components/CompraPokemon';

import { Provider } from 'react-redux';
import store from './redux/store'
import CantidadPokemonHook from './components/CantidadPokemon.hook';
import CompraPokemonHook from './components/CompraPokemon.hook';
import BuscadorPokemon from './buscador/BuscadorPokemon';
import ResultadoPokemon from './buscador/ResultadoPokemon';

function App() {

  return (
    //El privider tiene una props que se llama store y tambien tiene que englobar toda la app...
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{maxWidth: '370px'}}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={poke} alt="pokemon" className="card-img" />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadPokemonHook/>
                    </div>
                    <CompraPokemonHook/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 border-top pt-3">
            <BuscadorPokemon/>
          </div>
          <div className="col-12">
            <ResultadoPokemon/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;