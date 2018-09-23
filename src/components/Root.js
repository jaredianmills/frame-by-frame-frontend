import React from 'react'
// import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import ProjectList from './ProjectList'
import Navbar from './Navbar'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      {/* <Route path="/" component={App} /> */}
      <App />
    </Router>
  </Provider>
)

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default Root
