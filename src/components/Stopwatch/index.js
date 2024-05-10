// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {initialMinutes: 0, initialSeconds: 0, isTimerRunning: false}

  startTimer = () => {
    const {isTimerRunning} = this.state
    this.setState({isTimerRunning: !isTimerRunning})
    let secondsCount = 0
    this.intervalId = setInterval(() => {
      secondsCount += 1
      if (secondsCount % 60 === 0) {
        this.setState({
          initialMinutes: Math.floor(secondsCount / 60),
          initialSeconds: 0,
        })
      } else {
        this.setState({
          initialSeconds: secondsCount % 60,
        })
      }
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  resetTimer = () => {
    this.setState({initialMinutes: 0, initialSeconds: 0, isTimerRunning: false})
  }

  render() {
    const {initialMinutes, initialSeconds, isTimerRunning} = this.state
    const minutes = initialMinutes < 10 ? `0${initialMinutes}` : initialMinutes
    const seconds = initialSeconds < 10 ? `0${initialSeconds}` : initialSeconds
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="title">Stopwatch</h1>
          <div className="stopwatchContainer">
            <div className="timerText">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1 className="timer">
              {minutes}:{seconds}
            </h1>
            <div className="btnContainer">
              <button
                disabled={isTimerRunning}
                type="button"
                className="btn startBtn"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="btn stopBtn"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn restartBtn"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
