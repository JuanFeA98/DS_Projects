import React from 'react'

export default function Test() {
    const [pasajero, setPasajero] = React.useState(892);

    const obtenerDatos = async (event) => {
        const id = event.target.value;
        try {
            const data = await fetch(`https://tf1btq.deta.dev/pasajeros/${id}`);
            const pasajero = await data.json();
            await setPasajero(pasajero);
            await console.log(pasajero)
            
        } catch (error) {
            console.log('No esta')
        }
    }

    return (
        <div>
            <h1>Test</h1>

            <form>
                <label>Introduce un Id (892-1309)</label>
                <br />
                <input 
                    type="number" 
                    name="Id"
                    onChange={obtenerDatos}
                />

            </form>


            <div>
                <p>Id: {pasajero.PassengerId}</p>
                <p>Nombre: {pasajero.Name}</p>
                <p>Edad: {pasajero.Age}</p>
            </div>
        </div>
    )
}
