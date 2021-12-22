import React, { useState } from "react";


export const Calculadora = () => {
    const[numero, setNumero] = useState();
    const[numerodos, setNumeroDos] = useState();


    

    const obligatorio = () => {
        if(!numero || !numerodos){
            alert('*todos los campos son obligatorios');
            return false;
        } else {
            return true
        }
    }

    const imprimir = (resultado, mensaje) => {
        alert(`${mensaje} ${resultado}`)
 }

    const imprimir2 = (mensaje) => {
        alert(`${mensaje} `)

    }

    const validacion = () => {
        if (obligatorio()) {
         if (numero === "2" || numerodos === "2") {
                imprimir2('si esta el numero')
            }else {
                imprimir2('no esta el numero')
            }
    }
}



    const suma = () => {
        if(obligatorio()){
           const result = Number(numero) + Number(numerodos)
           imprimir(result, 'la suma es')
        }
    }

    const resta = () => {
        if(obligatorio()){
            const result = Number(numero) - Number(numerodos);
            imprimir(result, 'la resta es');
        }
    }

    const multiplicacion = () => {
        if(obligatorio()){
            alert(Number(numero) * Number(numerodos))
        }
    }

    const division = () => {
        if(obligatorio()){
            alert(Number(numero) / Number(numerodos))
        }
    }



    return ( 
        <> 
        <h1> CALCULADORA </h1>
           

            <input placeholder="ingrese el numero" 
            name='numero' 
            id='numero' 
            onChange={(e)=>setNumero(e.target.value)} 
            style={{width:'300px'}}
            /> 
            <br/>
            <input placeholder="ingrese el numero dos" 
            name='numero' 
            id='numero' 
            onChange={(e)=>setNumeroDos(e.target.value)} 
            style={{width:'300px'}}
            />  
            <br/>
           <button onClick= {()=> suma()}>+</button>
           <button onClick= {()=> resta()}>-</button>
           <button onClick= {()=> multiplicacion()}>*</button>
           <button onClick= {()=> division()}>/</button>
           <button onClick= {()=> validacion()}>Validar</button>
        </>
)
}