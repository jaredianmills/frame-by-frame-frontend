import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Message, Modal, Icon } from 'semantic-ui-react'
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
    return (
      <Modal open={this.props.displayAddUserToProjectForm}>
        <Button icon basic color="blue" style={{float: 'right', marginTop: '0.5%'}} onClick={this.props.hideAddUserForm}>
          <Icon name='times' />
        </Button>
        <Modal.Content>
          <Modal.Header>
            <h1 style={{fontFamily: 'Merriweather, serif'}}>Add a User to this Project</h1>
          </Modal.Header>
          <br/>
          {this.props.error ? <Message style={{textAlign: 'center', fontFamily: 'Merriweather, serif'}}error header='There was an error processing your request' content={this.props.error} /> : null}
          <Form onSubmit={this.handleSubmit}>
            <input type='text' name='userEmail' placeholder='enter user email address' value={this.state.userEmail} onChange={this.handleChange} style={{fontFamily: 'Merriweather, serif'}} />
            <br/>
            <br/>
            <Button basic color='blue' style={{fontFamily: 'Merriweather, serif'}}>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
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
