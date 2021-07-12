import { useState } from "react";

function Contador(){
    const [valor, setValor] = useState(0)
    function changeValor(){
        setValor(valor +1)
    }
    return(
        <>
            <div>{valor}</div>
            <button onClick={changeValor}>Adicionar</button>
        </>
    )
}

export default Contador