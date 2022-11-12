//This is the component that we will render via the react-router-dom's Route, 
//and it should receive the country code (alpha3Code) via the URL.

import { useParams } from "react-router-dom";

function CountryDetails( {allCountries}) {
    console.log(useParams());
    const { alpha3Code } = useParams();
    console.log(alpha3Code);

    const countrySelected = allCountries.find((country) => {
        return country.alpha3Code === alpha3Code;
    });
    console.log(countrySelected);
    return ( 
        <div>

        </div>
     );
}

export default CountryDetails;