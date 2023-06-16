// Write your React code here.

import {Component} from 'react'
import './index.css'

const Emoji = props => {
  const {details, isSubmit} = props
  const {name, imageUrl, id} = details
  const onChange = () => {
    isSubmit(id)
  }

  return (
    <li className="li">
      <div className="emoji">
        <img src={imageUrl} className="img" alt={name} onClick={onChange} />
        <p className="imgExpression">{name}</p>
      </div>
    </li>
  )
}

class Feedback extends Component {
  state = {isTrue: false}

  isSubmit = id => {
    this.setState({isTrue: true})
  }

  render() {
    const {isTrue} = this.state
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    const {emojis} = resources
    console.log(resources)
    return (
      <div className="bg-container">
        {isTrue !== true ? (
          <div className="card-container">
            <h1 className="title">
              How satisfied are you with our customer support performance?
            </h1>
            <div>
              <ul className="emoji-container">
                {emojis.map(each => (
                  <Emoji
                    details={each}
                    isSubmit={this.isSubmit}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        ) : null}
        {isTrue === true ? (
          <div className="thankyou-container">
            <img src={loveEmojiUrl} className="img" alt="love emoji" />
            <h1 className="title">Thank You!</h1>
            <p className="imgExpression">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Feedback
