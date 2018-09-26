import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Label, Modal, Message } from 'semantic-ui-react'
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

  handleSubmit = event => {
    event.preventDefault();

    const data = new FormData();
    data.append("title", this.state.title);
    data.append("video", this.state.video);
    data.append("user_id", this.state.user_id);

    fetch(process.env.REACT_APP_PROJECTS_API, {
      method: "POST",
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`},
      body: data,
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json);
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFileUpload = event => {
    this.setState({
      video: event.target.files[0],
    });
  };

  render() {
    console.log(this.props);
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
            <input type='text' name='userEmail' placeholder='enter user email address' value={this.state.userEmail} onChange={this.handleChange} />
            <br/>
            <br/>
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
    hideNewProjectForm: () => {dispatch(actions.hideNewProjectForm())}
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
