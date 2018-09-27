import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Message, Dimmer, Loader } from 'semantic-ui-react'
import * as actions from '../actions'
import { withRouter, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state)
  }

  renderDimmer = () => {
    return (
      <Dimmer active inverted>
        <Loader size='large'>Logging In</Loader>
      </Dimmer>
    )
  }

  renderLoginForm = () => {
    return (
      <div style={{width: "30%", height: 'auto', marginLeft: '35%', marginTop: '10%', padding: '1%', boxShadow: '1px 1px 5px grey', backgroundColor: 'lightblue', textAlign: 'center'}}>
        <h1>Login</h1>
        {this.props.error ? <Message style={{textAlign: 'center'}}error header='There was an error processing your request' content={this.props.error} /> : null}
        <Form onSubmit={this.handleSubmit}>
          <input type='text' name='email' placeholder='email' onChange={this.handleChange}/>
          <br/>
          <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
          <br/>
          <br/>
          <Button type='submit'>Login</Button>
        </Form>
        <h5>Not a member? <Link to='/signup'>Sign Up</Link></h5>
      </div>
    )
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/projects" />
    } else if (this.props.authenticatingUser) {
        return this.renderDimmer()
    } else {
      return this.renderLoginForm()
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authenticatingUser: state.authenticatingUser,
    failedLogin: state.failedLogin,
    error: state.error,
    user: state.user,
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => {dispatch(actions.loginUser(user))}
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
