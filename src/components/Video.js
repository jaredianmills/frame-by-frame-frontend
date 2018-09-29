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

const background = require(`../images/mochaGrunge.png`)

class Video extends Component {

  addNote = () => {
    const { player } = this.refs.player.getState()
    this.refs.player.pause()
    let timecode = player.currentTime
    this.props.setCurrentVideoTime(timecode)
    this.props.renderNoteForm()
  }

  addUser = () => {
    this.refs.player.pause()
    this.props.renderAddUserToProjectForm()
  }


  componentDidUpdate = () => {
    if (this.props.videoPlayTime) {
      this.refs.player.seek(this.props.videoPlayTime)
    }
  }

  handleStyleChange = () => {
    if (this.props.visibleProjectList) {
      return {width: "48%", height: 'auto', marginLeft: '20%', marginTop: '2%', padding: '1%', boxShadow: '1px 1px 20px black', backgroundImage: `url(${background})`, transition: 'all .4s ease-out', }
    } else {
      return {width: "66%", height: 'auto', marginLeft: '2%', marginTop: '2%', padding: '1%', boxShadow: '1px 1px 20px black', backgroundImage: `url(${background})`, transition: 'all .4s ease-in-out', }
    }
  }

    render() {
      return(
        <div style={this.handleStyleChange()}>
          <h1 style={{color: 'white', textShadow: '2px 2px 8px black'}}>{this.props.project.title}</h1>
          <Player
            ref="player"
            src={this.props.project.video_url}
            autoPlay={false}
            startTime={this.props.videoPlayTime}
          >
            <BigPlayButton position="center" />
            <ControlBar autoHide={false}>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={10} order={2} />
              <CurrentTimeDisplay order={4.1} />
              <PlaybackRateMenuButton
                rates={[5, 2, 1, 0.5, 0.1]}
                order={7.1}
              />
            </ControlBar>
          </Player>
          <Button inverted color='facebook' style={{margin: '2%  2% 1% 0%'}} onClick={this.addNote}>Add a Note</Button>
          <Button inverted color='facebook' style={{margin: '2%  0% 1% 0%'}} onClick={this.addUser}>Add User to Project</Button>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    project: state.currentProject,
    videoPlayTime: state.videoPlayTime,
    noteWasClicked: state.noteWasClicked,
    visibleProjectList: state.visibleProjectList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentVideoTime: (time) => dispatch(actions.setCurrentVideoTime(time)),
    renderNoteForm: () => dispatch(actions.renderNoteForm()),
    renderAddUserToProjectForm: () => dispatch(actions.renderAddUserToProjectForm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Video)
