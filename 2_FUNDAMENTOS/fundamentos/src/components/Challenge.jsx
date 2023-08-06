const Challenge = () => {

    let num1 = 10;
    let num2 = 10;
    function handleSum(x, y){
        console.log(x +y)
    }

  return (
    <div>
        {num1} e  {num2}
        <button onClick={handleSum(num1, num2)}> Somar</button>
    </div>
  )
}

export default Challenge