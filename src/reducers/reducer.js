import * as types from '../types'

// let initialState = {
//   user: {
//     id: 1,
//     first_name: 'jared',
//     last_name: 'mills',
//     email: 'jaredianmills@gmail.com',
//     projects: [
//       {
//         id: 1,
//         title: 'Kyp Catches a Ball',
//         video_url: "https://flatironmod5project.s3.amazonaws.com/IMG_4482.MOV",
//         notes: [
//           {
//             id: 1,
//             content: "good boy",
//             timecode: 2.104,
//             completed: false,
//             comments: [
//               {
//                 id: 1,
//                 content: "i agree"
//               }
//             ]
//           }
//         ]
//       }
//     ],
//   },
//   currentDisplay: null,
//   currentProject: null,
//   currentVideoTime: null,
//   displayNoteForm: false,
// }

let initialState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
  // currentDisplay: null,
  currentProject: null,
  currentProjectNotes: [],
  currentVideoTime: null,
  displayNoteForm: false,
  displayAddUserToProjectForm: false,
  videoPlayTime: 0,
  noteWasClicked: false,
  displayNewProjectForm: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_CURRENT_USER:
      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false }

    case 'AUTHENTICATING_USER':
      return { ...state, authenticatingUser: true }

    case 'AUTHENTICATED_USER':
      return { ...state, authenticatingUser: false }

    case 'FAILED_LOGIN':
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingUser: false
      }

    case types.LOG_OUT:
      localStorage.clear()
      return {...state, user: null, loggedIn: false, currentProject: null, displayNoteForm: false, videoPlayTime: 0}

    case types.FETCH_PROJECT:
      return {...state, currentProject: action.payload, currentProjectNotes: action.payload.notes}

    case types.SET_CURRENT_PROJECT:
      return {...state, currentProject: action.payload, currentProjectNotes: action.payload.notes}

    case types.SET_CURRENT_VIDEO_TIME:
      return {...state, currentVideoTime: action.payload}

    case types.RENDER_NOTE_FORM:
      return {...state, displayNoteForm: true}

    case types.HIDE_NOTE_FORM:
      return {...state, displayNoteForm: false}

    case types.ADD_NOTE:
      return {...state, currentProjectNotes: [...state.currentProjectNotes, action.payload]}

    case types.SET_VIDEO_PLAY_TIME:
      return {...state, videoPlayTime: action.payload, noteWasClicked: !state.noteWasClicked}

    case types.RENDER_NEW_PROJECT_FORM:
      return {...state, displayNewProjectForm: true, currentProject: null}

    case types.RENDER_ADD_USER_TO_PROJECT_FORM:
      return {...state, displayAddUserToProjectForm: true}

    case types.FAILED_TO_ADD_USER_TO_PROJECT:
      return {...state, error: action.payload}

    default:
      return state
  }
}

export default reducer
