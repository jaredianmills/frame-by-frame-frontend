import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Label, Modal, Message, Dimmer, Loader, Icon} from 'semantic-ui-react'
import * as actions from '../actions'


class NewProjectForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      video: null,
      user_id: this.props.user.id
    }
  }

  handleFileAdd = (event) => {
    let video = event.target.files[0]
    this.setState({...this.state, video: video})
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let data = new FormData()
    data.append('title', this.state.title)
    data.append('video', this.state.video)
    data.append('user_id', this.state.user_id)
    this.props.createProject(data)
    // this.props.postVideo(this.state)
  }

  renderDimmer = () => {
    return (
      <Dimmer active inverted>
        <Loader size='large'>Uploading</Loader>
      </Dimmer>
    )
  }


  render() {
    console.log(this.state.video);
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
            {this.props.uploadingVideo ? this.renderDimmer() : null}
            <input type='text' name='title' placeholder='Project Title' value={this.state.title} onChange={this.handleChange} />
            <br/><br/>
            <Label as="label" basic htmlFor="upload">
              <Button icon="upload" label={{basic: true, content: 'Select file'}} labelPosition="right" />
              <input hidden id="upload" type="file" onChange={this.handleFileAdd} />
            </Label>
            {this.state.video ?
              <div style={{width: '30%'}}><br/><Message color='blue'><Icon name='file video'/>{this.state.video.name}</Message></div>
              : null}
            <br/><br/>
            <Button basic color='blue'>Submit</Button>
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
    // postVideo: (project) => {dispatch(actions.postVideo(project))}
    createProject: (project) => {dispatch(actions.createProject(project))}
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
