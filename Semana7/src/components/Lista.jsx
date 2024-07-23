import '../components/Lista.css'
import { useState } from 'react'


function Lista() {

    const [frutas, setFrutas] = useState([]);
    const [novaFruta, setNovaFruta] = useState('');

    function handleEnviarFruta() {
        if (novaFruta.trim() !== '') {
            setFrutas([...frutas, novaFruta]);
            setNovaFruta(''); // Limpa o campo de input depois de enviar a fruta
        }
    }

    return (
      <>
       <div className="formulario">

       <input placeholder="Fruta" value={novaFruta} onChange={(e) => setNovaFruta(e.target.value)}/>
       <button onClick={() => handleEnviarFruta()}>Enviar Fruta</button>

       </div>

       <ul>
                {frutas.map((fruta, index) => (
                    <li key={index}>{fruta}</li>
                ))}
        </ul> 

      </>
    )
  }
  
  export default Lista



// import '../components/Lista.css'
// import { useEffect, useState } from 'react'


// function Lista() {

//     const [frutas, setFrutas] = useState([]);
    

//     function handleFrutas(){
//         const frutasEnviadas = {
//             frutas: frutas
//         }
//         console.log('Fruta a ser enviada', frutasEnviadas)
//     }

//     useEffect(() => {
//         handleFrutas()
//         console.log('Enviadas')
//     }, [frutas])

//     return (
//       <>
//        <div className="formulario">

//        <input placeholder="Fruta" value={frutas} onChange={(e) => setFrutas(e.target.value)}/>
//        <button onClick={() => handleFrutas()}>Enviar Fruta</button>

//        </div>
//       </>
//     )
//   }
  
//   export default Lista