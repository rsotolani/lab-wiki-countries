
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
      
      <Routes>
        <Route path="/" element={ <CountriesList allCountries={countries} />    } />

        <Route path="/:alpha3Code" element={ <CountryDetails allCountries={countries} />     } />

      </Routes>

    </div>
  );
}

export default App;
