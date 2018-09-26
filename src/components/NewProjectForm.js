import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Label, Modal, Message } from 'semantic-ui-react'
import * as actions from '../actions'


class NewProjectForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      file: null,
      user_id: this.props.user.id
    }
  }

  handleFileAdd = (event) => {
    let file = event.target.files[0]
    this.setState({...this.state, file: file})
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postVideo(this.state)
  }


  render() {
    return (
      <Modal open={this.props.displayNewProjectForm}>
        <Button style={{float: 'right'}} onClick={this.props.hideNewProjectForm}>x</Button>
        <Modal.Content>
          <Modal.Header>
            <h1>Create a New Project</h1>
          </Modal.Header>
          <br/>
          {this.props.error ? <Message style={{textAlign: 'center'}}error header='There was an error processing your request' content={this.props.error} /> : null}
          <Form onSubmit={this.handleSubmit}>
            <input type='text' name='title' placeholder='Project Title' value={this.state.title} onChange={this.handleChange} />
            <br/><br/>
            <Label as="label" basic htmlFor="upload">
              <Button icon="upload" label={{basic: true, content: 'Select file'}} labelPosition="right" />
              <input hidden id="upload" type="file" onChange={this.handleFileAdd} />
            </Label>
            <br/><br/>
            <Button>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }

}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideNewProjectForm: () => {dispatch(actions.hideNewProjectForm())},
    postVideo: (project) => {dispatch(actions.postVideo(project))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm)





// {/* <Form onSubmit={this.handleSubmit}>
//   <input
//     name="title"
//     type="text"
//     placeholder="Project Title"
//     value={this.state.title}
//     onChange={this.handleChange}
//   />
//   {/* <input type="file" onChange={this.handleFileUpload} /> */}
// <br/><br/>
//   <Label
//     as="label"
//     basic
//     htmlFor="upload"
// >
//     <Button
//         icon="upload"
//         label={{
//             basic: true,
//             content: 'Select file(s)'
//         }}
//         labelPosition="right"
//     />
//     <input
//         hidden
//         id="upload"
//         multiple
//         type="file"
//         onChange={this.handleFileUpload}
//     />
// </Label>
// <br/><br/>
// <Form.Button content="Submit" />
// </Form> */}
