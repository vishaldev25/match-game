import './index.css'

const ScoreCard = props => {
  const {score, playAgain} = props

  const onClickPlay = () => {
    playAgain()
  }

  return (
    <div className="container">
      <div className="row">
        <div className="score-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy"
          />
          <p className="heading">YOUR SCORE</p>
          <h1 className="heading">{score}</h1>

          <button className="play-button" type="button" onClick={onClickPlay}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard
