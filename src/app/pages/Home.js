import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Welcome to Chaotic Sol! </h3>
        </div>
        <div className="row">
          <div className="col-lg-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <p>We are a social guild with an active discord, as well as in-game communities on both Alliance and Horde. We run keys regularly and have social events such as achievement and mount runs and the occasional PvP.</p>
                <p>We are currently at 6/11N for Sepulcher of First Ones and looking to progress into Heroic after a full clear of Normal. We believe that this game is about having fun, and a big part of that is playing a class that you enjoy. For this reason we encourage you to play the class/spec that you have the most fun with, and we’ll make it work! </p>
                <p>Although we are casual about raiding we still manage to progress and have a blast while doing so. In Sanctum of Domination we achieved 9/10 Heroic progression while trolling each other and having a laugh. Our current raiding schedule is 8pm Server Time (EST) on Thursdays and Saturdays. Prior raiding experience is not necessary as we’re happy to teach and help each other grow.</p>
                <br />
                <p>If you'd like to find out more about the guild, feel free to have a chat with one of our recruitment officers.</p>
                <h5>In Game:</h5>
                <ul>
                  <li>
                    Xylunara#1333
                  </li>
                  <li>
                    teco#1409
                  </li>
                </ul>
                <h5>Discord:</h5>
                <ul>
                  <li>
                    Xy#8613
                  </li>
                  <li>
                    eric (chico)#4278
                  </li>
                </ul>
                <p>Alternatively, just open up Guild Finder and search for 'Chaotic Sol' and hit apply. An officer will approve your application as soon as we can.</p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                
              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Home
