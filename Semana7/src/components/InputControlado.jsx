import { useState } from "react";


function InputControlado() {
    const [texto, setTexto] = useState(null)

    return (
        <>
            <input type="text" name="texto" placeholder="Digite o texto" onChange={(e) => setTexto(e.target.value)} />
            
            <p>{texto}</p>
            
        </>
    )
}

export default InputControlado