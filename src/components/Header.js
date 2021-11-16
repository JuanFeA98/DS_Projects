import React from 'react'
import { Link } from 'gatsby'

import '../styles/header.css'
import Logo from '../images/logo.png'

export default function Header() {

    return (
        <div className='Header'>
            <Link to='https://www.google.com'>
                <div className="Title">
                    <img src={Logo} alt="" />
                    <h1>DS Projects</h1>
                </div>
            </Link>
            <Link>
                <ul>
                    <Link to='https://www.google.com'>
                        <li>Opción 1</li>
                    </Link>
                    <Link>
                        <li>Opción 2</li>
                    </Link>
                    <Link>
                        <li>Opción 3</li>
                    </Link>
                </ul>
            </Link>
        </div>
    )
}
