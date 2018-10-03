import React, { Component } from 'react'
import { Sidebar } from 'semantic-ui-react'
import ProjectList from './ProjectList'
import ProjectPage from './ProjectPage'
import { connect } from 'react-redux'

import withAuth from '../hoc/withAuth'

class ProjectPageWithHideableSidebar extends Component {

  handleStyle = () => {
    if (this.props.currentProject) {
      return {height: '86.5vh'}
    } else {
      return {height: '90vh'}
    }
  }

  render() {

    return (
      <div>
        <Sidebar.Pushable >
          <Sidebar
            animation='overlay'
            style={{boxShadow: '-1px -1px 10px black'}}
            visible={this.props.visibleProjectList}
          >
            <ProjectList />
          </Sidebar>

          <Sidebar.Pusher>
            <div style={this.handleStyle()}>
            <ProjectPage/>
          </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default withAuth(connect(mapStateToProps)(ProjectPageWithHideableSidebar))
