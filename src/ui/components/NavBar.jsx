import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg rounded p-2">
        <Link 
            className="navbar-brand" 
            to="#"
        >
            Vaccination
        </Link>

        {/* <div className="navbar-collapse">
            <div className="navbar-nav">
                <NavLink 
                    className={({ isActive }) => {
                        return `nav-link ${ isActive ? "active" : "" }`
                    }} 
                    to="/"
                >
                    Campaign
                </NavLink>
            </div>
        </div> */}

    </nav>
  )
}

