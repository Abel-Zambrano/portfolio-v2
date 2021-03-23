import React from "react"
import "./Success.scss"

const Success = () => {
  return (
    <div>
      <div class="success-checkmark">
        <div class="check-icon">
          <span class="icon-line line-tip"></span>
          <span class="icon-line line-long"></span>
          <div class="icon-circle"></div>
          <div class="icon-fix"></div>
        </div>
      </div>
      <center>
        <button id="restart">Restart Animation</button>
      </center>
    </div>
  )
}

export default Success
