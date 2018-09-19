import React from 'react'
import { connect } from 'react-redux';
import Video from './Video'
import NoteForm from './NoteForm'

const Project = (props) => {
  console.log(props);
  return (
    <div style={{marginLeft: '20%'}}>
      <h1>hi from project</h1>
      <Video />
      {props.displayNoteForm ? <NoteForm currentVideoTime={props.currentVideoTime}/> : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Project)
