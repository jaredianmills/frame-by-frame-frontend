import React, { Component } from 'react'
import { Player,
  ControlBar,
  BigPlayButton,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  PlaybackRateMenuButton
} from 'video-react'

class Video extends Component {
  constructor(props) {
    super(props)
  }

  getCurrentTime = () => {
    const { player } = this.refs.player.getState();
    console.log(player.currentTime);
  }

  goToTime = () => {
    console.log(this.refs);
    const { player } = this.refs.player.getState();
    this.refs.player.seek(786.02847)
  }

  makeComment = () => {
    const { player } = this.refs.player.getState();
    this.refs.player.pause()
    this.props.renderCommentForm(player.currentTime)

  }


    render() {
      return(
        <div>
          <Player
            ref="player"
            src="https://flatironmod5project.s3.amazonaws.com/IMG_4482.MOV"
            autoPlay={false}
            >
            <BigPlayButton position="center" />
            <ControlBar autoHide={false}>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={2} />
              <CurrentTimeDisplay order={4.1} />
              <PlaybackRateMenuButton
                rates={[5, 2, 1, 0.5, 0.1]}
                order={7.1}
              />
            </ControlBar>
          </Player>
          <button onClick={this.getCurrentTime}>get current time</button>
          <button onClick={this.goToTime}>go to time</button>
          <button onClick={this.makeComment}>make comment</button>
        </div>
      )
    }
}

export default Video
