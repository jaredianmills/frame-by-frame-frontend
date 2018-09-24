import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Label } from 'semantic-ui-react'
import withAuth from '../hoc/withAuth'
import { Player,
  ControlBar,
  BigPlayButton,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  PlaybackRateMenuButton
} from 'video-react'

class NewProjectForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      video: null,
      user_id: 1
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
      <div style={{width: "20%", height: 'auto', marginLeft: '30%', marginTop: '20%', padding: '1%', boxShadow: '1px 1px 5px grey', backgroundColor: 'lightblue'}}>
        <Form onSubmit={this.handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Project Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          {/* <input type="file" onChange={this.handleFileUpload} /> */}
        <br/><br/>
          <Label
            as="label"
            basic
            htmlFor="upload"
        >
            <Button
                icon="upload"
                label={{
                    basic: true,
                    content: 'Select file(s)'
                }}
                labelPosition="right"
            />
            <input
                hidden
                id="upload"
                multiple
                type="file"
                onChange={this.handleFileUpload}
            />
        </Label>
        <br/><br/>
        <Form.Button content="Submit" />
      </Form>


      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state
}

export default (connect(mapStateToProps)(NewProjectForm))
