import React, { Component } from "react";

class NavbarComponent extends Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">AspirantSJ</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="#">Accueil <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Listes</a>
                    <a className="nav-link" href="#">A propos</a>
                    <a className="nav-link disabled">Responsabilités</a>
                </div>
            </div>
        </nav>
</div>
);
}
}
export default NavbarComponent;