import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class NoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 2,
      content: '',
      timecode: this.props.currentVideoTime,
      completed: false,
      comments: []
    }
  }

  handleChange = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNote(this.state)
  }

  render() {
    return (
      <div style={{width: "50%", height: 'auto', margin: '1%', padding: '1%', boxShadow: '1px 1px 5px grey', backgroundColor: 'lightblue'}}>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='content' value={this.state.note} onChange={this.handleChange} />
          <input type='submit' />
        </form>
        <h2>{this.props.currentVideoTime}</h2>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => {dispatch(actions.addNote(note))}
  }
}

export default connect(null, mapDispatchToProps)(NoteForm)
