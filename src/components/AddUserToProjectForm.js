import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Message } from 'semantic-ui-react'
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
    this.setState({...this.state, userEmail: ''})
  }

  render() {
    console.log(this.props);
    return (
      <div style={{width: "50%", height: 'auto', marginLeft: '3%', marginTop: '2%', padding: '1%', boxShadow: '1px 1px 5px grey', backgroundColor: 'lightblue'}}>
        <Button style={{float: 'left'}} onClick={this.props.hideAddUserForm}>x</Button>
        <h3 style={{marginLeft: '32%'}}>Add a User to this Project</h3>
        {this.props.error ? <Message style={{textAlign: 'center'}}error header='There was an error processing your request' content={this.props.error} /> : null}
        <Form onSubmit={this.handleSubmit}>
          <input type='text' name='userEmail' placeholder='enter user email address' value={this.state.userEmail} onChange={this.handleChange} />
          <br/>
          <br/>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserToProject: (projectId, userEmail) => dispatch(actions.addUserToProject(projectId, userEmail)),
    hideAddUserForm: () => dispatch(actions.hideAddUserForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserToProjectForm)
