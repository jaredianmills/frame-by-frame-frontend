import React from 'react'
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard.js'

const ProjectList = (props) => {
  const { projects } = props

  return (
    <div>
      {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
    </div>
  )
}

function mapStateToProps(state) {
  return {projects: state.user.projects}
}


export default connect(mapStateToProps)(ProjectList)
