import React from 'react'
import { Card } from 'semantic-ui-react'
// import { connect } from 'react-redux'
import Note from './Note'

const NoteList = (props) => {
  return (
    <div className='notelist'>
      <Card.Group>
      {props.notes.map(note => <Note key={note.id} note={note}/>)}
    </Card.Group>
    </div>
  )

}

export default NoteList
