import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import ProjectList from './ProjectList'
import ProjectPage from './ProjectPage'
import Project from './Project'
import { connect } from 'react-redux'

import withAuth from '../hoc/withAuth'

class ProjectPageWithHideableSidebar extends Component {
  render() {

    return (
      <React.Fragment>
        <Sidebar.Pushable>
          <Sidebar
            animation='overlay'
            style={{boxShadow: '-1px -1px 20px black'}}
            vertical
            visible={this.props.visibleProjectList}
            width='medium'
          >
            <ProjectList />
          </Sidebar>

          <Sidebar.Pusher>
            <div style={{height: '100vh'}}>
            <ProjectPage/>
          </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default withAuth(connect(mapStateToProps)(ProjectPageWithHideableSidebar))
