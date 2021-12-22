import React, { useState } from "react";

export const Prima = () => {
    const[nombre, setNombre] = useState();
    const[salario, setSalario]= useState();
    const[calculo, setCalculo]= useState();

    const comprobacion = () => {
        if (!nombre && !salario){
            alert('Los campos son obligatorios')
            return false
        }
        
        if (nombre !== 'gladys' && nombre !== 'jaime' ){
            alert('empleado no existe')
            return false

        }

        if (Number(salario) >= 1000000){
            alert('maximo')
        return false
    }

    if (Number(salario) <= 100000) {
        alert('el valor debe ser mayor a $100.000')
        return false
    }
       return true;

}



const imprimir = (resultado,mensaje) => {
    alert(`${mensaje} ${resultado}`)
}

const resultado = () => {
    if(comprobacion()){
        
        imprimir( Number(salario) * (0.1), 'su prima es')
       
    }
}

return (
    <>
    <h3>Plataforma Para El Pago De Prima</h3>

    <input placeholder="Ingrese el nombre"
    name="nombre"
    id="nombre"
    onChange={(e) =>setNombre(e.target.value)}
    />
    <input placeholder="Ingrese el salario"
    name="nombre"
    id="nombre"
    onChange={(e) =>setSalario(e.target.value)}
    />
    <button onClick= {()=> resultado()}>Mostrar</button>
    </>
    )
}
