import React from 'react'
import { connect } from 'react-redux';
import Video from './Video'
import NoteForm from './NoteForm'
import NoteList from './NoteList'

const Project = (props) => {
  console.log(props);
  return (
    <div style={{marginLeft: '20%'}}>
      <NoteList notes={props.currentProject.notes}/>
      <Video />
      {props.displayNoteForm ? <NoteForm currentVideoTime={props.currentVideoTime}/> : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Project)
