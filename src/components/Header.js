import React from 'react'
import { Link } from 'gatsby'

import '../styles/header.css'

export default function Header() {
    return (
        <div className='Header'>
            <Link>
                <h1>DS Projects</h1>
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
