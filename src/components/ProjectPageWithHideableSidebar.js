import React, { Component } from 'react'
import { Sidebar } from 'semantic-ui-react'
import ProjectList from './ProjectList'
import ProjectPage from './ProjectPage'
import { connect } from 'react-redux'

import withAuth from '../hoc/withAuth'

class ProjectPageWithHideableSidebar extends Component {
  render() {

    return (
      <React.Fragment>
        <Sidebar.Pushable style={{marginTop: '0.5%'}}>
          <Sidebar
            animation='overlay'
            style={{boxShadow: '-1px -1px 20px black'}}
            visible={this.props.visibleProjectList}
          >
            <ProjectList />
          </Sidebar>

          <Sidebar.Pusher>
            <div style={{height: '90vh'}}>
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
