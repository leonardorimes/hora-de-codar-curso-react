import React from 'react'
// import { useContext } from 'react'
// import {CounterContext} from '../context/CounterContext'

import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'


const About = () => {
  
  /* // 5 - context mais complexos */
  const {color} = useTitleColorContext()



  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  return (
    <div>
      <h1 style={{color: color}}> About  </h1>
      <p> Valor do contador: {counter}</p>
      
    </div>
   
  )
}

export default About