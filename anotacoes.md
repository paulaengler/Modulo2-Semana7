****

Etapas Para criar um projeto React com Vite:

Abrir Terminal cmd na pasta criada para o projeto
npm create vite@latest
na tela aparece: Project name: › vite-project
digitar o nome do projeto
com a seta para baixo, selecionar o react, enter
com a seta selecionar a variant - javascript
abre no vsc a pasta do projeto - o vite ja vai ter gerado alguns arquivos
o run now vai passar os próximos comandos, para digitar no terminal
cd nomeDaPasta - para entrar na pasta
npm install
npm run dev - para começar a rodar
vai trazer um endereço local host
abrir em um navegador

******

no arquivo app.jsx deixar apenas:
import './App.css'

function App() {


  return (
    <>
     
    </>
  )
}

export default App

******
useState
O useState é um dos hooks mais básicos e fundamentais do React. Ele permite que você adicione o estado a componentes funcionais do React. Antes dos hooks, só era possível gerenciar o estado em componentes de classe usando this.state.

Como funciona:

Inicialização do estado:
Ao usar useState, você define uma variável de estado e uma função para atualizá-la. A função useState retorna um array com dois elementos:

O primeiro elemento é o valor atual do estado.
O segundo elemento é uma função que permite atualizar esse estado
const [count, setCount] = useState(0);
Neste exemplo:

count é o estado atual, inicializado com o valor 0.
setCount é a função que você usa para atualizar o valor de count.
Atualização do estado:
Quando você chama a função retornada por useState, o React agenda uma atualização do componente, o que significa que o componente será re-renderizado com o novo valor de estado.
// Exemplo de atualização do estado
setCount(count + 1);

Neste caso, count será atualizado para o seu valor atual mais 1.

Para que é usado:

useState é usado para armazenar dados locais dentro de componentes funcionais.
É particularmente útil para lidar com formulários, exibição de dados dinâmicos, controle de visibilidade de elementos, entre outros.

useEffect
O useEffect é um hook que permite executar efeitos colaterais em componentes funcionais. Efeitos colaterais são ações que ocorrem após a renderização do componente, como buscar dados de um servidor, atualizar o DOM ou manipular variáveis fora do escopo do componente.

Como funciona:

Execução de efeitos:
Você define uma função dentro de useEffect que contém o código do efeito colateral que você deseja executar.
useEffect(() => {
  // Código do efeito colateral
  document.title = `Você clicou ${count} vezes`;
}, [count]); // Dependência opcional
No exemplo acima, o efeito colateral atualiza o título do documento sempre que count (ou qualquer outra dependência) mudar.
Dependências:
Você pode passar um array de dependências como segundo argumento para useEffect. O efeito será reexecutado apenas quando uma dessas dependências mudar.

useEffect(() => {
  // Código do efeito colateral
}, [dependency1, dependency2]);

Se omitir o array de dependências, o efeito será executado após cada renderização do componente.
Para que é usado:

useEffect é usado para lidar com operações que não são diretamente relacionadas à renderização, como:
Executar chamadas de API.
Manipular o DOM diretamente.
Subscrever e cancelar inscrições.
Atualizar o estado local ou global baseado em mudanças.
Resumo
useState é usado para adicionar estado a componentes funcionais.
useEffect é usado para adicionar efeitos colaterais a componentes funcionais, permitindo manipular coisas fora do ciclo de renderização básico.
Ambos os hooks são poderosos porque permitem que você escreva código mais declarativo e funcional em componentes React, substituindo a necessidade de classes e métodos de ciclo de vida em muitos casos. Isso torna o código mais fácil de entender e manter, além de melhorar a performance do React, garantindo que apenas as partes necessárias do componente sejam atualizadas quando o estado ou as dependências mudarem.


*** USESTATE ***

GERENCIAR O ESTADO DE ALGUM VALOR

const changeNumber = () => {
  setnumber((prevNumber) => prevNumber + 1);
}

previus value - valor anterior 

** USEEFFECT **

algum efeito vai ser originado por meio de alguma ação no programa

// utilização 
const [count, setCount] = useState(0);

useEffect (() => {
  console.log("roda a cada renderização")
})

<button onClick={() => setCount((prevCount) => prevCount + 1)}> Renderizar </button>

qq coisa que mudar na tela, vai ser uma renderização

// array de dependencias

useEffect (() => {
  console.log("Só roda ao incrementar valor")
}, [count])

só roda quando o count for atualizado

// array de dependencias vazio

useEffect(() => {
  console.log("só executa uma vez");
}, [])

nao quer que mude a todo momento, mudar apenas qd usar um get de uma api, por exemplo

ao consultar api, apenas dentro de useEffect, senao a cada modificação, vai executar

//clean up function

funcao de limpeza de memoria

useEffect (() => {
  const timer = setTimeout (() => {
    console.log(`o incrementador foi alterado ${count} vezes`)
  }, 2000)

  return ( => {
    clearTimeout(timer);
  })
}, [count])