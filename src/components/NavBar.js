import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div>
            <ul id='navList'>
                <li className='navItem' id='navLogo'>
                    <Link className = 'navLink'
                    id='navbar-logo' 
                    to={'/'}>
                        Alexander Van Cappellen
                    </Link>
                </li>
                <li className='navItem'>
                    <Link className = 'navLink'
                    to={'/about'}>
                        About
                    </Link>
                </li>
                <li className='navItem'>
                    <Link className = 'navLink'
                    to={'/contact'}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar