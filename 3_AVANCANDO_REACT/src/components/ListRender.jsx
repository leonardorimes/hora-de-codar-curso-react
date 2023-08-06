import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Leonardo", "Pedro", "Josias"])

    const [users, setUsers] = useState([
        {id:1, name: "leonardo", age: 30},
        {id:2, name: "Pedro", age: 25},
        {id:3, name: "Martin", age: 22},
        {id:4, name: "Jorge", age: 32},

    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {
                list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            
            }
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}> {user.name}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>
            Delete Random User
        </button>
    </div>
  )
}

export default ListRender