import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Dimmer, Loader } from 'semantic-ui-react'
import * as actions from '../actions'
import { withRouter, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createUser(this.state)
  }

  renderDimmer = () => {
    return (
      <Dimmer active inverted>
        <Loader size='large'>Signing Up</Loader>
      </Dimmer>
    )
  }

  renderSignUpForm = () => {
    return (
      <div style={{width: "30%", height: 'auto', marginLeft: '35%', marginTop: '10%', padding: '1%', boxShadow: '1px 1px 5px grey', backgroundColor: 'lightblue', textAlign: 'center'}}>
        <h1>Sign Up</h1>
        <Form onSubmit={this.handleSubmit}>
          <input type='text' name='first_name' placeholder='First Name' onChange={this.handleChange}/>
          <br/>
          <input type='text' name='last_name' placeholder='Last Name' onChange={this.handleChange}/>
          <br/>
          <input type='text' name='email' placeholder='email' onChange={this.handleChange}/>
          <br/>
          <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
          <br/>
          <br/>
          <Button type='submit'>Sign Up</Button>
        </Form>
        <h5>Already a member? <Link to='/login'>Log In</Link></h5>
      </div>
    )
  }


  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/projects" />
    } else if (this.props.authenticatingUser) {
        return this.renderDimmer()
    } else {
      return this.renderSignUpForm()
    }
  }
}

const mapStateToProps = (state) => {
  return {
    failedLogin: state.failedLogin,
    error: state.error,
    user: state.user,
    loggedIn: state.loggedIn,
    authenticatingUser: state.authenticatingUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => {dispatch(actions.createUser(user))}
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm))
