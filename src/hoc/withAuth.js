import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as actions from '../actions'

const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {

    componentDidMount = () => {
      if (localStorage.getItem('jwt') && !this.props.loggedIn) {
        this.props.fetchCurrentUser()
      }
    }

    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        return <WrappedComponent />
      } else {
        return <Redirect to='/login'/>
      }
    }

  }

  const mapStateToProps = (state) => {
    return {
      loggedIn: state.loggedIn,
      authenticatingUser: state.authenticatingUser
    }
  }

  const mapDispatchToProps = /*FUNCTION*/ (dispatch) => {
    return {
      fetchCurrentUser: () => dispatch(actions.fetchCurrentUser())
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthorizedComponent)

}

export default withAuth
