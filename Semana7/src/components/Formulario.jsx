import { useEffect, useState } from "react"
import '../components/Formulario.css'


function Formulario() {
    const [formdata, setFormdata] = useState({
        nome: '',
        email: '',
        idade: ''
    })
    
    const [message, setMessage] = useState(null)

    useEffect(() => {
        const isError = Object.values(formdata).reduce((totalizador, item) => {
            if(!item) totalizador += 1
            return totalizador
        }, 0)

        if(isError > 0) {
            setMessage('Todos os campos devem ser preenchidos.')
        } else {
            setMessage('Todos os campos foram preenchidos')            
        }
    }, [formdata])   

    return (
        <>
            <div className="form">
                <h2 className="titulo">Formulario</h2>
                <form>
                    <input id="input-nome" type="text" placeholder="Digite seu nome" 
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, nome: event.target.value}))} />
                     <input id="input-email" type="text" placeholder="Digite seu email" 
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, email: event.target.value}))} />
                     <input id="input-idade" type="text" placeholder="Digite sua idade" 
                    onChange={(event) => setFormdata(prevState => ({ ...prevState, idade: event.target.value}))} />

                    <button className="botao">Cadastrar</button>
                </form>

                <h4>{message}</h4>

                <div className="dados">
                    <h3>Nome: {formdata.nome}</h3>
                    <h3>Email: {formdata.email}</h3>
                    <h3>Idade: {formdata.idade}</h3>
                </div>
                

            </div>
        </>
    )
}

export default Formulario


// import '../components/Formulario.css'
// import { useState, useEffect } from 'react'

// function Formulario() {

//     const [nome, setNome] = useState([]);
//     const [email, setEmail] = useState([]);
//     const [idade, setIdade] = useState([]);
//     const [formData, setFormData] = useState([])
   

//     function handleEnviarDados() {
//         const dados = {
//             nome: nome,
//             email: email,
//             idade: idade
//         }
//         console.log(dados)
//     }

//     useEffect(() => {
//         console.log('ok')
//     }, [setEmail])



//         //     if (novaFruta.trim() !== '') {
//         //         setFrutas([...frutas, novaFruta]);
//         //         setNovaFruta(''); // Limpa o campo de input depois de enviar a fruta
//         //     }
//         // }


//   return (
//     <>

//     <div> 
//      <input placeholder="Nome" value={nome} onChange={(e) => setFormData(prevState => ({...prevState, nome: e.target.value}))}/>
//      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//      <input placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)}/>

//      <button onClick={() => handleEnviarDados()}>Enviar Dados</button>
//      </div>


//     </>
//   )
// }

// export default Formulario


