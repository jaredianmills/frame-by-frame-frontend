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
  displayNewProjectForm: false,
  fetchingComments: false,
  displayComments: false,
  currentNote: null,
  comments: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_CURRENT_USER:
      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false, error: null }

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
      // return {...state, user: null, loggedIn: false, currentProject: null, displayNoteForm: false, videoPlayTime: 0}
      return initialState

    case types.FETCH_PROJECT:
      return {...state, currentProject: action.payload, currentProjectNotes: action.payload.notes}

    case types.SET_CURRENT_PROJECT:
      return {...state, currentProject: action.payload, currentProjectNotes: action.payload.notes, videoPlayTime: 0}

    case types.SET_CURRENT_VIDEO_TIME:
      return {...state, currentVideoTime: action.payload}

    case types.RENDER_NOTE_FORM:
      return {...state, displayNoteForm: true}

    case types.HIDE_NOTE_FORM:
      return {...state, displayNoteForm: false, errors: null}

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

    case types.SUCCESSFULLY_ADDED_USER_TO_PROJECT:
      return {...state, error: null, displayAddUserToProjectForm: false}

    case types.HIDE_ADD_USER_FORM:
      return {...state, displayAddUserToProjectForm: false, error: null}

    case types.FETCHING_COMMENTS:
      return {...state, fetchingComments: true}

    case types.SHOW_COMMENTS:
      return {...state, displayComments: true, currentNote: action.payload, fetchingComments: true}

    case types.HIDE_COMMENTS:
      return {...state, displayComments: false}

    case types.SET_COMMENTS:
      return {...state, comments: action.payload, fetchingComments: false}

    case types.ADD_COMMENT:
      let foundNote = state.currentProjectNotes.find(note => note.id === action.payload.note_id)
      let updatedNote = {...foundNote, comments: [...foundNote.comments, action.payload]}
      let index = state.currentProjectNotes.indexOf(foundNote)
      return {...state, comments: [...state.comments, action.payload], currentProjectNotes: [...state.currentProjectNotes.slice(0, index), updatedNote, ...state.currentProjectNotes.slice(index + 1)]}

    case types.TOGGLE_NOTE_COMPLETE:
      let completedNote = action.payload
      let foundCompletedNote = state.currentProjectNotes.find(note => note.id === completedNote.id)
      let indexOfCompletedNote = state.currentProjectNotes.indexOf(foundCompletedNote)
      return {...state, currentProjectNotes: [...state.currentProjectNotes.slice(0, indexOfCompletedNote), completedNote, ...state.currentProjectNotes.slice(indexOfCompletedNote + 1)]}

    default:
      return state
  }
}

export default reducer
