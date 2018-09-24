import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class NoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
      timecode: this.props.currentVideoTime,
      project_id: this.props.currentProject.id,
      user_id: this.props.user.id
    }
  }

  handleChange = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.hideNoteForm()
    this.props.postNote(this.state)
    this.setState({...this.state, content: ''})
  }

  render() {
    console.log(this.props);
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

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    postNote: (note) => {dispatch(actions.postNote(note))},
    addNote: (note, API) => {dispatch(actions.addNote(note, API))},
    hideNoteForm: () => {dispatch(actions.hideNoteForm())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
