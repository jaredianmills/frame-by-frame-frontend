import * as types from './types'

require('dotenv').config()


export function loginUser(userLogin) {
  return (dispatch) => {
    return fetch(process.env.REACT_APP_USERS_API)
      .then(response => response.json())
      .then(users => users.find(user => user.email === userLogin.email))
      .then(user => dispatch({ type: types.LOGIN_USER, payload: user }));
  }
}

export function fetchProject(id) {
  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_PROJECTS_API}/${id}`)
      .then(response => response.json())
      .then(project => dispatch({type: types.FETCH_PROJECT, payload: project}))
  }
}


export function displayProjects() {
  return {
    type: types.DISPLAY_PROJECTS,
  }
}

export function selectProjectAction(project) {
  return {
    type: types.SET_CURRENT_PROJECT,
    payload: project
  }
}

export function setCurrentVideoTime(time) {
  return {
    type: types.SET_CURRENT_VIDEO_TIME,
    payload: time
  }
}

export function renderNoteForm() {
  return {
    type: types.RENDER_NOTE_FORM,
    payload: true
  }
}

export function hideNoteForm() {
  return {
    type: types.HIDE_NOTE_FORM,
    payload: false
  }
}

export function postNote(note) {
  return (dispatch) => {
    let configObj = {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(note)}
    return fetch(process.env.REACT_APP_NOTES_API, configObj)
      .then(response => response.json())
      .then(note => dispatch({ type: types.ADD_NOTE, payload: note }))
  }
}

export function addNote(note) {
  return {
    type: types.ADD_NOTE,
    payload: note
  }
}
