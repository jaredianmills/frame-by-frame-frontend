import React, { Component } from 'react'
import { connect } from 'react-redux';
import Video from './Video'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import * as actions from '../actions'

class Project extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.fetchProject(this.props.currentProject.id, process.env.REACT_APP_PROJECTS_API)
  }

  render() {

    return (
      <div style={{marginLeft: '20%'}}>
        {this.props.currentProject.notes ? <NoteList notes={this.props.currentProject.notes}/> : null}
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
    fetchProject: (id, API) => {dispatch(actions.fetchProject(id, API))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
