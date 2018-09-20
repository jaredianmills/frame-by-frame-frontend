import * as types from './types'

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

export function addNote(note) {
  return {
    type: types.ADD_NOTE,
    payload: note
  }
}
