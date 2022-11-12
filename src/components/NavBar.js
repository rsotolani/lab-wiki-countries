//Displaying the basic navbar with the LAB name

import {Link} from "react-router-dom"

function NavBar() {
    return ( 
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <Link to="/" className="navbar-brand">LAB - WikiCountries</Link>
            </div>
        </nav>
     );
}

export default NavBar ;