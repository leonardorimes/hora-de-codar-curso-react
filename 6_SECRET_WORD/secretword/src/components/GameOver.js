
import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
      <div>Game Over</div>
      <button onClick={retry}>Finalizar o jogo</button>

    </div>
  )
}

export default GameOver