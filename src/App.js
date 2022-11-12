
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState } from "react";
import countries from "./countries.json";

function App() {

  // const [allCountries, setAllCountries] = useState(countries);

  return (
    <div className="App">

      <NavBar />

      <div className="container">
        <div className="row">
          <CountriesList allCountries={countries}/>
          <Routes>
            <Route path="/:alpha3Code" element={ <CountryDetails allCountries={countries} />     } />
          </Routes>
        </div>
      </div>
      
      

    </div>
  );
}

export default App;
