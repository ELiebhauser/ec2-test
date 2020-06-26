import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import './navbar.component.css';


const NavbarComponent: React.FC<RouteComponentProps> = (props) => {

    const renderOnCurrentPath = (path: string) => {
        console.log(props.location.pathname);
    };

    
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Bank of Money</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/template">Template {renderOnCurrentPath('/template') }</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        
            <section>logout</section>
        </div>
   );
};
export default withRouter(NavbarComponent);