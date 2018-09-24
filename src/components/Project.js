import React, { Component } from 'react'
import { connect } from 'react-redux';
import Video from './Video'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import NewProjectForm from './NewProjectForm'
import * as actions from '../actions'

class Project extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.fetchProject(this.props.currentProject.id)
  }


  render() {
    return (
      <div style={{marginLeft: '20%', marginTop: '1%'}}>
        <NoteList notes={this.props.currentProject.notes} />
        {/* {this.props.currentProject.notes ? <NoteList notes={this.props.currentProjectNotes}/> : null} */}
        <Video />
        {this.props.displayNoteForm ? <NoteForm currentVideoTime={this.props.currentVideoTime}/> : null}
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
