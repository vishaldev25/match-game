import './index.css'

const Header = props => {
  const {score, countDown} = props
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="header-logo"
      />
      <div className="header-visual">
        <p className="header-score-para">
          Score: <span>{score}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="header-score-para">
            <span>{countDown} </span> sec
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
