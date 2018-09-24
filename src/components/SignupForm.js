import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import * as actions from '../actions'
import { withRouter, Redirect } from 'react-router'

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

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/projects" />
    } else {
        return (
          <div style={{width: "20%", height: 'auto', marginLeft: '35%', marginTop: '10%', padding: '1%', boxShadow: '1px 1px 5px grey', backgroundColor: 'lightblue', textAlign: 'center'}}>
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
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    failedLogin: state.failedLogin,
    error: state.error,
    user: state.user,
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => {dispatch(actions.createUser(user))}
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm))