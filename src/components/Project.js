import React, { Component } from 'react'
import { connect } from 'react-redux';
import Video from './Video'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import AddUserToProjectForm from './AddUserToProjectForm'
import Comments from './Comments'
import * as actions from '../actions'

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


  render() {
    return (
      <div style={{marginTop: '1%'}}>
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
    fetchProject: (id) => {dispatch(actions.fetchProject(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
