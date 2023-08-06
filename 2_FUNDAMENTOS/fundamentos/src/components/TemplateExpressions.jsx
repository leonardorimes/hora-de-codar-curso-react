const TemplateExpressions = () => {
  
    const name = "leonardo"
    const data = {
        age: 30,
        job: "Programmer",
    }
  
    return (
    <div>
        <h1> Olá {name}, tudo bem? </h1>
        <p> Você atua como: {data.job}</p>
        <p>
            {4 + 4}
        </p>
    </div>
  )
}

export default TemplateExpressions