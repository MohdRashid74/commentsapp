import './index.css'

import {Component} from 'react'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comment extends Component {
  render() {
    return (
      <div>
        <div className="bg-container">
          <div>
            <hi className="heading">Comments</hi>
            <p>Say something about 4.0 Technologies</p>
            <form className="form-submit">
              <input type="text" placeholder="Your Name" />
              <textarea
                className="textarea"
                placeholder="Your Comment"
              ></textarea>
              <button type="button" className="btn">
                Add comments
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />
        </div>
        <hr />
      </div>
    )
  }
}
export default Comment
