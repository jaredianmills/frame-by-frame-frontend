import React, { Component } from 'react'

class NoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      note: '',
      currentVideoTime: this.props.currentVideoTime
    }
  }

  handleChange = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' name='note' value={this.state.note} onChange={this.handleChange} />
        </form>
        <h2>{this.props.currentVideoTime}</h2>
      </div>
    )
  }
}

export default NoteForm
