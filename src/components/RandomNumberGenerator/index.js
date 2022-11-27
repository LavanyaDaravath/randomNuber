// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  /*
    state = {
    count: 0,
  }
  
  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickButton = () => {
    console.log(`click to generate button`)
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  };
*/
  state = {
    randomNumber: 0,
  }

  onClickButton = () => {
    const getRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: getRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              Generate
            </button>
            <p className="random-number">{randomNumber}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
