import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div>
            <ul>
                <div className='navbar-logo-container'>
                    <Link 
                        className='navbar-logo' 
                        to={'/'}>
                            Alexander Van Cappellen
                    </Link>
                </div>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
            </ul>
        </div>
    )
}

export default NavBar