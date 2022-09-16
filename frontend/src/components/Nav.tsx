import React , { ReactNode } from 'react';

// Routing
import { Link } from 'react-router-dom';

const Nav = ({ routes }: RoutesProps) => (
    <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
            {
                routes?.map((route:AdminConsoleMainProps) => {

                    return (
                        <Link key={route.name} to={route.url || ''} className="navbar-item">
                            {route.name}
                        </Link>
                    );                    
                })
            }
        </div>
    
        <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                    <Link to="/support" className="button is-light">
                        Siupport
                    </Link>
                </div>
            </div>
        </div>
    </div>
  </nav>
);

export default Nav;

type NavProps = {
    name?: string;
    url?: string;               
    component?: ReactNode;
}
type AdminConsoleMainProps ={
    name?: string
    url?: string;
    exact?: boolean;
    component?: ReactNode;
    subnav?: NavProps[];
}

type RoutesProps = {
    routes?: AdminConsoleMainProps[];
    parentRoutePath?: string;
}