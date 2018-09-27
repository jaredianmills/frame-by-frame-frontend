import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Note from './Note'
import * as actions from '../actions'

const NoteList = (props) => {

  const handleNoteDisplay = (notes) => {
    if (props.displayCompletedNotes) {
      return sortAndMapNotes(notes)
    } else {
      let filteredNotes = notes.filter(note => !note.completed)
      return sortAndMapNotes(filteredNotes)
    }
  }

  const sortAndMapNotes = (notes) => {
    return notes.sort((a, b) => a.timecode - b.timecode).map(note => <Note key={note.id} note={note} numberOfComments={note.comments.length}/>)
  }

  return (
    <div className='notelist'>
      <h1 style={{textAlign: 'center', textDecoration: 'underline'}}>Notes</h1>
      <Button onClick={props.toggleCompletedNoteDisplay}>{props.displayCompletedNotes ? 'Hide Completed Notes' : 'Show Completed Notes'}</Button>
      <Card.Group style={{marginTop: '1%'}}>
      {props.notes ? handleNoteDisplay(props.notes) : null}
    </Card.Group>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    notes: state.currentProjectNotes,
    displayCompletedNotes: state.displayCompletedNotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCompletedNoteDisplay: () => {dispatch(actions.toggleCompletedNoteDisplay())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
