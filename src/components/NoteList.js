import React from 'react'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Note from './Note'

const NoteList = (props) => {
  console.log(props);
  return (
    <div className='notelist'>
      <h1>Notes</h1>
      <Card.Group>
      {props.notes ? props.notes.sort((a, b) => a.timecode - b.timecode).map(note => <Note key={note.id} note={note}/>) : null}
    </Card.Group>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {notes: state.currentProjectNotes}
}

export default connect(mapStateToProps)(NoteList)
