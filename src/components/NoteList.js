import React, { Component } from 'react'
import { Card, Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Note from './Note'
import * as actions from '../actions'

class NoteList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  handleNoteDisplay = (notes) => {
    let searchedNotes = notes.filter(note => {
      let userName = `${note.user.first_name} ${note.user.last_name}`
      return note.content.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || userName.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    if (this.props.displayCompletedNotes) {
      return this.sortAndMapNotes(searchedNotes)
    } else {
      let filteredNotes = searchedNotes.filter(note => !note.completed)
      return this.sortAndMapNotes(filteredNotes)
    }
  }

  sortAndMapNotes = (notes) => {
    return notes.sort((a, b) => a.timecode - b.timecode).map(note => <Note key={note.id} note={note} numberOfComments={note.comments.length}/>)
  }

  handleSearchChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className='notelist'>
        <h1 style={{textAlign: 'center', color: 'white', textShadow: '2px 2px 8px black'}}>Notes</h1>
        <Button inverted color='facebook' style={{fontFamily: 'Merriweather, serif'}} onClick={this.props.toggleCompletedNoteDisplay}>{this.props.displayCompletedNotes ? 'Hide Completed Notes' : 'Show Completed Notes'}</Button>
        <br/><br/>
        <Input style={{width: '100%', fontFamily: 'Merriweather, serif'}} placeholder="Search Notes"value={this.state.searchTerm} onChange={this.handleSearchChange}/>
        <hr/>
        <Card.Group style={{marginTop: '1%'}}>
        {this.props.notes ? this.handleNoteDisplay(this.props.notes) : null}
      </Card.Group>
      </div>
    )
  }

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
