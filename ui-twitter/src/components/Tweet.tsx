import { ArrowsCounterClockwise, ChatCircle, Heart } from "phosphor-react"
import "./Tweet.css"
export function Tweet() {
  return (
    
    <a href="#" className="tweet">
      <img src="https://github.com/felipeddos.png" alt="felipe daniel" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Felipe Daniel</strong>
          <span>@fddos</span>
        </div>
        <p>
          Tweet Maneiroo!! <br />
          Segue ae!
        </p>

      <div className="tweet-content-footer">
        <button type="button">
          <ChatCircle/>
          20
        </button>
        <button type="button">
          <ArrowsCounterClockwise/>
          20
        </button>
        <button type="button">
          <Heart/>
          20
        </button>
      </div>
      </div>
    </a>
  )
}
