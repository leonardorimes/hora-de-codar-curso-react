import React, { useContext } from 'react'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import HookUseEffect from '../components/HookUseEffect'

// useContext

import { SomeContext } from '../components/HookUseContext'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'


const Home = () => {
  const { contextValue } = useContext(SomeContext)
  return (
    <div>
        
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
        <h2> useContext </h2>
        <p>Valor do context: {contextValue}</p>
        <hr />
        <HookUseRef />
        <HookUseCallback />
    </div>
  )
}

export default Home