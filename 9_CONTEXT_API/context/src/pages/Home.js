import React from 'react'
// import { useContext } from 'react'
// import {CounterContext} from '../context/CounterContext'

// 4 - Refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

import "./Home.css"
import ChangeCounter from '../components/ChangeCounter'

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  return (
    <div>
     <h1> Home </h1> 
     <p> Valor do contador: {counter}</p>
     {/* 3 - alterando valor do contexto */}
     <ChangeCounter />

   
    </div>
  )
}

export default Home