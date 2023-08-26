import React from 'react'
// import { useContext } from 'react'
// import {CounterContext} from '../context/CounterContext'

// 4 - Refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

// 5 - context mais complexo
import { useTitleColorContext} from "../hooks/useTitleColorContext"

import "./Home.css"
import ChangeCounter from '../components/ChangeCounter'

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  // 5 - context mais complexos
  const {color, dispatch} = useTitleColorContext()

 /* 6 - alterando contexto completo */
  const setTitleColor = (color) => {
    dispatch({type: color })
  }




  return (
    <div>
     <h1 style={{color: color}}> Home </h1> 
     <p> Valor do contador: {counter}</p>
     {/* 3 - alterando valor do contexto */}
     <ChangeCounter />
     {/* 6 - alterando contexto completo */}
      <div>
          <button onClick={() => setTitleColor("RED")}> Vermelho </button>
          <button onClick={() => setTitleColor("BLUE")}> Azul </button>
      </div>
   
    </div>
  )
}

export default Home