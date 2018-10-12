import * as types from './types'

require('dotenv').config()

export function createUser(userLogin) {
  return (dispatch) => {
    dispatch({ type: 'AUTHENTICATING_USER' })
    let configObj = {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: userLogin})
    }
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/users`, configObj)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(JSONResponse => {
        localStorage.setItem('jwt', JSONResponse.jwt)
        dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
      })
      .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.error })))
  }
}


export function loginUser(userLogin) {
  return (dispatch) => {
    dispatch({ type: 'AUTHENTICATING_USER' })
    let configObj = {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: userLogin})
    }
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, configObj)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(JSONResponse => {
        localStorage.setItem('jwt', JSONResponse.jwt)
        dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
      })
      .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}

export function fetchCurrentUser() {
  return (dispatch) => {
    dispatch(authenticatingUser())
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/profile`, {
      method: 'GET',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`}
    })
    .then(resp => resp.json())
    .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)))
  }
}


export const setCurrentUser = (userData) => ({
  type: 'SET_CURRENT_USER',
  payload: userData
})

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

export const logOut = () => {
  return {
    type: types.LOG_OUT
  }
}

export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })

export function fetchProject(id) {
  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_PROJECTS_API}/${id}`, {
      method: 'GET',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`}
    })
      .then(response => response.json())
      // .then(res => console.log(res))
      .then(project => dispatch({type: types.FETCH_PROJECT, payload: project}))
  }
}


export function displayProjects() {
  return {
    type: types.DISPLAY_PROJECTS,
  }
}

export function selectProject(project) {
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
    let configObj = {method: "POST", headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem('jwt')}`}, body: JSON.stringify(note)}
    return fetch(process.env.REACT_APP_NOTES_API, configObj)
      .then(response => response.json())
  }
}

export function addNote(note) {
  return {
    type: types.ADD_NOTE,
    payload: note
  }
}

export function setVideoPlayTime(time) {
  return {
    type: types.SET_VIDEO_PLAY_TIME,
    payload: time
  }
}

export function renderNewProjectForm() {
  return {
    type: types.RENDER_NEW_PROJECT_FORM
  }
}

export function renderAddUserToProjectForm() {
  return {
    type: types.RENDER_ADD_USER_TO_PROJECT_FORM
  }
}

export function addUserToProject(projectId, userEmail) {
  return (dispatch) => {
   fetch(`${process.env.REACT_APP_PROJECTS_API}/${projectId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user_email: userEmail})
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    .then(JSONResponse => {
      dispatch({type: types.SUCCESSFULLY_ADDED_USER_TO_PROJECT})
    })
    .catch(r => r.json().then(e => dispatch({ type: types.FAILED_TO_ADD_USER_TO_PROJECT, payload: e.errors })))

  }
}

export function hideAddUserForm() {
  return {
    type: types.HIDE_ADD_USER_FORM
  }
}

export function showComments(note) {
  return {
    type: types.SHOW_COMMENTS,
    payload: note
  }
}

export function hideComments() {
  return {
    type: types.HIDE_COMMENTS
  }
}

export function fetchComments(noteId) {
  return (dispatch) => {
    dispatch({ type: types.FETCHING_COMMENTS })
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/comments`, {
      method: 'GET',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`}
    })
      .then(response => response.json())
      .then(comments => comments.filter(comment => comment.note_id === noteId))
      .then(filterdComments => dispatch({type: types.SET_COMMENTS, payload: filterdComments}))
  }
}

export function setComments(comments) {
  return {
    type: types.SET_COMMENTS,
    payload: comments
  }
}

export function postComment(comment) {
  return (dispatch) => {
    let configObj = {method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(comment)
    }
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/comments`, configObj)
    .then(response => response.json())
    // .then(newComment => dispatch({ type: types.ADD_COMMENT, payload: newComment }))
  }
}

export function addComment(comment) {
  return { type: types.ADD_COMMENT, payload: comment }
}

export function toggleNoteComplete(note) {
  return (dispatch) => {
    let configObj = {method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({...note, completed: !note.completed})
    }
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/notes/${note.id}`, configObj)
    .then(response => response.json())
    .then(updatedNote => dispatch({ type: types.TOGGLE_NOTE_COMPLETE, payload: updatedNote }))
  }
}

export function toggleCompletedNoteDisplay() {
  return {type: types.TOGGLE_COMPLETED_NOTE_DISPLAY}
}

export function hideNewProjectForm() {
  return {type: types.HIDE_NEW_PROJECT_FORM}
}


export function toggleProjectList() {
  return {type: types.TOGGLE_PROJECT_LIST}
}

export function createProject(project) {
  return (dispatch) => {
    dispatch({ type: types.UPLOADING_VIDEO })
    let configObj = {method: "POST", headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`}, body: project}

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/projects`, configObj).then(resp => resp.json()).then(newProject => {
      dispatch({type: types.ADD_NEW_PROJECT_TO_PROJECTS_LIST, payload: newProject})
    })
  }
}

export function displayTimecode(timecode) {
  let minutes = Math.floor(timecode / 60)
  let hours = Math.floor(minutes / 60)
  let seconds = Math.round(timecode - minutes * 60)

  if (hours > 0) {
    minutes = minutes - (hours * 60)
  }

  hours = hours.toString()
  minutes = minutes.toString()
  seconds = seconds.toString()

  if (hours.length < 2) {
    hours = `0${hours}`
  }

  if (minutes.length < 2) {
    minutes = `0${minutes}`
  }

  if (seconds.length < 2) {
    seconds = `0${seconds}`
  }

  return `${hours}:${minutes}:${seconds}`
}
