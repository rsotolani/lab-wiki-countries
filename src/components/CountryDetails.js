//This is the component that we will render via the react-router-dom's Route, 
//and it should receive the country code (alpha3Code) via the URL.

import { Link, useParams } from "react-router-dom";

function CountryDetails( {allCountries}) {
    //console.log(useParams());
    const { alpha3Code } = useParams();
    //console.log(alpha3Code);

    function findCountry (code) {
        return (
            allCountries.find( (country) => {
                return country.alpha3Code === code;
            })
        )
    }
    // const countrySelected = allCountries.find((country) => {
    //     return country.alpha3Code === alpha3Code;
    // });
    const countrySelected = findCountry(alpha3Code);

    console.log(countrySelected);

    return ( 
        <div className="col-7">
            <img 
                src={`https://flagcdn.com/128x96/${countrySelected.alpha2Code.toLowerCase()}.png`} 
                alt={`flag of ${countrySelected.name.common}`} 
                className="center"
                />
            <h1 className="line center">
                {countrySelected.name.common}
            </h1>
            <table className="tabela">
                <thead></thead>
                <tbody>
                    <tr className="line">
                        <td style={ {width: "30%"} }  className="td">Capital</td>
                        <td  className="td">{countrySelected.capital} </td>
                    </tr>
                    <tr className="line">
                        <td  className="td">Area</td>
                        <td  className="td">{countrySelected.area} km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td className="td">Borders</td>
                        <td className="td">
                            <ul>
                            { countrySelected.borders?.map((border) => {
                                return (
                                    <li key={border}>
                                    <Link to={`/${border}`} >{ findCountry(border).name.common }</Link>
                                    </li>
                                    )  
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default CountryDetails;
