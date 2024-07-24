Exercícios Trello - Módulo 2 - Semana 7

[M2S07] - Ex.1 - Crie um contador utiizando o useState
Agora que você aprendeu a utilizar o hook de estado, sua tarefa é criar um componente de contador com duas funções: uma para aumentar o valor e outra para diminuir o valor do estado.

import { useState } from 'react'

// função utilizada dentro do componente.
const [estado, setEstado] = useState([valor-inicial]);

Pasta - components
Contador.css
Contador.jsx

[M2S07] - Ex.2- Utilize o useEffect para carregar o valor inicial de um estado

Utilize o useEffect para executar uma função ao carregar o componente. Essa função fará uma requisição para a API da IBGE, obtendo o título da primeira notícia de destaque do dia. Posteriormente, os dados recebidos serão utilizados para atualizar o estado que armazena o texto, o qual é inicializado com o valor nulo.

import { useEffect } from 'react'

// função utilizada dentro do compoennte.
useEffect(() => {
// todo
}, [])

Pasta - components
Noticias.jsx
Noticias.css

[M2S07] Ex.3 - Adicione um item a lista do estado
Desenvolva dois elementos: um input e um botão. Utilize o evento onChange do input para capturar seu valor a cada alteração e adicionar esse valor a um estado. Ao clicar no botão, recupere esse valor do estado e adicione-o a um estado de lista, o qual deve ser uma matriz de strings.


[BONUS] - Aproveite esse estado de lista e renderize dentro de uma tag ul com tag li.

Pasta - components
Lista.jsx
Lista.css


[M2S07] - Ex.4 - Validação de Formulário Simples
Crie um formulário simples com campos de entrada para nome, e-mail e idade. Utilize useState para armazenar os valores dos campos e useEffect para validar os dados do formulário. O objetivo é apresentar uma mensagem na tela quando o formulário estiver totalmente preenchido.

Instruções:

Estado Inicial:

Crie um estado inicial no formato de objeto para armazenar os valores dos campos de entrada (nome, e-mail e idade).

Utilize useState para inicializar o estado com valores vazios.

Validação dos Campos:

Utilize onChange nos campos de entrada para atualizar o estado conforme os usuários digitam.

No useEffect, inclua como dependência o valor do estado do formulário.

Valide cada campo para garantir que não esteja vazio ou nulo.

Mensagem de Preenchimento Completo:

Utilize um segundo estado para controlar se o formulário foi totalmente preenchido.

No useEffect, verifique se todos os campos foram preenchidos.

Use Object.values() para recuperar os valores do estado e reduce() para somar +1 para cada campo preenchido.

Se o valor resultante do reduce() for igual a 3, exiba uma mensagem na tela indicando que o formulário foi totalmente preenchido.

Dicas Adicionais:

Utilize Object.values() para recuperar os valores do estado e percorra a lista para verificar se algum campo está vazio ou nulo.

Use reduce() da API JavaScript para somar +1 caso o valor de cada campo seja diferente de nulo ou vazio.

Se a soma resultante for igual a 3, isso indica que o formulário foi totalmente preenchido.


Pasta - components
Formulario.jsx
Formulario.css








[M2S07] - Ex.5 - Crie um componente controlado


Criar um componente de input controlado que permita ao usuário digitar um texto e exibir o texto digitado na tela.

Instruções:

Crie um componente de classe chamado InputControlado.

Utilize o estado para armazenar o valor do texto digitado pelo usuário.

Crie um input dentro do componente e defina seu valor como o estado atual.

Adicione um evento onChange ao input para atualizar o estado com o texto digitado pelo usuário.

Exiba o texto digitado abaixo do input, em tempo real, conforme o usuário digita.