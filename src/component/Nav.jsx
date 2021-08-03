import React from "react";
import {Link} from "react-router-dom";
function Nav() {
    return (
        <div className='container'>
            <nav className="navbar fixed-top between navbar-expand navbar-dark bg-dark">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse justify-content-center navbar-collapse" id="navbarNavAltMarkup">
                        <nav className="navbar-nav justify-content-center">
                            <Link className="nav-link" to="/">Add users</Link>
                            <Link className="nav-link" to="/users">All users</Link>
                            <Link className="nav-link" to="/favorite">Favorite</Link>
                            <Link className="nav-link" to="/disfavoured">Disfavoured</Link>
                            <Link className="nav-link" to="/analytic">Analytic</Link>
                        </nav>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
