import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Button } from 'semantic-ui-react'
import { Player,
  ControlBar,
  BigPlayButton,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  PlaybackRateMenuButton
} from 'video-react'

class Video extends Component {

  addNote = () => {
    const { player } = this.refs.player.getState()
    this.refs.player.pause()
    let timecode = player.currentTime
    this.props.setCurrentVideoTime(timecode)
    this.props.renderNoteForm()
  }

  // goToTime = () => {
  //   const { player } = this.refs.player.getState();
  //   this.refs.player.seek(7.2501)
  // }
  //
  // makeComment = () => {
  //   const { player } = this.refs.player.getState();
  //   this.refs.player.pause()
  //   this.props.renderCommentForm(player.currentTime)
  //
  // }

  componentDidUpdate = () => {
    this.refs.player.seek(this.props.videoPlayTime)
  }

    render() {
      return(
        <div style={{width: "50%", height: 'auto', marginLeft: '3%', marginTop: '2%', padding: '1%', boxShadow: '1px 1px 5px grey', backgroundColor: 'lightblue'}}>
          <Player
            ref="player"
            src='https://s3.us-east-2.amazonaws.com/flatironmod5project/IMG_4482.MOV'
            autoPlay={false}
            startTime={this.props.videoPlayTime}
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
          <Button style={{margin: '1%'}}onClick={this.addNote}>Add a Note</Button>
          {/* <button onClick={this.goToTime}>go to time</button> */}
          {/* <button onClick={this.makeComment}>make comment</button>  */}
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    project: state.currentProject,
    videoPlayTime: state.videoPlayTime
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentVideoTime: (time) => dispatch(actions.setCurrentVideoTime(time)),
    renderNoteForm: () => dispatch(actions.renderNoteForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Video)
