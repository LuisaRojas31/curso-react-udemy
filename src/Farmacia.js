import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const Farmacia = () => {
    const [cantidad, setCantidad] = useState();
    const [nombre, setNombre] = useState();
    const [costoProducto, setCostoProducto] = useState();
    const [valorProducto, setValorProducto] = useState();
    const valor = 10;

    const calcular = () => {
        if(cantidad > valor){
            alert('supera el monto permitido')
        }else{
            const calculo = cantidad * costoProducto
            setValorProducto(calculo)
            alert(`el valor a pagar por ${nombre} es: ${valorProducto}`)
        }
    }

    return (
        <>
        <h2>Drogueria Express</h2>
        <hr />

        <input placeholder="ingrese el nombre del producto" 
            name='nombre' 
            id='nombre' 
            onChange={(e)=>setNombre(e.target.value)} 
            style={{width:'300px'}}
            /> 
            <br />
            <input placeholder="ingrese la cantidad del producto" 
            name='cantidad' 
            id='cantidad' 
            onChange={(e)=>setCantidad(e.target.value)} 
            style={{width:'300px'}}
            /> 
             <br />
            <input placeholder="ingrese el valor del producto" 
            name='valor' 
            id='valor' 
            onChange={(e)=>setCostoProducto(e.target.value)} 
            style={{width:'300px'}}
            /> 
             <br />
           <button onClick={()=> calcular()}>Comprobar</button>
        </>
    )
}