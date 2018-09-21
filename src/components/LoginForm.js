import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import * as actions from '../actions'

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
    console.log(this.state);
    event.preventDefault()
    this.props.loginUser(this.state, process.env.REACT_APP_USERS_API)
  }

  render() {
    return (
      <div style={{width: "20%", height: 'auto', marginLeft: '35%', marginTop: '10%', padding: '1%', boxShadow: '1px 1px 5px grey', backgroundColor: 'lightblue', textAlign: 'center'}}>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <input type='text' name='email' placeholder='email' onChange={this.handleChange}/>
          <br/>
          <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
          <br/>
          <br/>
          <Button type='submit'>Login</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user, API) => {dispatch(actions.loginUser(user, API))}
  }
}



export default connect(null, mapDispatchToProps)(LoginForm)
