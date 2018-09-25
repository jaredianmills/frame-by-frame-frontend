import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class AddUserToProjectForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userEmail: '',
      project_id: this.props.currentProject.id
    }
  }

  handleChange = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addUserToProject(this.state.project_id, this.state.userEmail)
  }

  render() {
    console.log(this.props);
    return (
      <div style={{width: "50%", height: 'auto', margin: '1%', padding: '1%', boxShadow: '1px 1px 5px grey', backgroundColor: 'lightblue'}}>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='userEmail' value={this.state.userEmail} onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserToProject: (projectId, userEmail) => dispatch(actions.addUserToProject(projectId, userEmail))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserToProjectForm)
