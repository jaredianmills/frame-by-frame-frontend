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
  currentDisplay: null,
  currentProject: null,
  currentVideoTime: null,
  displayNoteForm: false,
  videoPlayTime: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOGIN_USER:
      return {...state, user: action.payload}
    case types.FETCH_PROJECT:
      return {...state, currentProject: action.payload}
    case types.DISPLAY_PROJECTS:
      return {}
    case types.SET_CURRENT_PROJECT:
      return {...state, currentProject: action.payload}
    case types.SET_CURRENT_VIDEO_TIME:
      return {...state, currentVideoTime: action.payload}
    case types.RENDER_NOTE_FORM:
      return {...state, displayNoteForm: true}
    case types.HIDE_NOTE_FORM:
      return {...state, displayNoteForm: false}
    case types.ADD_NOTE:
      console.log(action.payload);
      return {...state, currentProject: {...state.currentProject, notes: [...state.currentProject.notes, action.payload]}}
    case types.SET_VIDEO_PLAY_TIME:
      console.log('video play time was set');
      return {...state, videoPlayTime: action.payload}
    default:
      return state
  }
}

export default reducer