import React, {createContext} from "react";

// 4 - importação de componente
import FirstComponent from "./components/firstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";
import Context from "./components/Context";


// 8 - type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo"

// 9 - context
interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - Variaveis
  const name: string = "Leonardo"
  const age: number = 31
  const isWorking: boolean = true

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  };

  // 8- type
  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null

  mySecondText = "Opa"

  const testandoFixed:fixed = "Isso"

  // 9 - Context
  const contextValue:IAppContext = {
    language: "JavaScript",
    framework: "express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="segundo" />
      <Destructuring
        title="Primeiro post"
        content="algum conteudo"
        commentsQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo post"
        content="outro conteudo"
        commentsQty={10}
        tags={["rs", "html"]}
        category={Category.P}
      />

      <State />
      {myText && <p> Tem texto na variável </p>}
      {mySecondText && <p>Tem texto na variável</p>}
    </div>
    <Context />
    </AppContext.Provider>
  );
}

export default App;
