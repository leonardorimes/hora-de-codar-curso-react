const UserDetail = ({people}) => {
  return (
    <div>
        {
            people.map((p) => (
                <div key={p.nome}>
               <h1>{p.nome} </h1> 
               <p> Idade: {p.idade}</p>
               <p> Profissão: {p.profissao}</p>
               <p>{p.idade >= 18 ? <p> Pode tirar carteira </p> : <p>Não pode tirar carteira</p>}  </p>

               </div>

            ))
        }
    </div>
  )
}

export default UserDetail