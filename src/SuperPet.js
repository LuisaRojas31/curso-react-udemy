import React, { useState } from "react";

alert("Bienvenid@ a SuperPet")

export const SuperPet = () => {
    const [nombreProducto, setNombreProducto] = useState();
    const [cantidadProducto, setCantidadProducto] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [lista, setLista] = useState([]);


   const imprimir =(resultado, mensaje) => {
    alert(`${mensaje} ${resultado}`)
   }
    const agregarlista = () => {
        if(definiciones()){
            imprimir(Number(cantidadProducto)* Number(valorUnitario), 'Valor total de:')
            const valorTotal = Number(cantidadProducto) * Number(valorUnitario)
                    setLista([{nombreProducto: nombreProducto, cantidadProducto, valorUnitario, valorTotal}, ...lista])
        }
       
        
    }

    const limpiar = () => {
        setNombreProducto('');
        setCantidadProducto('');
        setValorUnitario('');

    }



    const definiciones = () => {
        if (!nombreProducto || !cantidadProducto ||!valorUnitario){
            alert('Todos los campos son requeridos')
        return false 

        }
        if (valorUnitario <= "1" || cantidadProducto <= "1"){
            alert('los valores deben ser mayores a 1')
            return false 

        }
        
        return true;
    }   


    return (
        
        <>
         <h1>REGISTRAR VENTA</h1>
         <br/>

         <input placeholder="Ingrese el nombre del producto"
         name="nombre"
         id="nombre"
         onChange={(e) => setNombreProducto(e.target.value)}
         style={{width:'300px'}}
         value={nombreProducto}
         />
         <br/>
         <br/>
         <input placeholder="Ingrese la cantidad del producto"
         name="numero"
         id="numero"
         onChange={(e) => setCantidadProducto(e.target.value)}
         style={{width:'300px'}}
         value={cantidadProducto}
         />
         <br/>
         <br/>
         <input placeholder="Ingrese el valor unitario del producto"
         name="numero"
         id="numero"
         onChange={(e) => setValorUnitario(e.target.value)}
         style={{width:'300px'}}
         value={valorUnitario}
         />
         <br/>
         <br/>
          <button onClick= {()=> agregarlista()}>Guardar</button>
          <br/>
          <br/>
          <button onClick= {()=>limpiar()}>Limpiar</button>
          <ul>
           {lista && lista.map(objeto => <li>{`${objeto.nombreProducto}, ${objeto.cantidadProducto}, ${objeto.valorUnitario}, ${objeto.valorTotal}`},</li>)}
           </ul>


         
        </>
    )
        

           



}
