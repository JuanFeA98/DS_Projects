import React, { useEffect } from 'react'

import '../styles/main.css'

export default function Main() {
    const [pasajeros, setPasajeros] = React.useState([]);

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://tf1btq.deta.dev/pasajeros');
        const pasajeros = await data.json();
        setPasajeros(pasajeros);
    }

    return (
        <div className='Main'>
            <h2>
                Hello World
            </h2>
            <ul>
                {
                    pasajeros.slice([100], [110]).map(item => (
                        <li key={item.PassengerId}>
                            {item.Name} - {item.Age}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
