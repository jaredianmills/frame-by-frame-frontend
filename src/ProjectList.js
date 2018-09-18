import React from 'react'
import { connect } from 'react-redux';

const ProjectList = (props) => {
  console.log(props);
  return (
    <div>
      hi from project list
    </div>
  )
}

function mapStateToProps(state) {
  return {projects: state.user.projects}
}


export default connect(mapStateToProps)(ProjectList)
