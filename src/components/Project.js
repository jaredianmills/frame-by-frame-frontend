import React, { Component } from 'react'
import { connect } from 'react-redux';
import Video from './Video'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import AddUserToProjectForm from './AddUserToProjectForm'
import Comments from './Comments'
import * as actions from '../actions'
import { ActionCable } from 'react-actioncable-provider';

class Project extends Component {

  componentDidMount = () => {
    this.props.fetchProject(this.props.currentProject.id)
  }

  handleStyleChange = () => {
    if (this.props.visibleProjectList) {
      return {marginLeft: '20%', marginTop: '1%', transition: 'margin .32s ease-in'}
    } else {
      return {marginLeft: '2%', marginTop: '1%', transition: 'margin .32s ease-in'}
    }
  }

  handleReceivedProjectData = (response) => {
    if (response.note.project.id === this.props.currentProject.id) {
      this.props.addNote(response.note)
    }
  }


  render() {
    return (
      <div style={{marginTop: '1%'}}>
        <ActionCable
          channel={{ channel: 'NotesChannel' }}
          onReceived={this.handleReceivedProjectData}
        />
          <NoteList notes={this.props.currentProject.notes} />
          {/* {this.props.currentProject.notes ? <NoteList notes={this.props.currentProjectNotes}/> : null} */}
          <Video />
          {this.props.displayNoteForm ? <NoteForm currentVideoTime={this.props.currentVideoTime}/> : null}
          {this.props.displayAddUserToProjectForm ? <AddUserToProjectForm /> : null}
          {this.props.displayComments ? <Comments /> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => {dispatch(actions.fetchProject(id))},
    addNote: (note) => {dispatch(actions.addNote(note))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
