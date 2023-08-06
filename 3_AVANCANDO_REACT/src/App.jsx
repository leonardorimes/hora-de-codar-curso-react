import './App.css'

import City from "./assets/city.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import {  useState } from 'react'
import CarDetails from './components/CarDetails'
import Fragment from './components/fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetail from './components/UserDetail'

function App() {
  
  // const name = "Maria"
  const [userName] = useState("Jose")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "Branco", newCar: false, km: 3432},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234}
  ]

  const people = [
    {nome: "Maria", idade: "14", profissao: "Rainha"},
    {nome: "José", idade: "22", profissao: "Carpinteiro"},
    {nome: "Leonardo", idade: "30", profissao: "Programador"},

  ]

  function showMessage(){
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }
  return (
    <div>
      <h1>Ola</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*  Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName}/>
      {/* destructing */}
      <CarDetails brand="vw" km={10000} color="azul" newCar={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="branca" km={4500} newCar={false}/>
      { /* loop em array de objetos  */}

      {cars.map((car) => (
        <CarDetails key={car.brand} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}

      { /* fragment   */}
      <Fragment />
      { /*  children  */}
      <Container>
        <p> E este é o conteúdo </p>
      </Container>

      { /* executar função  */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift   */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
      <UserDetail people={people} />



    </div>
  )
}

export default App
