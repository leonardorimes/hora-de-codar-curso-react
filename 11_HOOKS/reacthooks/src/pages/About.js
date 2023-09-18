import React, { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const About = () => {
  
  const { contextValue } = useContext(SomeContext)

  return (
    <div>
      About

      <p> valor do contexto {contextValue}</p>
    </div>

  )
}

export default About