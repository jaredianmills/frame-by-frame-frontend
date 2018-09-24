import * as types from './types'
// import React from 'react'
// import { Redirect } from 'react-router'

require('dotenv').config()

export function createUser(userLogin) {
  return (dispatch) => {
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
        console.log('JSONResponse', JSONResponse);
        localStorage.setItem('jwt', JSONResponse.jwt)
        dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
      })
      .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
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
        console.log('JSONResponse', JSONResponse);
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
      // .then(json => console.log(json))
      .then(note => dispatch({ type: types.ADD_NOTE, payload: note }))
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
