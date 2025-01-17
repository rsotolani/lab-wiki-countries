//Displays the list of links with the country names. 
//Each link should be a react-router-dom Link which we will use to send the country code (alpha3Code) via the URL.

import { Link } from "react-router-dom";

function CountriesList({allCountries}) {
    return ( 
        <div className="col-5" style={ {maxHeight: '90vh', overflow: 'scroll', } }>
            <div className="list-group">
                {allCountries.map( (country) => {
                    return (
                            <Link 
                                key={country.alpha3Code} 
                                to={`/${country.alpha3Code}`}
                                className="list-group-item list-group-item-action"
                                style={ {textAlign: 'left'} }>
                                <img 
                                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                                    alt={`flag of ${country.name.common}`} 
                                    width='40px'
                                    /> &#160;
                                   {country.alpha3Code} - {country.name.common}
                            </Link>
                    )
                })}
            </div>
        </div>
    );
}



export default CountriesList;

