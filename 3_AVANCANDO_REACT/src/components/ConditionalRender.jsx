import { useState } from "react"

function ConditionalRender() {
    const [x] = useState(false)

    const [name, setName] = useState("")



  return (
    <div>

        <h1> Isso será exibido? </h1>
        {x && <p> Se x for true, sim! </p>}
        {!x && <p> agora x é falso </p>}
        <h1> If ternário </h1>
        {name === "João" ? (
           <div> 
                <p> O Nome é João </p>
           </div>
        ) : <div>
                <p> Nome não encontrado </p>
            </div>
            }

            <button onClick={() => setName("João")}>Joao</button>

    </div>
  )
}

export default ConditionalRender