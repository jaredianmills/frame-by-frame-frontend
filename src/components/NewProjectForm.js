import React, { Component } from 'react'
<<<<<<< HEAD

class NewProjectForm extends Component {

}

export default NewProjectForm
=======
import { connect } from 'react-redux'
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
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="file" onChange={this.handleFileUpload} />
          <input type="submit" value="Upload" />
        </form>


      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state
}

export default (connect(mapStateToProps)(NewProjectForm))
>>>>>>> add-ability-to-upload-videos
