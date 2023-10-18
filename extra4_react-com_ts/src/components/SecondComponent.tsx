import React from 'react'

interface Props {
    name: String
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>Meu segundo componente</p>
        <p>O nome dele é {props.name}</p>
    </div>
  )
}

export default SecondComponent